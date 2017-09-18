var ChangeDetection = (function () {
    var applyChange = function (user) {
        var changeDetectionElements = document.querySelectorAll('[change-detect]');
        let i;
        for (i = 0; i < changeDetectionElements.length; i++) {
            let path = changeDetectionElements[i].getAttribute('change-detect');
            path = path.split('.');
            let lastKeyFragment = path.pop();
            changeDetectionElements[i].addEventListener('keyup', OnInputChange);
            if (changeDetectionElements[i].nodeName == "INPUT" || changeDetectionElements[i].nodeName == "SELECT") {
                changeDetectionElements[i].value = user[lastKeyFragment];
            } else {
                changeDetectionElements[i].innerHTML = user[lastKeyFragment];
            }

        }
    }

    var displayUsersGrid = function (assignedUsers, role) {
        let i;
        let assignedUserHtml = `
        <tr>
        <th>Id</th>
        <th>UserName</th>
        <th>Email</th>
        `;
        if (role == "teacher") {
            assignedUserHtml += `
            <th ng-if="vm.logedInUser.role=='teacher'">Actions</th>
            </tr>
            `
        } else {
            assignedUserHtml += '</tr>'
        }

        for (i = 0; i < assignedUsers.length; i++) {
            assignedUserHtml += `
            <tr>
            <td>${assignedUsers[i].id}</td>
            <td>${assignedUsers[i].username}</td>
            <td>${assignedUsers[i].email}</td>
            `;
            if (role == "teacher") {
                assignedUserHtml += `
                <td>
                    <button type="button" class="btn btn-outline-danger" onclick="deleteAssignedStudent(${assignedUsers[i].id})"><i class="fa fa-trash"></i></button>
                </td>
                </tr>
                `
            } else {
                assignedUserHtml += '</tr>';
            }
        }
        let displayUsers = document.getElementById('displayUsers');
        if (displayUsers) {
            displayUsers.innerHTML = assignedUserHtml;
        }

    }

    let changeDetectionMethods = {
        applyChange: applyChange,
        displayUsersGrid: displayUsersGrid
    }

    return changeDetectionMethods;
})();