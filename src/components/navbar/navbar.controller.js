export default class NavbarController {
  constructor($location, $anchorScroll) {
		this.location = $location;
		this.scroll = $anchorScroll;
  }

  gotoAnchor(id) {
		if (this.location.hash() !== id) {
			this.location.hash(id);
		} else {
			this.scroll();
		}
	}
}

NavbarController.$inject = ['$location', '$anchorScroll'];
