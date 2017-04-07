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
      $('.images').append(img).addClass("images").fadeOut(4500);
      $('.messages').append('<p> Game is Loading... </p>').fadeOut(4000);

    }  // idea: animate the ellipsis
  } // ends showPuppyGif function on play button click

  // to time out loading image and text



}); // ends doc on ready
