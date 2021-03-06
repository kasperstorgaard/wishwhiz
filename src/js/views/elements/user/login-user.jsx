var React = require('react');
var _ = require('lodash');

var AppActions = require('../../../actions/app-actions');
var ValidationConstants = require('../../../constants/validation-constants');
var FormField = require('./form-field');
var FormValidationMixinFactory = require('../../../utilities/mixins/form-validation-mixin-factory');

function _loginUser(formData) {
  AppActions.loginUser(formData);
}

var _validationConfig = [
  { id: 'password', required: true },
  { id: 'email', type: ValidationConstants.EMAIL, required: true }
];
var formValidationMixin = FormValidationMixinFactory.create(_validationConfig, _loginUser);

var LoginUser = React.createClass({
  mixins: [formValidationMixin],
  getInitialState: function () {
    return {
      validationErrors: {},
      formData: {}
    };
  },
  render: function() {
    return (
      <form>
        <h2 className="form-header">
          <small><em>Already have a user?</em></small><br />Login</h2>
        <fieldset>
          <FormField id={'email'} name="Email" type="email" update={this.updateForm}
           placeholder="somename@somedomain.com" validationError={this.state.validationErrors['email']} />
           <FormField id={'password'} name="Password" type="password" update={this.updateForm}
           placeholder="superSecr3tP@ssW0rd" validationError={this.state.validationErrors['password']} keyupValidationDelay={100} />
          <div className={"form-group"}>
            <button type="submit" className="btn btn-primary" onClick={this.trySubmitForm}>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = LoginUser;
