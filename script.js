AFRAME.registerComponent('vidhandler', {
  schema: {
    video: {type: 'selector'},
  },
  init: function() {
    this.video = this.data.video;
    this.video.pause();
  },
  tick: function() {
    // Only play the video if the entity is visible and the video is currently paused
    if (this.el.object3D.visible) {
      if (this.video.paused) {
        this.video.play();
      }
    } else {
      if (!this.video.paused) {
        this.video.pause();
      }
    }
  }
});
