import {createUser} from '../../api/usersApi';

export default class LoginController {
  constructor($http, $location) {
    this.msgLogin = false;
		this.urlTest = 'http://127.0.0.1:5000';
		this.http = $http;
		this.location = $location;
  }

	createUser(){
		const user = {
			email: this.email,
			password: this.password
		};

		createUser(user).then(
			result => {
			console.log(result);
			this.location.path('/monitor');
		}, err => {
			console.log(err);
		});
	}

	login(){
		this.http.get(this.urlTest + '/api/Login', {
			params: {user: this.email,password: this.password},
			headers: {}
		}).then(function(response) {
			if(response.data == "true")
			{
					this.location.path('/monitor');
			}
			else
			{
					this.msgLogin = true;
			}   
		}, err => {
			console.log(err);
		});
	}
}

LoginController.$inject = ['$http', '$location'];
