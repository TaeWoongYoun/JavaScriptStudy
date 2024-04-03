document.getElementById("clickBtn").addEventListener('click', function(){
    document.getElementsByClassName("hello").style.display = 'none';
})

$("#clickBtn").click(function(){
    $(".hello").hide();
})