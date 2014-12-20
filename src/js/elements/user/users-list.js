var React = require('react');
var UserStore = require('../../stores/users/user-store.js');
var StoresMixinFactory = require('../../mixins/stores-mixin-factory.js');

function getUsers() {
  return {users: UserStore.get()};
}

var storesMixin = StoresMixinFactory([UserStore, getUsers]);

var UsersList = React.createClass({displayName: "UsersList",
  mixins: [storesMixin],
  render: function() {
    if(this.state.users.length == 0){
      return null;
    }
    var users = this.state.users.map(function(user, index) {
      var userData = JSON.stringify(user);
      return (React.createElement("li", {key: index}, userData));
    });
    return React.createElement("ul", null, users);
  }
});

module.exports = UsersList;
