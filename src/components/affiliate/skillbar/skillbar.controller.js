export default class SkillbarController {
	constructor() {
		this.$ = window.$;
	}

	loadProgressBar(id) {
		const element = this.$('#' + id)[0];
		const percentage = element.attributes['percentage'];
		let loadingPercentage = 0;

		if (loadingPercentage++ < percentage) {
			setTimeout((element, loadingPercentage) => {
				element.css('width', loadingPercentage + '%');
			}, 10);
		}
	}
}

SkillbarController.$inject = [];
