var React = require('react');

var Header = require('./shared/header.js');
var RouteHandler = require('react-router').RouteHandler;

var APP = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="container">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = APP;
