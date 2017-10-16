import {createUser} from '../../api/usersApi';

export default class LoginController {
  constructor($location, authentication) {
		this.location = $location;
		this.authentication = authentication;
    this.error = '';
  }

	signUp(credentials){
		createUser(credentials).then(
			result => {
				console.log(result);
				this.location.path('/monitor');
		}, err => {
			console.log(err);
		});
	}

	signIn(credentials){
		this.authentication.login(credentials.email, credentials.password, result => {
			if (result === true) {
				this.location.path('/monitor');
			} else {
				this.error = 'Email or password is incorrect';
			}
		});
	}
}

LoginController.$inject = ['$location', 'authentication'];
