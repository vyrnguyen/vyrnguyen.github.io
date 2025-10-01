var messagesToType = [
  "engineer",
  "designer",
  "educator",
  "baker",
  "video game developer",
  "ally",
];

function typewriter(i, text, callback) {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

    setTimeout(function () {
      typewriter(i + 1, text, callback);
    }, 100);
  } else if (typeof callback == "function") {
    setTimeout(callback, 2000);
  }
}

function startTypingAnimation(i) {
  if (i >= messagesToType.length) {
    setTimeout(function () {
      startTypingAnimation(0);
    }, 2000);
  } else {
    typewriter(0, messagesToType[i], function () {
      startTypingAnimation(i + 1);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  startTypingAnimation(0);
});

// function suffix(number) {
//   if (number > 3 && number < 21) {
//     return "th";
//   }
//   switch (number % 10) {
//     case 1:
//       return "st";
//     case 2:
//       return "nd";
//     case 3:
//       return "rd";
//     default:
//       return "th";
//   }
// }

// window.onload = function () {
//   setInterval(function () {
//     const dateObj = new Date();
//     const date = dateObj.getDate();
//     const month = dateObj.toLocaleString("default", { month: "short" });
//     const year = dateObj.getFullYear();
//
//     document.getElementById("datetime").innerHTML =
//       `${month} ${date}${suffix(date)}, ${year}, at ${dateObj.toLocaleTimeString()}`;
//   }, 1000);
// };
