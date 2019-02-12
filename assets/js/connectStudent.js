$(function () {
    let expanded = false;
    
    $('#dro1').on("click", () => {
        $('#hidde1').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotat1').css('transform', 'rotate(90deg)')
                expanded = true;
                
                
            } else {
                $('#rotat1').css('transform', '')
                expanded = false;
                
            }
    })
});

$(function () {
    let expanded = false;
 
    $('#dro2').on("click", () => {
        $('#hidde2').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotat2').css('transform', 'rotate(90deg)')
                expanded = true;
               
            } else {
                $('#rotat2').css('transform', '')
                expanded = false;
                
            }
    })
});

const userData = JSON.parse(localStorage.getItem('userData'));
const admin = new Admin(userData.username, userData.password);
const userList = userStorage.getUserList();
const courses = userStorage.getCoursesList();


        admin.init({
            courses: courses,
            userList: userList
        });
idStudentCheckbox = 0;
idCourseCheckbox = 0
admin.userList.forEach(user => {
    if(user.role === 'student') {
        idStudentCheckbox++
        $('#hidde1').append(
        $(`<p id = ${idStudentCheckbox}>${user.username}<input class ="userCheck"name=checkbox id= ${idStudentCheckbox} type="radio"/></p>`));
    }
});
admin.courses.forEach(course => {
    idCourseCheckbox++
        $('#hidde2').append(
        $(`<p id= ${idCourseCheckbox}>${course}<input class ="courseCheck"name=checkbox2 id= ${idCourseCheckbox} type="radio"/></p>`));
    
});

var btnConnectEl = document.getElementById('btnConnect');

btnConnectEl.addEventListener('click', function (event) {
    event.preventDefault();
    // admin.enrollToACourse()
  
})

var courseCheck = $('input.courseCheck')
var userCheck =  $('input.userCheck')
console.log(courseCheck)
console.log(userCheck)


// todo change courses must be <option>

    $(userCheck).each(i => {
        
        $(userCheck[i]).change(function(){
            if($(userCheck).is(':checked')) {
                console.log('Checkbox is checked');
               
                var correctUser = $(this).parent().text()
                var foundUser = admin.userList.find(user => {
                    if(user.username == correctUser) {
                        return user
                    }
                })
                console.log('this is' + foundUser)
                $(courseCheck).each(j => {
    
                    $(courseCheck[j]).change(function(){
                        if($(courseCheck).is(':checked')) {
                            console.log('Checkbox is checked');                            
            
                           
                            var correctCourse = $(this).parent().text()

                            var foundCourse = admin.courses.find(course => {
                                if(course === correctCourse) {
                                    return course
                                }
                            })
                            console.log(foundCourse)
                            btnConnectEl.addEventListener('click', function (event) {
                                event.preventDefault();
                               
                                admin.enrollToACourse(foundUser,foundCourse)
                                console.log(foundUser)
                                alert(foundUser.username + ' connected to  ' + foundCourse)
                                return
                            })
                        } else {
                            console.log('Checkbox is notchecked')
                            return null
                        }
                    }); 
                });

                return $(this).parent().text()
            } else {
                console.log('Checkbox is notchecked')
                return null
            }
        }); 
    }
    )





 






