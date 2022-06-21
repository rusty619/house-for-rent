class ReservationSerializer < ActiveModel::Serializer
  attributes :id,:home_id, :start_date, :end_date, :price, :images_of_house_booked

  belongs_to :user 
  belongs_to :home

  def images_of_house_booked 
    self.object.home.images.each do |image|
      p image
    end
  end

  # def houses_booked 
  #   self.object.home.each do |h|
  #     p h
  #   end
  # end
end
