function showCoords1(event) {
  var cX = event.clientX;
  var cY = event.clientY;
  var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  $('#rm-one-message').text(coords1 + ', ' + coords2);

  // if(cX > 200 && cY > 400) {
  //   alert("BOOOOOOOOOO");
  // };
};

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
