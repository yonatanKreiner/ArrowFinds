import './pricing.css';

import angular from 'angular';

import pricing from './pricing.directive';
import price from './price';

export default angular.module('arrowfind.pricing', [pricing, price])
  .name;
