
require 'rails_helper'

RSpec.describe Branch, type: :model do
  let(:course) { FactoryBot.build(:course) } 
  let(:address) { FactoryBot.build(:address) } 
  let(:branch) { FactoryBot.build(:branch, course: course, address: address) }
  
  it "is not valid without a name" do
    branch.name = nil
    expect(branch).to_not be_valid
  end

  it "validates maximum length of name" do
    branch.name = "a" * 51
    expect(branch).to_not be_valid
    expect(branch.errors[:name]).to include("is too long (maximum is 50 characters)")
  end

  it "is not valid without a course_id" do
    branch.course = nil 
    expect(branch).to_not be_valid
  end

  it "is not valid without an address_id" do
    branch.address = nil 
    expect(branch).to_not be_valid
  end

  describe 'associations' do
    it { should belong_to(:course) }
    it { should belong_to(:address) }
  end

end
