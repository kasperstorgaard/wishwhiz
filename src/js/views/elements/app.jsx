var React = require('react');

var Header = require('./shared/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
