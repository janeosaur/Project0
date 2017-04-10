// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

  // play button
  $('.play').on('click', function startGame() {
      loadGame();
      randomPic();
      showPic();
      $('.play').fadeOut(5000); // removes play button when pressed
  })

  // replay button
  $('.replay').on('click', replayGame);

    function replayGame() {
      $('.images').empty();
      $('#popup').empty();
      $('.play').fadeIn(1000);
    }

  // loading screen
  function loadGame() {
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

    if (Math.random() > 0.35) {
      setTimeout(zombieProtocol, randomTime);
    } else {
      setTimeout(puppyProtocol, randomTime);
    }
  } 

  function zombieProtocol() {
    var randomIndex = Math.floor(Math.random()*zombieImages.length);
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomIndex]+ ' '+ "/>");
    $('#zombie').on('click', function() {
      $('#zombie').remove();
      // randomPic(); // works, but goes on infinite loop?
      // count num of zombies
    });
  }

  function puppyProtocol() {
    var randomIndex = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomIndex]+ "'/>");
    $(document).keypress(function(e) { // on enter keypress, puppy image gets removed
      if(e.which == 13) {
        $('#puppy').remove();
        // randomPic(); // works, but goes on infinite loop?
      }
    });

    $('#puppy').on('click', function murder(){ // if puppy gets clicked, then loser game.
      console.log('puppy murder');
      $('#popup').append('<div class="messages"> YOU KILLED THIS INNOCENT PUPPY :( </div>'); // try to make this popup message?
      replayGame();
    })
    }  //end of puppyProtocol



   // things to work on:
   // 1. random location & size? for images
   // 2. pop up messages for game loss
   // 3. counter to count num zombies killed
   // 4. gun image to mimic aiming?
   // 5. reaction time
   // 6. zombie scream audio
   // 7. sound on/off feature


}); // ends doc on ready
