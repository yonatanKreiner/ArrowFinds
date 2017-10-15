import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers(){
	return get('users');
}

export function deleteUser(id) {
	return del(`users/${id}`);
}

export function createUser(user) {
	return create('users', user);
}

function del(url) {
	const request = new Request(baseUrl + url, {
		method: 'DELETE'
	})

	return fetch(request).then(onSuccess, onError);
}

function get(url) {
	return fetch(baseUrl + url).then(onSuccess, onError);
}

function create(url, user) {
	const request = new Request(baseUrl + url, {
		method: 'POST',
		body: user
	});

	return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
	return response.json();
}

function onError(error) {
	console.log(error); //eslint-disable-line no-console
}
