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
        const courseNameJSEl = document.getElementById('courseNameJS');
        const courseNameJAVAEl = document.getElementById('courseNameJava');
        const courseNamePHPEl = document.getElementById('courseNamePHP')
        const middleContainerEl = document.getElementById('middleContainer');
        const middleContainerCourseEl = document.getElementById('middle-container-course');
        const titleCourseEl = document.getElementById('titleCourse');
        const backToHomeEl = document.getElementById('backToHome');
        const footerLogin = document.getElementById('footer-login');
        const connectStudentWithCourseEl = document.getElementById('connect-student-with-course')
        connectStudentWithCourseEl.style.display = 'block'
        footerLogin.innerHTML = 'You are logged in';
        


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

        courseNameJSEl.addEventListener('click', function(event) {
            event.preventDefault();
            middleContainerEl.style.display = 'none'
            middleContainerCourseEl.style.display = 'inline';
            titleCourseEl.innerHTML = document.getElementById('courseNameJS').innerText;

            
        });
        courseNameJAVAEl.addEventListener('click', function(event) {
            event.preventDefault();
            middleContainerEl.style.display = 'none'
            middleContainerCourseEl.style.display = 'inline';
            titleCourseEl.innerHTML = document.getElementById('courseNameJava').innerText;

            
        });
        courseNamePHPEl.addEventListener('click', function(event) {
            event.preventDefault();
            middleContainerEl.style.display = 'none'
            middleContainerCourseEl.style.display = 'inline';
            titleCourseEl.innerHTML = document.getElementById('courseNamePHP').innerText;

            
        });
        backToHomeEl.addEventListener('click', function () {

            event.preventDefault();
            middleContainerEl.style.display = 'block';
            middleContainerCourseEl.style.display = 'none';

        })
   



        btnShowListCourser.addEventListener('click', function (event) {
            event.preventDefault();
            var listCourseInfo = document.getElementById('listCourses');

            listCourseInfo.style.display == "block" ? listCourseInfo.style.display = 'none' : listCourseInfo.style.display = 'block'

            listCourseInfo.innerHTML = admin.showCourses();
            console.log(admin.showCourses())

        });
        
    }


  
    

    if (userData.role === 'student') {
        if(userData.course === '') {
            middleContainerCourseEl.style.display='none';
            middleContainerEl.style.display = 'none';
            alert('ne si razpredelen')
            
         }
        
        const blockNavigationMenuEl = document.getElementById('blockNavigationMenu');
        blockNavigationMenuEl.style.display='none';
        const blockNavMenuCourseEl = document.getElementById('block-nav-menu-course');
        blockNavMenuCourseEl.style.display = 'block';
        var middleContainerEl = document.getElementById('middleContainer');
        middleContainerEl.style.display = 'none';
         var middleContainerCourseEl = document.getElementById('middle-container-course');
        middleContainerCourseEl.style.display = 'inline'
        

        
        console.log(blockNavMenuCourseEl)
       
        var titleCourseEl = document.getElementById('titleCourse');
        console.log(userData);

        if (userData.course !== null) {
        titleCourseEl.innerHTML = userData.course
        console.log(titleCourseEl)
        }
    }
    
    
})();