define(function (require, exports, module) {

  var Map = module.exports = function (context) {
    this.rows = context.ROWS;
    this.cols = context.COLS;
  };

  var map = Map.prototype;

  map.initMap = function () {
    var ROWS = this.rows;
    var COLS = this.cols;
    var map = this._map = [];

    for (var y = 0; y < ROWS; ++y) {
      var newRow = [];
      for (var x = 0; x < COLS; ++x) {
        if (Math.random() > 0.8) {
          newRow.push('#');
        } else {
          newRow.push('.');
        }
      }
      map.push(newRow);
    }
  }

});
