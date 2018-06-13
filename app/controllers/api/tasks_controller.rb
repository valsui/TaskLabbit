class Api::TasksController < ApplicationController
    def index
        @tasks = Task.all.where(user_id: task_params[:user_id])
        render :index
    end

    def show
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
        @task = Task.find(params[:id])
        # debugger
        if @task && @task.update(task_params)
            render :show
        else
            render json: ["Unable to update task #{params[:id]}"], status: 418
        end
    end

    def delete
        @task = Task.find(params[:id])
        @task.delete
        render :show 
    end

    private 
    def task_params
        params.require(:task).permit(:task_type, :need_vehicle, :location, :duration, :description, :tasker_id, :user_id, :time, :date, :id)
    end
end
