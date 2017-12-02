import angular from 'angular';

class UserData {
	constructor($http, $window, $localStorage) {
		this.http = $http;
		this.window = $window;
		this.localStorage = $localStorage;
		this.api = 'http://127.0.0.1:5000/';
	}

	getUserData() {
		if (this.localStorage.userdata != null) {
			return this.localStorage.userdata;
		}
		else {
			this.http.get('http://127.0.0.1:5000/api/GetUserData')
				.success(response => {
					this.localStorage.userdata = response.data;
					return this.localStorage.userdata;
				});
		}
	}

	getAffiliateData() {
		return this.http.get(this.api + 'affiliates')
		.then(response => {
			return response.data;
		}, err => {
			if (this.window.analytics) {
				this.window.analytics('event', 'exception', {
					description: err.status + ': ' + err.message,
					fatal: false
				});
			}

			return null;
		});
	}
}

export default angular.module('services.userdata', [])
	.service('userdata', UserData)
	.name;

UserData.$inject = ['$http', '$window', '$localStorage'];
