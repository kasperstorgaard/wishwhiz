var React = require('react');
var AddUser = require('./users/add-user.js');
var UsersList = require('./users/users-list.js');
var Header = require('./shared/header.js');

var APP = React.createClass({displayName: 'APP',
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
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
          ), 
          React.createElement(AddUser, null), 
          React.createElement("hr", null), 
          React.createElement(UsersList, null)
        )
      )
    );
  }
});
module.exports = APP;
