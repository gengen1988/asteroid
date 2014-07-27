define(function (require, exports, module) {
  var Screen = module.exports = function (context) {
  };

  var screen = Screen.prototype;

  screen.drawMap = function (map) {
    var ROWS = map.rows;
    var COLS = map.cols;
    var screen = this.screen = [];

    for (var y = 0; y < ROWS; ++y) {
      for (var x = 0; x < COLS; ++x) {
        screen[y][x].content = map[y][x]
      }
    }
  };

});
