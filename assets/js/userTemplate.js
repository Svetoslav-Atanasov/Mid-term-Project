(() => {


    userStorage.init();



    const userNameEl = document.getElementById('loginName');

    const userData = JSON.parse(localStorage.getItem('userData'));

    userNameEl.innerHTML = userData.username;

    if (userData.role === 'admin') {


        const userList = userStorage.getUserList();
        const courses = userStorage.getCoursesList();

        const adminMainContainerEl = document.getElementById('adminMainContainer');

        adminMainContainerEl.style.display = 'block';        
        const listStudentEl = document.getElementById('listStudent');
        const btnShowListStudent = document.getElementById('showListStudent');
        const btnShowListCourser = document.getElementById('showListCourses');

        const admin = new Admin(userData.username, userData.password);

        admin.init({
            courses: courses,
            userList: userList
        });

      

        console.log(admin)
        // admin.showStudents();
        admin.enrollToACourse(admin.userList[1],admin.courses[0]);
        console.log(admin.userList[1]);
        console.log(admin.courses[0]);



        btnShowListStudent.addEventListener('click', function (event) {
            event.preventDefault();
            var listStudentInfo = document.getElementById('listStudent');

            listStudentInfo.style.display == "block" ? listStudentInfo.style.display = 'none' : listStudentInfo.style.display = 'block'

            listStudentEl.innerHTML = admin.showStudents();

        });


        btnShowListCourser.addEventListener('click', function (event) {
            event.preventDefault();
            var listCourseInfo = document.getElementById('listCourses');

            listCourseInfo.style.display == "block" ? listCourseInfo.style.display = 'none' : listCourseInfo.style.display = 'block'

            listCourseInfo.innerHTML = admin.showCourses();

        });
        
    }


  
    

    if (userData.role === 'student') {
        
        
        var courseName = document.getElementById('courseName').innerText;
        var titleCourseEl = document.getElementById('titleCourse');
        console.log(userData);

        if (userData.course !== null) {
        titleCourseEl.innerHTML = userData.course
        console.log(titleCourseEl)
        }
    }

})();