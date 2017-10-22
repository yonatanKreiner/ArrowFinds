import template from './monitor.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('monitor', {
			url: '/Monitor',
			template: template,
			controller: 'MonitorController',
			controllerAs: 'monitor'
		});
}
