//unmask - show/hide password characters

var pw = $("#passwordInput"),
    cb = $("#unmask"),
    mask = true;

cb.on("click", function() {

    if (mask === true) {
        mask = false;
        pw.attr("type", "text");
    } else {
        mask = true;
        pw.attr("type", "password");
    }

});