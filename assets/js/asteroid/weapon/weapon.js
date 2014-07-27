define(function (require, exports, module) {
  var Gun = module.exports = function () {
  };

  var gun = Gun.prototype;

  gun.fire = function () {
    console.log('fire');
  };

});
