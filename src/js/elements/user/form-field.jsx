var React = require('react');
var _ = require('lodash');

var Field = React.createClass({
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
    return (<span className="help-inline">{error.message}</span>);
  },
  render: function() {
    var error = this.props.validationError;
    var hasError = _.size(error) != 0;
    var validationMessage = !hasError ? null : this.getValidationMessage(error);

    return (
      <div className={"form-group" + (hasError ? " has-error" : "")}>
        <label htmlFor={this.props.id} className="control-label">{this.props.name}</label>
        <input type={this.props.type} className="form-control" onBlur={this.handleBlur} ref="input"
         id={this.props.id} placeholder={this.props.placeholder} />
         {validationMessage}
      </div>
    );
  }
});

module.exports = Field;
