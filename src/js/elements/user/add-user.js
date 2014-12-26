var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var ValidatorFactory = require('../../helpers/validation/validator-factory');
var ValidationConstants = require('../../constants/validation-constants');
var FormField = require('./form-field.js');
var _ = require('lodash');

function _createValidation () {
  return ValidatorFactory.create([
    { id: 'email', type: ValidationConstants.EMAIL, required: true },
    { id: 'password', type: ValidationConstants.PASSWORD, required: true },
    { id: 'firstName', type: ValidationConstants.NAME, required: true },
    { id: 'lastName', type: ValidationConstants.NAME, required: true }
  ]);
}

var AddUser = React.createClass({displayName: "AddUser",
  getInitialState: function () {
    return {
      validationErrors: {},
      formData: {},
      dirty: false
    };
  },
  fieldUpdated: function(key, value) {
    var updatedObj = {};
    updatedObj[key] = value;
    var formData = _.extend(this.state.formData, updatedObj);

    var formErrors = this.validateForm(formData).errors;
    var fieldErrors = formErrors[key] || {};

    this.state.validationErrors[key] = fieldErrors;

    this.setState({formData: formData, validationErrors: this.state.validationErrors });
  },
  handleSubmit: function(event) {
    event.preventDefault();

    var validationResponse = this.validateForm(this.state.formData);
    if(validationResponse.valid){
      this.submitForm(this.state.formData);
    }else{
      this.setState({validationErrors: validationResponse.errors});
    }
  },
  validateForm: function(formData) {
    return this.validator.validate(formData);
  },
  submitForm: function(formData) {
    AppActions.createUser(formData);
  },
  componentDidMount: function() {
    this.validator = _createValidation();
  },
  render: function() {
    return (
      React.createElement("form", {className: "form-horizontal"}, 
        React.createElement("fieldset", null, 
          React.createElement(FormField, {id: 'firstName', name: "First name", type: "text", update: this.fieldUpdated, 
           placeholder: "firstname", validationError: this.state.validationErrors['firstName']}), 
          React.createElement(FormField, {id: 'lastName', name: "Last name", type: "text", update: this.fieldUpdated, 
           placeholder: "lastname", validationError: this.state.validationErrors['lastName']}), 
          React.createElement(FormField, {id: 'email', name: "Email", type: "email", update: this.fieldUpdated, 
           placeholder: "email", validationError: this.state.validationErrors['email']}), 
           React.createElement(FormField, {id: 'password', name: "Password", type: "password", update: this.fieldUpdated, 
           placeholder: "password", validationError: this.state.validationErrors['password']}), 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("div", {className: "col-lg-10 col-lg-offset-2"}, 
              React.createElement("button", {type: "submit", className: "btn btn-primary", onClick: this.handleSubmit}, "Submit")
            )
          )
        )
      )
    );
  }
});

module.exports = AddUser;

/*
<form class="form-horizontal">
  <fieldset>
    <legend>Legend</legend>
    <div class="form-group">
      <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputEmail" placeholder="Email">
      </div>
    </div>
    <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">Password</label>
      <div class="col-lg-10">
        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        <div class="checkbox">
          <label>
            <input type="checkbox"> Checkbox
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="textArea" class="col-lg-2 control-label">Textarea</label>
      <div class="col-lg-10">
        <textarea class="form-control" rows="3" id="textArea"></textarea>
        <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
      </div>
    </div>
    <div class="form-group">
      <label class="col-lg-2 control-label">Radios</label>
      <div class="col-lg-10">
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
            Option one is this
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
            Option two can be something else
          </label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label for="select" class="col-lg-2 control-label">Selects</label>
      <div class="col-lg-10">
        <select class="form-control" id="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br>
        <select multiple="" class="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </fieldset>
</form>
 */
