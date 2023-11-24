require 'rails_helper'

RSpec.describe Institution, type: :model do
  
  let(:institution) { FactoryBot.build(:institution) }

describe "Validations" do
  it "is valid with valid attributes" do
    expect(institution).to be_valid
  end 

  it "is not valid without a name" do
    institution.name = nil
    expect(institution).to_not be_valid
  end
  
  it "is not valid without a insti_type" do
    institution.insti_type = nil
    expect(institution).to_not be_valid
    end
  end
end
