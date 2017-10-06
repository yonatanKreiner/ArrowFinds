export default class LoginController {
  constructor() {
    this.name = 'World';
  }

  changeName() {
    this.name = 'angular-tips';
  }
}



// import angular from 'angular';
// import SweetAlert from 'sweetalert';


// angular.module('arrowfind', [uirouter, navbar, landing,login]).controller('loginController', ['$rootScope','$scope','$http','SweetAlert','$window',function ($rootScope,$scope,$http, SweetAlert,$window) {

//     $scope.msgLogin = false;

//     $scope.createuser = function()
//     {
//         $http.get('/api/CreateUser', {
//             params:  {user: $scope.email,password: $scope.password},
//             headers: {}
//         }
//         )
//         .then(function(response) {
//         // Request completed successfully
//             if(response.data == "true")
//             {
//                 window.swal("כל הכבוד","היוזר " + $scope.email+" נוצר בהצלחה", "success");
//                 $window.location.href = '/#!/monitor';
//             }
//             else
//             {
//                  window.swal("היי היוזר כבר קיים","אנא תבחרו יוזר אחר", "error");
//             }
            
//         }, function(x) {
//         // Request error
//         });
//     };
//     $scope.login = function()
//     {
//         $http.get('/api/Login', {
//             params:  {user: $scope.email,password: $scope.password},
//             headers: {}
//         }
//         )
//         .then(function(response) {
//         // Request completed successfully
//             if(response.data == "true")
//             {

//                 $window.location.href = '/#!/monitor';
//             }
//             else
//             {
//                   $scope.msgLogin = true;
//             }
            
//         }, function(x) {
//         // Request error
//         });
//     };

// }]);
