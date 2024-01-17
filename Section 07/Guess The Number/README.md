# Section 07: Javascript in the Browser - DOM and Events Fundamentals

## Guess The Number

**About:** The goal of this project is to simply guess a secret number which is between 1 and 20. There will be an input field where we can type a number and then check if the number is equal to the secret number or not. If the number is guessed is higher than the secret number, we get the feedback "Too High", if the guessed number is lower than the secret number, we get the feedback "Too Low", and if it is equal to the secret number, we get the feedback "Correct Number". We start with the score of 20 and for each wrong guess, we lose a point. A highscore will be maintained throughout all games. If we press "Again!" button, the entire game will be reset except for highscore and we can start playing again.

- [Live Website](https://bhoamikhona.github.io/javascript/Section%2007/Guess%20The%20Number/index.html)

## Table of Contents

- [Lessons Learned](#lessons-learned)
  - [Selecting and Manipulating Elements](#selecting-and-manipulating-elements)
  - [Handling Click Events](#handling-click-events)
  - [Implementing The Game Logic](#implementing-the-game-logic)
  - [Manipulating CSS Styles using JavaScript and DOM](#manipulating-css-styles-using-javascript-and-dom)
  - [Refactoring Code](#refactoring-code)
- [Demo](#demo)
- [Author](#author)

## Lessons Learned

### Selecting and Manipulating Elements

- `document.querySelector()` - returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.
- `textContent` - To set and get the text content of an element and its descendants, you use the `textContent` property of element.
  - e.g. `document.querySelector("p").textContent;` - this will give you the text that is inside the first paragraph element in the HTML file.
- `document.querySelector("input").value` - This is used to get and set the input value of an HTML input element.

### Handling Click Events

- In order for our code to react to something that happens in the DOM, we need to use an event listener.
- An event is something that happens on the page e.g. a mouse click, a mouse moving, a key press, etc.
- With an event listener, we can wait for a certain event to happen, and then react to it.
- In order to listen for events, we first need to select the element where the event should happen e.g. button.
- `addEventListener()` - The `addEventListener()` method is used to attach an function to a particular element that will be called whenever the specified event occurs. It has 2 required parameters:
  - `type` - A case-sensitvie string representing the [event type](https://developer.mozilla.org/en-US/docs/Web/Events) to listen for.
  - `listener` - This is a function that is called when the event specified in the first parameter, occurs.

> [!NOTE]
> We do not call the event handler function anywhere, we only define it as the second parameter to the `addEventListener()` method. It is the Javascript engine who will call this function as soon as the event mentioned in the first parameter, occurs.

- This function will not be called immediately once the script is executed, it will only be called as soon as the event mentioned in the first parameter happens.

> [!NOTE]
> Whenever we get something from the user interface, e.g. from an input field, it usually is a string.

### Implementing The Game Logic

- `Math.random()` - The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range -- which you can then scale to your desired range.
- `Math.trunc()` - The `Math.trunc()` static method returns the integer part of a number by removing any fractional digits.

### Manipulating CSS Styles using JavaScript and DOM

- The DOM also includes CSS styles so, with DOM, we can change/manipulate CSS styles as well.
- `document.querySelector("body").style.backgroundColor = "#ffffff";` - This is selecting and setting inline styles in the HTML file using Javascript. We are not changing the external CSS file.
- Anonymous Functions - It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

### Refactoring Code

- Having a lot of duplicate code violets the don't repeat yourself principle i.e. the Dry Principle.
- Why is it so bad to have duplicate code?
  - Whenever we have duplicate code, and we want to change some functionality, we have to change the same code in multiple places.
  - In a small example, it is not a problem but, it can quickly become a nightmare for a bigger code base.
  - So, try to avoid duplicate code whenever you can.
  - However, when we first write code, then it is not a big problem to start out with duplicate code, just to make it work but, then as we move on into the project, we can use a technique called refactoring.
  - Refactoring means to restructure the code without changing how it works i.e. we do refactoring to improve the code and to eliminate duplicate code.
- Sometimes, a good refactoring technique, is also to create functions.

## Demo

![guess-the-number-demo](https://github.com/bhoamikhona/javascript/assets/50435319/78784eb0-9d6b-47e6-a6b8-cbc6cdb5113c)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
