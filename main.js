// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

  // play button
  $('.play').on('click', function startGame() {
      showPuppyGif();
      randomPic();
      $('.play').fadeOut(5000); // removes play button when pressed
  })

  // replay button
  $('.replay').on('click', replayGame);

  function replayGame() {
    $('.images').empty();
    $('#popup').empty();
    $('.play').fadeIn(1000);
  }

  function showPuppyGif() {     // loading screen
    $('.messages').append('<p id="loading"> Game is Loading... </p>');
    $('.messages').append('<img id="gif" src="images/puppy.gif"/>');
    $('.messages').children().fadeOut(2000, function() {
      $('.messages').empty();
      })
    }

  // defining variables & functions ------->
  var zombieImages = ['images/zombie1.png', 'images/zombie2.png', 'images/zombie3.png', 'images/zombie4.png'];
  var puppyImages = ['images/puppy1.png', 'images/puppy2.png', ' images/puppy3.png', 'images/puppy4.png'];


  function randomPic() {
    var randomTime = 2000 + Math.random()*3000;

    if (Math.random() > 0.35) { // zombie's turn
      setTimeout(zombieProtocol, randomTime);
    } else { // pupppy's turn
      setTimeout(puppyProtocol, randomTime);
    }
  } // end of randomPic

  function zombieProtocol() {
    var randomIndex = Math.floor(Math.random()*zombieImages.length);
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomIndex]+ ' '+ "/>");
    $('#zombie').on('click', function() {
      $('#zombie').remove();
      randomPic();
      // count num of zombies
    });
  }

  function puppyProtocol() {
    var randomIndex = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomIndex]+ "'/>");
    $(document).keypress(function(e) { // on enter keypress, puppy image gets removed
      if(e.which == 13) {
        $('#puppy').remove();
        randomPic();
      }
    });

    $('#puppy').on('click', function murder(){ // if puppy gets clicked, then loser game.
      console.log('puppy murder');
      $('#popup').append('<div class="messages"> YOU KILLED THIS INNOCENT PUPPY :( </div>'); // try to make this popup message?
      replayGame();
    })
    }  //end of puppyProtocol





  // will need these variables if i want to record reaction time...
    var clickedTime;
    var createdTime;
    var reactionTime;



// zombie, puppy pictures in pop up in diff areas? grid?
// might need to get rid of paragraph loser message.
// on click of zombie killing, could link that to next function call.

// test


	function makeBox() {
		var time=Math.random()*3000;

		setTimeout(function() {

			if (Math.random()>0.5) {
        // choosing type of pic? could use this for zombie or puppy
				$("#box").style.borderRadius="100px";
				} else {
				$("#box").style.borderRadius="0";
				}




			createdTime=Date.now();

		}, time);

	}

  //

	$("#box").on('click', function() {

		var clickedTime = Date.now();

		var reactionTime = (clickedTime-createdTime)/1000;

		$('.reaction').append(reactionTime + "seconds");

		this.style.display="none";

		// makeBox();
	})

	// makeBox();





   // things to work on:
   // 1. random location & size? for images
   // 2. pop up messages for game loss
   // 3. counter to count num zombies killed
   // 4. gun image to mimic aiming?
   // 5. reaction time
  // 6. zombie scream audio
  // 7. sound on/off feature


}); // ends doc on ready
