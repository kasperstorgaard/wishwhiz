var _ = require('lodash');
var Promise = require('es6-promise').Promise;

var AppDispatcher = require('../../dispatchers/app-dispatcher');
var AppConstants = require('../../constants/app-constants');
var BaseStore = require('../base-store');

var FirebaseRef = require('../../utilities/firebase/firebase-ref');

var _loginTime;

function _createUser(user){
  var baseUser = {email: user.email, password: user.password};

  return new Promise(function(resolve, reject) {
    FirebaseRef.createUser(baseUser, function (error) {
      if(error !== null){
        reject({error: error});
        return;
      }
      resolve();
    })
  });
}

function _loginUser (user) {
  return new Promise(function(resolve, reject) {
    FirebaseRef.authWithPassword(user, function (error) {
      if(error !== null){
        reject({error: error});
        return;
      }
      _loginTime = new Date();
      resolve();
    })
  })
}

function _getUser (argument) {
  return FirebaseRef.getAuth();
}

function _logoutUser (argument) {
  _loginTime = null;
  return FirebaseRef.unauth();
}

function _emitChange () {
  UserStore.emitChange();
}

var UserStore = _.extend(new BaseStore(), {
  getUser: function(){
    return _getUser();
  },
  getLoginTime: function() {
    return _loginTime;
  },
  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;
    switch(action.actionType){
      case AppConstants.CREATE_USER:
        _createUser(payload.action.user)
          .then(_emitChange);
        break;
      case AppConstants.LOGIN_USER:
        _loginUser(payload.action.user)
          .then(_emitChange);
        break;
      case AppConstants.LOGOUT_USER:
        _logoutUser(payload.action.user);
        _emitChange();
        break;
    }

    return true;
  })
})

module.exports = UserStore;
