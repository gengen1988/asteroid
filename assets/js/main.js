define(['app'], function (app) {

  $('#app-titlebar')
    .mouseenter(function () {
      $(this).animate({
        opacity: .9
      }, {
        duration: 200,
        queue: false
      });
    })
    .mouseleave(function () {
      $(this).animate({
        opacity: 0
      }, {
        duration: 200,
        queue: false
      });
    });

  $('.shutdown').click(function () {
    window.close();
  });

  $('.debug').click(function () {
    var win = require('nw.gui').Window.get();
    win.showDevTools();
  });

  $('.reload').click(function () {
    var win = require('nw.gui').Window.get();
    win.reloadIgnoringCache();
  });

  $('.fullscreen').click(function () {
    var win = require('nw.gui').Window.get();
    win.toggleFullscreen();
  });

  $(window).resize(function (event) {
    var height = $(window).height();
    var width = $(window).width();
    app.onResize(width, height);
  });

  app.start();

});
