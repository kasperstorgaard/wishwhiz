var React = require('react');
var AppActions = require('../../actions/app-actions.js');
var _ = require('lodash');
var FormMixinFactory = require('../../mixins/form-mixin-factory');
var FormGroup = require('../forms/form-group');

var fields = {
  'firstName': {
    'rules': ''
  },
  'lastName': {
    'rules': ''
  }
};

var formMixin = FormMixinFactory.create(fields)

var AddUser = React.createClass({displayName: 'AddUser',
  mixins: [formMixin],
  handleClick: function(event) {
    event.preventDefault();

    var formData = this.getFormData();
    AppActions.createUser(formData);
  },
  render: function() {
    return (
      React.createElement("form", {className: "form-horizontal"}, 
        React.createElement("fieldset", null, 
          React.createElement(FormGroup, {name: "firstName", label: "First name"}, 
            React.createElement("input", {type: "text", className: "form-control", ref: "firstName", id: "firstName", placeholder: "First name"})
          ), 
          React.createElement(FormGroup, {name: "lastName", label: "Last name"}, 
            React.createElement("input", {type: "text", className: "form-control", ref: "lastName", id: "lastName", placeholder: "Last name"})
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
