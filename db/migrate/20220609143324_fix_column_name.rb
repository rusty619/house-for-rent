class FixColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :images, :home_type, :room_type
  end
end
