# == Schema Information
#
# Table name: tasks
#
#  id           :bigint(8)        not null, primary key
#  type         :string
#  date         :date
#  time         :time
#  location     :string
#  description  :string
#  duration     :string
#  need_vehicle :boolean
#  user_id      :integer
#  tasker_id    :integer
#  completed    :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
