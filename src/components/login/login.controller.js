export default class LoginController {
  constructor(http,window) {
    this.msgLogin = false;
		this.urlTest = 'http://127.0.0.1:5000';
		this.$http = http;
		this.$window = window;
  }

	createuser(){
		this.$http.get(this.urlTest + '/api/CreateUser', {
				params: {user: this.email,password: this.password},
				headers: {}
		}).then(function(response) {
			// Request completed successfully
			if(response.data == "true")
			{
					// SweetAlert Msg User-Welcome
					this.$window.location.href = '/monitor';
			}
			else
			{
			// SweetAlert Error;
			}
		}, function(x) {
			alert(x);
		});
	}

	login(){
		this.$http.get(this.urlTest + '/api/Login', {
			params: {user: this.email,password: this.password},
			headers: {}
		}).then(function(response) {
			if(response.data == "true")
			{
					this.$window.location.href = '/monitor';
			}
			else
			{
					this.msgLogin = true;
			}   
		}, function(x) {
			alert(x);
		});
	}

}

LoginController.$inject = ['$http','$window'];



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
