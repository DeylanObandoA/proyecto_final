class Institution < ApplicationRecord

    has_many :courses

    validates_presence_of :name, :insti_type
    validates_length_of :name, maximum: 100

end