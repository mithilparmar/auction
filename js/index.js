var firebaseConfig = {
    apiKey: "AIzaSyA1qedikZYzWMWH7fFmnNoNSRSGr2CU27g",
    authDomain: "fifa-auction.firebaseapp.com",
    databaseURL: "https://fifa-auction.firebaseio.com",
    projectId: "fifa-auction",
    storageBucket: "fifa-auction.appspot.com",
    messagingSenderId: "366285181838",
    appId: "1:366285181838:web:878b8ed9cd9d735039cadf",
    measurementId: "G-7EJK3JT4HC"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();

function login() {

    var user_email = document.getElementById("email");
    var user_password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(user_email, user_password);
    promise.catch(e => alert(e.message));

    alert("Signed In " + user_email);

}