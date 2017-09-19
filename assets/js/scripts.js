
//global variables
var switchpages = function (url) {
    switch (url) {
        case "#register":
            if (document.getElementById('registration')) {
                document.getElementById('registration').reset();
                document.getElementById('c_password').style.borderColor = '';
                document.getElementById('c_password').style.borderWidth = '';
                document.getElementById('c_password').title = '';
                document.getElementById("registerBtn").disabled = false;
                document.getElementById('invalid-c_password').innerHTML = '';
                document.getElementById('register-fail').innerHTML = '';
                document.getElementById('register-fail').style.marginTop = ''
            }
            return url;
        case "#profile":
            ChangeDetection.applyChange(AuthenticationService.getUser());
            return url;
        case "#home":
            ChangeDetection.applyChange(AuthenticationService.getUser());
            return url;
        default:
            if (document.getElementById('loginForm')) {
                document.getElementById('loginForm').reset();
                let loginErrorElement = document.getElementById('login-invalid');
                loginErrorElement.innerHTML = '';
                loginErrorElement.style.marginTop = '';
            }
            return "#login";
    }
}

var render = function (urlString) {
    var url = urlString.split('/')[0];
    // Hide whatever page is currently shown.
    var allPages = document.querySelectorAll('.page');
    if (allPages.length > 0) {
        for (var i = 0; i < allPages.length; i++) {
            if (allPages[i] && allPages[i].style) {
                allPages[i].style.display = "none"
            }
        }
    }

    var hashValue = switchpages(url);
    window.location.hash = hashValue;
    hashvalue = hashValue.replace('#', '');

    //programaticaly displaying the current page->div
    var selectedElement = document.querySelector('.main-content .' + hashvalue + '.page');
    if (selectedElement) {
        selectedElement.style.display = "block"
    }
}

var OnInputChange = function (event) {
    // console.log(event);
}

var loginFormSubmit = function (e) {
    e.preventDefault();
    let credentials = {
        username: document.getElementById('l_username').value,
        password: document.getElementById('l_password').value
    }
    LoginModule.login(credentials);
}

var registerFormSubmit = function (e) {
    e.preventDefault();
    let user = {
        username: document.getElementById('r_username').value,
        password: document.getElementById('r_password').value,
        c_password: document.getElementById('c_password').value,
        email: document.getElementById('r_email').value,
        role: document.getElementById('r_role').value
    }

    let isRegistered = RegisterModule.register(user);
    let registrationFailElement = document.getElementById('register-fail');
    if (!isRegistered) {
        registrationFailElement.innerHTML = '<span>This username already exist.</span>'
        registrationFailElement.style.marginTop = '10px';
    } else {
        document.getElementById('register-fail').innerHTML = '';
    }
}


var passwordHandler = function (id) {
    let c_password = document.getElementById('c_password').value;
    let password = document.getElementById('r_password').value;
    if (!c_password || !password) return;
    if (c_password != password) {
        document.getElementById('c_password').style.borderColor = 'pink';
        document.getElementById('c_password').style.borderWidth = '2px';
        document.getElementById('c_password').title = 'password should match';
        document.getElementById("registerBtn").disabled = true;
        document.getElementById("registerBtn").title = 'form is invalid';
        document.getElementById('invalid-c_password').innerHTML = '<span style="color: red">!Password does not match the confirm password</span>'
    } else {
        document.getElementById('c_password').style.borderColor = '';
        document.getElementById('c_password').style.borderWidth = '';
        document.getElementById('c_password').title = '';
        document.getElementById("registerBtn").disabled = false;
        document.getElementById('invalid-c_password').innerHTML = '';
    }
}

var deleteAssignedStudent = function (studentId) {
    HomeModule.deleteAssignedStudent(studentId);
}

var updateProfile = function (e) {
    e.preventDefault();
    let changedUser = {
        username: document.getElementById("p_username").value,
        email: document.getElementById('p_email').value,
        role: document.getElementById('p_role').value
    }
    ProfileModule.updateUser(changedUser);
}

var includeHTML = function (i) {
    var z, i = i, elmnt, file, xhttp;
    z = document.querySelectorAll('[include-html]');
    if (i == z.length) return;
    for (i = i; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    elmnt.removeAttribute("include-html");
                }
                i = i + 1;
                includeHTML(i)
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};

var addStudent = function () {
    let id = +document.getElementById('list-of-student').value;
    if (id) {
        HomeModule.addStudent(id)
        $('#add-new-student-modal').modal('hide');
    }
}

includeHTML(0);

var logout = function () {
    window.location.hash = '#'
}

window.addEventListener("hashchange", function () {
    render(decodeURI(window.location.hash));
});

window.dispatchEvent(new HashChangeEvent("hashchange"))


