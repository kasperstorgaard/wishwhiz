var React = require('react');

var Header = require('./shared/header.jsx');
var Footer = require('./shared/footer.jsx');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <Header />
        <RouteHandler />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
