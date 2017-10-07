import template from './landing.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      template: template
    });
}
