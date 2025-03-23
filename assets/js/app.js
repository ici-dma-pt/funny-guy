AFRAME.registerComponent('videoplay-on-marker', {
    init: function () {
      const marker = this.el;
      const videoEl = document.querySelector("#myVideo");
  
      marker.addEventListener("markerFound", () => {
        console.log("Marker found - playing video");
        videoEl.play();
      });
  
      marker.addEventListener("markerLost", () => {
        console.log("Marker lost - pausing video");
        videoEl.pause();
      });
    }
  });
  