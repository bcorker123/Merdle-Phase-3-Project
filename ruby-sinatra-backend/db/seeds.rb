require 'rest-client'
require 'pry'

puts "🌱 Seeding begin..."

puts "🌱 Fetching data..."
response = RestClient.get('https://api.imgflip.com/get_memes')
response_hash = JSON.parse(response)
meme_hash = response_hash['data']['memes']

puts "🌱 Creating Merdles..."
meme_hash.each do |meme|
    Merdle.create(
        name: meme['name'], 
        image_url: meme['url']
    )
end

puts "🌱 Creating Users..."
User.create(name: 'brian')
User.create(name: 'abram')

puts "🌱 Creating Scores..."
Score.create(points: 100, user_id: 1, merdle_id: 1)
Score.create(points: 200, user_id: 2, merdle_id: 2)
Score.create(points: 300, user_id: 1, merdle_id: 1)
Score.create(points: 400, user_id: 2, merdle_id: 2)

puts "✅ Done seeding!"
