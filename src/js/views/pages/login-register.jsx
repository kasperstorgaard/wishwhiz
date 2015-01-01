var React               = require('react');

var LoginUser           = require('../elements/user/login-user');
var RegisterUser        = require('../elements/user/register-user');
var UserStore           = require('../../stores/users/user-store');
var StoresMixinFactory  = require('../../utilities/mixins/stores-mixin-factory');

function _getUser() {
  return UserStore.getUser();
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
  getSecondsSinceLogin: function(dateObj) {
    var now = new Date();
    return Math.floor((now - dateObj) / 1000);
  },
  render: function() {
    var innerContent;

    if(this.state.user){
      var loginTime = UserStore.getLoginTime();
      var loggedInText = this.getSecondsSinceLogin(loginTime) <= 60 ?
        "You have been logged in." :
        "You are already logged in";

      innerContent = (<h3>{loggedInText}</h3>);
    }else{
      innerContent = (
        <div className="row">
          <section id="login" className="col-md-6">
            <LoginUser />
          </section>
          <section id="register" className="col-md-6">
            <RegisterUser />
          </section>
        </div>
      );
    }

    return (
      <section id="login-register">
        <div className="container">
          {innerContent}
        </div>
      </section>
    );
  }
});

module.exports = LoginRegister;
