class Student extends User {
    constructor(username, password, email, emailAgain, firstName, surname, city, country) {
        super(username, password, 'student');

        this.email = email;
        this.emailAgain = emailAgain;
        this.firstName = firstName;
        this.surname = surname;
        this.city = city;
        this.country = country;
        // i.e. JavaScript Season X, PHP Season X, etc.
        this.course = '';
    }
    addCourse (someCourse) {
        this.course = someCourse
    }
}