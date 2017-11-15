import template from './affiliate.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('affiliate', {
      url: '/affiliate',
      template: template,
      controller: 'AffiliateController',
      controllerAs: 'affiliate'
    });
}
