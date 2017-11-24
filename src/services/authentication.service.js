import angular from 'angular';

class Authentication {
  constructor($http, $window, $localStorage) {
		this.http = $http;
		this.window = $window;
		this.localStorage = $localStorage;
		this.api = 'http://127.0.0.1:5000/api/'
	}
	
	register(email, password) {
		return this.http.post(this.api + 'users', { email: email, password: password})
		.then(response => {
			return true;
		}, err => {
			if (this.window.ga) {
				this.window.ga('send', 'exception', {
					exDescription: err.status + ': ' + err.message,
					exFatal: false
				});
			}

			return false;
		});
	}

  login(email, password) {
		return this.http.post(this.api + 'auth', { email: email, password: password})
			.then(response => {
				if (response.data) {
					this.localStorage.currentUser = { email: email, token: response.data };
					this.http.defaults.headers.common.Authorization = 'Bearer ' + response.data;
					return true;
				} else {
					return false;
				}
			}, err => {
				if (this.window.ga) {
					this.window.ga('send', 'exception', {
						exDescription: err.status + ': ' + err.data,
						exFatal: false
					});
				}

				return false;
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
	
Authentication.$inject = ['$http', '$window', '$localStorage'];
