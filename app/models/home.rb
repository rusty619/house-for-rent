class Home < ApplicationRecord
    has_many :reservations 
    has_many :users, through: :reservations 
    belongs_to :owner 
    has_many :images
end
