class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  rolify

  devise :database_authenticatable, :registerable,
        :recoverable, :validatable,
        :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates_presence_of :name
  validates_length_of :name, maximum: 255

  validates_presence_of :email
  validates_uniqueness_of :email, case_sensitive: false
  validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP

  validates_presence_of :birthdate

end
