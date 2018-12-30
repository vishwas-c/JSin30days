window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio)  //If key is not mapped to audio track
        return;
    audio.currentTime= 0; // Rewind to beginning
    audio.play();
});