import template from './monitor.html';

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
	$stateProvider
		.state('monitor', {
			url: '/monitor',
			template: template,
			controller: 'MonitorController',
			controllerAs: 'monitor'
		});
}
