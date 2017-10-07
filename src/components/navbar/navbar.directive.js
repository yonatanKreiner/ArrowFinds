import angular from 'angular';
import template  from './navbar.html';

function navbar() {
  return {
    restrict: 'E',
		template: template,
		controller: 'NavbarController',
		controllerAs: 'navbar'
  }
}

export default angular.module('directives.navbar', [])
  .directive('navbar', navbar)
  .name;
