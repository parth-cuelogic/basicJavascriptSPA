
var LoginModule = (function (UserModule, AuthenticationService) {

    var login = function (credentials) {
        let user = UserModule.login(credentials);
        if (!user) { 
            console.log('invalid credentials');
            let loginErrorElement = document.getElementById('login-invalid');
            loginErrorElement.innerHTML = '<span>Invalid Credentials</span>';
            loginErrorElement.style.marginTop = '10px';
            window.location.hash = '#login'
         }

        if (user.role !== 'teacher') {
            let button = document.getElementById('addNewStudent');
            button.style.display = 'none';
        } else {
            let button = document.getElementById('addNewStudent');
            button.style.display = 'block';
        }
        AuthenticationService.setUser(user);

        window.location.hash = '#home';
    }

    var loginMethods = {
        login: login
    }

    return loginMethods;

})(UserModule, AuthenticationService);