require 'rails_helper'

RSpec.describe DataController, type: :controller do
  def validate_api_response(response)
    expect(response).to have_http_status(:success)
    response_object = JSON.parse(response.body)
    expect(response_object).to be_kind_of(Array)
    expect(response_object.size).to be > 0
  end

  describe "GET #heartrate" do
    it "returns http success" do
      get :heartrate, format: :json
      validate_api_response(response)
    end
  end

  describe "GET #activity" do
    it "returns http success" do
      get :activity, format: :json
      validate_api_response(response)
    end
  end

  describe "GET #calories" do
    it "returns http success" do
      get :calories, format: :json
      validate_api_response(response)
    end
  end
end
