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
User.create(name:'anon')
User.create(name: 'brian')
User.create(name: 'abram')
User.create(name: 'dj')
User.create(name: 'dj2')
User.create(name: 'evil dj')
User.create(name: 'granny g93!!')

available_points = [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600]

puts "🌱 Creating Scores..."
Merdle.all.each do |merdle|
    Score.create(points: available_points.sample, user_id: User.all.sample.id, merdle_id: merdle.id)
end
# Score.create(points: 100, user_id: 1, merdle_id: 1)
# Score.create(points: 200, user_id: 2, merdle_id: 2)
# Score.create(points: 300, user_id: 1, merdle_id: 1)
# Score.create(points: 400, user_id: 2, merdle_id: 2)

puts "✅ Done seeding!"
