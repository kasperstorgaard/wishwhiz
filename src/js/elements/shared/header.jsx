var React = require('react');
var Link = require('react-router').Link;

var RouteConstants = require('../../constants/route-constants.js');
var UserStore = require('../../stores/users/user-store.js');
var StoresMixinFactory = require('../../mixins/stores-mixin-factory.js');
var AppActions = require('../../actions/app-actions.js');

function _getUser() {
  return {user: UserStore.getUser()};
}
var storesMixin = StoresMixinFactory.create([UserStore]);

function _logoutUser() {

}

var Header = React.createClass({
  mixins: [storesMixin],
  getInitialState: function() {
    return {
      user: _getUser()
    };
  },
  logoutUser: function(event) {
    event.preventDefault();
    AppActions.logoutUser();
  },
  onStoreChange: function () {
    this.setState({user: _getUser()});
  },
  render: function() {
    var user =  UserStore.getUser();

    var navbarRight = !user ?
      (<ul className="nav navbar-nav navbar-right">
          <li>
            <Link to={RouteConstants.LOGIN}>Login</Link>
          </li>
       </ul>) :
      (<ul className="nav navbar-nav navbar-right">
        <li>
          <Link to={RouteConstants.USER}>{user.auth.uid}</Link>
        </li>
        <li>
          <a href="#" onClick={this.logoutUser}>logout</a>
        </li>
      </ul>)

    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">Wishwhiz</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="">action 1</a>
              </li>
              <li>
                <a href="">action 2</a>
              </li>
              <li>
                <a href="">action 3</a>
              </li>
            </ul>
            {navbarRight}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Header;
