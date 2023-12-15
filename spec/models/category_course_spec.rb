require 'rails_helper'

RSpec.describe CategoryCourse, type: :model do
  let(:category) { FactoryBot.create(:category) }
  let(:course) { FactoryBot.create(:course) }

  describe "Validations" do
    subject { FactoryBot.build(:category_course, category: category, course: course) }

    it "is not valid without a course_id" do
        subject.course_id = nil
        expect(subject).to_not be_valid
    end    
    
    it "is not valid without a category_id" do
        subject.category_id = nil
        expect(subject).to_not be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:category) }
    it { should belong_to(:course) }
  end
end
