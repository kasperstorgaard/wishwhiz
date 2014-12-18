var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  createUser: function(user){
    AppDispatcher.handleViewAction({
      actionType: AppConstants.CREATE_USER,
      item: item
    })
  }
}

module.exports = AppActions;
