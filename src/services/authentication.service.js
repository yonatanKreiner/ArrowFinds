import angular from 'angular';

class Authentication {
  constructor($http, $window, $localStorage) {
		this.http = $http;
		this.window = $window;
		this.localStorage = $localStorage;
		this.api = 'http://127.0.0.1:5000/';
		this.loggedIn = false;
	}
	
	register(email, password) {
		return this.http.post(this.api + 'users', { email: email, password: password})
		.then(response => { //eslint-disable-line no-unused-vars
			return true;
		}, err => {
			if (this.window.analytics) {
				this.window.analytics('event', 'exception', {
					description: err.status + ': ' + err.message,
					fatal: false
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
					this.loggedIn = true;

					return true;
				} else {
					return false;
				}
			}, err => {
				if (this.window.analytics) {
					this.window.analytics('event', 'exception', {
						description: err.status + ': ' + err.data,
						fatal: false
					});
				}

				return false;
			});
	}

	logout() {
		delete this.localStorage.currentUser;
		this.http.defaults.headers.common.Authorization = '';
		this.loggedIn = false;
	}

	getTokenData(key) {
		const encodedToken = this.localStorage.currentUser.token;
		const decodedToken = atob(encodedToken.split('.')[1]);
		const data = JSON.parse(decodedToken);
		
		return data[key];
	}
}

export default angular.module('services.authentication', [])
  .service('authentication', Authentication)
	.name;
	
Authentication.$inject = ['$http', '$window', '$localStorage'];
