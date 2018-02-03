import './skillbar.css';

import angular from 'angular';

import skillbar from './skillbar.directive';
// import SkillbarController from './skillbar.controller';

export default angular.module('arrowfinds.affiliate.skillbar', [skillbar])
	// .controller('SkillbarController', SkillbarController)
  .name;
