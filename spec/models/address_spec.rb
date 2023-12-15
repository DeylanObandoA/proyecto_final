require 'rails_helper'

RSpec.describe Address, type: :model do

  let(:address) { FactoryBot.build(:address) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(address).to be_valid
    end 

    it "is not valid without a province" do
      address.province = nil
      expect(address).to_not be_valid
    end
    
    it "validates maximum length of province" do
      address.province = "a" * 51
      expect(address).to_not be_valid
      expect(address.errors[:province]).to include("is too long (maximum is 50 characters)")
    end

    it "is not valid without a canton" do
      address.canton = nil
      expect(address).to_not be_valid
    end

    it "validates maximum length of canton" do
      address.canton = "a" * 51
      expect(address).to_not be_valid
      expect(address.errors[:canton]).to include("is too long (maximum is 50 characters)")
    end

    it "is not valid without a district" do
      address.district = nil
      expect(address).to_not be_valid
    end

    it "validates maximum length of district" do
      address.district = "a" * 51
      expect(address).to_not be_valid
      expect(address.errors[:district]).to include("is too long (maximum is 50 characters)")
    end

    it "is not valid without a neighborhood" do
      address.neighborhood = nil
      expect(address).to_not be_valid
    end

    it "is not valid without a neighborhood" do
      address.zip_code = nil
      expect(address).to_not be_valid
    end

    it "validates maximum length of neighborhood" do
      address.neighborhood = "a" * 51
      expect(address).to_not be_valid
      expect(address.errors[:neighborhood]).to include("is too long (maximum is 50 characters)")
    end
  end
end
