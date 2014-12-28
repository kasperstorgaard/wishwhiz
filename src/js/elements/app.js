var React = require('react');

var Header = require('./shared/header.js');
var RouteHandler = require('react-router').RouteHandler;

var APP = React.createClass({displayName: "APP",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
        React.createElement("div", {className: "after-navbar"}, 
          React.createElement(RouteHandler, null)
        )
      )
    );
  }
});

module.exports = APP;
