var React = require('react');
var _ = require('lodash');

var Field = React.createClass({
  handleBlur: function(event) {
    var val = this.refs.input.getDOMNode().value || '';
    this.props.update(this.props.id, val);
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
        <label htmlFor={this.props.id} className="col-lg-2 control-label">{this.props.name}</label>
        <div className="col-lg-10">
          <input type={this.props.type} className="form-control" onBlur={this.handleBlur} ref="input"
           id={this.props.id} placeholder={this.props.placeholder} />
           {validationMessage}
        </div>
      </div>
    );
  }
});

module.exports = Field;
