import template from './login.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/Login',
      template: template,
      controller: 'LoginController',
      controllerAs: 'login'
    });
}
