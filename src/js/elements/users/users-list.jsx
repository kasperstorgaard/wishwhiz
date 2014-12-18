var React = require('react');
var AppStore = require('../../stores/app-store.js');

function _getUsers () {
  return {users: AppStore.getUsers()};
}

var UsersList = React.createClass({
  getInitialState:function(){
    return _getUsers();
  },
  componentDidMount:function(){
    AppStore.addChangeListener(this._onChange);
  },
  componentWillUnMount:function(){
    AppStore.removeChangeListener(this._onChange);
  },
  _onChange:function(){
    this.setState(_getUsers());
  },
  render: function() {
    if(this.state.users.length == 0){
      return null;
    }
    var users = this.state.users.map(function(user, index) {
      return (<li key={index}>{user.name}</li>);
    });
    return <ul>{users}</ul>;
  }
});

module.exports = UsersList;
