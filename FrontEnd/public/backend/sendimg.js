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
    document.getElementById("snap").addEventListener("click", function() {
      var i = 1
      function loopsnap(){
      var video = document.getElementById('video');
      var canvas = document.querySelector('canvas');
      var context = canvas.getContext('2d');
      var cont = 1
      context.drawImage(video, 0, 0, 640, 480);
        //Upload Snap
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            canvas.toBlob(function(blob){
              var image = new Image();
              image.src = blob;
              var uploadTask = storageRef.child(user.email + '/' + i + user.email[0]).put(blob);
              document.getElementById("process").innerHTML = "<h1>" + i + " / 50</h1>";

        //Process

              uploadTask.on('state_changed', 
                function progress(snapshot){
                  var percentage = (snapshot.bytesTransferred /
                    snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },

                function error(err) {
                  console.log("progress fail");
                },

                function complete() {
                  console.log("Suscess" + i);
                  if (i <= 50){
                    i++
                    loopsnap();
                  }
                }
              
              );

            }); 
          } else {
            console.log("Fail")
          }
        });
      }
    loopsnap();
  });

  /*
  for (let i = 1; i < 11; i++) {
      var video = document.getElementById('video');
      var canvas = document.querySelector('canvas');
      var context = canvas.getContext('2d');
      var cont = 1
      context.drawImage(video, 0, 0, 640, 480);
        //Upload Snap
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            canvas.toBlob(function(blob){
              var image = new Image();
              image.src = blob;
              var uploadTask = storageRef.child(user.email + '/' + i + user.email[0]).put(blob);
              document.getElementById("process").innerHTML = "<h1>" + cont++ + " / 50</h1>";

        //Process

              uploadTask.on('state_changed', 

                function progress(snapshot){
                  var percentage = (snapshot.bytesTransferred /
                    snapshot.totalBytes) * 100;
                    uploader.value = percentage;
                },

                function error(err) {
                  console.log("progress fail");
                },

                function complete() {
                  console.log("Suscess" + i);
                }
              
              );

            }); 
          } else {
            console.log("Fail")
          }
        });
      }
  });
  */