// IIFE - put var so it is not always encapsulated
var userStorage = (function() {
    const byId = (id) => document.getElementById(id);

    //REGISTER FORM creation
    /////////////////////////////////////////////////////////////////////////////////

    // class User go to User.js
    // class User {
    //     constructor(username, password) {
    //         this.username = username;
    //         this.password = password;
    //     }
    // }
    // what extras has an admin got? - in constructor
    //



    //class Admin go to Admin.js
    // class Admin extends User {
    //     constructor(username, password) {
    //         super(username, password);
    //     }
    // }



    //class Student go to Student.js
    // class Student extends User {
    //     constructor(username, password, email, emailAgain, firstName, surname, city, country) {
    //         super(username, password);

    //         this.email = email;
    //         this.emailAgain = emailAgain;
    //         this.firstName = firstName;
    //         this.surname = surname;
    //         this.city = city;
    //         this.country = country;
    //         // i.e. JavaScript Season X, PHP Season X, etc.
    //         this.course = null;
    //     }
    // }

    // list of users to be hidden (encapsulated)
    let userList = [
        //it is empty usually, but for the example there are some inputs
        new Admin('admin', 'Aa-12345'),
        new Student('student', 'Bb-12345', 'l.eftimova@gmail.com', 'l.eftimova@gmail.com', 'Lora', 'Eftimova', 'Sofia', 'Bulgaria')
    ];

    let coursesList = ['Math', 'BG', 'JS'];

    /////////////////////////////////////////////////////////////////////////////////


    // REGISTER/LOGIN FUNCTION
    return {



        init() {

            var userListFromLocalStorage = localStorage.getItem('userList');
            var coursesListFromLocalStorage = localStorage.getItem('coursesList');

            if (userListFromLocalStorage) {

                userList = JSON.parse(userListFromLocalStorage);
            }

            if (coursesListFromLocalStorage) {

                coursesList = JSON.parse(coursesListFromLocalStorage);
            }
        },


        // push a new user in userlist when he wants to register
        register: function(username, password, email, emailAgain, firstName, surname, city, country) {

            userList.push(new Student(username, password, email, emailAgain, firstName, surname, city, country));

            // so you can register users without having a server
            localStorage.setItem('userList', JSON.stringify(userList));
        },


        // checks if there are any users in the DB - userList

        login: function(username, password) {
            var userListFromLocalStorage = localStorage.getItem('userList');
            if (userListFromLocalStorage) {
                userList = JSON.parse(userListFromLocalStorage);
            }

            const foundUser = userList.find(user => user.username === username &&
                user.password === password); 

            if (foundUser) {

                localStorage.setItem('userData', JSON.stringify(foundUser));
            }

            return foundUser;
        },

            // return userList.find(user => user.username === username &&
            //     user.password === password);
        //},

        checkIfUserExists: function(username) {
            var userListFromLocalStorage = localStorage.getItem('userList');
            if (userListFromLocalStorage) {
                userList = JSON.parse(userListFromLocalStorage);
            }

            return userList.find(user => user.username === username);
        },
        getUserList() {

            return userList;
        },

        getCoursesList() {
            
            return coursesList;
        }
    }


})();