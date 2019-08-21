/**
 * @namespace WORKAREA.emailSignupPopup
 */
WORKAREA.registerModule('emailSignupPopup', (function () {
    'use strict';

    var markUserHasSeenPopup = function () {
            WORKAREA.cookie.create('email_signup_popup', 'true', 999);
        },

        userHasSeenPopup = function () {
            return Boolean(WORKAREA.cookie.read('email_signup_popup'));
        },

        /**
         * @method
         * @name init
         * @memberof WORKAREA.emailSignupPopup
         */
        init = function () {
            if (userHasSeenPopup()) { return; }

            $.get(
                WORKAREA.routes.storefront.emailSignupPath(),
                WORKAREA.dialog.create
            );

            markUserHasSeenPopup();
        };

    return {
        init: init
    };
}()));
