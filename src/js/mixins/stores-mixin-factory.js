var _ = require('lodash');

function create(stores) {
  if(!stores){
    throw("no stores in mixin");
  }

  if(!_.isArray(stores)){
    stores = [stores];
  }

  return {
    componentDidMount:function(){
      if(this.onStoreChange && _.isFunction(this.onStoreChange)){
        _.invoke(stores, 'addChangeListener', this.onStoreChange);
      }
    },
    componentWillUnMount:function(){
      if(this.onStoreChange && _.isFunction(this.onStoreChange)){
        _.invoke(stores, 'removeChangeListener', this.onStoreChange);
      }
    }
  };
}

module.exports = {create: create};
