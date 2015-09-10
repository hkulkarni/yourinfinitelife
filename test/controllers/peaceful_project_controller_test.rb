require 'test_helper'

class PeacefulProjectControllerTest < ActionController::TestCase
  test "should get program" do
    get :program
    assert_response :success
  end

  test "should get foundation" do
    get :foundation
    assert_response :success
  end

end
