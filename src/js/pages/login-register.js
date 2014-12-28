var React = require('react');

var LoginUser = require('../elements/user/login-user.js');
var RegisterUser = require('../elements/user/register-user.js');

var LoginRegister = React.createClass({displayName: "LoginRegister",
  render: function() {
    return (
      React.createElement("div", {id: "login-register"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("section", {id: "login", className: "col-md-6"}, 
              React.createElement(LoginUser, null)
            ), 
            React.createElement("section", {id: "register", className: "col-md-6"}, 
              React.createElement(RegisterUser, null)
            )
          )
        )
      )
    );
  }
});

module.exports = LoginRegister;
