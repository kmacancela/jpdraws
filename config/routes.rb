Rails.application.routes.draw do
  resources :transactions, only: [:index, :show, :create]
  resources :drawings, only: [:index, :show, :create]
  resources :users, only: [:index, :show, :create]
  resources :login, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
