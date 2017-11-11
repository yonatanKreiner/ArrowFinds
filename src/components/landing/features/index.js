import './features.css';

import angular from 'angular';

import features from './features.directive';
import feature from './feature';

export default angular.module('arrowfinds.features', [features, feature])
  .name;
