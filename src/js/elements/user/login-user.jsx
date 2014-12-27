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

var LoginUser = React.createClass({
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
    return (
      <form className="form-horizontal">
        <h2 className="form-header">Login user</h2>
        <fieldset>
          <FormField id={'username'} name="Username" type="text" update={this.updateForm}
           placeholder="username" validationError={this.state.validationErrors['username']} />
           <FormField id={'password'} name="Password" type="password" update={this.updateForm}
           placeholder="password" validationError={this.state.validationErrors['password']} />
          <div className={"form-group"}>
            <div className="col-lg-10 col-lg-offset-2">
              <button type="submit" className="btn btn-primary" onClick={this.trySubmitForm}>Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
});

module.exports = LoginUser;
