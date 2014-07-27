define(function (require, exports, module) {
  var Gun = require('./weapon/gun');
  var Engine = require('./engine');
  var Base = require('./base');
  var Pilot = require('./pilot');
  var Controller = require('./controller');
  var game = require('game');

  var Shuttle = module.exports = function (x, y) {
    Base.apply(this, arguments);

    this.setSprite(x, y, 'ship');
    this.assemble();
  };

  var shuttle = Shuttle.prototype = new Base();

  shuttle.assemble = function () {
    this.gun = new Gun(this.getBody());
    this.engine = new Engine(this.getBody());
    this.controller = new Controller(this);
    this.pilot = new Pilot(this.controller);
  };

  shuttle.update = function () {
    this.pilot.control();
    this.screenWrap();
  };

});
