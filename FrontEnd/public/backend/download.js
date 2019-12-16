//Download to classify
auth.onAuthStateChanged(user => {
    if (user) {
        var download = document.getElementById('downloadbt')
        
        download.addEventListener('click', function(){
            for (var i = 1;i <= 10; i++) {
                storageRef.child(user.email + "/" + i + user.email[0]).getDownloadURL().then(function(url) {
                console.log('Downloading')
                console.log(url)
                    // `url` is the download URL for 'images/stars.jpg'
                  
                    // This can be downloaded directly:
                    var xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = function(event) {
                      var blob = xhr.response;
                    };
                    xhr.open('GET', url);
                    xhr.send();
                
              }).catch(function(error) {
                switch (error.code) {
                  case 'storage/object-not-found':
                    console.log('storage/object-not-found')
                    break;
              
                  case 'storage/unauthorized':
                    console.log('User does not have permission to access the object')
                    break;
              
                  case 'storage/canceled':
                    console.log('canceled')
                    break;
              
                  case 'storage/unknown':
                    console.log('unknown')
                    break;
                }
              });
            }
        })
    }
    else {
        console.log('connect fail')
    }
})

/*
//Download to classify
auth.onAuthStateChanged(user => {
    if (user) {
        var download = document.getElementById('downloadbt')
        
        download.addEventListener('click', function(){
            for (var i = 1;i <= 10; i++) {
            var imgRef = firebase.storage().ref(user.email + "/" + i + user.email[0])
            imgRef.getDownloadURL().then(function(url) {
                console.log('Downloading')
                console.log(url)
                
              }).catch(function(error) {
                switch (error.code) {
                  case 'storage/object-not-found':
                    console.log('storage/object-not-found')
                    break;
              
                  case 'storage/unauthorized':
                    console.log('User does not have permission to access the object')
                    break;
              
                  case 'storage/canceled':
                    console.log('canceled')
                    break;
              
                  case 'storage/unknown':
                    console.log('unknown')
                    break;
                }
              });
            }
        })
    }
    else {
        console.log('connect fail')
    }
})s

*/