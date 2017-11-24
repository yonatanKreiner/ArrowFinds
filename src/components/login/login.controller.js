// import {createUser} from '../../api/usersApi';

export default class LoginController {
  constructor($location, authentication) {
		this.location = $location;
		this.authentication = authentication;
    this.error = '';
  }

	signUp(email, password){
		this.authentication.register(email, password).then(
			result => {
				if (result) {
					this.window.ga('send', 'event', 'Users', 'register');
					this.error = 'An email was sent to your address';
				} else {
					this.error = 'Could not create user. Please try again';
				}
			}
		);
	}

	signIn(email, password){
		this.authentication.login(email, password).then(
			result => {
				if (result) {
					this.location.path('/monitor');
				} else {
					this.error = 'Email or password is incorrect';
				}
			}
		);
	}
}

LoginController.$inject = ['$location', 'authentication'];
