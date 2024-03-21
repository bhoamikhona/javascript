'use strict';

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 01 *************************/`
);

/**
 * Julia and Kate are doing a study on dogs. So each of them asked 5
 * dog owners about their dog's age, and stored the data into an array
 * (one array for each). For now, they are just interested in knowing
 * whether a dog is an adult or a puppy. A dog is an adult if it is at
 * least 3 years old, and it's a puppy if it is less than 3 years old.
 */

/**
 * TODO 01:
 *
 * Create a function `checkDogs`, which accepts 2 arrays of dog's ages
 * ('dogJulia' and 'dogKate'), and does the following things:
 *
 * 1) Julia found out that the owners of the first and the last two dogs
 * actually have cats, not dogs! So create a shallow copy of Julia's
 * array, and remove the cat ages from that copied array (because it is
 * a bad practice to mutate function parameters).
 *
 * 2) Create an array with both Julia's (corrected) and Kate's data.
 *
 * 3) For each remaining dog, log to the console whether it is an adult
 * ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog
 * number 2 is still a puppy 🐶")
 * Run the function for both test datasets.
 *
 * Test Data:
 * Data 01: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
 * Data 02: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
 *
 * Hint: Use tools from all lectures in this section so far 😉
 */

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, -1);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dogAge, idx) {
    const isAdult = dogAge >= 3 ? true : false;
    if (isAdult) {
      console.log(
        `Dog number ${idx + 1} is an adult and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${idx + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/***********************************************************************/
/************************* CODING CHALLENGE 02 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 02 *************************/`
);

/**
 * Let's go back to Julia and Kate's study about dogs. This time, they
 * want to convert dog ages to human ages and calculate the average age of
 * the dogs in their study.
 *
 * Data 01: [5, 2, 4, 1, 15, 8, 3]
 * Data 02: [16, 6, 10, 5, 6, 1, 4]
 */

/**
 * TODO 01:
 *
 * Create a function 'calcAverageHumanAge', which accepts an arrays of
 * dog's ages ('ages'), and does the following things in order:
 *
 * 1) Calculate the dog age in human years using the following formula:
 * if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2
 * years old, humanAge = 16 + dogAge * 4
 *
 * 2) Exclude all dogs that are less than 18 human years old (which is the
 * same as keeping dogs that are at least 18 years old)
 *
 * 3) Calculate the average human age of all adult dogs (you should
 * already know from other challenges how we calculate averages 😉)
 *
 * 4) Run the function for both test datasets
 */

console.log(`---original solution---`);
let calcAverageHumanAge = function (ages) {
  const adults = [];
  ages.forEach(function (dogAge) {
    const humanAge = dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4;

    if (humanAge >= 18) {
      adults.push(humanAge);
    }
  });

  return adults.reduce((acc, curAge) => acc + curAge) / adults.length;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

console.log(`---with array methods---`);
calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const adults = humanAges.filter(age => age >= 18);

  const avg1 = adults.reduce((acc, age) => acc + age) / adults.length;
  const avg2 = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  /**
   * This is the explanation for how we calculated avg2:
   *
   * We usually calculate average like so: (n1 + n2 + n3 + ... + nN)/N
   *
   * But, if we spread the denominator of N like so:
   * n1/N + n2/N + n3/N + ... + nN/N
   * we will get the same result.
   *
   * So, we can have our accumulator have the initial value of 0 so,
   * 0/N will be 0, and then in every iteration, we divide age by N.
   *
   * So, we will end up starting with 0/N + n1/N, then in the next
   * iteration  it will be (0 + n1)/N + n2/N
   *
   * In the next it will be (0 + n1 + n2)/N + n3/N
   * so on and so forth
   *
   * This will get us the same result.
   *
   * This solution allows us to see a use case of the array parameter in
   * the callback function, as we will use to calculate N, which is
   * array.length.
   */

  return avg2;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

/***********************************************************************/
/************************* CODING CHALLENGE 03 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 03 *************************/`
);

/**
 * Rewrite the `calcAverageHumanAge` function from Challenge 02, but this
 * time as an arrow function, and using chaining!
 *
 * Data 01: [5, 2, 4, 1, 15, 8, 3]
 * Data 02: [16, 6, 10, 5, 6, 1, 4]
 */

const calcAverageHumanAge2 = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, curAge, i, arr) => acc + curAge / arr.length, 0);

console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));

/***********************************************************************/
/************************* CODING CHALLENGE 04 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 04 *************************/`
);

/**
 * Julia and Kate are still studying dogs, and this time they are studying
 * if dogs are eating too much or too little.
 *
 * Eating too much means the dog's current food portion is larger than the
 * recommended portion, and eating too little is the opposite.
 *
 * Eating an okay amount means the dog's current food portion is within
 * a range 10% above and 10% below the recommended portion (see hint).
 *
 * HINTS:
 *
 * Hint 01: Use many different tools to solve these challenges, you can
 * use the summary lesson to choose between them 😉
 *
 * Hint 02: Being within a range 10% above and below the recommended
 * portion means:
 * current > (recommended * 0.90) && current < (recommended * 1.10)
 * Basically, the current portion should be between 90% and 110% of the
 * recommended portion.
 */

// Test Data
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/**
 * TODO 01:
 *
 * Loop over the 'dogs' array containing dog objects, and for each dog,
 * calculate the recommended food portion and add it to the object as a
 * new property. Do not create a new array, simply loop over the array.
 *
 * Formula:
 *
 * recommendedFood = weight ** 0.75 * 28 (The result is in grams of food,
 * and the weight needs to be in kg)
 */

dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

/**
 * TODO 02:
 *
 * Find Sarah's dog and log to the console whether it's eating too much
 * or too little. Hint: Some dogs have multiple owners, so you first need
 * to find Sarah in the owners array, and so this one is a bit tricky
 * (on purpose) 🤓
 */

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }.`
);

/**
 * TODO 03:
 *
 * Create an array containing all owners of dogs who eat too much
 * ('ownersEatTooMuch') and an array with all owners of dogs who eat too
 * little ('ownersEatTooLittle').
 */

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooLittle);
/**
 * TODO 04:
 *
 * Log a string to the console for each array created in 3, like this:
 * "Matilda and Alice and Bob's dogs eat too much!" and
 * "Sarah and John and Michael's dogs eat too little!"
 */

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

/**
 * TODO 05:
 *
 * Log to the console whether there is any dog eating exactly the amount
 * of food that is recommended (just true or false)
 */

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

/**
 * TODO 06:
 *
 * Log to the console whether there is any dog eating an okay amount of
 * food (just true or false)
 */

console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

const checkEatingOkay = function (dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
};

/**
 * TODO 07:
 *
 * Create an array containing the dogs that are eating an okay amount of
 * food (try to re-use the condition used in 6).
 */

console.log(dogs.filter(dog => checkEatingOkay(dog)));

/**
 * TODO 08:
 *
 * Create a shallow copy of the 'dogs' array and sort it by recommended
 * food portion in an ascending order (keep in mind that the portions
 * are inside the array's objects 😉)
 */

console.log(dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood));
