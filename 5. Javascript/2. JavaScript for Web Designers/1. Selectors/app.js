var firstItem = document.getElementById('item-1'),
  myList = document.getElementsByClassName('mylist'),
  paragraphs = document.getElementsByTagName('p'),
  images = document.querySelectorAll('img');

firstItem.style.color = 'red';
myList[1].style.display = 'none';

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'green';
}
