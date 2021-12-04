// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// start
//////// push(), pop(), unshift(), shift() - Adding & Removing Elements //////

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'coding';
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removeElement = hobbies.splice(-2, 1);
// console.log(hobbies);

// start
//// Selecting Ranges & Creating Copies with slice() ////
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);

// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'John' }, { name: 'Dou' }];
// console.log(personData.indexOf({ name: 'Dou' }));

// const dou = personData.find((person, idx, persons) => {
//   return person.name === 'Dou';
// });

// dou.name = 'Max';

// console.log(dou, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'John';
// });

// console.log(maxIndex);

//  start
// forEach() method

// const prices = [10.99, 5.99, 3.99, 6.99];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

// start transforming data with map()

// const prices = [10.99, 5.99, 3.99, 6.99];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrices: price * (1 + tax) };
//   return priceObj;
// });

// // console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

// // console.log(sortedPrices.reverse());
// console.log(sortedPrices);

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// });

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price;
// // });

// // console.log(sum);

// // const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
// //   return prevValue + curValue;
// // }, 0);

// // shorted method
// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = 'new york;10.65,7790';

// const transformedData = data.split(';');
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// const nameFragments = ['John', 'Dou'];
// const name = nameFragments.join(' ');
// console.log(name);

// // spread operator(...)
// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr');
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: 'John', age: 30 },
//   { name: 'Dou', age: 31 }
// ];
// const copiedPersons = persons.map((person) => ({
//   name: person.name,
//   age: person.age
// }));

// persons.push({ name: 'Anna', age: 29 });
// persons[0].age = 31;

// console.log(persons, copiedPersons);

// started Array destructuring
const nameData = ['John', 'Dou', 'Mr', 30];

const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);
