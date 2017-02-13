class CreatePoems < ActiveRecord::Migration[5.0]
  def change
    create_table :poems do |t|
      t.string :poem_text

      t.timestamps
    end
  end
end
