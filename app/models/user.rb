class User < ApplicationRecord
    has_many :reservations
    has_many :homes, through: :reservations
    #has_many :houses
end
