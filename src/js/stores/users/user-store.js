var _ = require('lodash');
var AppDispatcher = require('../../dispatchers/app-dispatcher.js');
var AppConstants = require('../../constants/app-constants.js');
var BaseStore = require('../base-store');

var _users = [];

function _createUser(user){
  _users.push(user);
}

var UserStore = _.extend(new BaseStore(), {
  get: function(){
    return _users;
  },
  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      case AppConstants.CREATE_USER:
        _createUser(payload.action.user);
        break;
    }
    UserStore.emitChange();
    return true;
  })
})

module.exports = UserStore;
