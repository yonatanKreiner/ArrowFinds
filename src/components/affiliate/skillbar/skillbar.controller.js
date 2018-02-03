export default class SkillbarController {
	constructor() {
		this.$ = window.$;
		this.width = 0;
	}

	loadBar() {
		this.width++;
	}

	loadProgressBar(id, percentage) {
		this.width
		let self = this;

		for (let loadingPercentage = 0; loadingPercentage <= percentage; loadingPercentage++) {
			setInterval(self.loadBar(), 100);
		}	
	}
}

SkillbarController.$inject = [];
