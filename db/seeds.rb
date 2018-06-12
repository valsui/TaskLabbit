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

user1 = User.create(first_name: 'Come', last_name: 'HALP', email: 'halpme@email.com', password:'password', zipcode: 12345, is_tasker: false, image_url: 'https://cdn.shopify.com/s/files/1/0803/3763/products/stache-labbit-with-littons_2048x2048_5eb9fc24-7c3e-43b2-99c7-cb89877543cb.jpg?v=1481223919')

user2 = User.create(first_name: 'Kelly', last_name: 'Clarkson', email: 'flipflop@email.com', password:'edmunchkin', zipcode: 12345, is_tasker: false)


# user3 = User.create(first_name: 'Ginger', last_name: 'Baker', email: 'lb1@email.com', password:'password', zipcode: 12345, is_tasker: false)

user3 = User.create(first_name: 'Ginger', 
                    last_name: 'Labbit', 
                    email: 'og_lb@email.com', 
                    password:'password', 
                    zipcode: 12345, 
                    is_tasker: true, 
                    has_vehicle: true, 
                    task_type: 'Web Design & Development', 
                    image_url: 'https://images-na.ssl-images-amazon.com/images/I/31rWUbDPG5L.jpg', price_per_hour: 20, 
                    num_completed_tasks: rand(50),
                    rating: rand(100),
                    num_reviews: rand(100),
                    user_description: Faker::SiliconValley.quote);

user4 = User.create(first_name: 'Baker', 
                    last_name: 'Labbit', 
                    email: 'fatty@email.com', 
                    password:'password', 
                    zipcode: 12345, 
                    is_tasker: true, 
                    has_vehicle: true, 
                    task_type: 'Cleaning', 
                    image_url: 'https://cdn.shopify.com/s/files/1/0049/0872/products/kidrobot-labbits-vinyl-figure-kidrobot-smorkin-labbit-mad-cow-vinyl-figure-1.jpg?v=1489612360',
                     price_per_hour: 30, 
                    num_completed_tasks: rand(50),
                    rating: rand(100),
                    num_reviews: rand(100),
                    user_description: Faker::SiliconValley.quote);

task_types = ["Delivery",
                "Event Planning",
                "Cleaning",
                "Event Staffing",
                "Personal Assistant",
                "Entertainment",
                "Furniture Assembly",
                "Heavy Lifting",
                "Minor Home Repairs",
                "Moving & Packing",
                "Organization",
                "Accounting",
                "Arts & Crafts",
                "Automotive",
                "Carpentry & Construction",
                "Computer Help",
                "Cooking & Baking",
                "Data Entry",
                "Decoration",
                "Deep Clean",
                "Electrician",
                "Errands",
                "Graphic Design",
                "Laundry and Ironing",
                "Marketing",
                "Mounting & Installation",
                "Office Administration",
                "Packing & Shipping",
                "Painting",
                "Pet Sitting",
                "Photography",
                "Plumbing",
                "Research",
                "Selling Online",
                "Sewing",
                "Shopping",
                "Usability Testing",
                "Videography",
                "Web Design & Development",
                "Wait In Line",
                "Window Cleaning",
                "Writing & Editing",
                "Yard Work & Removal",
                "Home Improvement",
                "General Handyman"]

labbit_urls = [
    "https://images-na.ssl-images-amazon.com/images/I/810OXw43TkL._SX679_.jpg",
    "https://i.pinimg.com/564x/fb/51/47/fb5147c26fc3e9c8652e986095c7f4e3.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2011/11/Kringle-Labbit-1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/717AH%2B1clmL._SX466_.jpg",
    "https://cdn.shopify.com/s/files/1/0584/3841/products/polyester-happy-labbit-7-cow-plush-1_1000x.jpg?v=1527651430",
    "https://blog.kidrobot.com/wp-content/uploads/2012/01/cow-labbit-14-f.jpg",
    "https://cdn7.bigcommerce.com/s-fvv65gjhoq/products/869/images/1990/plushlabbit14_dalm__18428.1493062346.500.750.jpg?c=2",
    "https://www.think-pink-celle.de/images/product_images/info_images/hp1.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/71fn2BpyDIL._SX679_.jpg",
    "https://cdn.shopify.com/s/files/1/0584/3841/products/100-polyester-7-happy-labbit-plush-labbitooth-2_1000x.jpg?v=1501727096",
    "https://i.pinimg.com/736x/03/db/74/03db7481ce67924b29ae0eebefb9cd27.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/411GuS3sEdL._SY355_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/31-26Ts4UVL.jpg",
    "http://1.bp.blogspot.com/_VChD0TN44Cc/S8Heh5Myt7I/AAAAAAAAInc/ssXOgU_cNng/s400/14.jpg",
    "https://sl-production.s3.amazonaws.com/photos/506a535363051f3540000158/big_purple_plush_labbit.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2012/01/tiger-labbit-14-f.jpg",
    "https://cdn7.bigcommerce.com/s-fvv65gjhoq/images/stencil/1200x1200/products/844/1951/plushlabbit_moustache__04857.1493062306.jpg?c=2",
    "https://media.artoyz.net/shop/24449-large_default/14-wooly-stache-labbit.jpg",
    "https://i.pinimg.com/736x/fd/67/6d/fd676d44d3bf03ba3418bae4beb10bc9.jpg",
    "https://blog.kidrobot.com/wp-content/uploads/2012/07/stache-labbit-plush-5.jpg",
    "https://cdn-img-1.wanelo.com/p/9a0/81d/011/c316985529cb57aeb192288/x354-q80.jpg"
];

task_length = task_types.length;

task_types.each_with_index do |e, i|
    User.create(first_name: Faker::DrWho.character, 
                last_name: 'Labbit', 
                email: "labbit#{i}@email.com",
                password:'password',
                zipcode: Faker::Address.zip, 
                is_tasker: true, 
                task_type: "#{e}", 
                has_vehicle: i%4 === 0,
                price_per_hour: (i+1) * rand(5),
                num_completed_tasks: rand(50),
                rating: rand(100),
                num_reviews: rand(100),
                user_description: Faker::Simpsons.quote,
                image_url: labbit_urls[i%labbit_urls.length])
end

task_types.shuffle.each_with_index do |e, i|
    User.create(first_name: Faker::Dessert.topping, 
                last_name: 'Labbit', 
                email: "labbit#{i + task_length}@email.com",
                password:'password',
                zipcode: 12345, 
                is_tasker: true, 
                task_type: "#{e}", 
                has_vehicle: i%3 === 0,
                price_per_hour: (i+1) * rand(5),
                num_completed_tasks: rand(50),
                rating: rand(100),
                num_reviews: rand(100),
                user_description: Faker::Hobbit.quote,
                image_url: labbit_urls[i%labbit_urls.length])
end

task_types.shuffle.each_with_index do |e, i|
    User.create(first_name: Faker::Dog.name, 
                last_name: 'Labbit', 
                email: "labbit#{i + 2*task_length}@email.com",
                password:'password',
                zipcode: Faker::Address.zip, 
                is_tasker: true, 
                task_type: "#{e}", 
                has_vehicle: i%8 === 0,
                price_per_hour: (i+1) * rand(5),
                num_completed_tasks: rand(50),
                rating: rand(100),
                num_reviews: rand(100),
                user_description: Faker::SiliconValley.quote,
                image_url: labbit_urls[i%labbit_urls.length])
end

task_types.shuffle.each_with_index do |e, i|
    User.create(first_name: Faker::Pokemon.name, 
                last_name: 'Labbit', 
                email: "labbit#{i + 3*task_length}@email.com",
                password:'password',
                zipcode: 12345, 
                is_tasker: true, 
                task_type: "#{e}", 
                has_vehicle: i%8 === 0,
                price_per_hour: (i+1) * rand(5),
                num_completed_tasks: rand(50),
                rating: rand(100),
                num_reviews: rand(100),
                user_description: Faker::ChuckNorris.fact,
                image_url: labbit_urls[i%labbit_urls.length])
end
task_types.shuffle.each_with_index do |e, i|
    User.create(first_name: Faker::Pokemon.name, 
                last_name: 'Labbit', 
                email: "labbit#{i + 4*task_length}@email.com",
                password:'password',
                zipcode: Faker::Address.zip, 
                is_tasker: true, 
                task_type: "#{e}", 
                has_vehicle: i%8 === 0,
                price_per_hour: (i+2) * rand(5),
                num_completed_tasks: rand(50),
                rating: rand(100),
                num_reviews: rand(100),
                user_description: Faker::SiliconValley.quote,
                image_url: labbit_urls[i%labbit_urls.length])
end



    # t.date "date"
    # t.time "time"
    # t.string "location"
    # t.string "description"
    # t.string "duration"
    # t.boolean "need_vehicle"
    # t.integer "user_id"
    # t.integer "tasker_id"
    # t.boolean "completed", default: false
    # t.datetime "created_at", null: false
    # t.datetime "updated_at", null: false
    # t.string "task_type", null: false

task1 = Task.create(task_type: 'Web Design & Development',
             date: Faker::Date.between(100.days.ago, Date.today),
             time: Faker::Time.backward(20, :morning),
             location: '825 Battery Street, San Francisco, CA, 12345',
             duration: 'Medium - Est. 2-3 hrs',
             need_vehicle: false,
             user_id: user1.id,
             tasker_id: user3.id,
             completed: true)
task2 = Task.create(task_type: 'Cleaning',
             date: Faker::Date.between(100.days.ago, Date.today),
             time: Faker::Time.backward(20, :morning),
             location: '825 Battery Street, San Francisco, CA, 12345',
             duration: 'Medium - Est. 2-3 hrs',
             need_vehicle: false,
             user_id: user1.id,
             tasker_id: user4.id,
             completed: true)


