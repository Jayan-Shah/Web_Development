var _ = require('underscore');
// How it checks
// First it checks core module
// Then see file or folder
// Then see the node_modules

var result = _.contains([1,2,3],2);
console.log(result);
