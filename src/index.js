import './index.css'

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './index.config';
import navbar from './components/navbar';

angular.module('arrowfind', [uirouter, navbar])
	.config(routing);
