var ProfileModule = (function (UserModule, AuthenticationService) {

    var updateUser = function (user) {
        var authUser = AuthenticationService.getUser();
        authUser.username = user.username;
        authUser.email = user.email;
        authUser.role = user.role;
        UserModule.updateUser(authUser);
        AuthenticationService.setUser(authUser);
        console.log('user updated');
    }

    var profileMethods = {
        updateUser: updateUser
    }

    return profileMethods;

})(UserModule, AuthenticationService)