var React = require('react');

var LoginUser = require('../elements/user/login-user.js');
var RegisterUser = require('../elements/user/register-user.js');

var LoginRegister = React.createClass({
  render: function() {
    return (
      <div id="login-register">
        <div className="container">
          <div className="row">
            <section id="login" className="col-md-6">
              <LoginUser />
            </section>
            <section id="register" className="col-md-6">
              <RegisterUser />
            </section>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = LoginRegister;
