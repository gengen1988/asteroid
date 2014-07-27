define(function (require) {
  return {
    create: function (game) {
      console.log('create!');
      console.log(game);
      game.state.start('splash');
    }
  };
});
