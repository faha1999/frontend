// const button = document.querySelector('button');

// // button.onclick = function() {

// // }

// const buttonClickHandler = () => {
//   alert('Button was clicked!');
// };

// const anotherButtonClickHandler = () => {
//   console.log('Button was clicked!');
// };

// // button.onclick = buttonClickHandler;
// // button.onclick = anotherButtonClickHandler;

// // button.addEventListener('click', buttonClickHandler);

// // setTimeout(() => {
// //   button.removeEventListener('click', buttonClickHandler);
// // }, 2000);

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', boundFn);

// setTimeout(() => {
//   button.removeEventListener('click', boundFn);
// });

// // the event object

// const buttons = document.querySelectorAll('button');

// const buttonClickHandler = (event) => {
//   // event.target.disabled = true;
//   console.log(event);
// };

// const anotherButtonClickHandler = () => {
//   console.log('Button was clicked!');
// };

// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// });

// buttons.forEach((btn) => {
//   btn.addEventListener('mouseenter', buttonClickHandler);
// });

// window.addEventListener('scroll', (event) => {
//   console.log(event);
// });

// // start preventDefault()

const buttons = document.querySelector('button');

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log('Button was clicked!');
};

const boundFn = buttonClickHandler.bind(this);

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector('div');

div.addEventListener('mouseenter', (event) => {
  console.log('Clicked DIV');
  console.log(event);
});

buttons.addEventListener('click', function (event) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log('Clicked BUTTON');
  console.log(event);
  console.log(this);
});

const listItem = document.querySelectorAll('li');

// listItem.forEach((listItem) => {
//   listItem.addEventListener('click', (event) => {
//     event.target.classList.toggle('highlight');
//   });
// });

const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
  // form.submit();
  buttons.click();
});
