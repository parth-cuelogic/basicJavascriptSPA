
var RegisterModule = (function (UserModule, AuthenticationService) {

    var register = function (newUser) {

        let user = UserModule.register(newUser);

        if (!user) { console.log('unable to create user'); return; }

        window.location.hash = '#';
    }

    var registerMethods = {
        register: register
    }

    return registerMethods;

})(UserModule, AuthenticationService);