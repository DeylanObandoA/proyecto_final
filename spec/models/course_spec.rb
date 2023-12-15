require 'rails_helper'

RSpec.describe Course, type: :model do
  let(:institution) { FactoryBot.build(:institution) }

  describe "Validations" do
    subject { FactoryBot.build(:course) }

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end
  
    it "is not valid without a name" do
      subject.name = nil
      expect(subject).to_not be_valid
    end

    it "validates maximum length of name" do
      subject.name = "a" * 101
      expect(subject).to_not be_valid
      expect(subject.errors[:name]).to include("is too long (maximum is 100 characters)")
    end
  
    
    it "is not valid without a description" do
      subject.description = nil
      expect(subject).to_not be_valid
    end

    it "validates maximum length of description" do
      subject.description = "a" * 356
      expect(subject).to_not be_valid
      expect(subject.errors[:description]).to include("is too long (maximum is 355 characters)")
    end

    it "is not valid without a registration_day" do
      subject.registration_day = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a requirement" do
      subject.requirement = nil
      expect(subject).to_not be_valid
    end

    it "validates maximum length of requirement" do
      subject.requirement = "a" * 101
      expect(subject).to_not be_valid
      expect(subject.errors[:requirement]).to include("is too long (maximum is 100 characters)")
    end

    it "is not valid without a institution_id" do
      subject.institution = nil
      expect(subject).to_not be_valid
    end
  end
end
