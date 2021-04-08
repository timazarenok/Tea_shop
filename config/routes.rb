Rails.application.routes.draw do
  root 'pages#index'

  mount_devise_token_auth_for 'User', at: 'auth'

  namespace :api do 
    resources :teas, param: :id
    resources :reviews, only: %i[create destroy]
  end

  get '*path', to: 'pages#index', via: :all
end
