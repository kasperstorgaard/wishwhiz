var React = require('react');

var LoginUser = require('../elements/user/login-user.js');
var RegisterUser = require('../elements/user/register-user.js');

var LoginRegister = React.createClass({
  render: function() {
    return (
      <div id="login-register">
        <div className="row">
          <section id="login" className="col-lg-6">
            <LoginUser />
          </section>
          <section id="register" className="col-lg-6">
            <RegisterUser />
          </section>
        </div>
      </div>
    );
  }
});

module.exports = LoginRegister;
