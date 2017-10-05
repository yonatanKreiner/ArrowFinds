import './landing.css';

import angular from 'angular';

import landing from './landing.directive';
import home from './home';
import features from './features';
import pricing from './pricing';
import about from './about';

export default angular.module('arrowfind.landing', [landing, home, features, pricing, about])
  .name;
