routing.$inject = ['$urlRouterProvider', '$locationProvider', '$anchorScrollProvider'];

export default function routing($urlRouterProvider, $locationProvider, $anchorScrollProvider) {
	$locationProvider.hashPrefix('');
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
	$anchorScrollProvider.disableAutoScrolling();
}
