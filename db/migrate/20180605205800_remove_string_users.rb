class RemoveStringUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :string
  end
end
