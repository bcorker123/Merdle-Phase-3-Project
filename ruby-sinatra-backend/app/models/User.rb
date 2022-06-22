class User < ActiveRecord::Base
    has_many :scores
    has_many :merdles, through: :scores

    def scores_with_merdle_names
        scores_array = []
        i = 0
        until i === scores.length do
            score_name_hash = {
                name: self.merdles[i].name, 
                points: self.scores[i].points
            }
            scores_array << score_name_hash
            i += 1
        end
        scores_array
    end
end