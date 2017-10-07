routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('Login', {
      url: '/Login',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login'
    });
}
