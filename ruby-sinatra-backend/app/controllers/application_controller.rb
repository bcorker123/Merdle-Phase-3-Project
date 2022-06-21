require 'pry'

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { merdles: Merdle.all, users: User.all, scores: Score.all }.to_json
  end

  get '/merdles' do
    Merdle.all.to_json
  end 

  get '/merdles/:id' do
    id = params[:id].to_i - 1
    Merdle.all[id].to_json
  end

  get '/users' do
    User.all.to_json
  end

  get '/users/:id' do
    id = params[:id].to_i - 1
    user = User.all[id]
    #binding.pry
    User.all[id].to_json
  end

  get '/scores' do
    Score.all.to_json
  end

  get '/scores/:id' do
    id = params[:id].to_i - 1
    Score.all[id].to_json
  end

end
