var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var ValidatorFactory = require('../../helpers/validation/validator-factory');
var ValidationConstants = require('../../constants/validation-constants');

function _createValidation () {
  return ValidatorFactory.create([
    { type: ValidationConstants.EMAIL, required: true },
    { type: ValidationConstants.PASSWORD, required: true }
  ]);
}

var AddUser = React.createClass({displayName: "AddUser",
  getInitialState: function () {
    return {
      validationErrors: {}
    };
  },
  _getFormData: function _getFormData (){
    var obj = {};
    obj[ValidationConstants.PASSWORD] =  this.refs[ValidationConstants.PASSWORD].getDOMNode().value;
    obj[ValidationConstants.EMAIL] = this.refs[ValidationConstants.PASSWORD].getDOMNode().value;
    return obj;
  },
  handleClick: function(event) {
    event.preventDefault();

    var form = this._getFormData();

    var validationResponse = this.validator.validate(form);
    console.log(validationResponse);

    if(!validationResponse.valid){
      this.setState({validationErrors: validationResponse.errors});
    }else{
      AppActions.createUser(form);
    }
  },
  componentDidMount: function() {
    this.validator = _createValidation();
  },
  render: function() {
    return (
      React.createElement("form", {className: "form-horizontal"}, 
        React.createElement("fieldset", null, 
          React.createElement("div", {className: "form-group" + (!this.state.validationErrors[ValidationConstants.FIRST_NAME] ? "" : " has-error")}, 
            React.createElement("label", {htmlFor: ValidationConstants.FIRST_NAME, className: "col-lg-2 control-label"}, "First name"), 
            React.createElement("div", {className: "col-lg-10"}, 
              React.createElement("input", {type: "text", className: "form-control", ref: ValidationConstants.FIRST_NAME, id: ValidationConstants.FIRST_NAME, placeholder: "First name"})
            )
          ), 
          React.createElement("div", {className: "form-group" + (!this.state.validationErrors[ValidationConstants.LAST_NAME] ? "" : " has-error")}, 
            React.createElement("label", {htmlFor: ValidationConstants.LAST_NAME, className: "col-lg-2 control-label"}, "Last name"), 
            React.createElement("div", {className: "col-lg-10"}, 
              React.createElement("input", {type: "text", className: "form-control", ref: ValidationConstants.LAST_NAME, id: ValidationConstants.LAST_NAME, placeholder: "Last name"})
            )
          ), 
          React.createElement("div", {className: "form-group" + (!this.state.validationErrors[ValidationConstants.EMAIL] ? "" : " has-error")}, 
            React.createElement("label", {htmlFor: ValidationConstants.EMAIL, className: "col-lg-2 control-label"}, "Email"), 
            React.createElement("div", {className: "col-lg-10"}, 
              React.createElement("input", {type: "email", className: "form-control", ref: ValidationConstants.EMAIL, id: ValidationConstants.EMAIL, placeholder: "Email"})
            )
          ), 
          React.createElement("div", {className: "form-group" + (!this.state.validationErrors[ValidationConstants.PASSWORD] ? "" : " has-error")}, 
            React.createElement("label", {htmlFor: ValidationConstants.PASSWORD, className: "col-lg-2 control-label"}, "Password"), 
            React.createElement("div", {className: "col-lg-10"}, 
              React.createElement("input", {type: "password", className: "form-control", ref: ValidationConstants.PASSWORD, id: ValidationConstants.PASSWORD, placeholder: "Password"})
            )
          ), 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("div", {className: "col-lg-10 col-lg-offset-2"}, 
              React.createElement("button", {type: "submit", className: "btn btn-primary", onClick: this.handleClick}, "Submit")
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
