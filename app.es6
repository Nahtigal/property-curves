var mojs = require('mo-js');
var Howl = require('howler').Howl;
require('./css/styles.styl');

// SCENES
var cube = require('./scenes/cube/cube')

var main = {
  s: 1 // global time coefficient
}

cube.init(main);
