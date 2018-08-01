class Api::UsersController < ApplicationController
  before_action :require_logged_in, except: [:create, :index]

  def index
    @users = User.all.where(is_tasker: true).where(task_type: user_params[:task_type]);
    render :index
  end

  def show
    @user = User.find(params[:id])
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
