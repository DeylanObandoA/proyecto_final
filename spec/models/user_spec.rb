RSpec.describe User, type: :model do
  let(:user) { FactoryBot.build(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end 

    it "is not valid without a name" do
      user.name = nil
      expect(user).to_not be_valid
    end

    it "is not valid without an email" do
      user.email = nil
      expect(user).to_not be_valid
    end

    it "is not valid if email is not unique (case-insensitive)" do
      duplicate_user = user.dup
      duplicate_user.email = user.email.upcase
      user.save
      expect(duplicate_user).to_not be_valid
    end

    it "is valid with a valid email" do
      expect(user).to be_valid
    end

    it "is not valid with an invalid email format" do
      invalid_emails = ['user@', 'user@com', 'user@.com']
      invalid_emails.each do |email|
        user.email = email
        expect(user).to_not be_valid
      end
    end
  end
end
