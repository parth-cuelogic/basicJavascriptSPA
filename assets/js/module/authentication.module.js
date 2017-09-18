var AuthenticationService = (function (ChangeDetection, UserModule) {
    var User = undefined;

    var getUser = function () {
        return User;
    }

    var setUser = function (user) {
        User = user;
        ChangeDetection.applyChange(user);
        UserModule.getAssignedUsers(user.assigned, user.role);
    }

    var checkAuthentication = function () {
        if (!User) window.location.hash = '#';
    }

    var authenticationMethods = {
        getUser: getUser,
        setUser: setUser,
        checkAuthentication: checkAuthentication
    }

    return authenticationMethods;

})(ChangeDetection, UserModule);

//AuthenticationService.checkAuthentication();
window.location.hash = '#';