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
function toRoomOne() {
  $("#narrative-one").hide();
  $("#room-one").fadeIn(2000);
};
// Beginning of Room ONE
function clickBoard(){
  $("#rm-one-message").show();
  $('#rm-one-message').text("Wifi Password: LoveYourClassmates");
  $('html, body').animate({scrollTop:$(document).height()}, 'fast');
};

function clickPC(){
  $("#rm-one-message").show();
  $("#form-wifi").show();
  $('#rm-one-message').text("Enter Wifi Password:");
  $('html, body').animate({scrollTop:$(document).height()}, 'fast');
};

function clickClorox(){
  $("#rm-one-message").show();
  $("#form-wifi").hide();
  $("#email").hide();
  $('#rm-one-message').text("You found the spare key!")
  $('html, body').animate({scrollTop:$(document).height()}, 'fast');
  setTimeout(function(){
    $("#room-one").hide();
    $("#narrative-two").fadeIn(2000);
  } , 3000);
};
function toRoomTwo() {
  $("#narrative-two").hide();
  $("#room-two").fadeIn(2000);
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
// End of Room ONE


//Hangman Game
// window.onload = function () {
function startHangman() {
  $(".wrapper").show();
  $('html, body').animate({scrollTop:$(document).height()
  }, 'slow');

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is FIFA World Cup Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Monsters";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Intro To Programming";
    }
  }

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }


   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };

    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }

  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke();
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };

   frame2 = function() {
     draw (10, 0, 10, 600);
   };

   frame3 = function() {
     draw (0, 5, 70, 5);
   };

   frame4 = function() {
     draw (60, 5, 60, 15);
   };

   torso = function() {
     draw (60, 36, 60, 70);
   };

   rightArm = function() {
     draw (60, 46, 100, 50);
   };

   leftArm = function() {
     draw (60, 46, 20, 50);
   };

   rightLeg = function() {
     draw (60, 70, 100, 100);
   };

   leftLeg = function() {
     draw (60, 70, 20, 100);
   };

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Play
  play = function () {
    categories = [
        ["colombia", "portugal", "argentina","brasil", "spain", "belgium", "germany"],
        ["chupacabra", "zombie", "bigfoot", "mummy", "vampire", "werewolf", "godzilla"],
        ["github", "constuctor", "bootstrap", "javascript", "prototypes", "looping", "function"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();

  // Hint

    hint.onclick = function() {

      hints = [
        ["The Coffee Growers", "The Navigators", "The White and Sky-Blue", "Little Canary", "The Red One", "The Red Devils", "The October Fest"],
        ["Mexican myth or vampiric creature", "Walking corpse without soul", "Harry elusive giant", "Ancient Egyptian corpse", "Blood drinking fanged creature", "Man turns into beast during fullmoon", "A monster of Japanese origin"],
        ["Create repositories and stores codes", "A function that can be invoked to create new objects", "Front-end framework", "Programming language used to make web pages interactive", "Is an object from which other objects inherit methods", "Repeating the same block of code until it is specified to stop", "Block of code that performs an action and returns a result" ]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}

$(document).ready(function(){
  $("#form-wifi").submit(function(event){
    event.preventDefault();
    var wifiPassword = $("input#wifi").val();
    if(wifiPassword === "LoveYourClassmates"){
      $("#email").show();
      $("#clorox").show();
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
    } else {
      $("#rm-one-message").text("Please enter the correct password!");
    };
    return false;
  });
});
