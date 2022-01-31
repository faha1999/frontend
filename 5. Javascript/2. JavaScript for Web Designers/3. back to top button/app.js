// var btt = document.getElementById('back-to-top'),
//   body = document.body,
//   docElem = document.documentElement,
//   offset = 100,
//   isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
//   scrollPos,
//   docHeight;

// // Calculate the document height
// docHeight = Math.max(
//   body.scrollHeight,
//   body.offsetHeight,
//   docElem.clientHeight,
//   docElem.scrollHeight,
//   docElem.offsetHeight
// );
// if (docHeight != 'undefined') {
//   offset = docHeight / 4;
// }

// // Add scroll event listener
// window.addEventListener('scroll', function (event) {
//   scrollPos = body.scrollTop || docElem.scrollTop;

//   btt.className = scrollPos > offset ? 'visible' : '';
// });

// // Add click event listener
// btt.addEventListener('click', function (event) {
//   event.preventDefault();

//   if (isFirefox) {
//     docElem.scrollTop = 0;
//   } else {
//     body.scrollTop = 0;
//   }
// });

mybutton = document.getElementById('back-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
