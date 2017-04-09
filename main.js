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
    var randomNum = Math.floor(Math.random()*1000);
    var randomTime = 2000 + Math.random()*3000;

    if (randomNum % 2 === 0) { // zombie's turn
      setTimeout(zombieProtocol, randomTime);
    } else { // pupppy's turn
      setTimeout(puppyProtocol, randomTime);
    }
  } // end of randomPic

  function zombieProtocol() {
    var randomNum = Math.floor(Math.random()*zombieImages.length); // need to pull this from above
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomNum]+ ' '+ "/>");
    $('#zombie').on('click', function() {
      $('#zombie').remove();
      // count num of zombies
    });
  }

  // how to continue game? document.onclick's nested in other on clicks/





  function puppyProtocol() {
    var randomNum = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomNum]+ "'/>");
    $(document).keypress(function(e) { // on enter keypress, puppy image gets removed
      if(e.which == 13) {
        $('#puppy').remove();
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


	// function makeBox() {
	// 		var time=Math.random()*3000;
  //
	// 	setTimeout(function() {
  //
	// 		if (Math.random()>0.5) {
  //       // choosing type of pic? could use this for zombie or puppy
	// 			$("#box").style.borderRadius="100px";
	// 			} else {
	// 			$("#box").style.borderRadius="0";
	// 			}
  //
	// 		var top = Math.random()*300;
	// 		var left= Math.random()*500;
  //
	// 		$("#box").style.top = top + "px";
	// 		$("#box").style.left = left + "px";
  //
	// 		$("#box").style.backgroundColor=getRandomColor();
  //
	// 		$("#box").style.display="block";
  //
	// 		createdTime=Date.now();
  //
	// 	}, time);
  //
	// }
  //
  // //
  //
	// $("#box").on('click', function() {
  //
	// 	var clickedTime = Date.now();
  //
	// 	var reactionTime = (clickedTime-createdTime)/1000;
  //
	// 	$('.reaction').append(reactionTime + "seconds");
  //
	// 	this.style.display="none";
  //
	// 	makeBox();
	// })

	// makeBox();





   // things to work on:
   // 1. random location & size? for images
   // 2. pop up messages for game loss
   // 3. counter to count num zombies killed
   // 4. gun image to mimic aiming?
   // 5. reaction time



}); // ends doc on ready
