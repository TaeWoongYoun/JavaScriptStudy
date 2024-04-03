document.getElementById("btn1").addEventListener("click", function(){
    changeText("h1 입니다.");
})

function changeText(text){
    document.getElementById("h1").innerHTML = text;
}
