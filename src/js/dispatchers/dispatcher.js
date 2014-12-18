var Promise = require('es6-promise').Promise;
var _ = require('lodash');

var _callbacks = [];
var _promises = [];

function _addPromise(callback, payload) {
  _promises.push(new Promise(function(resolve, reject) {
    if (callback(payload)) {
      resolve(payload);
    } else {
      reject(new Error('Dispatcher callback unsuccessful'));
    }
  }));
};

function _clearPromises() {
  _promises = [];
};

function Dispatcher() {};
Dispatcher.prototype = _.extend({}, Dispatcher.prototype, {
  register: function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
  },

  dispatch: function(payload) {
    _callbacks.forEach(function(callback) {
      _addPromise(callback, payload);
    });
    Promise.all(_promises).then(_clearPromises);
  }
});

module.exports = Dispatcher;
