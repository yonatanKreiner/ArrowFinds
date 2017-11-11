import angular from 'angular';
import template  from './feature.html';

function feature() {
  return {
    restrict: 'E',
		template: template,
		replace: true,
		scope: {
			image: '@',
			text: '@',
    }
  }
}

export default angular.module('directives.features.feature', [])
  .directive('feature', feature)
  .name;
