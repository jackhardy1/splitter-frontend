angular.module('splitter')
 .controller('AuthController', function($scope, $auth, $state) {

   window.MY_SCOPE = $scope;

   $scope.handleRegBtnClick = function(registrationForm) {
     $auth.submitRegistration(registrationForm)
       .then(function(resp) {
         console.log(resp.data.data.id);
         localStorage.setItem("userId",resp.data.data.id);
         console.log(resp.data.data.email);
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
         localStorage.setItem("userId",resp.data.data.id);
         $state.go('home');
     })
     .catch(function(resp) {
       alert("error!");
     });
   };

   $scope.handleSignOutBtnClick = function() {
     $auth.signOut()
     .then(function(resp) {
       localStorage.setItem("userId",null);
       $state.go('home');
     // handle success response
     })
     .catch(function(resp) {
       alert("error!");
     });
   };
 });
