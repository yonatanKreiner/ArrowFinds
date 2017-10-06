import './index.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './index.config';
import navbar from './components/navbar';
import landing from './components/landing';
import login from './components/login';

angular.module('arrowfind', [uirouter, navbar, landing])
	.config(routing);
