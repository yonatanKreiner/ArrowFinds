routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('/', {
      url: '/',
      template: require('./landing.html')
    });
}
