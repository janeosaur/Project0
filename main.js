// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

// will need these variables if i want to record reaction time...
  // var clickedTime;
  // var createdTime;
  // var reactionTime;

  var firstTime = true; // to ensure play button clickable only once

  $('#play').on('click', startGame);

  function startGame() {
    setTimeout(showPuppyGif, 500);
    showImages();
    // setInterval(showImages, 5000); // try to make interval times random?

  } // ends startGame function on play button click


  // in randomizing loop...
  // var images = 'images/'+imageSource[i]
  // add class to images when appended to page, so that browser knows
  // it's bad to click on puppy image?

// idea: to have images stack on top of eachother: http://stackoverflow.com/questions/25393877/put-2-images-on-top-of-each-other

  // defining functions
  function showPuppyGif() {
    if (firstTime) {
      firstTime = false;
      $('.images').append('<img id="gif" src="images/puppy.gif"/>');
      $('.messages').append($('<p> Game is Loading... </p>', {id: 'loading'}));
    } else {
      console.log('press replay to play again')
    } // next: animate the ellipsis and have pop up image to instruct player to press replay
  } // end of showPuppyGif

    // holds gallery of images in array
  var imageSource = ['zombie1.png', 'zombie2.png', 'zombie3.png', 'zombie4.png', 'zpuppy.jpg', 'puppy1.png', 'puppy2.png', 'puppy3.png', 'puppy4.png'];

  function showImages() {

    setTimeout(hidePuppy, 3000);
    function hidePuppy() {
      $('#puppy').children().fadeOut(2000, function() {
        $('#puppy').empty();
      }) //to hide puppy image>
    }
  } // ends showImages function



  // replay function --
  function replay() {
    firstTime = true;
  }

}); // ends doc on ready


// tried to make image object constructor to hold id and src but this didn't append to page...
  // function ImageConstruct(idname, srcpath) {
  //   this.id = idname,
  //   this.src = srcpath
  // }
  // var loopedImage = imageSource[0] // try to loop...
  // var zombie = new ImageConstruct('zombie', loopedImage)
  // $('body').append($('<img>', zombie));
