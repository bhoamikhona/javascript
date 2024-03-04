'use strict';

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 01 *************************/`
);

/**
 * Let's build a simple poll app!
 *
 * A poll has a question, an array of options from which people can
 * choose, and an array with the number of replies for each option. This
 * data is stored in the starter 'poll' object below.
 *
 * Test Data:
 * Data 01: [5, 2, 3]
 * Data 02: [1, 5, 3, 9, 6, 1]
 *
 * Hints:
 * Hint 01: Use man of the tools you learned about in this and the last
 * section.
 */

// given

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

// This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
// };

/**
 * TODO 01:
 *
 * Create a method called 'registerNewAnswer' on the 'poll' object. The
 * method does 2 things:
 *
 * 1) Display a prompt window for the user to input the number of the
 * selected option. The prompt should look like this:
 *  What is your favourite programming language?
 *  0: Javascript
 *  1: Python
 *  2: Rust
 *  3: C++
 *  (Write option number)
 *
 * 2) Based on the input number, update the 'answers' array property. For
 * example, if the option is 3, increase the value at position 3 of the
 * array by 1. Make sure to check if the input is a number and if the
 * number makes sense (e.g. answer 52 wouldn't make sense).
 */

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  // TODO 01:
  registerNewAnswer() {
    // get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    // register answer, incrementing the value in answers array using AND operator short circuiting.
    typeof answer === 'number' &&
      answer < this.answers.length &&
      answer > -1 &&
      this.answers[answer]++;

    // TODO 04:
    this.displayResults();
    this.displayResults('string');
  },

  // TODO 03:
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // "Poll results are 13, 2, 4, 1"
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

/**
 * TODO 02:
 *
 * Call this method whenever the user clicks2 the "Answer poll" button.
 */

const question = poll.registerNewAnswer.bind(poll);
document.querySelector('.poll').addEventListener('click', question);

/**
 * TODO 03:
 *
 * Create a method 'displayResults' which displays the poll results. The
 * method takes a string as an input (called 'type'), which can be either
 * 'string' or 'array'. If type is 'array', simply display the results
 * array as it is, using console.log(). This should be the default option.
 * If type is 'string', display a string "Poll results are 13, 2, 4, 1".
 */

// done

/**
 * TODO 04:
 *
 * Run the 'displayResults' method at the end of each 'registerNewAnswer'
 * method call.
 */

// done

/**
 * TODO 05: BONUS
 *
 * Use the 'displayResults' method to display the 2 arrays in the test
 * data. Use both the 'array' and the 'string' option. Do not put the
 * arrays in the poll object! So, what should the `this` keyword look like
 * in this situation?
 *
 * Test Data:
 * Data 01: [5, 2, 3]
 * Data 02: [1, 5, 3, 9, 6, 1]
 */

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

/**
 * The displayResult() function is looking for `this.answers` but,
 * our array does not belong to `this.answers`, it is outside of the
 * `poll` object.
 *
 * So, we need a way to make `this.answers` equal to our test data arrays.
 *
 * That's why, we use `call()` method so that we could manually set the
 * `this` keyword to a new object, which has the `answers` property as an
 * array.
 *
 * We can pass in 'string' as the second parameter to provide how the
 * `displayResults()` should log the result.
 */

/**
 * NOTE: What we did here is not really a real scenario but, it is good
 * for us to use these concepts in some different ways to get used to how
 * all of these concepts work together.
 */
