export default class NavbarController {
	constructor($location) {
		this.location = $location;
		this.$ = window.$;
		this.LoginStatus = 'Login';
		this.loggedIn = false;
	}

	gotoAnchor(id) {
		this.$('html, body').animate({
			scrollTop: this.$('#' + id).offset().top
		}, 1000);
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

NavbarController.$inject = ['$location'];
