from models import db, MenuItem, SiteChange, AdminUser, SpecialOrder
from flask_migrate import Migrate
from flask import Flask, request, make_response, jsonify
from flask_restful import Api, Resource
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}"
)

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)
