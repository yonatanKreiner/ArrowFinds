import angular from 'angular';
import template  from './price.html';

function price() {
  return {
    restrict: 'E',
		template: template,
		replace: true,
		scope: {
			title: '@',
			cost: '=',
			months: '=',
			products: '='
    }
  }
}

export default angular.module('directives.pricing.price', [])
  .directive('price', price)
  .name;
