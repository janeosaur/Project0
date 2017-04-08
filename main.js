// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

  function showPuppyGif() {     // loading screen
    $('.loading').append('<p id="loading"> Game is Loading... </p>');
    $('.loading').append('<img id="gif" src="images/puppy.gif"/>');
    $('.loading').children().fadeOut(4000, function() {
      $('.loading').empty();
      })
    }

// will need these variables if i want to record reaction time...
  // var clickedTime;
  // var createdTime;
  // var reactionTime;

 // things to work on:
 // 1. random location & size? for images
 // 2. pop up messages for game loss
 // 3. counter to count num zombies killed
 // 4. gun image to mimic aiming?
 // 5. reaction time

  $('.play').on('click', function startGame() {
      showPuppyGif();
      randomPic(); // may
      $('.play').fadeOut(5000);
  })

  // defining functions ------->
  var zombieImages = ['images/zombie1.png', 'images/zombie2.png', 'images/zombie3.png', 'images/zombie4.png', 'images/zombie.gif'];
  var puppyImages = ['images/puppy1.png', 'images/puppy2.png', ' images/puppy3.png', 'images/puppy4.png'];


  function randomPic() {
    var randomNum = Math.floor(Math.random()*zombieImages.length);
    if (randomNum % 2 === 0) { // zombie's turn!
      zombieProtocol();
    } else {
      puppyProtocol();
    }
  } // end of randomPic

  function puppyProtocol() {
    var randomNum = Math.floor(Math.random()*puppyImages.length);
    $('.images').append("<img id='puppy' src='" + puppyImages[randomNum]+ "'/>");
    $('#puppy').on('click', murder); // if puppy gets clicked, then game lost.
    $(document).keypress(function(e) {
      if(e.which == 13) {
        console.log('You saved a puppy!'); //test
        $('#puppy').remove();
      }
    });
  }  //end of puppyProtocol

  function murder() {
    console.log('You killed an innocent puppy'); // test
    replayGame();
    // gameover popup? maybe an api to local SPCA?
  } // end of puppy click murder

  function zombieProtocol() {
    var randomNum = Math.floor(Math.random()*zombieImages.length); // need to pull this from above
    $('.images').append("<img id='zombie' src=" + ' ' + zombieImages[randomNum]+ ' '+ "/>");
    $('#zombie').on('click', function() {
      $('#zombie').remove();
      // count num of zombies
    })
  }    // var randomTime = (Math.random()*15000)/2; // for zombies popping up?





  // replay function --
  $('.replay').on('click', function replayGame() {
    $('.images').empty();
    $('.play').fadeIn(1000);
  });

}); // ends doc on ready
