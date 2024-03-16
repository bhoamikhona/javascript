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
