function changeText(id, text){
    document.getElementById(id).innerHTML = text;
}

document.getElementById("btn1").addEventListener("click", function(){
    changeText("h1", "H1입니다");
})

document.getElementById("btn2").addEventListener("click", function(){
    changeText("h2", "H2입니다");
})

document.getElementById("btn3").addEventListener("click", function(){
    changeText("h3", "H3입니다");
})

document.getElementById("btn4").addEventListener("click", function(){
    changeText("h4", "H4입니다");
})

document.getElementById("btn5").addEventListener("click", function(){
    changeText("h5", "H5입니다");
})

function changeColor(color, btn){
    document.getElementById(color).style.background = btn;
}

document.getElementById("red").addEventListener("click", function(){
    changeColor("div", "red")
})

document.getElementById("yellow").addEventListener("click", function(){
    changeColor("div", "yellow")
})

document.getElementById("green").addEventListener("click", function(){
    changeColor("div", "green")
})

document.getElementById("blue").addEventListener("click", function(){
    changeColor("div", "blue")
})