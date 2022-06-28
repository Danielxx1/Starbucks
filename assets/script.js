function menuToggle () {
    let menuArea = document.getElementById("menu2");

    if(menuArea.style.width == '200px') {
        menuArea.style.width = '0px';
    } else {
        menuArea.style.width = '200px'
    }
}
