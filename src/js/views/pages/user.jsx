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
    if(!this.state.user){
      return (
        <div>You are not logged in, <Link to={RouteConstants.LOGIN}>login here</Link></div>
      );
    }

    var userData = JSON.stringify(this.state.user);

    return (
      <div>
        {userData}
      </div>
    );
  }
});

module.exports = User;
