import './landing.css'

import angular from 'angular';

import landing from './landing.directive';
import features from './features';

export default angular.module('arrowfind.landing', [landing, features])
  .name;
