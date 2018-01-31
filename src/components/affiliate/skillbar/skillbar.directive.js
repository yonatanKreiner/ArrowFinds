import angular from 'angular';
import template  from './skillbar.html';

function skillbar() {
  return {
    restrict: 'E',
		template: template,
		controller: 'SkillbarController',
		controllerAs: 'skillbar',
		replace: true,
		scope: {
			title: '@',
			color: '@',
			id: '@',
			percentage: '@'
    }
  }
}

export default angular.module('directives.affiliate.skillbar', [])
  .directive('skillbar', skillbar)
  .name;
