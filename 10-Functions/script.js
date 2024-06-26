'use strict';

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
}

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

// How Passing Arguments Works: Value vs. Reference
console.log('--------------------');
console.log('How Passing Arguments Works: Value vs. Reference');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    // if (passenger.passport === 24739479284) {
    //     alert('Check in');
    // } else {
    //     alert('Wrong passport!');
    // }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
}

newPassport(jonas);
checkIn(flight, jonas);

// First-Class and Higher-Order Functions
console.log('--------------------');
console.log('First-Class and Higher-Order Functions');

//Functions Accepting Callback Functions
console.log('--------------------');
console.log('Functions Accepting Callback Functions');

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

const high5 = function () {
    console.log('👋');
}

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


// Functions Returning Functions
console.log('--------------------');
console.log('Functions Returning Functions');

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
console.log('--------------------');
console.log('Challenge');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

// The call and apply Methods
console.log('--------------------');
console.log('The call and apply Methods');

const lufthansa = { 
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = { 
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = { 
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// The bind Method
console.log('--------------------');
console.log('The bind Method');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
console.log('--------------------');
console.log('Partial Application');

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Coding Challenge #1
console.log('--------------------');
console.log('Coding Challenge #1');

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
        }

        this.displayResults();
        this.displayResults('string');
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// Immediately Invoked Function Expressions (IIFE)
console.log('--------------------');
console.log('Immediately Invoked Function Expressions (IIFE)');

const runOnce = function () {
    console.log('This will never run again');
}
runOnce();

(function () {
    console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);



// Closures
console.log('--------------------');
console.log('Closures');

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// More Closures Examples
console.log('--------------------');
console.log('More Closures Examples');

// Example 1
let f1;

const g1 = function () {
    const a = 23;
    f1 = function () {
        console.log(a * 2);
    }
}

const h1 = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g1();
f1();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f1);

// Example 2
const boardPassengers1 = function (n, wait) {
    const perGroup = n / 3;
    
        setTimeout(function () {
            console.log(`We are now boarding all ${n} passengers`);
            console.log(`There are 3 groups, each with ${perGroup} passengers`);
        }, wait * 1000);
    
        console.log(`Will start boarding in ${wait} seconds`);
    }

const perGroup1 = 1000;
boardPassengers(180, 3);

// Coding Challenge #2
console.log('--------------------');
console.log('Coding Challenge #2');

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    });
})();


// Coding Challenge #3
console.log('--------------------');
console.log('Coding Challenge #3');

const greet = greeting => name => console.log(`${greeting} ${name}`);   

greet('Hi')('Jonas');

// The call and apply Methods
console.log('--------------------');
console.log('The call and apply Methods');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// The bind Method
console.log('--------------------');
console.log('The bind Method');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
console.log('--------------------');
console.log('Partial Application');

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Coding Challenge #1
console.log('--------------------');
console.log('Coding Challenge #1');

const poll = {
    question: 'What is your favorite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

        if (typeof answer === 'number' && answer < this.answers.length) {
            this.answers[answer]++;
        }

        this.displayResults();
        this.displayResults('string');
    }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// Immediately Invoked Function Expressions (IIFE)\
console.log('--------------------');
console.log('Immediately Invoked Function Expressions (IIFE)');

(function () {
    console.log('This will never run again');
}
)();

(() => console.log('This will ALSO never run again'))();

{
    const isPrivate = 23;
    var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

// Closures
console.log('--------------------');
console.log('Closures');

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// More Closures Examples
console.log('--------------------');
console.log('More Closures Examples');

// Example 1
let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
}

const perGroup = 1000;
boardPassengers(180, 3);

// Coding Challenge #2
console.log('--------------------');
console.log('Coding Challenge #2');

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', () => {
        header.style.color = 'blue';
    });
}
)();

// Coding Challenge #3
console.log('--------------------');
console.log('Coding Challenge #3');

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Hi')('Jonas');

// The call and apply Methods
console.log('--------------------');
console.log('The call and apply Methods');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah Williams');

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
console.log('--------------------');
console.log('Partial Application');

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

// Coding Challenge #1
console.log('--------------------');
console.log('Coding Challenge #1');

