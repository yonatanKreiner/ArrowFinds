import './affiliate.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './affiliate.routes';
import AffiliateController from './affiliate.controller';
import authentication from '../../services/authentication.service';
import userdata from '../../services/userdata.service';

export default angular.module('arrowfinds.affiliate', [uirouter, authentication, userdata])
  .config(routing)
  .controller('AffiliateController', AffiliateController)
  .name;
