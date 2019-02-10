class Admin extends User {
    constructor(username, password) {
        super(username, password, 'admin');

     
        this.userList;
        this.courses;
    }

    init(data) {

        this.userList = data.userList;
        this.courses = data.courses

        window.a = this;
    }


    
    enrollToACourse(student, course) {
        // TODO: add logic
        student.course = course;
        localStorage.setItem('userList',JSON.stringify(this.userList));
    }

    showStudents () {
       var studentList = [];
       this.userList.forEach(user => {
            if  (user.role === 'student') {
               
                var username = user.firstName;
                console.log(username);
                studentList.push(username);
               
            }
           
        });
        console.log(studentList);
        return studentList;
    }

    showCourses() {
        var coursesList = [];
        this.courses.forEach(course => {
            coursesList.push(course);
        })
        return coursesList;
    }
}
