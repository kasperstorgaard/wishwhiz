var React = require('react');
var _ = require('lodash');

var AppActions = require('../../actions/app-actions.js');
var ValidatorFactory = require('../../helpers/validation/validator-factory');
var ValidationConstants = require('../../constants/validation-constants');
var FormField = require('./form-field.js');
var FormValidationMixinFactory = require('../../mixins/form-validation-mixin-factory.js');

function _createValidation () {
  return ValidatorFactory.create([
    { id: 'email', type: ValidationConstants.EMAIL, required: true },
    { id: 'password', type: ValidationConstants.PASSWORD, required: true },
    { id: 'username', type: ValidationConstants.DEFAULT, required: true }
  ]);
}

var RegisterUser = React.createClass({
  mixins: [FormValidationMixinFactory.create(_createValidation())],
  getInitialState: function () {
    return {
      validationErrors: {},
      formData: {}
    };
  },
  submitForm: function(formData) {
    AppActions.createUser(formData);
  },
  render: function() {
    var submitDisabled = _.size(this.state.formData) == 0 || _.size(this.state.validationErrors) > 0;
    var btnClass = "btn btn-primary" + (submitDisabled ? " disabled" : "");
    return (
      <form>
        <h2 className="form-header"><small><em>Don&#39;t have a login?</em></small><br />Register</h2>
        <fieldset>
          <FormField id={'username'} name="Username" type="text" update={this.updateForm}
           placeholder="username" validationError={this.state.validationErrors['username']} />
          <FormField id={'email'} name="Email" type="email" update={this.updateForm}
           placeholder="email" validationError={this.state.validationErrors['email']} />
           <FormField id={'password'} name="Password" type="password" update={this.updateForm}
           placeholder="password" validationError={this.state.validationErrors['password']} />
          <div className={"form-group"}>
            <button type="submit" className={btnClass} onClick={this.trySubmitForm}>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = RegisterUser;
