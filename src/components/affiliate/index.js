import './affiliate.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './affiliate.routes';
import AffiliateController from './affiliate.controller';

export default angular.module('arrowfinds.affiliate', [uirouter])
  .config(routing)
  .controller('AffiliateController', AffiliateController)
  .name;
