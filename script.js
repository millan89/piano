function play(e){
    let key = e.keyCode;
    let audio = document.querySelector(`audio[data-key="${key}"`);
    let piano_key = document.querySelector(`.key[data-key="${key}"]`)
    piano_key.style.background = '#ccc'
    setTimeout (() => {
        piano_key.style.background = '#fff'
    }), 400
    audio.play()
}

window.addEventListener('keydown', play)