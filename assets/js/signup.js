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

byId('arrowDown0').addEventListener('click', function() {

    if (expanded0) {
        byId('collapse1').style.display = 'none';
        byId('collapse2').style.display = 'none';
        byId('menuExpand0').textContent = 'Collapse all';
        byId('arrowDown0').style.transform = 'rotate(270deg)';

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

byId('menuExpand0').addEventListener('click', function() {

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

byId('arrowDown1').addEventListener('click', function() {

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

byId('menuExpand1').addEventListener('click', function() {

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
byId('arrowDown2').addEventListener('click', function() {

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

byId('menuExpand2').addEventListener('click', function() {

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

window.addEventListener('DOMContentLoaded', function() {

    byId('createMyNewAccountButton').addEventListener('click', function() {

        //to be able to use register and than get the message - congrats... 
        event.preventDefault();
        // all fields needed to register: username, password, email, emailAgain, firstName, surname, city, country
        // getElement by id
        let username = byId('usernameInput').value;
        let password = byId('passwordInput').value;
        let email = byId('emailInput').value;
        let emailAgain = byId('emailAgainInput').value;
        let firstName = byId('firstNameInput').value;
        let surname = byId('surnameInput').value;
        let city = byId('cityInput').value;
        let country = byId('countryInput').value;


        //VALIDATIONS
        // flag - to see if there are any mistakes in the registration attempt
        let hasErrors = false;

        // USERNAME
        if (username.trim().length < 1) {
            hasErrors = true;
            // message for username that does not meet the requirements            
            document.querySelectorAll('.signupErrorMessageChoose')[0].style.display = 'inline'
            byId('existingUsername').style.display = 'none';

        } else {
            // if you try 2 times in a row the message from above won't go away
            document.querySelectorAll('.signupErrorMessageChoose')[0].style.display = 'none'

            // check if username already exists
            if (userStorage.checkIfUserExists(username)) {
                byId('existingUsername').style.display = 'inline';
            } else {
                byId('existingUsername').style.display = 'none';
            }

        }

        // PASSWORD
        var firstPasswordError = false;
        if (password.trim().length <= 8) {
            hasErrors = true;
            firstPasswordError = true;
            document.querySelector('#choosePassword8').style.display = 'inline';
        } else {
            document.querySelector('#choosePassword8').style.display = 'none';
        }

        if (!(/[A-Z]+/.test(password))) {
            if (firstPasswordError) {
                document.querySelector('#choosePasswordUc').innerText = '\nPasswords must have at least 1 uppercase letter(s).';
            } else {
                document.querySelector('#choosePasswordUc').innerText = 'Passwords must have at least 1 uppercase letter(s).';
            }

            hasErrors = true;
            firstPasswordError = true;
            document.querySelector('#choosePasswordUc').style.display = 'inline';
        } else {
            document.querySelector('#choosePasswordUc').style.display = 'none';
        }

        if (!(/[a-z]+/.test(password))) {
            if (firstPasswordError) {
                document.querySelector('#choosePasswordLc').innerText = '\nPasswords must have at least 1 lower case letter(s).';
            } else {
                document.querySelector('#choosePasswordLc').innerText = 'Passwords must have at least 1 lower case letter(s).';
            }

            hasErrors = true;
            firstPasswordError = true;
            document.querySelector('#choosePasswordLc').style.display = 'inline';
        } else {
            document.querySelector('#choosePasswordLc').style.display = 'none';
        }

        if (!(/[0-9]+/.test(password))) {
            if (firstPasswordError) {
                document.querySelector('#choosePasswordDigit').innerText = '\nPasswords must have at least 1 digit(s).';
            } else {
                document.querySelector('#choosePasswordDigit').innerText = 'Passwords must have at least 1 digit(s).';
            }

            hasErrors = true;
            firstPasswordError = true;
            document.querySelector('#choosePasswordDigit').style.display = 'inline';
        } else {
            document.querySelector('#choosePasswordDigit').style.display = 'none';
        }

        if (!(/[^A-Za-z0-9]+/.test(password))) {
            if (firstPasswordError) {
                document.querySelector('#choosePasswordSpecialCharacter').innerText = '\nPasswords must have at least 1 special character(s).';
            } else {
                document.querySelector('#choosePasswordSpecialCharacter').innerText = 'Passwords must have at least 1 special character(s).';
            }

            hasErrors = true;
            firstPasswordError = true;
            document.querySelector('#choosePasswordSpecialCharacter').style.display = 'inline';
        } else {
            document.querySelector('#choosePasswordSpecialCharacter').style.display = 'none';
        }


        function validatePassword(password) {
            return /[A-Z]/.test(password) &&
                /[a-z]/.test(password) &&
                /[0-9]/.test(password) &&
                /[^A-Za-z0-9]/.test(password) &&
                password.length >= 8;

        }

        // EMAIL
        if (email.trim().length < 1) {
            hasErrors = true;
            document.querySelector('#missingEmailInput').style.display = 'inline'
        } else {
            document.querySelector('#missingEmailInput').style.display = 'none'
        }


        if (!validateEmail(email)) {
            hasErrors = true;
            // document.querySelector('#email > .signupErrorMessage').innerText = 'Invalid email address';
            document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'inline'
        } else {
            document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
        }

        // EMAIL AGAIN

        if (email.trim().length < 1) {
            hasErrors = true;
            document.querySelector('#missingEmailAgainInput').style.display = 'inline'
        } else {
            document.querySelector('#missingEmailAgainInput').style.display = 'none'
        }

        if (!validateEmail(emailAgain)) {
            let hasErrors = true;
            document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'inline'
        } else {
            document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
        }

        if (email !== emailAgain) {
            let hasErrors = true;
            document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'inline'
            document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'inline'
        } else {
            document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
            document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'none'
        }

        // validate mail; can put it down here, because of hoisting
        function validateEmail(email) {
            var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return validation.test(String(email).toLowerCase());
        };

        // FIRST NAME
        if (firstName.trim().length < 1) {
            hasErrors = true;
            document.querySelectorAll('.signupErrorMessageMoreDetails')[2].style.display = 'inline'
        } else {
            document.querySelectorAll('.signupErrorMessageMoreDetails')[2].style.display = 'none'
        }

        // SURNAME
        if (surname.trim().length < 1) {
            hasErrors = true;
            document.querySelectorAll('.signupErrorMessageMoreDetails')[3].style.display = 'inline'
        } else {
            document.querySelectorAll('.signupErrorMessageMoreDetails')[3].style.display = 'none'
        }

        // CITY
        // longest city name is:  Winchester-on-the-Severn - 24 characters including hyphens
        if (city.trim().length > 24) {
            city = '';
        }

        // COUNTRY
        // if no country is selected
        if (country === 'Select a country') {
            country = '';
        }
        console.log(hasErrors)

        // NO ERRORS - REGISTER USER; RELOCATE TO LOGIN
        if (!hasErrors) {
            userStorage.register(username, password, email, emailAgain, firstName, surname, city, country);
            document.location.href = '../html/login.html';
        }
    }, false);

    const ENTER = 13;
    document.body.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            //to be able to use register and than get the message - congrats... 
            event.preventDefault();
            // all fields needed to register: username, password, email, emailAgain, firstName, surname, city, country
            // getElement by id
            let username = byId('usernameInput').value;
            let password = byId('passwordInput').value;
            let email = byId('emailInput').value;
            let emailAgain = byId('emailAgainInput').value;
            let firstName = byId('firstNameInput').value;
            let surname = byId('surnameInput').value;
            let city = byId('cityInput').value;
            let country = byId('countryInput').value;


            //VALIDATIONS
            // flag - to see if there are any mistakes in the registration attempt
            let hasErrors = false;

            // USERNAME
            if (username.trim().length < 1) {
                hasErrors = true;
                // message for username that does not meet the requirements            
                document.querySelectorAll('.signupErrorMessageChoose')[0].style.display = 'inline'
                byId('existingUsername').style.display = 'none';

            } else {
                // if you try 2 times in a row the message from above won't go away
                document.querySelectorAll('.signupErrorMessageChoose')[0].style.display = 'none'

                // check if username already exists
                if (userStorage.checkIfUserExists(username)) {
                    byId('existingUsername').style.display = 'inline';
                } else {
                    byId('existingUsername').style.display = 'none';
                }

            }

            // PASSWORD
            var firstPasswordError = false;
            if (password.trim().length <= 8) {
                hasErrors = true;
                firstPasswordError = true;
                document.querySelector('#choosePassword8').style.display = 'inline';
            } else {
                document.querySelector('#choosePassword8').style.display = 'none';
            }

            if (!(/[A-Z]+/.test(password))) {
                if (firstPasswordError) {
                    document.querySelector('#choosePasswordUc').innerText = '\nPasswords must have at least 1 uppercase letter(s).';
                } else {
                    document.querySelector('#choosePasswordUc').innerText = 'Passwords must have at least 1 uppercase letter(s).';
                }

                hasErrors = true;
                firstPasswordError = true;
                document.querySelector('#choosePasswordUc').style.display = 'inline';
            } else {
                document.querySelector('#choosePasswordUc').style.display = 'none';
            }

            if (!(/[a-z]+/.test(password))) {
                if (firstPasswordError) {
                    document.querySelector('#choosePasswordLc').innerText = '\nPasswords must have at least 1 lower case letter(s).';
                } else {
                    document.querySelector('#choosePasswordLc').innerText = 'Passwords must have at least 1 lower case letter(s).';
                }

                hasErrors = true;
                firstPasswordError = true;
                document.querySelector('#choosePasswordLc').style.display = 'inline';
            } else {
                document.querySelector('#choosePasswordLc').style.display = 'none';
            }

            if (!(/[0-9]+/.test(password))) {
                if (firstPasswordError) {
                    document.querySelector('#choosePasswordDigit').innerText = '\nPasswords must have at least 1 digit(s).';
                } else {
                    document.querySelector('#choosePasswordDigit').innerText = 'Passwords must have at least 1 digit(s).';
                }

                hasErrors = true;
                firstPasswordError = true;
                document.querySelector('#choosePasswordDigit').style.display = 'inline';
            } else {
                document.querySelector('#choosePasswordDigit').style.display = 'none';
            }

            if (!(/[^A-Za-z0-9]+/.test(password))) {
                if (firstPasswordError) {
                    document.querySelector('#choosePasswordSpecialCharacter').innerText = '\nPasswords must have at least 1 special character(s).';
                } else {
                    document.querySelector('#choosePasswordSpecialCharacter').innerText = 'Passwords must have at least 1 special character(s).';
                }

                hasErrors = true;
                firstPasswordError = true;
                document.querySelector('#choosePasswordSpecialCharacter').style.display = 'inline';
            } else {
                document.querySelector('#choosePasswordSpecialCharacter').style.display = 'none';
            }


            function validatePassword(password) {
                return /[A-Z]/.test(password) &&
                    /[a-z]/.test(password) &&
                    /[0-9]/.test(password) &&
                    /[^A-Za-z0-9]/.test(password) &&
                    password.length >= 8;

            }

            // EMAIL
            if (email.trim().length < 1) {
                hasErrors = true;
                document.querySelector('#missingEmailInput').style.display = 'inline'
            } else {
                document.querySelector('#missingEmailInput').style.display = 'none'
            }


            if (!validateEmail(email)) {
                hasErrors = true;
                // document.querySelector('#email > .signupErrorMessage').innerText = 'Invalid email address';
                document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'inline'
            } else {
                document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
            }

            // EMAIL AGAIN

            if (email.trim().length < 1) {
                hasErrors = true;
                document.querySelector('#missingEmailAgainInput').style.display = 'inline'
            } else {
                document.querySelector('#missingEmailAgainInput').style.display = 'none'
            }

            if (!validateEmail(emailAgain)) {
                let hasErrors = true;
                document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'inline'
            } else {
                document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
            }

            if (email !== emailAgain) {
                let hasErrors = true;
                document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'inline'
                document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'inline'
            } else {
                document.querySelectorAll('.signupErrorMessageMoreDetails')[0].style.display = 'none'
                document.querySelectorAll('.signupErrorMessageMoreDetails')[1].style.display = 'none'
            }

            // validate mail; can put it down here, because of hoisting
            function validateEmail(email) {
                var validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return validation.test(String(email).toLowerCase());
            };

            // FIRST NAME
            if (firstName.trim().length < 1) {
                hasErrors = true;
                document.querySelectorAll('.signupErrorMessageMoreDetails')[2].style.display = 'inline'
            } else {
                document.querySelectorAll('.signupErrorMessageMoreDetails')[2].style.display = 'none'
            }

            // SURNAME
            if (surname.trim().length < 1) {
                hasErrors = true;
                document.querySelectorAll('.signupErrorMessageMoreDetails')[3].style.display = 'inline'
            } else {
                document.querySelectorAll('.signupErrorMessageMoreDetails')[3].style.display = 'none'
            }

            // CITY
            // longest city name is:  Winchester-on-the-Severn - 24 characters including hyphens
            if (city.trim().length > 24) {
                city = '';
            }

            // COUNTRY
            // if no country is selected
            if (country === 'Select a country') {
                country = '';
            }
            console.log(hasErrors)

            // NO ERRORS - REGISTER USER; RELOCATE TO LOGIN
            if (!hasErrors) {
                userStorage.register(username, password, email, emailAgain, firstName, surname, city, country);
                document.location.href = '../html/login.html';
            }
        }

    }, false);
});