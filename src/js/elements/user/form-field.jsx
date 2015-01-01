var React = require('react');
var _ = require('lodash');

var Field = React.createClass({
  getInitialState: function() {
    return {
      value: null,
      suppressError: false
    };
  },
  checkIfChanged: function (event) {
    if(this.props.update && _.isFunction(this.props.update)){
      var val = this.refs.input.getDOMNode().value;

      if(val != this.state.value){
        this.props.update(this.props.id, val);
        this.setState({value: val, suppressError: false});
      }
    }
  },
  handleKeyUp: function(event) {
    if(this.hasError() && !this.state.suppressError){
      this.setState({suppressError: true});
    }
    return this.checkIfChangedDebounced();
  },
  componentWillMount: function() {
    this.checkIfChangedDebounced = _.debounce(this.checkIfChanged, this.props.keyUpValidationDelay || 1500)
  },
  getValidationMessage: function(error) {
    if(!error.message){
      return null;
    }
    return (<span className="help-inline">{error.message}</span>);
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    var validationChanged = _.size(this.props.validationError) !== _.size(nextProps.validationError);
    return  validationChanged || this.state.suppressError != nextState.suppressError;
  },
  hasError: function(argument) {
    return _.size(this.props.validationError) != 0;
  },
  render: function() {
    var showError = !this.state.suppressError && this.hasError();

    var validationMessage = !showError ? null : this.getValidationMessage(this.props.validationError);

    return (
      <div className={"form-group" + (showError ? " has-error" : "")}>
        <label htmlFor={this.props.id} className="control-label">{this.props.name}</label>
        <input ref="input" type={this.props.type} id={this.props.id} className="form-control"
         onKeyUp={this.handleKeyUp} onBlur={this.checkIfChanged} placeholder={this.props.placeholder} />
         {validationMessage}
      </div>
    );
  }
});

module.exports = Field;
