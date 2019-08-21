//= require workarea/storefront/spec_helper
//= require workarea/storefront/email_signup_popup/modules/email_signup_popup

(function () {
    'use strict';

    describe('WORKAREA.emailSignupPopup', function () {
        it('requests the email signup page when no cookie is present', function() {
            var spy = sinon.spy($, 'get');

            WORKAREA.cookie.create('email_signup_popup', '', 999);

            WORKAREA.emailSignupPopup.init();
            expect(WORKAREA.cookie.read('email_signup_popup')).to.equal('true');

            WORKAREA.emailSignupPopup.init();
            expect(spy.calledOnce).to.equal(true);

            WORKAREA.cookie.create('email_signup_popup', '', 999);
            $.get.restore();
        });
    });
}());
