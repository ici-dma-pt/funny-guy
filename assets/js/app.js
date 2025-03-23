AFRAME.registerComponent('videoplay-on-marker', {
    init: function () {
      const marker = this.el;
      const videoEl = document.querySelector("#myVideo");
  
      marker.addEventListener("markerFound", () => {
        console.log("Marker found — attempting to play video");
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log("Video playing"))
            .catch(err => console.warn("Video play failed:", err));
        }
      });
  
      marker.addEventListener("markerLost", () => {
        console.log("Marker lost — pausing video");
        videoEl.pause();
      });
    }
  });
  