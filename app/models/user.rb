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

class User < ApplicationRecord
    validates :first_name, :last_name, :zipcode, :password_digest, :session_token, presence:true
    validates :email, presence:true, uniqueness:true
    validates :password, length: { minimum: 6, allow_nil:true }

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :tasks,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Task

    has_many :tasks_performed,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Task

    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        user && user.is_password?(pw) ? user : nil
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        generate_unique_session_token
        self.save!
        self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end

end
