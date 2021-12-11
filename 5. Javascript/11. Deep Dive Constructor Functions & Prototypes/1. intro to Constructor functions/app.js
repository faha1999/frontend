// // START using class
// class Person {
//   name = 'Max';

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// const person = new Person();
// person.greet();

// //  Start Constructor function
// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   }
// };

// console.dir(Person);

// // const person = new Person();
// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);

// // Start prototypes
// class AgedPerson {
//   printAge() {
//     console.log(this.age);
//   }
// }

// class person extends AgedPerson {
//   name = 'Max';

//   constructor() {
//     super();
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   }
// }

// // start prototype chain & global object

// function Person() {
//   this.age = 30;
//   this.name = 'Max';
//   this.greet = function () {
//     console.log(
//       'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
// }

// Person.describe = function () {
//   console.log('Creating persons...');
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.length);
// console.log(p.toString());
// console.log(p.__proto__);
// const p2 = new p.__proto__.constructor();
// console.dir(Object.prototype);

// // Classes & prototype

class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
    // this.greet = function() {... }
  }

  // greet = () => {
  //   console.log(
  //     'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // }

  greet() {
    console.log(
      'Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// const p = new Person();
// const p2 = new Person();
// p.greet();
// console.log(p);

// const button = document.getElementById('btn');
// button.addEventListener('click', p.greet.bind(p));

// // start setting & getting prototype

const course = {
  // new Object()
  title: 'JavaScript',
  stage: 11
};

// console.log(Object.getPrototypeOf(course));
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printStage: function () {
    console.log(`${this.stage}/32`);
  }
});

const learner = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    }
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true
    }
  }
);

// learner.name = 'Max';

Object.defineProperty(learner, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

learner.printProgress();

console.log(learner);

course.printStage();
