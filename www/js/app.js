angular.module('splitter', ['ionic', 'ngCordova', 'ng-token-auth'])

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

.config(function($stateProvider, $urlRouterProvider, $authProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'AuthController as ctrl'
  })
  .state('bills-index', {
    url: '/bills/index',
    templateUrl: 'templates/bills/index.html',
    controller: 'BillController as ctrl'
  })
  .state('bills-new', {
    url: '/bills/new',
    templateUrl: 'templates/bills/new.html',
    controller: 'BillController as ctrl'
  })
  .state('bills-show', {
    url: '/bills/:id',
    templateUrl: 'templates/bills/show.html',
    controller: 'ItemController as ctrl'
  })
  .state('bills-update', {
    url: '/bills/update',
    templateUrl: 'templates/bills/update.html',
    controller: 'BillController as ctrl'
  })
  .state('users-new', {
      url: '/users/new',
      templateUrl: 'templates/users/new.html',
    controller: 'AuthController as ctrl'
  })
  .state('users-log_in', {
      url: '/users/log_in',
      templateUrl: 'templates/users/login.html',
    controller: 'AuthController as ctrl'
  })
    .state('items-update', {
        url: '/bills/:bill_id/items/:id/update',
        templateUrl: 'templates/items/update.html',
      controller: 'ItemController as ctrl'
  });

  $urlRouterProvider.otherwise('/');

  $authProvider.configure({
    apiUrl: 'http://localhost:3000'
  });
});
