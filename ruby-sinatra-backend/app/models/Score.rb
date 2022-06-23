class Score < ActiveRecord::Base
    belongs_to :user
    belongs_to :merdle


    def self.new_score(points,user, merdle )
     self.create(points: points, user_id: user.id, merdle_id: merdle.id)

    end


    def self.scores_user_points
       
        userHash = self.all.map do |score|
    {id: score.id, name: score.user.name, points: score.points, user_id: score.user.id,  merdle_id: score.merdle.id }

    
    
    end
     sorted = userHash.sort_by {|user| -user[:points]}

    
     
    
    end

    def get_user
        one_user = []
      name = self.user.name
      score = self.points

      one_user << [name, score]
      one_user.flatten

    end
end