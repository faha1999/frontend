// // pure function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 5));
console.log(add(12, 15));

// // Impure function

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// // function side-effects

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'cooking'];

function printHobbies(h) {
  h.push('New Hobby');
  console.log(h);
}

printHobbies(hobbies);

// // Factory function

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const CalculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let username = 'John';

function greetUser() {
  let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'John Dou';

username = 'Dou';

greetUser();

// //Start recursion

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2*2*2

const myself = {
  name: 'John',
  friends: [
    {
      name: 'Dou',
      friends: [
        {
          name: 'David',
          friends: [
            {
              name: 'Heirs'
            },
            {
              name: 'Amalia'
            }
          ]
        }
      ]
    },
    {
      name: 'julia'
    }
  ]
};

function printFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFriendNames(friend));
  }
  return collectedNames;
}

console.log(printFriendNames(myself));
