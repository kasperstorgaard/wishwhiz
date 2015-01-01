var React = require('react');
var UserStore = require('../../stores/users/user-store');
var StoresMixinFactory = require('../../mixins/stores-mixin-factory');

function getUser() {
  return {user: UserStore.getUser()};
}

var storesMixin = StoresMixinFactory([UserStore, getUser]);

var UsersList = React.createClass({
  mixins: [storesMixin],
  render: function() {
    if(this.state.users.length == 0){
      return null;
    }
    var users = this.state.users.map(function(user, index) {
      var userData = JSON.stringify(user);
      return (<li key={index}>{userData}</li>);
    });
    return <ul>{users}</ul>;
  }
});

module.exports = UsersList;
