class Api::UsersController < ApplicationController
  def index
    # debugger;
    @users = User.all.where(is_tasker: true).where(task_type: user_params[:task_type]);
    # debugger;
    #eventually may wwant to query for location or task type
    #@users = User.all.where(task_type: current_task.id.type) => need to get current task posted to global state
    render :index
  end

  def show
    @user = User.find(params[:id])
    debugger;
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :first_name, :last_name, :zipcode, :password, :is_tasker, :task_type, :has_vehicle, :num_completed_tasks, :num_reviews, :rating, :price_per_hour, :user_description, :image_url)
  end
end

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