function changecolor(string){
    var element = document.getElementById(string);
    for (var i = 0; i < element.childNodes.length; i++){
    element.style.background = '#eeeeee';
    }
    return element;
}
        