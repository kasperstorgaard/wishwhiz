var React = require('react');
var _ = require('lodash');

var AppActions = require('../../../actions/app-actions');
var ValidationConstants = require('../../../constants/validation-constants');
var FormField = require('./form-field');

var FormValidationMixinFactory = require('../../../utilities/mixins/form-validation-mixin-factory');

function _createUser (formData) {
  AppActions.createUser(formData);
}

var _validationConfig = [
  { id: 'username', type: ValidationConstants.NAME, required: true },
  { id: 'email', type: ValidationConstants.EMAIL, required: true },
  { id: 'password', type: ValidationConstants.PASSWORD, required: true }
];

var formValidationMixin = FormValidationMixinFactory.create(_validationConfig, _createUser);

var RegisterUser = React.createClass({
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
        <h2 className="form-header"><small><em>Don&#39;t have a user?</em></small><br />Register</h2>
        <fieldset>
           <FormField id={'username'} name="Username" type="text" update={this.updateForm}
           placeholder="username" validationError={this.state.validationErrors['username']} />
           <FormField id={'email'} name="Email" type="email" update={this.updateForm}
           placeholder="somename@somedomain.com" validationError={this.state.validationErrors['email']} />
           <FormField id={'password'} name="Password" type="password" update={this.updateForm}
           placeholder="superS3cretP@ssW0rd!" validationError={this.state.validationErrors['password']} keyupValidationDelay={100} />
          <div className={"form-group"}>
            <button type="submit" className="btn btn-primary" onClick={this.trySubmitForm}>Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = RegisterUser;
