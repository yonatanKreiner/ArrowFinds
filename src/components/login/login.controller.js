// import {createUser} from '../../api/usersApi';

export default class LoginController {
  constructor($location, authentication) {
		this.location = $location;
		this.authentication = authentication;
    this.error = '';
  }

	signUp(email, password){
		// createUser(email, password).then(
		// 	result => {
		// 		console.log(result);
		// 		this.location.path('/monitor');
		// 	}, err => {
		// 		console.log(err);
		// 	}
		// );
		console.log(email + password)
	}

	signIn(email, password){
		this.authentication.login(email, password).then(
			result => {
				if (result === true) {
					this.location.path('/monitor');
				} else {
					this.error = 'Email or password is incorrect';
				}
			}, err => {
				console.log('error status: ' + err.status);
			}
		);
	}
}

LoginController.$inject = ['$location', 'authentication'];
