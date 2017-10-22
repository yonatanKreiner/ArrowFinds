export default class MonitorController {
	constructor($location, userdata) {
		this.location = $location;
		this.error = '';
		this.userdata = userdata;
	}

	GetUserData() {
		this.user = this.userdata.GetUserData();
	}

}

MonitorController.$inject = ['$location', 'userdata'];
