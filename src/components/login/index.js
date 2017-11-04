import './login.css'

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './login.routes';
import LoginController from './login.controller';
import authentication from '../../services/authentication.service';

export default angular.module('arrowfinds.login', [uirouter, authentication])
  .config(routing)
  .controller('LoginController', LoginController)
  .name;
