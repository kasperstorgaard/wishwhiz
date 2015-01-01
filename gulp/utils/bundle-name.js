module.exports =  (function () {
  var package = require('../../package.json');
  var version = package.version;
  var name = package.name;
  return version + '.' + name;
}());
