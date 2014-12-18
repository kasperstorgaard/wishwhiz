var React = require('react');

var APP = React.createClass({displayName: 'APP',
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Wishwhiz")
      )
    );
  }
});
module.exports = APP;
