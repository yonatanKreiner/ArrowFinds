import angular from 'angular';
import template  from './skillbar.html';

function skillbar($timeout) {
  return {
    restrict: 'E',
		template: template,
		// controller: 'SkillbarController',
		// controllerAs: 'skillbar',
		replace: true,
		scope: {
			title: '@',
			color: '@',
			percentage: '='
		},
		link: (scope, element, attrs) => {
			let updateWidth = (element) => {
				const skillbarPath = element[0].children[1].children[0]
				let currentWidth = skillbarPath.offsetWidth;

				window.$(skillbarPath).css.width = currentWidth + 1;

				// angular.element(skillbarPath).css({
				// 	width: currentWidth++
				// });
			}

			$timeout(() => {
				let percentage = 50;

				for (let loadingPercentage = 0; loadingPercentage <= percentage; loadingPercentage++) {
					setInterval(updateWidth(element), 100);
				}
			});
		}
  }
}

export default angular.module('directives.affiliate.skillbar', [])
  .directive('skillbar', ['$timeout', skillbar])
  .name;
