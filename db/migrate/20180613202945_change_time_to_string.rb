class ChangeTimeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :tasks, :time, :string
  end
end
