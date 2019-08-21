module Workarea
  module EmailSignupPopup
    class Engine < ::Rails::Engine
      include Workarea::Plugin
      isolate_namespace Workarea::EmailSignupPopup
    end
  end
end
