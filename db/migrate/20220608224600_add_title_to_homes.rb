class AddTitleToHomes < ActiveRecord::Migration[6.1]
  def change
    add_column :homes, :title, :string
  end
end
