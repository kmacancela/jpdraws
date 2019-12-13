class CreateDrawings < ActiveRecord::Migration[6.0]
  def change
    create_table :drawings do |t|
      t.string :name
      t.string :img
      t.integer :price

      t.timestamps
    end
  end
end
