function showCoords1(event) {
  var cX = event.clientX;
  var cY = event.clientY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  $('#rm-one-message').text(coords1);

  // if(cX > 200 && cY > 400) {
  //   alert("BOOOOOOOOOO");
  // };
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
};
function toRoomOne(event) {
  $("#room-one").fadeIn(2000);
  $("#narrative-one").hide();
};
