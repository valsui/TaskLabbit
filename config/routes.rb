Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :destroy, :index, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :tasks, except: [:edit, :new]
  end

  root "static_pages#root"
end
