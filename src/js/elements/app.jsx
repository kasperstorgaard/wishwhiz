var React = require('react');

var Header = require('./shared/header.jsx');
var Footer = require('./shared/footer.jsx');
var RouteHandler = require('react-router').RouteHandler;

var APP = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <RouteHandler/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = APP;
