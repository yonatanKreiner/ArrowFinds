import angular from 'angular';
import template  from './home.html'

function home() {
  return {
    restrict: 'E',
    template: template 
  }
}

export default angular.module('directives.home', [])
  .directive('home', home)
  .name;
