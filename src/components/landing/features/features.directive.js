import angular from 'angular';
import template  from './features.html';

function features() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.features', [])
  .directive('features', features)
  .name;
