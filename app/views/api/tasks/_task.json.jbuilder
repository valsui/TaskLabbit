json.set! task.id do 
    json.extract! task, :id, :task_type, :need_vehicle, :location, :duration, :description, :tasker_id, :user_id, :time, :date
# BELOW IS AN N+1 QUERY!
    if task.tasker 
        json.tasker do 
            json.extract! task.tasker, :id, :email, :first_name, :last_name, :zipcode, :password, :is_tasker, :task_type, :has_vehicle, :num_completed_tasks, :num_reviews, :rating, :price_per_hour, :user_description, :image_url 
        end
    end
end


