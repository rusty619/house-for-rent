class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img, :password_digest, :username
end
