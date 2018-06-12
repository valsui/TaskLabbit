class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :type, null:false 
      t.date :date
      t.time :time
      t.string :location
      t.string :description
      t.string :duration
      t.boolean :need_vehicle
      t.integer :user_id
      t.integer :tasker_id
      t.boolean :completed, default:false
      t.timestamps
    end

    add_index :tasks, :user_id
    add_index :tasks, :tasker_id
  end
end
