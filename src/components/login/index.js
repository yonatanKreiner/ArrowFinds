import './login.css'

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './login.routes';
import LoginController from './login.controller';

export default angular.module('app.login', [uirouter])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;
