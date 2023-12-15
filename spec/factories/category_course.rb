FactoryBot.define do
    factory :category_course do
      association :category
      association :course
    end
  end
  