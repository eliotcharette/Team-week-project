function showCoords1(event) {
  var cX = event.clientX;
  var cY = event.clientY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  $('#rm-one-message').text(coords1);
};

function clickRoomOne(event) {
  var cX = event.clientX;
  var cY = event.clientY;
  if(cX > 930 && cX < 1110 && cY > 195 && cY < 530){
    $("#rm-one-message").show();
    $('#rm-one-message').text("Wifi Password: LoveYourClassmates");
    $('html, body').animate({scrollTop:$(document).height()}, 'fast');

  };

  if(cX > 495 && cX < 645 && cY > 160 && cY < 370){
    $("#rm-one-message").show();
    $("#form-wifi").show();
    $('#rm-one-message').text("Enter Wifi Password:");
    $('html, body').animate({scrollTop:$(document).height()}, 'fast');
  };
}

var slamDoor = new Audio("audio/close_door.mp3");
var creakingDoor = new Audio("audio/squeaking_door.mp3");

function startGame(event) {
  slamDoor.play();
  setTimeout(function() {
    creakingDoor.play();
  }
  , 3000);
  $("section").hide();
  $("#narrative-one").fadeIn(2000);
  // startClock();
};
function toRoomOne(event) {
  $("#room-one").fadeIn(2000);
  $("#narrative-one").hide();
};

// Set the date we're counting down to
// var countDownDate = new Date("Sep 5, 2018 15:37:25").getTime();
var countDownDate = new Date().getTime() + 360000;
// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = makeMeTwoDigits(minutes) + ":" + makeMeTwoDigits(seconds);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function makeMeTwoDigits(n){
    return (n < 10 ? "0" : "") + n;
}
