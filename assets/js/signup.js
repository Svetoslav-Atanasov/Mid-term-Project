// window.addEventListener('DOMContentLoaded', function() {

// }, false);


//unmask checkbox - show/hide password characters

function revealPassword() {
    var reveal = document.getElementById("passwordInput");
    if (reveal.type === "password") {
        reveal.type = "text";
    } else {
        reveal.type = "password";
    }
}

// expand/hide menu both

const byId = (id) => document.getElementById(id);

var expanded0 = true;

byId('arrowDown0').addEventListener('click', function () {

    if (expanded0) {
        byId('collapse1').style.display = 'none';
        byId('collapse2').style.display = 'none';
        byId('menuExpand0').textContent = 'Collapse all';
        byId('arrowDown0').style.transform = 'rotate(270deg)';
        // this.img.style.transform = 'rotate(180deg)';


        expanded0 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('collapse2').style.display = 'block';
        byId('menuExpand0').textContent = 'Expand all';
        byId('arrowDown0').style.transform = '';


        expanded0 = true;
    }
});

var menuExpanded0 = true;

byId('menuExpand0').addEventListener('click', function () {

    if (menuExpanded0) {
        byId('collapse1').style.display = 'none';
        byId('collapse2').style.display = 'none';
        byId('menuExpand0').textContent = 'Collapse all';
        byId('arrowDown0').style.transform = 'rotate(270deg)';


        menuExpanded0 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('collapse2').style.display = 'block';
        byId('menuExpand0').textContent = 'Expand all';
        byId('arrowDown0').style.transform = '';


        menuExpanded0 = true;
    }
});

// expand/hide menu Choose username and password

var expanded1 = true;

byId('arrowDown1').addEventListener('click', function () {

    if (expanded1) {
        byId('collapse1').style.display = 'none';
        byId('arrowDown1').style.transform = 'rotate(270deg)';
        expanded1 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('arrowDown1').style.transform = '';
        expanded1 = true;
    }
});

var menuexpanded1 = true;

byId('menuExpand1').addEventListener('click', function () {

    if (menuexpanded1) {
        byId('collapse1').style.display = 'none';
        byId('arrowDown1').style.transform = 'rotate(270deg)';
        menuexpanded1 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('arrowDown1').style.transform = '';
        menuexpanded1 = true;
    }
});

// expand/hide menu More details


var expanded2 = true;
byId('arrowDown2').addEventListener('click', function () {

    if (expanded2) {
        byId('collapse2').style.display = 'none';
        byId('arrowDown2').style.transform = 'rotate(270deg)';

        expanded2 = false;
    } else {
        byId('collapse2').style.display = 'block';
        byId('arrowDown2').style.transform = '';
        expanded2 = true;
    }
});

var menuexpanded2 = true;

byId('menuExpand2').addEventListener('click', function () {

    if (menuexpanded2) {
        byId('collapse2').style.display = 'none';
        byId('arrowDown2').style.transform = 'rotate(270deg)';
        menuexpanded2 = false;
    } else {
        byId('collapse2').style.display = 'block';
        byId('arrowDown2').style.transform = '';
        menuexpanded2 = true;
    }
});

// register form

// $(function() {

window.addEventListener('DOMContentLoaded', function () {

    // template for not always writing document.getElementById
    // const byId = (id) => document.getElementById(id);

    // byId('showRegistrationForm').addEventListener('click', function() {
    //     byId('showRegistrationForm').style.display = 'none';
    //     byId('registrationForm').style.display = 'flex';

    // });

    byId('createMyNewAccountButton').addEventListener('click', function () {
        //to be able to use register and than get the message - congrats... 
        event.preventDefault();
        // all fields needed to register: username, password, email, emailAgain, firstName, surname, city, country

        // getElement by id - look for IDs
        let username = byId('usernameInput').value;
        let password = byId('passwordInput').value;
        let email = byId('emailInput').value;
        let emailAgain = byId('emailAgainInput').value;
        let firstName = byId('firstNameInput').value;
        let surname = byId('surnameInput').value;
        let city = byId('cityInput').value;
        let country = byId('countryInput').value;



        // flag - to see if there are any mistakes in the registration attempt
        // ADD VALIDATION
        let hasErrors = true;

        // as userStorage is put above userController it becomes like a global variable and you can access it            //hide something, show something else
        // if (username.trim().length <= 8) {
        //     let hasErrors = false;
        //     // message for username that does not meet the requirements
        //     document.querySelector('#usernameContainer > .error').innerText = 'Username must be at least 8 characters long';
        // } else {
        //     // no message if username meets requirements
        //     document.querySelector('#usernameContainer > .error').innerText = '';
        // }

        // if (password.trim().length <= 5) {
        //     let hasErrors = false;
        //     // message for username that does not meet the requirements
        //     document.querySelector('#passwordContainer > .error').innerText = 'Password must be at least 5 characters long';
        // } else {
        //     // no message if username meets requirements
        //     document.querySelector('#passwordContainer > .error').innerText = '';
        // }

        if (!validateEmail(email)) {
            let hasErrors = false;
            // message for username that does not meet the requirements
            document.querySelector('#email > .signupErrorMessage').innerText = 'Invalid email address';
            document.querySelector('.signupErrorMessage').style.display = 'block'
        } else {
            // no message if username meets requirements
            document.querySelector('#emailInput > .signupErrorMessage').innerText = '';
        }

        // validate mail; can put it down here, because of hoisting
        function validateEmail(email) {
            var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validation.test(String(email).toLowerCase());
        };

        if (!hasErrors) {
            userStorage.register(username, password, email, emailAgain, firstName, surname, city, country);
            document.location.href = '../html/login.html';
        }
    }, false);
});