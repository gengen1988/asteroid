define(function (require, exports, module) {
  var game = require('game');

  var Base = module.exports = function (x, y) {
  };

  var base = Base.prototype;

  base.setSprite = function (x, y, name) {
    var sprite = this._sprite = game.add.sprite(x, y, name);
    sprite.anchor.setTo(.5);
    game.physics.enable(sprite, Phaser.Physics.ARCADE);

    if (this.update) {
      sprite.update = this.update.bind(this);
    }

    return sprite;
  };

  base.getBody = function () {
    return this._sprite.body;
  };

  base.screenWrap = function () {
    var sprite = this._sprite;

    if (sprite.x < 0) {
      sprite.x = game.width;
    } else if (sprite.x > game.width) {
      sprite.x = 0;
    }

    if (sprite.y < 0) {
      sprite.y = game.height;
    } else if (sprite.y > game.height) {
      sprite.y = 0;
    }
  };

});
