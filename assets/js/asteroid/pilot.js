define(function (require, exports, module) {
  var game = require('game');

  var Pilot = module.exports = function (controller) {
    this.controller = controller;
  }

  var pilot = Pilot.prototype;

  pilot.control = function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.controller.turnLeft();

    } else if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      this.controller.turnRight();

    } else {
      this.controller.stabilize();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      this.controller.forward();
    } else {
      this.controller.halt();
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.controller.fire();
    }
  };
});
