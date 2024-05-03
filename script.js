window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementById("play");
    
    play.addEventListener("click",function(){
    player.play();
    });
}