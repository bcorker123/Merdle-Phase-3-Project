require 'pry'

class Merdle < ActiveRecord::Base
    has_many :scores
    has_many :users, through: :scores

    def self.get_images
        image = self.all.map do |merdle|
            merdle.image_url
        end
        image
    end
    

    def scores_with_names
        scores_array = []
        i = 0
        until i === scores.length do
            score_name_hash = {
                name: self.users[i].name, 
                points: self.scores[i].points
            }
            scores_array << score_name_hash
            i += 1
        end
        scores_array
    end
end