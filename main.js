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
      $('.images').append(img).addClass("images");
      $('.messages').append('<p> Game is Loading... </p>')
    } else {
      // console.log('you already pressed play') // test
    }
  } // ends showPuppyGif function on play button click

}); // ends doc on ready
