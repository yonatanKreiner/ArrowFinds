import angular from 'angular';
import template  from './pricing.html';
import price from './price'

function pricing() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.pricing', [price])
  .directive('pricing', pricing)
  .name;
