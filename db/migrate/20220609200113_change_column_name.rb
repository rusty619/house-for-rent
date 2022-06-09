class ChangeColumnName < ActiveRecord::Migration[6.1]
  def change
    rename_column :homes, :user_id, :owner_id
  end
end
