class AddUserImageUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :image_url, :string, default: 'http://blog.janm.org/wp-content/uploads/2011/07/322651.jpg'
  end
end
