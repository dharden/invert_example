/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, jquery:true, indent:2, maxerr:50 */
/* global colorUtils: false, createMediaStream: false  */
window.test = false;

// Browser prefixes because we want to be cross browser and future proof here.
navigator.getUserMediaBrowserCompat = (
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia
);

// AKA navigator.getUserMedia

  jQuery(document).ready(function () {

    // Hoist the stream, so the below application can use it.
    var localMediaStream;

    navigator.getUserMediaBrowserCompat(
        // Some options
       {
          video: true,
          audio: false
       },
       // When the user says its okay to record them
       function(stream) {
          // Set the <video> tag to the video stream URL
          document.getElementByTagName('video').src = window.URL.createObjectURL(stream);

          // assign the stream variable so the application can use it below
          localMediaStream = stream;
       }
    );

    // Lets do something ever quarter of a 200 milliseconds
    setInterval(function () {

      // Don't do any kind of rendering until we recieve the stream via the
      // users acceptance of getUserMedia dialog.
      if (localMediaStream) {

        ctxInput.drawImage(videoElement, 0, 0);

      }

      var imageData = ctxInput.getImageData(0, 0, dimensionsW, dimensionsH);

      var imageData2 = ctxOutput.createImageData(dimensionsW, dimensionsH); // only do this once per page

      for (var i = 0; i < dimensionsW * dimensionsH; i++) {
          imageData2.data[j + 0] = 255;
          imageData2.data[j + 1] = 0;
          imageData2.data[j + 2] = 0;
          imageData2.data[j + 3] = imageData.data[j + 3];

        }
        else {
          imageData2.data[j + 0] = 0;
          imageData2.data[j + 1] = 0;
          imageData2.data[j + 2] = 0;
          imageData2.data[j + 3] = 255;
        }
      }

      ctxOutput.putImageData(imageData2, 0, 0);

    }, 200);

    jQuery('#sourceDemoImage7').on('click', function () {
    });

  });

