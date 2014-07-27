define(function (require, exports, module) {
  var game = require('game');

  var Engine = module.exports = function (body) {
    var body = this.body = body;

    //var emitter = this.emitter = game.add.emitter(body.x, body.y, 100);
    //emitter.makeParticles();

    body.maxVelocity.setTo(100);
  };

  var engine = Engine.prototype;

  engine.turnLeft = function () {
    this.body.angularVelocity = -100;
  };

  engine.turnRight = function () {
    this.body.angularVelocity = 100;
  };

  engine.stabilize = function () {
    this.body.angularVelocity = 0;
  };

  engine.throttleUp = function () {
    this.body.acceleration.setTo(
      Math.cos(this.body.sprite.rotation) * 100,
      Math.sin(this.body.sprite.rotation) * 100
    );

    this.body.sprite.frame = 1;
  };

  engine.halt = function () {
    this.body.acceleration.setTo(0);

    this.body.sprite.frame = 0;
  };

});
