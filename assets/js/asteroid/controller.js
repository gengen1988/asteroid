define(function (require, exports, module) {

  var Controller = module.exports = function (vessel) {
    this.vessel = vessel;
  }

  var controller = Controller.prototype;

  controller.fire = function () {
    this.vessel.gun.fire();
  };

  controller.turnLeft = function () {
    this.vessel.engine.turnLeft();
  };

  controller.turnRight = function () {
    this.vessel.engine.turnRight();
  };

  controller.forward = function () {
    this.vessel.engine.throttleUp();
  };

  controller.stabilize = function () {
    this.vessel.engine.stabilize();
  };

  controller.halt = function () {
    this.vessel.engine.halt();
  };

});
