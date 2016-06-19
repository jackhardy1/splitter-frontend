angular.module('splitter', ['ionic', 'ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
  })
    .state('bills-show', {
      url: '/bills/show',
      templateUrl: 'templates/bills/show.html',
      controller: 'BillController as ctrl'
  })
  .state('bills-new', {
    url: '/bills/new',
    templateUrl: 'templates/bills/new.html',
    controller: 'BillController as ctrl'
});
  $urlRouterProvider.otherwise('/');
});
