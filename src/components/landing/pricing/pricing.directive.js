import angular from 'angular';
import template  from './pricing.html';

function pricing() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.pricing', [])
  .directive('pricing', pricing)
  .name;
