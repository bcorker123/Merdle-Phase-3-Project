class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { merdles: Merdle.all, users: User.all, scores: Score.all }.to_json
  end

end
