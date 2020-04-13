var audio = new Audio('./bgm.mp3');
audio.volume = 0.5;

audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

function showLove(){
    alert("ppl be groovin");
    document.body.style.background = "url('dance4.gif') repeat";
    document.getElementById("tehbutton").style.visibility = 'hidden';
    document.getElementById("textflash").classList.add("flashing");
    audio.play();
}
