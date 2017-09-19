var UserModule = (function (ChangeDetection) {

    var Users = [];

    var User = (function () {
        var id = 1;

        return function User(username, password, email, role, assigned) {
            this.id = id++;
            this.username = username;
            this.password = password;
            this.email = email;
            this.role = role;
            this.assigned = assigned;
        }

    })();

    var getAssignedUsers = function (assigned, role) {
        if (!assigned || !role) return undefined;
        let defaultRole = role;
        if (role == "student") role = "teacher";
        else role = "student";

        let assignedUsers = Users.filter((item) => {
            if (assigned.includes(item.id) && item.role == role) return item;
        });


        ChangeDetection.displayUsersGrid(assignedUsers, defaultRole);

        let unassignedUsers = Users.filter((item) => {
            if (!assigned || !assigned.includes(item.id) && item.role === 'student') return item;
        })

        let selectDropdown = '<option value="">Select </option>';
        for (var i = 0; i < unassignedUsers.length; i++) {
            selectDropdown += `<option value=${unassignedUsers[i].id}>${unassignedUsers[i].username}</option>`
        }

        document.getElementById('list-of-student').innerHTML = selectDropdown;

        return assignedUsers;
    }

    var deleteAssignedStudent = function (teacherId, studentId) {
        let teacherIndex = Users.findIndex((item) => {
            if (item.id == teacherId) return item;
        })
        Users[teacherIndex].assigned.splice(Users[teacherIndex].assigned.indexOf(studentId), 1);
        getAssignedUsers(Users[teacherIndex].assigned, 'teacher');
    }

    var get = function (x) {
        return Users;
    }

    var login = function (user) {
        if (!user) return undefined;

        return Users.find((item) => {
            if (item.username === user.username && item.password === user.password) return item;
        })
    }

    var updateUser = function (user) {

        let indexofUser = Users.findIndex((item) => {
            if (item.id == user.id) return item;
        })

        Users.splice(indexofUser, 1);
        Users.push(user);
        return user;
    }

    var register = function (user) {
        // if (!user) return false;
        // Users.push(user);
        // return true;
        if (!user) return false;
        let sameUser = Users.findIndex((item) => {
            if (item.username == user.username) return item;
        })
        if (sameUser < 0) {
            if (user.id == undefined) {
                let max = 0;
                Users.forEach((item) => {
                    if (item.id > max) {
                        max = item.id;
                    }
                    user.id = max + 1;
                })
            }
            Users.push(user);
            return true;
        } else {
            return false;
        }
    }

    var UserMethods = {
        User: User,
        getAssignedUsers: getAssignedUsers,
        deleteAssignedStudent: deleteAssignedStudent,
        get: get,
        register: register,
        updateUser: updateUser,
        login: login
    }

    return UserMethods;

})(ChangeDetection);