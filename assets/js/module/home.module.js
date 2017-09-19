var HomeModule = (function (UserModule, AuthenticationService) {

    var deleteAssignedStudent = function (studentId) {
        let loggedInUser = AuthenticationService.getUser();
        UserModule.deleteAssignedStudent(loggedInUser.id, studentId);
    }

    var addStudent = function (studentId) {
        let loggedInUser = AuthenticationService.getUser();
        if (!loggedInUser.assigned) loggedInUser.assigned = [];
        loggedInUser.assigned.push(studentId);
        UserModule.updateUser(loggedInUser);
        AuthenticationService.setUser(loggedInUser);
    }

    let homeMethods = {
        deleteAssignedStudent: deleteAssignedStudent,
        addStudent: addStudent
    }

    return homeMethods;

})(UserModule, AuthenticationService);