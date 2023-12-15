class CategoryCourse < ApplicationRecord

    belongs_to :category
    belongs_to :course

    validates_presence_of :course_id, :category_id

end