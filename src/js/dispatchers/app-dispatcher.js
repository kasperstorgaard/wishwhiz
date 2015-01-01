var Dispatcher = require('./dispatcher.js');
var _  = require('lodash');

var AppDispatcher = _.extend({}, Dispatcher.prototype, {
  handleViewAction: function(action){
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    })
  }
})

module.exports = AppDispatcher;
