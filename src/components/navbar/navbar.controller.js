export default class NavbarController {
  constructor($location, $anchorScroll, http, window) {
		this.location = $location;
		this.scroll = $anchorScroll;
		this.$http = http;
		this.$window = window;
  }

  gotoAnchor(id) {
		if (this.location.hash() !== id) {
			this.location.hash(id);
		} else {
			this.scroll();
		}
	}

	// Function That only uses in the navbar of user login
	logout()
	{
			this.$http.get('/api/logout', {
			headers: {}
			}
			)
			.then(function(response) {
				this.$window.location.href = "/login"
			}, function(x) {
				alert(x);
			});
	}

}



NavbarController.$inject = ['$location', '$anchorScroll','$http','$window'];
