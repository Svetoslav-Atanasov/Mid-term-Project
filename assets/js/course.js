

$(function () {
    let expanded = false;
    const leftContainersEl = document.getElementById('left-containers')
    $('#drop1').on("click", () => {
        $('#hidden1').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotate1').css('transform', 'rotate(90deg)')
                expanded = true;
                leftContainersEl.style.bottom = '72vh'
                
            } else {
                $('#rotate1').css('transform', '')
                expanded = false;
                leftContainersEl.style.bottom = '78vh'
            }
    })
});

$(function () {
    let expanded = false;
    const leftContainersEl = document.getElementById('left-containers')
    $('#drop2').on("click", () => {
        $('#hidden2').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotate2').css('transform', 'rotate(90deg)')
                expanded = true;
                leftContainersEl.style.bottom = '72vh'
            } else {
                $('#rotate2').css('transform', '')
                expanded = false;
                leftContainersEl.style.bottom = '78vh';
            }
    })
});