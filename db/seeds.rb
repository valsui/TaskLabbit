# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Task.destroy_all

#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  zipcode             :integer          not null
#  is_tasker           :boolean          default(FALSE), not null
#  task_type           :string
#  has_vehicle         :boolean          default(FALSE)
#  num_completed_tasks :integer
#  num_reviews         :integer          default(0)
#  rating              :integer          default(100)
#  price_per_hour      :float
#  user_description    :string
#  image_url           :string           default

User.create(first_name: 'Come', last_name: 'HALP', email: 'halpme@email.com', password:'password', zipcode: 12345)

User.create(first_name: 'Kelly', last_name: 'Clarkson', email: 'flipflop@email.com', password:'edmunchkin', zipcode: 12345, is_tasker: true)


User.create(first_name: 'Ginger', last_name: 'Baker', email: 'lb1@email.com', password:'password', zipcode: 12345, is_tasker: true)

User.create(first_name: 'BlueStache', last_name: 'Labbit', email: 'halpme@email.com', password:'password', zipcode: 12345, is_tasker: true ,image_url: 'https://i.pinimg.com/564x/fb/51/47/fb5147c26fc3e9c8652e986095c7f4e3.jpg')

User.create(first_name: 'Pink', last_name: 'Labbit', email: 'halpme@email.com', password:'password', zipcode: 10000)

User.create(first_name: 'Ginger', last_name: 'Labbit', email: 'halpme@email.com', password:'password', zipcode: 10000)



#  type         :string
#  date         :date
#  time         :time
#  location     :string
#  description  :string
#  duration     :string
#  need_vehicle :boolean
#  user_id      :integer
#  tasker_id    :integer
#  completed    :boolean          default(FALSE)

task1 = Task.create()


