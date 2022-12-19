AFRAME.registerComponent('cursor-listener', {
    init: function () {
      this.el.addEventListener('click', function (evt) {
      console.log('I was clicked at: ', evt.detail.intersection.point);
      let audiosource = document.querySelector('#musicpanel');
      audiosource.components.sound.playSound();});
}});
