var firebaseConfig = {
    apiKey: "AIzaSyAkyZ8C6Y0fkkLDsEI-zgJghxFc4QTZjpk",
    authDomain: "portfolio-c36fe.firebaseapp.com",
    databaseURL: "https://portfolio-c36fe.firebaseio.com",
    projectId: "portfolio-c36fe",
    storageBucket: "",
    messagingSenderId: "1097390643717",
    appId: "1:1097390643717:web:788aa588b015c4a0"
  };
firebase.initializeApp(firebaseConfig);
/* loading information */
firebase.database().ref('settings/behance').on('value', function(snapshot) {
    $('.behance').attr("onclick", "window.location.href = '"+ snapshot.val() +"';");
});
firebase.database().ref('settings/youtube').on('value', function(snapshot) {
    $('.youtube').attr("onclick", "window.location.href = '"+ snapshot.val() +"';");
});
firebase.database().ref('settings/github').on('value', function(snapshot) {
    $('.github').attr("onclick", "window.location.href = '"+ snapshot.val() +"';");
});
firebase.database().ref('settings/linkedin').on('value', function(snapshot) {
    $('.linkedin').attr("onclick", "window.location.href = '"+ snapshot.val() +"';");
});
firebase.database().ref('settings/instagram').on('value', function(snapshot) {
    $('.instagram').attr("onclick", "window.location.href = '"+ snapshot.val() +"';");
});
firebase.database().ref('settings/phone').on('value', function(snapshot) {
    $('.phone').html(snapshot.val());
});
firebase.database().ref('settings/mail').on('value', function(snapshot) {
    $('.mail').html(snapshot.val());
});
firebase.database().ref('settings/address').on('value', function(snapshot) {
    $('.address').html(snapshot.val());
});
firebase.database().ref('settings/about/a1').on('value', function(snapshot) {
    $('.a1').html(snapshot.val());
});
firebase.database().ref('settings/about/a2').on('value', function(snapshot) {
    $('.a2').html(snapshot.val());
});
firebase.database().ref('settings/about/a3').on('value', function(snapshot) {
    $('.a3').html(snapshot.val());
});