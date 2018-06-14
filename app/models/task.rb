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

class Task < ApplicationRecord
    validates :task_type, presence:true
    #no validations needed since tasks are going to be posted after each subform
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User,
        optional: true

    belongs_to :tasker,
        primary_key: :id,
        foreign_key: :tasker_id,
        class_name: :User,
        optional: true
end
