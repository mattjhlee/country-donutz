from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)
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
    #add serialization
    serialize_rules = ('-sitechanges.menuitem', )

class AdminUser(db.Model, SerializerMixin):
    __tablename__ = 'adminusers'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    password = db.Column(db.String)
    
    #add relationship
    sitechanges = db.relationship('SiteChange', backref='adminuser')
    #add serialization
    serialize_rules = ('-sitechanges.adminuser', )

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
    