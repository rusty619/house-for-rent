class User < ApplicationRecord
    has_many :reservations
    has_many :homes, through: :reservations
    has_many :houses

    has_secure_password 
    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :username, length: {minimum: 4}
end
