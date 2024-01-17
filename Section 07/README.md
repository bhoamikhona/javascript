# Section 07: JavaScript in the Browser - DOM and Events Fundamentals

**About:** Now it is time for us to finally build our first project with a visual user interface; and actually, we will build not one but, three beautiful projects in this section so that you can learn the basics of so-called DOM manipulation. Up until this point, we have only learned about the language itself but now, we will take it to the next level and actually make JS interact with real web pages.

## Table of Contents

- [Projects](#projects)
  - [Guess The Number](#guess-the-number)
  - [Modal Window](#modal-window)
  - [The Pig Game](#the-pig-game)
- [Lessons Learned](#lessons-learned)
  - [What is the DOM and DOM Manipulation?](#what-is-the-dom-and-dom-manipulation)
    - [What is DOM?](#what-is-dom)
    - [DOM !== JavaScript](#dom--javascript)
- [Author](#author)

## Projects

### Guess The Number

**About:** The goal of this project is to simply guess a secret number which is between 1 and 20. There will be an input field where we can type a number and then check if the number is equal to the secret number or not. If the number is guessed is higher than the secret number, we get the feedback "Too High", if the guessed number is lower than the secret number, we get the feedback "Too Low", and if it is equal to the secret number, we get the feedback "Correct Number". We start with the score of 20 and for each wrong guess, we lose a point. A highscore will be maintained throughout all games. If we press "Again!" button, the entire game will be reset except for highscore and we can start playing again.

- [Live Website](https://bhoamikhona.github.io/javascript/Section%2007/Guess%20The%20Number/index.html)
- [GitHub Repository](./Guess%20The%20Number)

### Modal Window

**About:** In this small project, we are going to build our first UI component, modal window. Modal window is simply a window which gets overlaid over the rest of the webpage. To close the modal window, we have either the close button on the window or we can click anywhere outside the window. We can also close the modal window by hitting the esc key on the keyboard. This is an easy project but, it is very useful to learn classes. Classes is an important topic because, manipulating classes is the main way in which we manipulate webpages.

- [Live Website]()
- [GitHub Repository](./Modal%20Window)

### The Pig Game

**About:** In this project, we are going to take everything we've learned from the first two projects, and build a game. This is a two-player game. The idea is that players take turns to roll a dice as many times as they wish, adding all roll results to a running total but, losing their gained score for the turn if they roll a 1.
[Learn More](<https://en.wikipedia.org/wiki/Pig_(dice_game)>)

- [Live Website]()
- [GitHub Repository](./The%20Pig%20Game)

## Lessons Learned

### What is the DOM and DOM Manipulation?

- In this section, we are going to make JS interact with a webpage for the very first time and the technical term for it is <ins>DOM Manipulation</ins>.

#### What is DOM?

- DOM stands for Document Object Model.
- It is basically, a structured representation of HTML documents.
- The DOM allows us to use JS to access HTML elements and styles in order to manipulate them.
  - For example, we will be able to change text, change HTML attributes, and also to change CSS styles from our JS.
- So, we can say that the DOM is basically a connection point between HTML documents and JavaScript code.
- The DOM is automatically created by the browser as soon as the HTML page load and it is stored in a tree structure like this:
  - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/5f404899-ac1f-4736-847e-43a14f1d4150)
- In this tree, each HTML element is on object. So, let's now take a look at this DOM structure in a little bit more detail.
- To illustrate, here is a very simple HTML document and its corresponding DOM tree:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/bf4233bd-8012-4f8e-96ea-3bc86dd9df44)
- As mentioned above, it is a tree structure that looks a bit like a family tree.
- In fact, we use the terms child element, parent element, sibling element, and so on, when we talk about the DOM tree and DOM manipulation.
- For each element in the HTML, there is one element node in the DOM tree, and we can access and interact with each of these nodes using JavaScript.
- The DOM always starts with the document object, right at the very top.
- The document is a special object that we have access to in JavaScript.
- This document object serves as an entry point into the DOM.
  - e.g. `document.querySelect('.message)`
- The first child element of document is usually the HTML element, because that's usually the root element in all HTML documents.
- Next, HTML usually has two child elements, head and body. So, of course, you can also find them in the DOM tree.
- In HTML, the head and body are adjacent elements, so, they are siblings in our DOM tree as well.
- Then, as we keep going deeper into the nested HTML structure, we keep adding more and more children to the DOM tree.
- Inside head and body, you have more child elements, and the two sections in the body, even have child elements themselves.
- From there, it goes even deeper because the first paragraph also has a child of the anchor tag.
- With that, finally, we have all our HTML elements in the DOM tree.
- But, a DOM tree actually had more than just element nodes.
- It also has nodes for all the text, comments, and others.
- This is because, the rule is that whatever is in the HTML documetn also has to be in the DOM.
- So, as you see, the DOM really is a complete representation of the HTML document, so that we can manipulate it in complex ways.
- With this, you should now have a good overview of how the DOM works and what it looks like.

#### DOM !== JavaScript

- Many people believe that the DOM and all the methods and properties that we can use to manipulate the DOM, such as `document.querySelector()` (and others) are part of JavaScript but, this is not the case.
- Remember that JavaScritp is actually just a dialect of the ECMAScript specification, and all this DOM related stuff is simply not in there.
- Up until this point, we have only used the JavaScript language itself but, starting in this section, we will also use JavaScript in the browser by manipulating webpages that are displayed and rendered in the browser, just like any normal website.
- If DOM is not a part of the JavaScript language, then how does all this work?
  - The DOM and DOM methods are actually a part of something called the web APIs.
  - The web APIs are like libraries that browsers implement and that we can access from our JavaScript code.
  - API stands for Application Programming Interface (more about that, later).
  - For now, all you need to know is that web APIs are, basically, libraries that are also written in JavaScript and that are automatically available for us to use.
  - All this happens behind the scenes, we don't have to import or do anything.
  - There is an official DOM specification that browsers implement, which is the reason why DOM manipulation works the same in all browsers.
  - Besides the DOM, there are a ton more web APIs, such as timers, the fetch API, and many more. We will learn more about it later.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
