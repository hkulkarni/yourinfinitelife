require 'test_helper'

class CoachingControllerTest < ActionController::TestCase
  test "should get overview" do
    get :overview
    assert_response :success
  end

  test "should get confidence_session" do
    get :confidence_session
    assert_response :success
  end

  test "should get confidence_certification" do
    get :confidence_certification
    assert_response :success
  end

end
