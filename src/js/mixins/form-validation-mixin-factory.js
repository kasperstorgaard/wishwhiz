function create (validator) {
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
      if(validationResponse.valid && this.submitForm && _.isFunction(this.submitForm)){
        this.submitForm(this.state.formData);
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
