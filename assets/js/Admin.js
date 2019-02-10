class Admin extends User {
    constructor(username, password) {
        super(username, password, 'admin');


        this.userList;
        this.courses;
    }

    init(data) {

        this.userList = data.userList;
        this.courses = data.courses
    }


    
    enrollToACourse(student, course) {
        // TODO: add logic
    }

}