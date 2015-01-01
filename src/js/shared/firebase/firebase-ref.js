var Firebase = require('firebase');
var FirebaseUrl = require('../../secrets/firebase-url.js');

var ref = new Firebase(FirebaseUrl);

module.exports = ref;
