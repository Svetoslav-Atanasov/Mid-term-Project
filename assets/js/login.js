    /////////////////////////////////////////////////////////////////////////////////

    //Login form creation
    const byId = (id) => document.getElementById(id);

    userStorage.init();
    
    byId('logInButton').addEventListener('click', function(event) {
        event.preventDefault();

        const username = byId('usernameInput').value;
        const password = byId('passwordInput').value;

        const user = userStorage.login(username, password);
        // check the username, password input
        console.log(user)
        //checks userList for username, password and if the inputs are empty fields
        if (user) {
            document.location.href = '../html/userTemplate.html'
        } else {
            // finds the first element of that class and displays the error message
            document.querySelector('.errorLogin').style.display = 'block'
        }
    }, false);

        /////////////////////////////////////////////////////////////////////////////////



  
 
