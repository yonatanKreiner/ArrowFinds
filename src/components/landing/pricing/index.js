import './pricing.css';

import angular from 'angular';

import pricing from './pricing.directive';
import price from './price';

export default angular.module('arrowfinds.pricing', [pricing, price])
  .name;
