from models import db, MenuItem, SiteChange, AdminUser, SpecialOrder
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify, session
from flask_restful import Api, Resource
from flask_bcrypt import Bcrypt
import os

from config import app

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

api = Api(app)

@app.route('/')
def home():
    return ''

#Routes
class MenuItems(Resource):
    def get(self):
        menuitems = MenuItem.query.all()
        menuitems_to_dict = [menuitem.to_dict() for menuitem in menuitems]
        response = make_response(menuitems_to_dict, 200)

        return response
    
    def post(self):
        data = request.get_json()

        try:
            new_menuitem = MenuItem(
                name = data['name'],
                type = data['type'],
                price = data['price'],
                img = data['img'],
                body = data['body'],
                visible = "true"
            )

            db.session.add(new_menuitem)
            db.session.commit()

            response = make_response(jsonify(new_menuitem.to_dict()), 201)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response

api.add_resource(MenuItems, '/menuitems')

class MenuItemsById(Resource):
    def get(self, id):
        menuitem = MenuItem.query.filter(MenuItem.id == id).first()

        if menuitem:
            return make_response(jsonify(menuitem.to_dict()), 200)
        else:
            return make_response({"error": "MenuItem not found"}, 404)
    
    def patch(self, id):
        menuitem = MenuItem.query.filter(MenuItem.id == id).first()
        data = request.get_json()
        try:
            for key in data:
                setattr(menuitem, key, data[key])

            db.session.add(menuitem)
            db.session.commit()

            response = make_response(jsonify(menuitem.to_dict()), 202)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response
    
    def delete(self, id):
        menuitem = MenuItem.query.filter(MenuItem.id == id).first()

        if menuitem:
            db.session.delete(menuitem)
            db.session.commit()

            response = make_response({}, 204)

        else:   
            response = make_response({"error":"MenuItem not found"}, 404)
            
        return response

api.add_resource(MenuItemsById, '/menuitems/<int:id>')

class SpecialOrders(Resource):
    def get(self):
        specialorders = SpecialOrder.query.all()
        specialorders_to_dict = [specialorder.to_dict() for specialorder in specialorders]
        response = make_response(specialorders_to_dict, 200)

        return response

    def post(self):
        data = request.get_json()

        try:
            new_specialorder = SpecialOrder(
                name = data['name'],
                email = data['email'],
                phone = data['phone'],
                quantity = data['quantity'],
                addinfo = data['addinfo'],
                created_at = data['created_at'],
                completed = data['completed'],
                menuItem_id = data['menuItem_id']
            )

            db.session.add(new_specialorder)
            db.session.commit()

            response = make_response(jsonify(new_specialorder.to_dict()), 201)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response

api.add_resource(SpecialOrders, '/specialorders')

class SpecialOrdersById(Resource):
    def get(self, id):
        specialorder = SpecialOrder.query.filter(SpecialOrder.id == id).first()

        if specialorder:
            return make_response(jsonify(specialorder.to_dict()), 200)
        else:
            return make_response({"error": "SpecialOrder not found"}, 404)
    
    def patch(self, id):
        specialorder = SpecialOrder.query.filter(SpecialOrder.id == id).first()
        data = request.get_json()
        try:
            for key in data:
                setattr(specialorder, key, data[key])

            db.session.add(specialorder)
            db.session.commit()

            response = make_response(jsonify(specialorder.to_dict()), 202)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response
    
    def delete(self, id):
        specialorder = SpecialOrder.query.filter(SpecialOrder.id == id).first()

        if specialorder:
            db.session.delete(specialorder)
            db.session.commit()

            response = make_response({}, 204)

        else:   
            response = make_response({"error":"MenuItem not found"}, 404)
            
        return response

api.add_resource(SpecialOrdersById, '/specialorders/<int:id>')

class SiteChanges(Resource):
    def get(self):
        sitechanges = SiteChange.query.all()
        sitechanges_to_dict = [sitechange.to_dict() for sitechange in sitechanges]
        response = make_response(sitechanges_to_dict, 200)

        return response

    def post(self):
        data = request.get_json()

        try:
            new_sitechange = SiteChange(
                action = data['action'],
                created_at = data['created_at'],
                adminUser_id = data['adminUser_id'],
                menuItem_id = data['menuItem_id']
            )

            db.session.add(new_sitechange)
            db.session.commit()

            response = make_response(jsonify(new_sitechange.to_dict()), 201)

        except ValueError:

            response = make_response(
                {"errors": ["validation errors"]},
                400
            )

        return response

api.add_resource(SiteChanges, '/sitechanges')

@app.route("/check_session", methods = ['GET'])
def check_session():

    user_id = session.get('user_id')

    if user_id:

        # user_row = User.query.filter(User.id == user_id).first()
        user_row = AdminUser.query.filter(AdminUser.id == session['user_id']).first()

        response = make_response(
            jsonify(user_row.to_dict()),
            200
        )

    else:

        response = make_response(
            {},
            401
        )

    return response

@app.route("/login", methods = ['POST'])
def login():

    username = request.get_json()['username']

    user_row = AdminUser.query.filter(AdminUser.username == username).first()

    if user_row:

        session['user_id'] = user_row.id

        response = make_response(
            jsonify(user_row.to_dict()), 201
        )

    else:

        response = make_response(
            {}, 404
        )

    return response

@app.route("/logout", methods = ['DELETE'])
def logout():

    session['user_id'] = None

    response = make_response(
        {},
        204
    )

    return response

if __name__ == '__main__':
    app.run(port=5555, debug=True)
