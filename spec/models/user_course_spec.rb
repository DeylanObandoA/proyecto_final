require 'rails_helper'

RSpec.describe UserCourse, type: :model do
  let(:user) { FactoryBot.create(:user) }
  let(:course) { FactoryBot.create(:course) }

  describe "Validations" do
    subject { FactoryBot.build(:user_course, user: user, course: course) }

    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    it "is not valid without a user" do
      subject.user = nil
      expect(subject).to_not be_valid
    end

    it "is not valid without a course" do
      subject.course = nil
      expect(subject).to_not be_valid
    end
  end

    describe "Associations" do
    it { should belong_to(:user) }
    it { should belong_to(:course) }
    end
end
