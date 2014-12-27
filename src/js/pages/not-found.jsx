var React = require('react');

var NotFound = React.createClass({

  render: function() {
    return (
      <div className="container"><h2>Route not found</h2></div>
    );
  }

});

module.exports = NotFound;
