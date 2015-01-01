var revalidator = require('revalidator');
var _ = require('lodash');
var ValidationTypes = require('./validation-types.js');
var ValidationMessages = require('./validation-messages.js');
var ValidationConstants = require('../../constants/validation-constants.js');

function _buildSchema (fields) {
  var properties = {};

  _.each(fields, function (field) {
    var validation = ValidationTypes[field.type];
    var messages = ValidationMessages[field.type];

    var obj = validation || {};

    if(messages){
      obj.messages = _.cloneDeep(messages);
    }

    if(field.required){
      obj.required = true;
      obj.allowEmpty = false;
    }

    properties[field.id] = obj;
  });

  return { properties: properties };
}

function Validator (fields) {
  this._schema = _buildSchema(fields);
}

Validator.prototype.validate = function validate (formObj) {
  var response = revalidator.validate(formObj, this._schema);
  var errors = {};
  _.each(response.errors, function(error) {
    errors[error.property] = error;
  });
  return {valid: response.valid, errors: errors};
}

function create (fields) {
  return new Validator(fields);
}

module.exports = {
  create: create
}
