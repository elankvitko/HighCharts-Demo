Rails.application.routes.draw do
  get 'data/heartrate'

  get 'data/activity'

  get 'data/calories'

  root to: 'home#index'
end
