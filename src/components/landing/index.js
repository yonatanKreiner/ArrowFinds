import './landing.css'

import angular from 'angular';

import landing from './landing.directive';
import features from './features';
import home from './home';

export default angular.module('arrowfind.landing', [landing, features,home])
  .name;
