import angular from 'angular';
import template  from './about.html';

function about() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.about', [])
  .directive('about', about)
  .name;
