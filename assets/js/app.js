define(function (require, exports, module) {

  var game = require('game');

  var App = function () {
    game.state.add('splash', require('splash/index'));
    game.state.add('main-menu', require('main-menu/index'));
    game.state.add('town-map', require('town-map/index'));
    game.state.add('combat', require('combat/index'));

    game.state.add('asteroid', require('asteroid/index'));
    game.state.add('roguelike', require('roguelike/index'));
  }

  var app = App.prototype;

  app.start = function () {
    game.state.start('asteroid');

    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.refresh();
  };

  app.onResize = function (width, height) {
    game.scale.maxWidth = width;
    game.scale.maxHeight = height;
    game.scale.refresh();
  };

  app.fullscreen = function () {
    game.scale.startFullScreen();
  };

  module.exports = new App();

});
