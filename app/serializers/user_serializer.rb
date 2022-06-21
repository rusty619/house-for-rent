class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img

  has_many :reservations
  # has_many :homes

  def images 
    self.object.home.images.each do |image|
      p image
    end
  end

end
