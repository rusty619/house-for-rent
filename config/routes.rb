Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :reservations
  resources :homes
  resources :reviews
  resources :images
end
