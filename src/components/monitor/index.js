import './monitor.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './monitor.routes';
import MonitorController from './monitor.controller';

export default angular.module('arrowfinds.monitor', [uirouter])
	.config(routing)
	.controller('MonitorController', MonitorController)
	.name;
