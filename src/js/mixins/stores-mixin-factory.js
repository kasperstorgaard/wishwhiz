var _ = require('lodash');

function _getExtendedReturn (getters) {
  var data = {};
  _.each(getters, function(get) {
    _.extend(data, get());
  });
  return data;
}

function create() {
  var args = Array.prototype.slice.call(arguments);
  var stores = _.map(args, function(arg){
    return arg[0];
  });
  var getters = _.map(args, function(arg){
    return arg[1];
  });

  return {
    getInitialState:function(){
      return _getExtendedReturn(getters);
    },
    componentDidMount:function(){
      _.invoke(stores, 'addChangeListener', this._onChange);
    },
    componentWillUnMount:function(){
      _.invoke(stores, 'removeChangeListener', this._onChange);
    },
    _onChange:function(){
      this.setState(_getExtendedReturn(getters));
    }
  };
}

module.exports = create;
