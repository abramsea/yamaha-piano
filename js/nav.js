menu.onclick = function openHiddenMenu() {
    var x = document.getElementById('topnav');

    if (x.className === "nav") {
        $("#topnav").addClass(" responsive")
        $("#menu").html("&#215;");
    } else {
        x.className = "nav";
        $("#menu").html("&#9776;");
    }
}