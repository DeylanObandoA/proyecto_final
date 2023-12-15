require 'rails_helper'

RSpec.describe Category, type: :model do

  let(:category) { FactoryBot.build(:category) } 

  describe "Validations" do
    it "is valid with valid attributes" do
    expect(category).to be_valid
  end 

  it "is not valid without a name" do
    category.name = nil
    expect(category).to_not be_valid
  end

  it "validates maximum length of name" do
    category.name = "a" * 51
    expect(category).to_not be_valid
    expect(category.errors[:name]).to include("is too long (maximum is 50 characters)")
  end
  end
end
