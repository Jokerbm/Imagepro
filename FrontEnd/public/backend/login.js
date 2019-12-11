var firebaseConfig = {
    apiKey: "AIzaSyCDmoqdXeDM7gsKq304pNlGb3bS0U86AwE",
    authDomain: "psit-project.firebaseapp.com",
    databaseURL: "https://psit-project.firebaseio.com",
    projectId: "psit-project",
    storageBucket: "psit-project.appspot.com",
    messagingSenderId: "42323632843",
    appId: "1:42323632843:web:2daf449242802c2d09314e",
    measurementId: "G-GNZVEQRZZ2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

let myFirebase = firebase.database();
let dataRef = myFirebase.ref('/psit-project');
document.getElementById("submit-login").onclick = function () {
    var lusername = document.getElementById('username').value;
    var lpassword = document.getElementById('password').value;
    
    dataRef.pull({
        Username: lusername,
        Password: lpassword
    });
};
dataRef.limitToLast(3).on('child_added', function (childSnapshot) {
    let item = childSnapshot.val()
    if (item.link != "" && item.link[0] == "h") {
        document.getElementById('dataRow').innerHTML += "<tr><td>" + escapeHtml(item.name) + "</td><td>" +
                escapeHtml(item.comment) + "</td><td>" + "<img src=" + escapeHtml(item.link) + " + width=" + 50 + " + height=" + 50 + ">" + "</td></tr>"
    }
    else {
        document.getElementById('dataRow').innerHTML += "<tr><td>" + escapeHtml(item.name) + "</td><td>" +
                escapeHtml(item.comment) + "</td><td>" + "No Photo" + "</td></tr>"
    }
});