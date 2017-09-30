import './index.css'

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './index.config';

angular.module('arrowfind', [uirouter])
	.config(routing);
