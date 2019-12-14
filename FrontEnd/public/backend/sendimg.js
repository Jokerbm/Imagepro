/*---------------------
   Snap-Face
--------------------- */
function snapface() {
    if (document.getElementById("snap-face").checked == true){
      document.getElementById("snapslide").style.display = "block";
  
      var video = document.getElementById('video');
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
          video.srcObject = stream;
          video.play();
      });
  }
    } else {
      document.getElementById("snapslide").style.display = "none";
      localstream.stop();
    }
  }
  
    var video = document.getElementById('video');
  // Trigger photo take
    document.getElementById("snap").addEventListener("click", function() {
        console.log('snap')
  });

  var filebt = document.getElementById("filebt");
    filebt.addEventListener('change', function(e){
        var file = e.target.files[0];

        let storageRef = firebase.storage().ref("japan" + "1");
        var task = storageRef.put(file);
    })