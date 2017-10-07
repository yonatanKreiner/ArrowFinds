import './landing.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './landing.routes';

import landing from './landing.directive';
import home from './home';
import features from './features';
import pricing from './pricing';
import about from './about';

export default angular.module('arrowfind.landing', [uirouter,landing, home, features, pricing, about]).config(routing).name;

