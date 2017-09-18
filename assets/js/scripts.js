
//global variables
var switchpages = function (url) {
    switch (url) {
        case "#register":
            return url;
        case "#profile":
            return url;
        case "#home":
            return url;
        default:
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
    console.log(event);
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
        email: document.getElementById('r_email').value,
        role: document.getElementById('r_role').value
    }
    RegisterModule.register(user);
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


