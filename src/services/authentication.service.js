import angular from 'angular';

class Authentication {
  constructor($http, $localStorage) {
		this.http = $http;
		this.localStorage = $localStorage;
  }

  login(email, password, callback) {
    this.http.post('http://127.0.0.1:5000/api/Login', { email: email, password: password})
			.success(response => {
				if (response.token) {
					this.localStorage.currentUser = { email: email, token: response.token };
					this.http.defaults.headers.common.Authorization = 'Bearer ' + response.token;
					callback(true);
				} else {
					callback(false);
				}
			});
	}

	logout() {
		delete this.localStorage.currentUser;
		this.http.defaults.headers.common.Authorization = '';
	}
}

export default angular.module('services.authentication', [])
  .service('authentication', Authentication)
	.name;
	
Authentication.$inject = ['$http', '$localStorage'];
