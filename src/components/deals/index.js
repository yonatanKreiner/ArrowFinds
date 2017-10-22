import './deals.css'

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './deals.routes';
import DealsController from './deals.controller';

export default angular.module('arrowfind.deals', [uirouter])
  .config(routing)
  .controller('DealsController', DealsController)
  .name;
