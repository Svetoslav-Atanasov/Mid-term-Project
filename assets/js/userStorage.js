// IIFE - put var so it is not always encapsulated
var userStorage = (function() {
    const byId = (id) => document.getElementById(id);

    //REGISTER FORM creation
    /////////////////////////////////////////////////////////////////////////////////

    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }
    // what extras has an admin got? - in constructor

    class Admin extends User {
        constructor(username, password) {
            super(username, password);
        }
    }

    class Student extends User {
        constructor(username, password, email, emailAgain, firstName, surname, city, country) {
            super(username, password);

            this.email = email;
            this.emailAgain = emailAgain;
            this.firstName = firstName;
            this.surname = surname;
            this.city = city;
            this.country = country;
            // i.e. JavaScript Season X, PHP Season X, etc.
            this.course = null;
        }
    }

    // list of users to be hidden (encapsulated)
    let userList = [
        //it is empty usually, but for the example there are some inputs
        new Admin('admin', 'Aa-12345'),
        new Student('student', 'Bb-12345', 'l.eftimova@gmail.com', 'l.eftimova@gmail.com', 'Lora', 'Eftimova', 'Sofia', 'Bulgaria')
    ];




    /////////////////////////////////////////////////////////////////////////////////

    //Login form creation

    byId('logInButton').addEventListener('click', function(event) {
        event.preventDefault();

        const username = byId('usernameInput').value;
        const password = byId('passwordInput').value;

        const user = userStorage.login(username, password);
        console.log(user)
        if (user) {
            document.location.href = '../html/course.html'
        } else {
            document.querySelector('.errorMessage').innerText = 'Wrong username and/or password';
        }
    }, false);


    /////////////////////////////////////////////////////////////////////////////////


    // REGISTER/LOGIN FUNCTION
    return {
        // push a new user in userlist when he wants to register
        register: function(username, password, email, emailAgain, firstName, surname, city, country) {
            userList.push(new Student(username, password, email, emailAgain, firstName, surname, city, country));
            // so you can register users without having a server
            localStorage.setItem('userList', JSON.stringify(userList));
            console.log('REGISTERED!')
        },

        // checks if there is a user in the DB - userList

        login: function(username, password) {
            return userList.find(user => user.username === username &&
                user.password === password);
        }
    }


})();