class Addzipcode < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :zipcode, :int, null:false
  end
end
