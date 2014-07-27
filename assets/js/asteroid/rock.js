define(function (require, exports, module) {
  var game = require('game');
  var Base = require('./base');

  var Rock = function (x, y) {
    var sprite = this.setSprite(x, y, 'block');
    var body = this.getBody();
    sprite.scale.setTo(.25);

    body.angularVelocity = 10;
    body.velocity.x = 100;
  };

  module.exports = Rock;

  var rock = Rock.prototype = new Base();

  rock.explosive = function () {
  };

  rock.collide = function () {

  };

  rock.update = function () {
    var self = this;
    // game.world.iterate('name', 'bulletPool', Phaser.Group.RETURN_CHILD, function (child) {
    //   console.log(child);
    //
    // });

    game.physics.arcade.collide(this._sprite, game.world, function (rock, other) {
    });

    this.screenWrap();
  };

});
