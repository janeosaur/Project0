// sanity check
console.log("JS is linked!");

$(document).on("ready", function(){

// will need these variables if i want to record reaction time...
  // var clickedTime;
  // var createdTime;
  // var reactionTime;

  var firstTime = true; // to ensure play button clickable only once

  $('.play').on('click', startGame);
  // have button disappear and replay button appear? - could remove firstTime variable this way


  function startGame() {
      showPuppyGif();
      randomPic();
      $('.play').fadeOut(5000);
  } // end of startGame

  // in randomizing loop...
  // var images = 'images/'+imageSource[i]
  // add class to images when appended to page, so that browser knows
  // it's bad to click on puppy image?

// idea: to have images stack on top of eachother: http://stackoverflow.com/questions/25393877/put-2-images-on-top-of-each-other

  // defining functions ------->
  function zombieProtocol() {
    $('.images').append('<img id="zombie" src="images/zombie1.png"/>');
    $('#zombie').on('click', function() {
      $('#zombie').remove();
    })
  }    // var randomTime = (Math.random()*15000)/2; // for zombies popping up?


  function showPuppyGif() {
      $('.loading').append('<p id="loading"> Game is Loading... </p>');
      // .fadeOut(4000);
      $('.loading').append('<img id="gif" src="images/puppy.gif"/>');
      hidePuppyGif();
      function hidePuppyGif() {
        $('.loading').children().fadeOut(4000, function() {
          $('.loading').empty();
        }) //end of hidePuppyGif
      }
    } // end of showPuppyGif


  var imageSource = ['images/zombie1.png', 'images/zombie2.png', 'images/zombie3.png', 'images/zombie4.png', 'images/zpuppy.jpg', 'images/puppy1.png', 'images/puppy2.png', ' images/puppy3.png', 'images/puppy4.png'];

  function randomPic() {
    var randomNum = Math.floor(Math.random()*imageSource.length);
    console.log(randomNum);
    $('.images').append("<img id='zombie' src=" + ' ' + imageSource[randomNum]+ ' '+ "/>");
    console.log("<img id='zombie' src=" + imageSource[randomNum] + "/>")
  }


  // not sure if this works yet - hasn't been called yet
  function showImage() {
    setTimeout(hidePuppy, 3000);
    function hidePuppy() {
      $('#puppy').children().fadeOut(4000, function() {
        $('#puppy').empty();
      }) //to hide puppy image>
    }
  } // ends showImages function



  // replay function --
  $('.replay').on('click', replayGame);

  function replayGame() {
    firstTime = true;
    $('.images').empty();
    $('.play').fadeIn(2000);
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
