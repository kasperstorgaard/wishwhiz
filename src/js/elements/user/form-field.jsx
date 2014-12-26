var React = require('react');
var _ = require('lodash');

var Field = React.createClass({
  handleBlur: function(event) {
    var val = this.refs.input.getDOMNode().value || '';
    this.props.update(this.props.id, val);
  },
  render: function() {
    return (
      <div className={"form-group" + (_.size(this.props.validationError) == 0 ? "" : " has-error")}>
        <label htmlFor={this.props.id} className="col-lg-2 control-label">{this.props.name}</label>
        <div className="col-lg-10">
          <input type={this.props.type} className="form-control" onBlur={this.handleBlur} ref="input" id={this.props.id} placeholder={this.props.placeholder} />
        </div>
      </div>
    );
  }
});

module.exports = Field;
