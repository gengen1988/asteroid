define(function (require, exports, module) {
  var Shuttle = require('./shuttle');
  var Rock = require('./rock');

  return {

    preload: function (game) {
      game.load.spritesheet('ship', 'img/ship.png', 32, 32);
      game.load.image('bullet', 'img/bullet.png');
      game.load.audio('se', 'audio/se_maoudamashii_retro25.ogg');
      game.load.image('block', 'img/block.png');
    },

    create: function (game) {
      game.time.advancedTiming = true;
      this.fpsText = this.game.add.text(32, 32, '', {
        font: '16px Arial',
        fill: '#ffffff'
      });

      this.shuttle = new Shuttle(game.world.centerX, game.world.centerY);
      this.rock = new Rock(game.world.centerX, game.world.centerY);
    },

    update: function () {
      this.fpsText.setText(this.game.time.fps + ' FPS');
    }

  };
});
