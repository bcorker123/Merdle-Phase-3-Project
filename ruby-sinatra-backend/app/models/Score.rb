class Score < ActiveRecord::Base
    belongs_to :user
    belongs_to :merdle


    def self.new_score(points,user, merdle )
     self.create(points: points, user_id: user.id, merdle_id: merdle.id)
    end
end