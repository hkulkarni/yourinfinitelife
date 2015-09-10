require 'test_helper'

class CoursesControllerTest < ActionController::TestCase
  test "should get overview" do
    get :overview
    assert_response :success
  end

  test "should get team_services" do
    get :team_services
    assert_response :success
  end

end
