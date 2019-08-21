Workarea::Plugin.append_javascripts(
  'storefront.modules',
  'workarea/storefront/email_signup_popup/modules/email_signup_popup'
) unless Rails.env.test?
