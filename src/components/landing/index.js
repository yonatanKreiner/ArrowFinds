import './landing.css';

import angular from 'angular';

import landing from './landing.directive';
import features from './features';
import pricing from './pricing';

export default angular.module('arrowfind.landing', [landing, features, pricing])
  .name;
