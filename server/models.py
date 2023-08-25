from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt


# Models go here!

class MenuItem(db.Model, SerializerMixin):
    __tablename__ = 'menuitems'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type = db.Column(db.String)
    price = db.Column(db.String)
    img = db.Column(db.String)
    body = db.Column(db.String)
    visible = db.Column(db.String)

    #add relationship
    sitechanges = db.relationship('SiteChange', backref='menuitem')
    specialorders = db.relationship('SpecialOrder', backref='menuitem')
    #add serialization
    serialize_rules = ('-sitechanges.menuitem', '-specialorders.menuitem')

class AdminUser(db.Model, SerializerMixin):
    __tablename__ = 'adminusers'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, unique = True)
    _password_hash = db.Column(db.String)

    @validates('username')
    def validates_username(self, key, username):
        if username and len(username) > 0:
            return username
        else:
            raise ValueError("User must have a username!")
        
    @hybrid_property 
    def password_hash(self):
        raise Exception("Hashed password is invisible!")

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))

    def __repr__(self):
        return f"Username: {self.username}"

class SiteChange(db.Model, SerializerMixin):
    __tablename__ = 'sitechanges'

    id = db.Column(db.Integer, primary_key=True)
    action = db.Column(db.String)
    created_at = db.Column(db.String)
    
    #add relationship
    adminUser_id = db.Column(db.Integer, db.ForeignKey('adminusers.id'))
    menuItem_id = db.Column(db.Integer, db.ForeignKey('menuitems.id'))
    #add serialization
    serialize_rules = ('-menuitem.sitechanges', '-adminuser.sitechanges')

class SpecialOrder(db.Model, SerializerMixin):
    __tablename__ = 'specialorders'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    phone = db.Column(db.String)
    quantity = db.Column(db.Integer)
    addinfo = db.Column(db.String)
    created_at = db.Column(db.String)
    completed = db.Column(db.String)
       
    #add relationship
    menuItem_id = db.Column(db.Integer, db.ForeignKey('menuitems.id'))
    #add serialization
    serialize_rules = ('-menuitem.specialorders', )