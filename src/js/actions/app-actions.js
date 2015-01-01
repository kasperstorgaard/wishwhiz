var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var UserStore = require('../stores/users/user-store.js');

var AppActions = {
  createUser: function(user){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CREATE_USER,
      user: user
    })
  },
  loginUser: function(user) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.LOGIN_USER,
      user: user
    })
  },
  logoutUser: function() {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.LOGOUT_USER
    })
  }
};

module.exports = AppActions;
