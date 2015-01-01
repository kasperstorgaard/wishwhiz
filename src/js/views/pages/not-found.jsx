var React = require('react');

var NotFound = React.createClass({

  render: function() {
    console.log('402');
    return (
      <div className="container"><h2>404 - Page not found</h2></div>
    );
  }

});

module.exports = NotFound;
