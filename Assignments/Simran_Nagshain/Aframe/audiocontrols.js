AFRAME.registerComponent('songplayer',{
    init: function() {
        let audiosource = document.querySelector('#musicpanel');
        let musicplay = () => {audiosource.components.sound.playSound()};
        this.el.addEventListener('click', musicplay);
        console.log('This 2D element was clicked!');
    }});