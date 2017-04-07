// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

// will need these variables if i want to record reaction time...
  // var clickedTime;
  // var createdTime;
  // var reactionTime;



// on user hitting play, puppy gif shows up only once
  $('#play').on('click', showPuppyGif);

  function showPuppyGif() {
    var firstTime = true;
    if (firstTime) {
      firstTime = false;
      var img = document.createElement("img");
      img.src = "images/puppy.gif"
      $('.images').append(img).addClass("images");
      $('.messages').append('<p> Game is Loading... </p>')
    }
  }

}); // ends doc on ready
