class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :type, :task_type
  end
end
