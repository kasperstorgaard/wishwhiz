var ValidationConstants = require('../../constants/validation-constants.js');

var types = {};

types[ValidationConstants.EMAIL] = {
  "type": "string",
  "format": "email"
};

types[ValidationConstants.PASSWORD] = {
  "type": "string",
  "minLength": 8
};

types[ValidationConstants.NAME] = {
  "type": "string",
  "minLength": 2
};

module.exports = types;
