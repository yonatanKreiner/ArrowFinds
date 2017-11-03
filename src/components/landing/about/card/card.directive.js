import angular from 'angular';
import template  from './card.html';

function card() {
  return {
    restrict: 'E',
		template: template,
		replace: true,
		scope: {
			name: '@',
			role: '@',
			sentence: '@',
			motto: '@',
			followers: '@',
			following: '@',
			projects: '@',
			facebook: '@',		
			linkedin: '@',		
			github: '@'
		}
  }
}

export default angular.module('directives.card', [])
  .directive('card', card)
  .name;
