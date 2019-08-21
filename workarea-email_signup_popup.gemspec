$LOAD_PATH.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'workarea/email_signup_popup/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'workarea-email_signup_popup'
  s.version     = Workarea::EmailSignupPopup::VERSION
  s.authors     = ['Matt Duffy']
  s.email       = ['mduffy@workarea.com']
  s.homepage    = 'https://github.com/workarea-commerce/workarea-email-signup-popup'
  s.summary     = 'Email Signup popup plugin for Workarea Commerce Platform'
  s.description = 'Adds JavaScript to prompt user to signup for emails on the Workarea Commerce Platform'
  s.files = `git ls-files`.split("\n")
  s.license = 'Business Software License'

  s.required_ruby_version = '>= 2.0.0'

  s.add_dependency 'workarea', '~> 3.x'
end
