// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

  // play button
  $('.play').on('click', function startGame() {
      loadingScreen();
      randomPic();
      $('.play').fadeOut(5000); // removes play button when pressed
  })

  function replayGame() {
    $('.images').empty();
    $('#popup').empty();
    $('.play').fadeIn(1000);
  }

  function loadingScreen() {     // loading screen
    $('.messages').append('<p id="loading"> Game is Loading... </p>');
    $('.messages').append('<img id="gif" src="images/puppy.gif"/>');
    $('.messages').children().fadeOut(2000, function() {
      $('.messages').empty();
      })
    }

  // defining variables & functions ------->
  var zombieImages = ['images/zombie1.png', 'images/zombie2.png'];
  var puppyImages = ['images/puppy1.png', 'images/puppy2.png'];


  function randomPic() {
    var randomTime = 2000 + Math.random()*3000;

    if (Math.random() > 0.45) {
      setTimeout(zombieProtocol, randomTime);
    } else {
      setTimeout(puppyProtocol, randomTime);
    }
  } // end of randomPic

  function zombieProtocol() {
    var createdTime = Date.now();
    var randomIndex = Math.floor(Math.random()*zombieImages.length);
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomIndex]+ ' '+ "/>");

    // define zombie clicking function
    $('#zombie').on('click', function(event) {
      clickedTime = Date.now();
      reactionTime = (clickedTime - createdTime)/1000;
      $('.reaction').append('<p>  ' +reactionTime + ' seconds &nbsp &nbsp </p>');
      event.target.style.display = 'none';
      replayGame();
    });
  }

   // can the popup have link to go to SPCA? or any API ?

// have either a puppy or zombie show up, challenge user to kil zombie or save puppy as fast as possible.
// have name input that logs all users, and best score will show?

  function puppyProtocol() {
    var randomIndex = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomIndex]+ "'/>");

    // define puppy saving function
    $(document).keypress(function(e) { // on enter keypress, puppy image gets removed
      if(e.which == 13) {
        $('#puppy').remove();
      };
      replayGame();
    });

    $('#puppy').on('click', function murder(){ // if puppy gets clicked, then loser game.
      $('.gameboard').prepend('<img id="popup" src="images/stop.png"/>');
      replayGame();
    });
  }


   // things to work on:
   // 1. random location & size? for images
   // 2. pop up messages for game loss
   // 3. counter to count num zombies killed
   // 4. gun image to mimic aiming?
   // 5. reaction time
   // 6. zombie scream audio
   // 7. sound on/off feature


}); // ends doc on ready
