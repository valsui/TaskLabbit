# == Schema Information
#
# Table name: users
#
#  id                  :bigint(8)        not null, primary key
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
#  image_url           :string           default("http://blog.janm.org/wp-content/uploads/2011/07/322651.jpg")
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
