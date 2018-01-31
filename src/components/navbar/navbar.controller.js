export default class NavbarController {
	constructor($location, authentication) {
		this.location = $location;
		this.authentication = authentication;
		this.$ = window.$;
	}

	gotoAnchor(id) {
		if (this.$('#' + id).offset() !== undefined){
			this.$('html, body').animate({
				scrollTop: this.$('#' + id).offset().top
			}, 1000);
		}
	}

	login() {
		if (this.authentication.loggedIn) {
			this.authentication.logout();
			this.location.path('/');
		} else {
			this.location.hash('');
			this.location.path('/login');
		}
	}
}

NavbarController.$inject = ['$location', 'authentication'];
