Rails.application.routes.draw do
  # About Us
  get '/about' => 'about_us#about'
  get '/instructors' => 'about_us#instructors'
  get '/about/pamela_dunn' => 'about_us/pamela_dunn#home'
  get '/pamela_dunn/books' => 'about_us/pamela_dunn#books'
  get '/pamela_dunn/workshops' => 'about_us/pamela_dunn#workshops'
  get '/pamela_dunn/coaching' => 'about_us/pamela_dunn#coaching'

  # Courses
  get 'courses/overview' => 'courses#overview'
  get 'courses/team_services' => 'courses#team_services'
  get 'courses/remembrance' => 'courses#remembrance_course'
  get 'courses/wonder_child' => 'courses#wonder_child_workshop'
  get 'courses/freedom' => 'courses#freedom_to_be'
  get 'courses/quest' => 'courses#quest'
  get 'courses/workshops' => 'courses#workshops'

  # Advanced courses
  get '/courses/advanced' => 'courses/advance_level_mastery#landing'
  get '/advanced/influencing' => 'courses/advance_level_mastery#influencing_skills'
  get '/advanced/assessment' => 'courses/advance_level_mastery#assessment_skills'
  get '/advanced/mastery' => 'courses/advance_level_mastery#mastery_mentorship'
  get '/advanced/instructor' => 'courses/advance_level_mastery#instructor_certification'

  # Coaching
  get 'coaching/overview' => 'coaching#overview'
  get 'coaching/session' => 'coaching#confidence_session'
  get 'coaching/certification' => 'coaching#confidence_certification'

  # Peaceful Project
  get 'peaceful_project/program' => 'peaceful_project#program'
  get 'peaceful_project/foundation' => 'peaceful_project#foundation'

  # Contact
  get '/contact' => 'home#contact'

  # Blog
  resources :posts

  resources :charges

  root 'home#landing'
end
