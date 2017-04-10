// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

  // play button
  $('.play').on('click', function startGame() {
      loadingScreen();
      randomPic();
      $('.play').fadeOut(3000); // removes play button when pressed
  })

  function replayGame() {
    $('.images').empty();
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
  var zombieImages = ['images/zombie1.png', 'images/zombie2.png', 'images/zombie3.png'];
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
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomIndex]+ ' '+ ">");

    // define zombie clicking function
    $('#zombie').on('click', function(event) {
      clickedTime = Date.now();
      reactionTime = (clickedTime - createdTime)/1000;
      $('.times').append(`<p> ${reactionTime} seconds </p>`);
      event.target.style.display = 'none';
      // replayGame();
    });
  }

  function puppyProtocol() {
    var randomIndex = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomIndex]+ "'>");

    // define puppy saving function
    $(document).keypress(function(e) { // on enter keypress, puppy image gets removed
      if(e.which == 13) {
        $('#puppy').empty();
      };
      replayGame();
    });

    $('#puppy').on('click', function murder(){ // if puppy gets clicked, then loser game.
      $('.messages').prepend('<h1 class="killer"> You killed an innocent puppy! =( </h1>');
      $('.savecount').empty();
      replayGame();
    });
  }


   // things to work on:
   // 1. instead of appending <p> message, have pop up for game loss
   // 3. counter to count num zombies killed
   // 4. gun image to mimic aiming?
   // 6. zombie scream audio
   // 7. sound on/off feature


}); // ends doc on ready
