(function() {

  var app = angular.module('peopleController', []);

  app.controller('PeopleController',
    function($scope, $http) {
      var url = 'http://localhost:3000/bills';

      $http.get(url)
      .success(function(bills){
        $scope.bills = bills;
      })
      .error(function(data){
        console.log('server is down');
      });
    }
  );

})();
