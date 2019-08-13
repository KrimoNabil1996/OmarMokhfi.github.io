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

/* loading design 1 */
firebase.database().ref('design1/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var design1 = userSnapshot.val();
        var parent = document.createElement("div");
        parent.setAttribute("class", "card text-white");
        parent.innerHTML = '<img class="card-img" src="'
        + design1.image + '" />'
        + '<div class="card-img-overlay text-left">'
            +'<h2 class="card-title">'+design1.title+'</h2>'
            +'<p class="card-text">'+ design1.desc +'</p>'
        +'</div>';

        document.getElementById("design1").append(parent);
    });
    $('.design1').slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        infinite: true,
        pauseOnHover: true,
        swipe: true
    });
});
/* loading design 2 */
firebase.database().ref('design2/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var design2 = userSnapshot.val();
        var parent = document.createElement("div");
        parent.setAttribute("class", "card text-white");
        parent.innerHTML = '<img class="card-img" src="'
        + design2.image + '" />'
        + '<div class="card-img-overlay text-left">'
            +'<h2 class="card-title">'+design2.title+'</h2>'
            +'<p class="card-text">'+ design2.desc +'</p>'
        +'</div>';

        document.getElementById("design2").append(parent);
    });
    $('.design2').slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        infinite: true,
        pauseOnHover: true,
        swipe: true
    });
});
/* loading projects */
firebase.database().ref('projects/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var proj = userSnapshot.val();
        var parent = document.createElement("div");
        parent.setAttribute("class", "card text-white");
        parent.innerHTML = '<img class="card-img" src="'+ proj.image +'" />'
         + '<div class="card-img-overlay text-left">'
         + '<h2 class="card-title">'+ proj.title +'</h2>'
         + '<p class="card-text">'+ proj.desc +'</p>'
            + '<hr align="left" style="background: white;width: 40%;" />'
            + '<span>'+ proj.techs +'</span><br><br>'
            + '<a class="btn btn-outline-light" href="'+ proj.link +'">More</a>'
        + '</div>';

        document.getElementById("projects").append(parent);
    });
    $('.projects').slick({
        accessibility: true,
        autoplay: true,
        dots: true,
        infinite: true,
        mobileFirst: true,
        pauseOnHover: true,
        swipe: true,
        vertical: true
    });
});
