import './login.css';

import angular from 'angular';

import loginController from './login.controller';

angular.module('arrowfind', [])
    .controller('loginController', loginController);
