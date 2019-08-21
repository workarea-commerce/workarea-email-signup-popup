Workarea Email Signup Popup 2.0.0 (2017-05-26)
--------------------------------------------------------------------------------

*   Replace system test with teaspoon test

    EMAILSIGN-3
    Matt Duffy

*   Upgrade plugin for v3 compatability

    EMAILSIGN-3
    Beresford, Jake

*   Use less fragile assertion within feature test

    When the store front feature test is copied into a host app, asserting
    on the dialog content is too fragile because an app is likely to
    change it. Also, the default text is too likely to appear elsewhere
    on the page and create a false positive.

    Assert on a CSS selector instead. Confirm the email signup block is
    displayed and within a dialog.

    EMAILSIGN-1
    Chris Cressman

*   Guard against a host app disabling the dialog in test

    A host app will likely disable the email signup dialog in test by
    setting the relevant cookie before each test. This will cause the
    store front feature test to fail because the dialog won't be
    present on the page.

    Remove the cookie before running the store front feature test to
    ensure it is not present.

    Also add documentation to encourage host apps to disable the dialog
    in test.

    EMAILSIGN-1
    Chris Cressman


WebLinc Email Signup Popup 1.0.2 (2016-04-04)
--------------------------------------------------------------------------------


WebLinc Email Signup Popup 1.0.1 (February 4, 2016)
--------------------------------------------------------------------------------

*   Use less fragile assertion within feature test

    When the store front feature test is copied into a host app, asserting
    on the dialog content is too fragile because an app is likely to
    change it. Also, the default text is too likely to appear elsewhere
    on the page and create a false positive.

    Assert on a CSS selector instead. Confirm the email signup block is
    displayed and within a dialog.

    EMAILSIGN-1

*   Guard against a host app disabling the dialog in test

    A host app will likely disable the email signup dialog in test by
    setting the relevant cookie before each test. This will cause the
    store front feature test to fail because the dialog won't be
    present on the page.

    Remove the cookie before running the store front feature test to
    ensure it is not present.

    Also add documentation to encourage host apps to disable the dialog
    in test.

    EMAILSIGN-1


WebLinc Email Signup Popup 1.0.0 (January 13, 2016)
--------------------------------------------------------------------------------

First release
