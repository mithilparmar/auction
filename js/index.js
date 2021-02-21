firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }
  });



function login() {

    var user_email = document.getElementById("email").value;
    var user_password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(user_email, user_password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });

}