class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img

  has_many :reservations
  has_many :homes
end
