export default class NavbarController {
  constructor($location, $anchorScroll, $http) {
		this.location = $location;
		this.scroll = $anchorScroll;
		this.http = $http;
		this.LoginStatus = 'Login';
		this.loggedIn = false;
  }

  gotoAnchor(id) {
		if (this.location.hash() !== id) {
			this.location.hash(id);
		} else {
			this.scroll();
		}
	}

	login() {
		if (this.loggedIn) {
			this.location.path('/');
			this.LoginStatus = 'Login';
		} else {
			this.location.hash('');
			this.location.path('/login');
		}
	}
}

NavbarController.$inject = ['$location', '$anchorScroll', '$http'];
