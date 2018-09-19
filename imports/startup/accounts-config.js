import { Accounts } from 'meteor/accounts-base';

//configure accounts to use just a username field
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});
