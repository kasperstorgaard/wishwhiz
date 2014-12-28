var React = require('react');

var NotFound = React.createClass({displayName: "NotFound",

  render: function() {
    return (
      React.createElement("div", {className: "container"}, React.createElement("h2", null, "404 - Page not found"))
    );
  }

});

module.exports = NotFound;
