var AppDispatcher = require('../../dispatchers/app-dispatcher.js');
var AppConstants = require('../../constants/app-constants.js');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _users = [];

function _createUser(user){
  _users.push(user);
}

var UserStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

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
