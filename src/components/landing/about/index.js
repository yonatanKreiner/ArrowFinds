import './about.css';

import angular from 'angular';

import about from './about.directive';
import card from './card';

export default angular.module('arrowfind.about', [about, card])
  .name;
