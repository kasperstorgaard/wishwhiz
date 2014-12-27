var React = require('react');
var _ = require('lodash');

var Field = React.createClass({displayName: "Field",
  handleBlur: function(event) {
    if(this.props.update && _.isFunction(this.props.update)){
      var val = this.refs.input.getDOMNode().value;
      this.props.update(this.props.id, val);
    }
  },
  getValidationMessage: function(error) {
    if(!error.message){
      return null;
    }
    return (React.createElement("span", {className: "help-inline"}, error.message));
  },
  render: function() {
    var error = this.props.validationError;
    var hasError = _.size(error) != 0;
    var validationMessage = !hasError ? null : this.getValidationMessage(error);

    return (
      React.createElement("div", {className: "form-group" + (hasError ? " has-error" : "")}, 
        React.createElement("label", {htmlFor: this.props.id, className: "col-lg-2 control-label"}, this.props.name), 
        React.createElement("div", {className: "col-lg-10"}, 
          React.createElement("input", {type: this.props.type, className: "form-control", onBlur: this.handleBlur, ref: "input", 
           id: this.props.id, placeholder: this.props.placeholder}), 
           validationMessage
        )
      )
    );
  }
});

module.exports = Field;
