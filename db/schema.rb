# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_13_202945) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "tasks", force: :cascade do |t|
    t.date "date"
    t.string "time"
    t.string "location"
    t.string "description"
    t.string "duration"
    t.boolean "need_vehicle"
    t.integer "user_id"
    t.integer "tasker_id"
    t.boolean "completed", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "task_type", null: false
    t.index ["tasker_id"], name: "index_tasks_on_tasker_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "zipcode", null: false
    t.boolean "is_tasker", default: false, null: false
    t.string "task_type"
    t.boolean "has_vehicle", default: false
    t.integer "num_completed_tasks"
    t.integer "num_reviews", default: 0
    t.integer "rating", default: 100
    t.float "price_per_hour"
    t.string "user_description"
    t.string "image_url", default: "http://blog.janm.org/wp-content/uploads/2011/07/322651.jpg"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
