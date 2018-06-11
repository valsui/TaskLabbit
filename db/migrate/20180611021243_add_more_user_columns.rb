class AddMoreUserColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :is_tasker, :boolean, default:false, null:false
    add_column :users, :task_type, :string  
    add_column :users, :has_vehicle, :boolean, default:false
    add_column :users, :num_completed_tasks, :integer
    add_column :users, :num_reviews, :integer, default: 0
    add_column :users, :rating, :integer, default: 100
    add_column :users, :price_per_hour, :float
    add_column :users, :user_description, :string
  end
end
