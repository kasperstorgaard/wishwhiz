var React = require('react');

var Footer = React.createClass({

  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <ul className="text-muted list-inline">
            <li><a href="#">some link</a></li>
            <li>·</li>
            <li><a href="#">some other link</a></li>
            <li>·</li>
            <li><a href="#">contact stuff 1</a></li>
            <li>·</li>
            <li><a href="#">more?</a></li>
          </ul>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
