class Branch < ApplicationRecord

    belongs_to :course
    belongs_to :address

    validates :name, presence: true, length: { maximum: 50 }
    validates_presence_of :course_id, :address_id

end
