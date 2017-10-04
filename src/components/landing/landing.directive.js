import angular from 'angular';
import template  from './landing.html'

function landing() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.landing', [])
  .directive('landing', landing)
  .name;
