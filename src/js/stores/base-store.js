var _ = require('lodash');
var EventEmitter = require("events").EventEmitter;

var CHANGE_EVENT = "change";

function BaseStore(){
  EventEmitter.call(this);
};
BaseStore.prototype = new EventEmitter();
BaseStore.prototype.emitChange = function() {
  this.emit(CHANGE_EVENT);
};
BaseStore.prototype.addChangeListener = function(callback) {
  this.on(CHANGE_EVENT, callback);
};
BaseStore.prototype.removeChangeListener = function(callback) {
  this.removeListener(CHANGE_EVENT, callback);
};

module.exports = BaseStore;
