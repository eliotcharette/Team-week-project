function showCoords1(event) {
  var cX = event.clientX;
  var cY = event.clientY;
  // var coords1 = "client - X: " + cX + ", Y coords: " + cY;
  // var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
  // document.getElementById("demo").innerHTML = coords1 + "<br>" + coords2;
  slamDoor.play();
  setTimeout(function() {
    creakingDoor.play();
  }
  , 3000);
  // if(cX > 200 && cY > 400) {
  //   alert("BOOOOOOOOOO");
  // };
};

var slamDoor = new Audio("audio/close_door.mp3");
var creakingDoor = new Audio("audio/squeaking_door.mp3");
