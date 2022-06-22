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

  # get '/merdles/:id' do
  #   id = params[:id].to_i - 1
  #   merdle = Merdle.all[id]
  #   merdle_hash = { 
  #     id: params[:id].to_i, 
  #     name: merdle.name, 
  #     scores: merdle.scores_with_names
  #   }
  #   merdle_hash.to_json
  # end

  get '/merdles/random' do
    merdle = Merdle.all.sample
    merdle_hash = { 
      id: merdle.id,
      name: merdle.name, 
      image_url: merdle.image_url,
      scores: merdle.scores_with_names
    }
    merdle_hash.to_json
  end

  get '/users' do
    User.all.to_json
  end

  get '/users/:id' do
    id = params[:id].to_i - 1
    user = User.all[id]
    user_hash = { 
      id: params[:id].to_i, 
      name: user.name, 
      scores: user.scores_with_merdle_names
     }
    user_hash.to_json
  end

  get '/scores' do
    Score.all.to_json
  end

  get '/scores/:id' do
    id = params[:id].to_i - 1
    Score.all[id].to_json
  end

  post '/users' do
    user = User.create(name:params[:name])
    user.to_json
  end

  patch '/users/:id' do
    user = User.find(params[:id])
    user.update(name:params[:name])
    user.to_json
  end

end
