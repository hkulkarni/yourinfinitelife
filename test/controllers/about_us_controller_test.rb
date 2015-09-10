require 'test_helper'

class AboutUsControllerTest < ActionController::TestCase
  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get instructors" do
    get :instructors
    assert_response :success
  end

end
