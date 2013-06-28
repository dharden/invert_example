window.URL = window.URL || window.webkitURL;

navigator.getUserMediaBrowserCompat = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

var localMediaStream;

function createMediaStream(videoElement, callback) {

  navigator.getUserMediaBrowserCompat(
     // constraints
     {
        video: true,
        audio: false
     },
     function(stream) {
        var video = videoElement;
        video.src = window.URL.createObjectURL(stream);

        callback(stream);

     },
     function(err) {
      //console.log("The following error occured: " + err);
     }
  );

  return localMediaStream;

}
