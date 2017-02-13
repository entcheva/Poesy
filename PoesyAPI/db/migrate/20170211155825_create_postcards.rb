class CreatePostcards < ActiveRecord::Migration[5.0]
  def change
    create_table :postcards do |t|
      t.string :poem
      t.string :image_url

      t.timestamps
    end
  end
end
