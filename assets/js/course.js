

$(function () {
    let expanded = false;
    $('#drop1').on("click", () => {
        $('#hidden1').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotate1').css('transform', 'rotate(90deg)')
                expanded = true;
            } else {
                $('#rotate1').css('transform', '')
                expanded = false;
            }
    })
});

$(function () {
    let expanded = false;
    $('#drop2').on("click", () => {
        $('#hidden2').toggle();
            // $('.rotate').css('transform', 'rotate(90deg)')
            if (!(expanded)) {
                $('#rotate2').css('transform', 'rotate(90deg)')
                expanded = true;
            } else {
                $('#rotate2').css('transform', '')
                expanded = false;
            }
    })
});