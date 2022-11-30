function changeColor(color){
    document.body.style.background = color;
}


function color1clicked(){
    changeColor("#ffe6ff");
}

document.getElementById("color1").onclick = color1clicked;