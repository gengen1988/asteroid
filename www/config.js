requirejs.config({
  baseUrl: '.',
  paths: {
    jquery: '/bower_components/jquery/dist/jquery',
    angular: '/bower_components/angular/angular',
    ngRoute: '/bower_components/angular-route/angular-route'
  },
  shim: {
    angular: {exports: 'angular', deps: ['jquery']},
    ngRoute: ['angular']
  },
  deps: ['js/main']
});