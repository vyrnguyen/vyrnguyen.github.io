document.addEventListener("DOMContentLoaded", function(event) {
  var messagesToType = ["engineer", "designer", "educator", "baker", "video game developer", "ally"];
  
  function typewriter(i, text, callback) {
    if (i < (text.length)) {
      document.getElementById("typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

      setTimeout(function() {
        typewriter(i + 1, text, callback)
      }, 100);
    } else if (typeof callback == "function") {
      setTimeout(callback, 2000);
    }
  } 

  function startTypingAnimation(i) {
    if (i >= messagesToType.length) {
      setTimeout(function() {
        startTypingAnimation(0);
      }, 2000);
    } else {
      typewriter(0, messagesToType[i], function() {
        startTypingAnimation(i + 1)});
      }
    }
    startTypingAnimation(0);
});

