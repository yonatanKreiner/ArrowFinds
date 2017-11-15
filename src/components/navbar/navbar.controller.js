import $ from 'jquery';
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
			// this.location.hash(id);
			$('html, body').stop().animate({
				scrollTop: $('#' + id).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		} else {
			// this.scroll();
			$('html, body').stop().animate({
					scrollTop: $('#' + id).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		}
		// $(document).ready(function() {
		// 	let $anchor = $(this);

		// 	if($($anchor.attr('href')).offset().top != null) {
		// 		$('html, body').stop().animate({
		// 				scrollTop: $($anchor.attr('href')).offset().top
		// 		}, 1500, 'easeInOutExpo');
		// 		event.preventDefault();
		// 	}
		// })
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
