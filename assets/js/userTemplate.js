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


        const admin = new Admin(userData.username, userData.password);

        admin.init({
            courses: courses,
            userList: userList
        });

        console.log(admin)
    }

})();