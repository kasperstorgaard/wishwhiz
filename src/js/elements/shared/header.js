var React = require('react');

var Header = React.createClass({displayName: "Header",

  render: function() {
    return (
      React.createElement("div", {className: "navbar navbar-default navbar-fixed-top"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("a", {href: "../", className: "navbar-brand"}, "Wishwhiz")
          ), 
          React.createElement("div", {className: "navbar-collapse collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav"}, 
              React.createElement("li", null, 
                React.createElement("a", {href: ""}, "action 1")
              ), 
              React.createElement("li", null, 
                React.createElement("a", {href: ""}, "action 2")
              ), 
              React.createElement("li", null, 
                React.createElement("a", {href: ""}, "action 3")
              )
            ), 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
              React.createElement("li", null, 
                React.createElement("a", {href: ""}, "login")
              ), 
              React.createElement("li", null, 
                React.createElement("a", {href: ""}, "stuff")
              )
            )
          )
        )
      )
    );
  }

});

module.exports = Header;
