export default class DealsController {
  constructor(http,window) {
		this.urlTest = 'http://127.0.0.1:5000';
		this.$http = http;
		this.$window = window;


		this.$http.get('/api/checkifuserlogged', {
        headers: {}
    }
    )
    .then(function(response) {
			if(response.data == "false")
			{
				this.$window.location.href = "/Login"
			}
    }, function(x) {
			alert(x);
    });
  }
}

DealsController.$inject = ['$http','$window'];

