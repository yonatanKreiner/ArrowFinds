import './navbar.css';

import angular from 'angular';

import NavbarController from './navbar.controller';
import navbar from './navbar.directive';
import authentication from '../../services/authentication.service';

export default angular.module('arrowfinds.navbar', [navbar, authentication])
	.controller('NavbarController', NavbarController)
  .name;
