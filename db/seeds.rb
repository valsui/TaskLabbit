# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

user1 = User.create(first_name: 'Kelly', last_name: 'Clarkson', email: 'flipflop@email.com', password:'edmunchkin', zipcode: 12345)

user2 = User.create(first_name: 'Come', last_name: 'HALP', email: 'halpme@email.com', password:'password',zipcode: 12345)


