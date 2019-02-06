    /////////////////////////////////////////////////////////////////////////////////

    //Login form creation
    const byId = (id) => document.getElementById(id);


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