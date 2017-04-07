// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

// will need these variables if i want to record reaction time...
  // var clickedTime;
  // var createdTime;
  // var reactionTime;

  var firstTime = true; // to ensure play button clickable only once

  $('#play').on('click', showPuppyGif);

  function showPuppyGif() {
    if (firstTime) {
      firstTime = false;
      var img = document.createElement("img");
      img.src = "images/puppy.gif"
      $('.images').append(img).addClass("gif").fadeOut(4500);
      $('.messages').append('<p> Game is Loading... </p>').fadeOut(4000);
    } else {
      console.log('press replay to play again')
    } // next: animate the ellipsis and have pop up image to instruct player to press replay
  } // ends showPuppyGif function on play button click

// after loading screen fades out.. have random (? or looped) zombie image appear -
//  would this need to be linked with the play on click function??
// on click, image disappears and new image loads after a few,random seconds





}); // ends doc on ready
