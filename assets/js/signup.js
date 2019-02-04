// window.addEventListener('DOMContentLoaded', function() {

// }, false);


//unmask checkbox - show/hide password characters

function revealPassword() {
    var reveal = document.getElementById("passwordInput");
    if (reveal.type === "password") {
        reveal.type = "text";
    } else {
        reveal.type = "password";
    }
}

// expand/hide menu both

const byId = (id) => document.getElementById(id);

var expanded0 = true;

byId('arrowDown0').addEventListener('click', function() {

    if (expanded0) {
        byId('collapse1').style.display = 'none';
        byId('collapse2').style.display = 'none';
        byId('menuExpand0').textContent = 'Collapse all';
        byId('arrowDown0').style.transform = 'rotate(270deg)';
        // this.img.style.transform = 'rotate(180deg)';


        expanded0 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('collapse2').style.display = 'block';
        byId('menuExpand0').textContent = 'Expand all';
        byId('arrowDown0').style.transform = '';


        expanded0 = true;
    }
});

var menuExpanded0 = true;

byId('menuExpand0').addEventListener('click', function() {

    if (menuExpanded0) {
        byId('collapse1').style.display = 'none';
        byId('collapse2').style.display = 'none';
        byId('menuExpand0').textContent = 'Collapse all';
        byId('arrowDown0').style.transform = 'rotate(270deg)';


        menuExpanded0 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('collapse2').style.display = 'block';
        byId('menuExpand0').textContent = 'Expand all';
        byId('arrowDown0').style.transform = '';


        menuExpanded0 = true;
    }
});

// expand/hide menu Choose username and password

var expanded1 = true;

byId('arrowDown1').addEventListener('click', function() {

    if (expanded1) {
        byId('collapse1').style.display = 'none';
        byId('arrowDown1').style.transform = 'rotate(270deg)';
        expanded1 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('arrowDown1').style.transform = '';
        expanded1 = true;
    }
});

var menuexpanded1 = true;

byId('menuExpand1').addEventListener('click', function() {

    if (menuexpanded1) {
        byId('collapse1').style.display = 'none';
        byId('arrowDown1').style.transform = 'rotate(270deg)';
        menuexpanded1 = false;
    } else {
        byId('collapse1').style.display = 'block';
        byId('arrowDown1').style.transform = '';
        menuexpanded1 = true;
    }
});

// expand/hide menu More details


var expanded2 = true;
byId('arrowDown2').addEventListener('click', function() {

    if (expanded2) {
        byId('collapse2').style.display = 'none';
        byId('arrowDown2').style.transform = 'rotate(270deg)';

        expanded2 = false;
    } else {
        byId('collapse2').style.display = 'block';
        byId('arrowDown2').style.transform = '';
        expanded2 = true;
    }
});

var menuexpanded2 = true;

byId('menuExpand2').addEventListener('click', function() {

    if (menuexpanded2) {
        byId('collapse2').style.display = 'none';
        byId('arrowDown2').style.transform = 'rotate(270deg)';
        menuexpanded2 = false;
    } else {
        byId('collapse2').style.display = 'block';
        byId('arrowDown2').style.transform = '';
        menuexpanded2 = true;
    }
});