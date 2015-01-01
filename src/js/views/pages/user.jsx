var React = require('react');
var Link = require('react-router').Link;

var UserStore = require('../../stores/users/user-store');
var RouteConstants = require('../../constants/route-constants');
var StoresMixinFactory = require('../../utilities/mixins/stores-mixin-factory');

function _getUser() {
  return UserStore.getUser();
}
var storesMixin = StoresMixinFactory.create([UserStore]);

var User = React.createClass({
  mixins: [storesMixin],
  getInitialState: function() {
    return {
      user: _getUser()
    };
  },
  onStoreChange: function() {
    this.setState({user: _getUser()});
  },
  render: function() {
    var innerContent;

    if(!this.state.user){
      innerContent = (
        <h3>You are not logged in, <Link to={RouteConstants.LOGIN}>login here</Link></h3>
      );
    }else{
      var userData = JSON.stringify(this.state.user);
      var innerContent = (
        <pre>
          {userData}
        </pre>
      );
    }

    return (
      <section id="user">
        <div className="container">
          {innerContent}
        </div>
      </section>
    );
  }
});

module.exports = User;
