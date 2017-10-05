import './landing.css';

import angular from 'angular';

import landing from './landing.directive';
import features from './features';
<<<<<<< HEAD
import home from './home';

export default angular.module('arrowfind.landing', [landing, features,home])
=======
import pricing from './pricing';

export default angular.module('arrowfind.landing', [landing, features, pricing])
>>>>>>> 741255970fafeaf24506bd93d04be33c75d14c51
  .name;
