json.set! task.id do 
    json.extract! task, :id, :task_type, :need_vehicle, :location, :duration, :description, :tasker_id, :user_id, :time, :date
end