var _ = require('lodash');
var ValidatorFactory = require('../shared/validation/validator-factory');

function create (validatorConfig, submitFn) {
  if(!validatorConfig || !submitFn || !_.isFunction(submitFn)){
    throw('invalid arguments');
  }

  var validator = ValidatorFactory.create(validatorConfig);

  return {
    'validator': validator,
    updateForm: function(key, value) {
      this.state.formData[key] = value;

      var validationResponse = this.validateForm(this.state.formData);

      if(!validationResponse.valid){
        var formErrors = validationResponse.errors;
        var fieldErrors = formErrors[key] || {};
        this.state.validationErrors[key] = fieldErrors;
      }else{
        this.state.validationErrors = {};
      }

      this.setState({formData: this.state.formData, validationErrors: this.state.validationErrors });
    },
    trySubmitForm: function(event) {
      event.preventDefault();

      var validationResponse = this.validateForm(this.state.formData);
      if(validationResponse.valid){
        submitFn(this.state.formData);
      }else{
        this.setState({validationErrors: validationResponse.errors});
      }
    },
    validateForm: function(formData) {
      return this.validator.validate(formData);
    }
  }
}

module.exports = { create: create };
