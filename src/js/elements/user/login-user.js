var React = require('react');
var _ = require('lodash');

var AppActions = require('../../actions/app-actions.js');
var ValidatorFactory = require('../../helpers/validation/validator-factory');
var ValidationConstants = require('../../constants/validation-constants');
var FormField = require('./form-field.js');
var FormValidationMixinFactory = require('../../mixins/form-validation-mixin-factory.js');

var validation = ValidatorFactory.create([
  { id: 'password', required: true },
  { id: 'username', required: true }
]);
var formValidationMixin = FormValidationMixinFactory.create(validation);

var LoginUser = React.createClass({displayName: "LoginUser",
  mixins: [formValidationMixin],
  getInitialState: function () {
    return {
      validationErrors: {},
      formData: {}
    };
  },
  submitForm: function(formData) {
    //AppActions.createUser(formData);
  },
  render: function() {
    var submitDisabled = _.size(this.state.formData) == 0 || _.size(this.state.validationErrors) > 0;
    var btnClass = "btn btn-primary" + (submitDisabled ? " disabled" : "");
    return (
      React.createElement("form", null, 
        React.createElement("h2", {className: "form-header"}, 
          React.createElement("small", null, React.createElement("em", null, "Already have a user?")), React.createElement("br", null), "Login"), 
        React.createElement("fieldset", null, 
          React.createElement(FormField, {id: 'username', name: "Username", type: "text", update: this.updateForm, 
           placeholder: "username", validationError: this.state.validationErrors['username']}), 
           React.createElement(FormField, {id: 'password', name: "Password", type: "password", update: this.updateForm, 
           placeholder: "password", validationError: this.state.validationErrors['password']}), 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("button", {type: "submit", className: btnClass, onClick: this.trySubmitForm}, "Submit")
          )
        )
      )
    );
  }
});

module.exports = LoginUser;
