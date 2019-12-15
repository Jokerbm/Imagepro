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
    document.getElementById("snap").addEventListener("click", function() {
      console.log("SNAP")
        //Upload Snap
      var filebt = document.getElementById("filebt");
      filebt.addEventListener('change', function(e){
        console.log("Find user")
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            console.log("Upload Process..")
            var file = video;
          
            let storageRef = firebase.storage().ref(user.email + "/" + user.email[0] + "1");
            var task = storageRef.put(file);
          } else {
            console.log("Fail")
          }
        });
      })
  });
