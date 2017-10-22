import angular from 'angular';

class Userdata {
	constructor($http, $localStorage) {
		this.http = $http;
		this.localStorage = $localStorage;
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
}

export default angular.module('services.userdata', [])
	.service('userdata', Userdata)
	.name;

Userdata.$inject = ['$http', '$localStorage'];
