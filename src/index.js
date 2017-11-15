import './index.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import ngstorage from 'ngstorage';

import routing from './index.config';
import run from './index.run';

import navbar from './components/navbar';
import landing from './components/landing';
import login from './components/login';
import monitor from './components/monitor';
import affiliate from './components/affiliate';
import deals from './components/deals';


angular.module('arrowfinds', [uirouter, ngstorage.name, navbar, landing, login, monitor, affiliate, deals])
	.config(routing)
	.run(run);
