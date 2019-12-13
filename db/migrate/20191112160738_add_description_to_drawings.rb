class AddDescriptionToDrawings < ActiveRecord::Migration[6.0]
  def change
    add_column :drawings, :description, :string
  end
end
