define(function (require, exports, module) {
  'use strict';
  var Roguelike = module.exports = function () {
  };

  Roguelike.prototype.FONT = 32;
  Roguelike.prototype.ROWS = 10;
  Roguelike.prototype.COLS = 15;
  Roguelike.prototype.ACTORS = 10;

  Roguelike.prototype.onKeyUp = function (event) {
    console.log(event);
  };

});
