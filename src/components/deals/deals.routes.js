import template from './deals.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('deals', {
      url: '/deals',
      template: template,
      controller: 'DealsController',
      controllerAs: 'deals'
    });
}
