run.$inject = ['$rootScope', '$http', '$location', '$localStorage'];

export default function run($rootScope, $http, $location, $localStorage) {
	if ($localStorage.currentUser) {
		$http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
	}

	$rootScope.$on('$locationChangeStart', (event, next, current) => { //eslint-disable-line no-unused-vars
		const publicPages = ['/', '/Features', '/Pricing', '/About', '/Login'];
		let restrictedPage = publicPages.indexOf($location.path()) === -1;

		if (restrictedPage && !$localStorage.currentUser) {
			$location.path('/Login');
		}
	});
}
