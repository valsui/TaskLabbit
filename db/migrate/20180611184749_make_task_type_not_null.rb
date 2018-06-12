class MakeTaskTypeNotNull < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :type, :string 
    add_column :tasks, :type, :string, null:false 
  end
end
