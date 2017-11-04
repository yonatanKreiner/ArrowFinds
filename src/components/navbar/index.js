import './navbar.css';

import angular from 'angular';

import NavbarController from './navbar.controller';
import navbar from './navbar.directive';

export default angular.module('arrowfinds.navbar', [navbar])
	.controller('NavbarController', NavbarController)
  .name;
