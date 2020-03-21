Rails.application.routes.draw do
  resources :trips
  get 'users/show'
  get 'users/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
