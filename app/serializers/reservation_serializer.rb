class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :price
  belongs_to :user 
  belongs_to :home
end
