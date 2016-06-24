angular.module('splitter')
 .controller('AuthController', function($scope, $auth, $state) {

   window.MY_SCOPE = $scope;

    $scope.getEmail = function() {
     return localStorage.getItem("email");
    };

    $scope.isSignedIn = function(){
      return $scope.getEmail() !== "null";
    };

   $scope.handleRegBtnClick = function(registrationForm) {
     $auth.submitRegistration(registrationForm)
       .then(function(resp) {
         localStorage.setItem("userId",resp.data.data.id);
         localStorage.setItem("email",resp.data.data.email);
         $state.go('home');
     })
     .catch(function(resp) {
       alert("error!");
     });
   };

   $scope.handleLoginBtnClick = function(loginForm) {
     $auth.submitLogin(loginForm)
       .then(function(resp) {
         localStorage.setItem("userId",resp.id);
         localStorage.setItem("email",resp.email);
        $state.go('home');
     })
     .catch(function(resp) {
       alert("error!");
     });
   };

   $scope.handleSignOutBtnClick = function() {
   //   $auth.signOut()
   //     .then(function(resp) {
         localStorage.setItem("email",null);
         $state.go('home');
      //  handle success response
      //  })
   //     .catch(function(resp) {
   //       alert("error!");
   //     });
   };
});
