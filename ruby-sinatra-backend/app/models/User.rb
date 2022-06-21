class User < ActiveRecord::Base
    has_many :scores
    has_many :merdles, through: :scores
end