class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :description 
      t.date :registration_day
      t.string :requirement
      t.boolean :favorite
      
      t.timestamps
    end
  end
end
