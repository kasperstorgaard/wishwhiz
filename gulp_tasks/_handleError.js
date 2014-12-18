module.exports = function(error){
    console.log(error.toString());
    this.emit('end');
};
