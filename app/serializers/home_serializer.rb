class HomeSerializer < ActiveModel::Serializer
  attributes :id,:title, :home_type, :total_occupancy, :total_bedrooms, :total_bedrooms, :summary, :address, :has_tv, :has_kitchen, :has_air_Con, :has_internet, :price, :user_id, :latitude, :longitude, :created_at
end
