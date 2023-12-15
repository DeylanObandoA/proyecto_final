class CreateCategoriesCourse < ActiveRecord::Migration[7.0]
  def change
    create_table :categories_courses do |t|
      t.references :categories, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
