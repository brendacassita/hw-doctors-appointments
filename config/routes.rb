Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get "appointments/all_yo", to: "appointments#all_and_then_some"
    resources :patients
    resources :physicians
    resources :appointments
  end
end
