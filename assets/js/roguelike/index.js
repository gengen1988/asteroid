define(function (require, exports, module) {
  var Roguelike = require('./roguelike');
  var Map = require('./map');

  var State = module.exports = function () {
    Roguelike.apply(this, arguments);
  };

  var state = State.prototype = new Roguelike();

  state.create = function (game) {
    game.input.keyboard.addCallbacks(null, null, this.onKeyUp);
    var map = new Map(this);

    map.initMap();
    console.log(map._map);
  };
});
