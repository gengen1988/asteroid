define(function (require, exports, module) {
  var game = require('game');

  var Gun = module.exports = function (body) {
    this.lastFireTime = 0;
    this.body = body;
    var pool = this.bulletPool = game.add.group(undefined, 'bulletPool');

    for (var i = 0; i < 10; ++i) {
      var bullet = game.add.sprite(0, 0, 'bullet');
      bullet.anchor.setTo(.5);
      game.physics.enable(bullet, Phaser.Physics.ARCADE);
      bullet.kill();

      pool.add(bullet);
    }
  };

  var gun = Gun.prototype;

  gun.fire = function () {
    if (this.isLoaded()) {
      this._fire();
      this.lastFireTime = game.time.now;
    }
  };

  gun._fire = function () {
    var bullet = this.bulletPool.getFirstDead();
    if (!bullet) return;

    bullet.revive();
    bullet.checkWorldBounds = true;
    bullet.outOfBoundsKill = true;
    bullet.reset(this.body.x + 16, this.body.y + 16);
    bullet.rotation = this.body.sprite.rotation;
    bullet.body.velocity.x = Math.cos(bullet.rotation) * 400;
    bullet.body.velocity.y = Math.sin(bullet.rotation) * 400;
  };

  gun.isLoaded = function () {
    return game.time.now - this.lastFireTime > 500;
  };

});
