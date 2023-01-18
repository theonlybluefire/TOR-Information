function NavbarButton(destinationId, defaultColor) {
    var destination = document.getElementById(destinationId).style.backgroundColor = "rgb(136,73,179)";
    setTimeout(function() {
        let destination = document.getElementById(destinationId).style.backgroundColor = defaultColor
    },1000);
} 

