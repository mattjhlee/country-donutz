from app import app
from models import db, MenuItem, SiteChange, AdminUser, SpecialOrder

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')
        MenuItem.query.delete()
        SiteChange.query.delete()
        AdminUser.query.delete()
        SpecialOrder.query.delete()

        print("seeding menu items")
        menuitems = [
            MenuItem(
                name = "Original Glazed",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Maple Glazed",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Orange Glazed",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cinnamon Crumble",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate Glazed",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate Sprinkle",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cinnamon Sugar",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Powdered",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry Glazed",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry Sprinkle",
                type = "Yeast-Raised Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Blueberry Cake",
                type = "Cake Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Red Velvet Cake",
                type = "Cake Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate Cake",
                type = "Cake Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Glazed",
                type = "Old Fashioned Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Maple",
                type = "Old Fashioned Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate",
                type = "Old Fashioned Donuts",
                price = "1.59",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Glazed",
                type = "Buttermilk Bar Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate Glazed",
                type = "Buttermilk Bar Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Maple Glazed",
                type = "Buttermilk Bar Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Powdered",
                type = "Filled Donuts",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate",
                type = "Filled Donuts",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Glazed",
                type = "Filled Donuts",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate",
                type = "Long John Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Maple",
                type = "Long John Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Apple Fritters",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Banana Fritters",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry Butterfly",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Bear Claw",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Bear Claw with Cinnamon Crumbles",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cinnamon Roll",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cinnamon Roll with Cinnamon Crumbles",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cinnamon Pinecone",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Maple Bacon",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate Chip",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Fruity Pebbles",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Lucky Charms",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Captain Crunch",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Fruit Loops",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Oreo",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "M&M",
                type = "Specialty Donuts",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Glazed",
                type = "Donut Holes",
                price = "1.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Blueberry",
                type = "Donut Holes",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate",
                type = "Donut Holes",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Red Velvet",
                type = "Donut Holes",
                price = "1.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Vanilla",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry Cheesecake",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Birthday Cake",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Chocolate",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cookies N' Cream",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Butter Pecan",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Mint Chocolate Chip",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry",
                type = "Ice Cream",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "French Vanilla Cappuccino",
                type = "Hot Drinks",
                price = "3.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Mocha Cappuccino",
                type = "Hot Drinks",
                price = "3.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Hot Chocolate",
                type = "Hot Drinks",
                price = "3.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Coffee",
                type = "Hot Drinks",
                price = "2.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Jasmine Tea",
                type = "Hot Drinks",
                price = "1.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Green Tea",
                type = "Hot Drinks",
                price = "1.49",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Pineapple",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Vanilla Bean",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Mango",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Green Tea",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Mocha",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Honeydew",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Horchata",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Ice Coffee",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Vanilla Latte",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Almond",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Thai Lemonade",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Coconut",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cookies N' Cream",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Taro",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Strawberry",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Thai Tea",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Caramel Latte",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Banana",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Cotton Candy",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Java Chip",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Orange",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Avocado",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Watermelon",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
            MenuItem(
                name = "Durian",
                type = "Boba",
                price = "5.99",
                img = "",
                body = "",
                visible = "true"
            ),
        ]

        db.session.add_all(menuitems)

        print("seeding admin users")

        adminusers = [
            AdminUser(
                username = "demo",
                password = "DeMo"
            )
        ]

        db.session.add_all(adminusers)

        print("seeding site changes")

        sitechanges = [
            SiteChange(
                action = "test",
                created_at = "test",
                adminUser_id = 1,
                menuItem_id = 1
            )
        ]

        db.session.add_all(sitechanges)

        print("seeding special orders")

        specialorders = [
            SpecialOrder(
                name = "Matthew",
                email = "test@gmail.com",
                phone = "7044444444",
                quantity = 50,
                addinfo = "testing",
                created_at = "test",
                completed = "false",
                menuItem_id = 1
            )
        ]

        db.session.add_all(specialorders)
        db.session.commit()

        print("done seeding")