var React = require('react');
var UserStore = require('../../stores/users/user-store.js');
var StoresMixinFactory = require('../../mixins/stores-mixin-factory.js');


var storesMixin = StoresMixinFactory.create(
  [UserStore,
  function getUsers() {
    return {users: UserStore.get()};
  }]
);

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
