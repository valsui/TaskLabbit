json.tasks do 
    @tasks.each do |task|
        json.partial! "api/tasks/task", task: task
    end
end