var React = require('react');
var Link = require('react-router').Link;

var UserStore = require('../../stores/users/user-store');
var RouteConstants = require('../../constants/route-constants');

var User = React.createClass({
  render: function() {
    var user = UserStore.getUser();

    if(!user){
      return (
        <div>You are not logged in, <Link to={RouteConstants.LOGIN}>login here</Link></div>
      );
    }

    var userData = JSON.stringify(user);

    return (
      <div>
        {userData}
      </div>
    );
  }
});

module.exports = User;
