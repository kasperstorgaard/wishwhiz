module.exports = function handleError(error){
    console.log(error.toString());
    this.emit('end');
};
