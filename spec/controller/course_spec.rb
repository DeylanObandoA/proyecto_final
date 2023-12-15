# require 'rails_helper'

# RSpec.describe "Courses", type: :request do
#   describe "GET /index" do
#     it "returns http success" do
#       get "/courses"
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "GET /show" do
#     let(:course) { FactoryBot.create(:course) }

#     it "returns http success" do
#       get "/courses/#{course.id}"
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "GET /edit" do
#     let(:course) { FactoryBot.create(:course) }

#     it "returns http success" do
#       get "/courses/#{course.id}/edit"
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "PUT /update" do
#     let(:course) { FactoryBot.create(:course) }

#     it "returns http success" do
#       put "/courses/#{course.id}", params: { course: { name: "Updated Course" } }
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "GET /new" do
#     it "returns http success" do
#       get "/courses/new"
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "POST /create" do
#     it "returns http success" do
#       post "/courses", params: { course: { name: "New Course" } }
#       expect(response).to have_http_status(:success)
#     end
#   end

#   describe "DELETE /destroy" do
#     let(:course) { FactoryBot.create(:course) }

#     it "returns http success" do
#       delete "/courses/#{course.id}"
#       expect(response).to have_http_status(:success)
#     end
#   end
# end