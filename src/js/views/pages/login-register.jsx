var React = require('react');

var LoginUser = require('../elements/user/login-user');
var RegisterUser = require('../elements/user/register-user');
var UserStore = require('../../stores/users/user-store');
var StoresMixinFactory = require('../../utilities/mixins/stores-mixin-factory');

function _getUser() {
  return {user: UserStore.getUser()};
}
var storesMixin = StoresMixinFactory.create([UserStore]);

var LoginRegister = React.createClass({
  mixins: [storesMixin],
  getInitialState: function(){
    return {
      user: _getUser()
    };
  },
  onStoreChange: function() {
    this.setState({user: _getUser()});
  },
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
