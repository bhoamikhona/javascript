# Section 07: Javascript in the Browser - DOM and Events Fundamentals

## Guess The Number

**About:** The goal of this project is to simply guess a secret number which is between 1 and 20. There will be an input field where we can type a number and then check if the number is equal to the secret number or not. If the number is guessed is higher than the secret number, we get the feedback "Too High", if the guessed number is lower than the secret number, we get the feedback "Too Low", and if it is equal to the secret number, we get the feedback "Correct Number". We start with the score of 20 and for each wrong guess, we lose a point. A highscore will be maintained throughout all games. If we press "Again!" button, the entire game will be reset except for highscore and we can start playing again.

- [Live Website]()

## Lessons Learned

- `document.querySelector()` - returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned.
- `textContent` - To set and get the text content of an element and its descendants, you use the `textContent` property of element.
  - e.g. `document.querySelector("p").textContent;` - this will give you the text that is inside the first paragraph element in the HTML file.

## Demo

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
