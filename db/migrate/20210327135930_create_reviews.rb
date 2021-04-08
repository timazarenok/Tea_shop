class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :description
      t.belongs_to :tea, null: false, foreign_key: true

      t.timestamps
    end
  end
end
