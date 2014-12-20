var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="../" className="navbar-brand">Wishwhiz</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="">action 1</a>
              </li>
              <li>
                <a href="">action 2</a>
              </li>
              <li>
                <a href="">action 3</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="">login</a>
              </li>
              <li>
                <a href="">stuff</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
