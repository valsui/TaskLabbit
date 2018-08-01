class Api::TasksController < ApplicationController
    before_action :require_logged_in, except: [:show, :create, :update]

    def index
        @tasks = Task.all.where(user_id: task_params[:user_id])
        render :index
    end

    def show
        return (render json: ["Sorry, we're beginners and cannot find your task. Please create a new one."], status: 422) if nullId

        @task = Task.find(params[:id])
        render :show
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render :show
        else
            # render json: @task.errors.full_messages, status: 422
            render json: ['Task type cannot be empty, please choose task'], status: 422
        end
    end

    def update
        return (render json: ["Sorry, we're beginners and cannot find your task. Please create a new one."], status: 422) if nullId

        @task = Task.find(params[:id]) if params[:id]

        if @task
            @task.update(task_params)
            render :show
        else
            render json: ["Cannot update task"], status: 422
        end
    end

    def destroy
        @task = Task.find(params[:id])
        @task.destroy
        render :show 
    end

    def nullId
        params[:id] == 'undefined' || params[:id] == 'null'
    end

    private 
    def task_params
        params.require(:task).permit(:task_type, :need_vehicle, :location, :duration, :description, :tasker_id, :user_id, :time, :date, :id)
    end
end
