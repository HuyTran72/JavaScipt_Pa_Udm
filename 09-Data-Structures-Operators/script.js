'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function(obj) {
    console.log(obj);
  },

  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

};

const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);


//Switching the variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);


//Receive 2 return values from a function
const [start, mainCourse] = restaurant.order(2,0);
console.log(start, mainCourse);


const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);


//Assignment
// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;
// const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
// const [[, rating], [, ratingsCount]] = ratings;
// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;


// 1.Destructuring
//Rest Pattern and Parameters
console.log('-----------------------');
console.log('Rest Pattern and Parameters');

const arr2 = [1, 2, ...[3, 4]];
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);
console.log(arr2);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza,  risotto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays);


// 2. Functions
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) sum += numbers[i];
  console.log(sum);
}
add(2,3);
add(5,3,7,2);
add(8,2,5,3,2,1,4);

const x1 = [23, 5, 7];
add(...x1);

restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushroom');



//Destructuring Objects
console.log('-----------------------');
console.log('Destructuring Objects');

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const {menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// Mutating variables
let a1 = 111;
let b1 = 999;
const obj = {a1: 23, b1: 7, c1:14};
({a1,b1} = obj);
console.log(a1, b1);

// Nested objects
const {fri} = openingHours;
console.log(fri);


restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via de Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});


//The Spread Operators
console.log('---------------');
console.log('The Spread Operators');

const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);

const newArr1 = [1, 2, ...arr1];
console.log(newArr1);

console.log(...newArr1);
console.log(1,2,7,8,9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];


// Join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);


// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Percy';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
console.log('j','o');
// console.log(`${...str} Shin`);

// const ingredients = [prompt("Let's make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


//Short Circuiting
console.log('------------------');
console.log('Short Circuiting');


//Use any data type, return any data type, short-circuiting
console.log('------OR------');
console.log(3 || 'Percy');
console.log('' || 'Percy');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10
console.log(guest2);


console.log('--------AND-------');
console.log(0 && 'Percy');
console.log(7 && 'Percy');
console.log('Hello' && 23 && null && 'Percy');

if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


//The Nullish Coalescing Operator
console.log('---------------');
console.log('The Nullish Coalescing Operator');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


console.log('-------------------');
console.log('Coding Challenge #1');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borusia Dounmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Abala',
      'Davies',
      'Kimich',
      'Goezrtka',
      'Davis',
      'Gnarby'
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Hazard'
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

//5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

//6.
const printGoal = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoal('Davies', 'Muller');
printGoal(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');




//Looping Arrays: The For-Of Loop
console.log('--------------------');
console.log('Looping Arrays: The For-Of Loop');

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for(const item of menu2) console.log(item);

for(const [i, el] of menu2.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu2.entries()]);


//Enhanced Object Literals
console.log('-------------------');
console.log('Enhanced Object Literals');

if(restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
  console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'web', 'thu', 'fri', 'sat', 'sun']; 
for(const day of days) {
  console.log(day);
  restaurant.openingHours[day]
  const open = restaurant.openingHours[day]?.open || 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exist');

//Arrays 
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');

if(users.length > 0) console.log(users[0].name);
else console.log('User array empty');



//Looping Objects: Keys, Values, and Entries
console.log('------------------');
console.log('Looping Objects: Keys, Values, and Entries');

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for(const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};



// Coding Challenge #2
console.log('------------------');
console.log('Coding Challenge #2');

//1.
for(const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i+1}: ${player}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;
for(const odd of odds) 
  average += odd;
  
average /= odds.length;
console.log(average);

//3.
for(const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odds}`);
}



// SETS
console.log('-----------------');
console.log('SETS');

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Jonas'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

for(const order of ordersSet) console.log(order);

//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);



// Maps: Fundamentals
console.log('------------------');
console.log('Maps: Fundamentals');

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Ilaty');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

const arr3 = [1,2];
rest.set(arr3, 'Test');
rest.set(document.querySelector('h1'),'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr3));



//Maps: Iteration
console.log('-----------------');
console.log('Maps: Iteration');

const question = new Map([
  ['question','What is the best programming language in the world'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);


//Quiz App
console.log(question.get('question'));
for(const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer1 = Number(prompt('Your answer'));
// console.log(answer1);

// console.log(question.get(question.get('correct') === answer1));


//Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


// Summary
console.log('-----------------');
console.log('Summary');

//Coding Challenge #3
console.log('-----------------');
console.log('Coding Challenge #3');

const gameEvents = new Map([
  [17, 'Goal'],
  [36, 'Substitution'],
  [47, 'Goal'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'Goal'],
  [80, 'Goal'],
  [92, 'Yellow Card'],
]);   

//1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

//2. After the game has finished, is was found that the yellow card was given to player number 92. Create a variable to the minute of the yellow card
gameEvents.delete(64);
console.log(gameEvents);

//3.Print the following string: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
const time1 = [...gameEvents.keys()].pop();
console.log(time1);

//4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: GOAL

for(const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}



//Working with Strings - Part 1
console.log('-----------------');
console.log('Working with Strings - Part 1');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(plane[4]);

console.log('B737'[0]);
console.log(airline.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function(seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if(s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('Percy'));
console.log(typeof new String('Percy'));
console.log(typeof new String('Percy').slice(1));


//Working with Strings - Part 2
console.log('-----------------');
console.log('Working with Strings - Part 2');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'pErCy';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);


//Comparing emails
const email = 'hello@percy.io';
const loginEmail = '  Hello@Percy.Io \n';
const lowerEmail = email.toLowerCase();
const trimmedEmail = loginEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(lowerEmail);
console.log(trimmedEmail === lowerEmail);

//Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

//Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('Air'));

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
};

//Practice exercise
const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


//Working with Strings - Part 3
console.log('-----------------');
console.log('Working with Strings - Part 3');

console.log('a+very+nice+string'.split('+'));
console.log('Percy Shin'.split(' '));

const [firstName, lastName] = 'Percy Shin'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names) {
    n[0].toUpperCase() + n.slice(1);
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('percy shin');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Percy'.padStart(25, '+').padEnd(35, '+'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(4337891234567890));
console.log(maskCreditCard('4337891234567890'));

//Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function(n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(5);
planesInLine(3);
planesInLine(12);



//Coding Challenge #4
console.log('-----------------');
console.log('Coding Challenge #4');

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function() {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);

  for(const [i, row] in rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(output);
    console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
}); 

//Output
// underscore_case      
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
// underscore_case
// first_name
// Some_Variable
// calculate_AGE


//String Methods Practice
console.log('-----------------');
console.log('String Methods Practice');

const flights = 
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Delayed Departure from FAO to TXL (11h25)
//Arrival from BRU to FAO (11h45)
//Delayed Arrival at HEL from FAO (12h05)
//Departure from FAO to LIS (12h30)

console.log(flights.split('+'));

for(const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${from.slice(0,3).toUpperCase()} to ${to.slice(0,3).toUpperCase()} (${time.replace(':', 'h')})`.padStart(45);
  console.log(output);
}




