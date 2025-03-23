AFRAME.registerComponent('videoplay-on-marker', {
    init: function () {
      const marker = this.el;
      const videoEl = document.querySelector("#myVideo");
  
      // Ensure video is loaded and ready
      videoEl.addEventListener('loadeddata', () => {
        console.log('Video ready');
      });
  
      marker.addEventListener("markerFound", () => {
        console.log("Marker found - trying to play video");
  
        // Try to play the video — handle possible block
        const playPromise = videoEl.play();
  
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log("Video started"))
            .catch(err => console.warn("Video play failed:", err));
        }
      });
  
      marker.addEventListener("markerLost", () => {
        console.log("Marker lost - pausing video");
        videoEl.pause();
      });
    }
  });
  