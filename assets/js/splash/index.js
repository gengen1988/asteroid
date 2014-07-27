define(function (require) {
  return {
    preload: function (game) {
      game.load.image('bullet', 'img/bullet.png');
      game.load.image('white-screen', 'img/white.png');
      game.load.audio('404error', 'bgm/404error.ogg');

      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      game.scale.refresh();
    },

    create: function (game) {
      var music = game.add.audio('404error');
      music.play();

      var logo = game.add.group();

      var bullet = logo.create(game.world.centerX, game.world.centerY - 10, 'bullet');
      bullet.anchor.setTo(.5);

      var text = game.add.text(game.world.centerX, game.world.centerY + 10, 'xturn', {
        font: '20px Arial',
        fill: '#fff'
      });
      text.anchor.setTo(.5);
      logo.add(text);

      logo.alpha = 0;

      game.add.tween(logo).to({
        alpha: 1
      }, 250, undefined, undefined, 250).start().onComplete.add(function (sprite) {
        this.onLogoShown(game, sprite);
      }.bind(this));
    },

    onLogoShown: function (game, logo) {
      //var screen = game.add.sprite(0, 0, 'white-screen');
      //screen.alpha = 0;

      game.add.tween(logo).to({
        alpha: 0
      }, 1000, undefined, undefined, 2000).start().onComplete.add(function () {
        game.state.start('asteroid');
      });
    },

    render: function (game) {
      //game.debug.inputInfo(32, 32);
    }
  }
});
