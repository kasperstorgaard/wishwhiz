var ValidationConstants = require('../../constants/validation-constants');

var messages = {};

messages[ValidationConstants.EMAIL] = {
  format: "please enter a valid email."
},
messages[ValidationConstants.PASSWORD] = {
  "format": "must contain at least one number and upper and lower case letters.",
  "minLength": "must be at least 8 characters"
}

module.exports = messages;
