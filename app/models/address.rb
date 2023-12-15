class Address < ApplicationRecord

    has_many :branches

    validates :province, :canton, :district, :neighborhood, :zip_code, presence: true, length: { maximum: 50 }

end
