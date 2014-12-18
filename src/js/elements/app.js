var React = require('react');

var AppActions = require('./../actions/app-actions');

var APP = React.createClass({displayName: 'APP',
  handleClick: function() {
    AppActions.createUser({});
  },
  render: function() {
    return (
      React.createElement("div", null, 
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
                  React.createElement("a", {href: "../help/"}, "action 2")
                ), 
                React.createElement("li", null, 
                  React.createElement("a", {href: "../help/"}, "action 3")
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
        ), 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "section", id: "mainstage"}, 
            React.createElement("div", {className: "row"}, 
              React.createElement("div", {className: "col-lg-12"}, 
                React.createElement("div", {className: "jumbotron"}, 
                  React.createElement("h1", null, "Jumbotron"), 
                  React.createElement("p", null, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), 
                  React.createElement("p", null, React.createElement("a", {className: "btn btn-primary btn-lg"}, "Learn more"))
                )
              )
            )
          )
        ), 
        React.createElement("div", {className: "btn btn-default btn-lg", onClick: this.handleClick}, "create user")
      )
    );
  }
});
module.exports = APP;
