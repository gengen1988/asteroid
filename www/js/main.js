define(['jquery', 'angular'], function ($, angular) {
  console.log($(document).html('helloworld'));
  angular.forEach([1, 2], function () {
    console.log(arguments);
  });
});