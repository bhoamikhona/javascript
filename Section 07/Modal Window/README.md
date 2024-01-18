# Section 07: Javascript in the Browser - DOM and Events Fundamentals

## Modal Window

**About:** In this small project, we are going to build our first UI component, modal window. Modal window is simply a window which gets overlaid over the rest of the webpage. To close the modal window, we have either the close button on the window or we can click anywhere outside the window. We can also close the modal window by hitting the esc key on the keyboard. This is an easy project but, it is very useful to learn classes. Classes is an important topic because, manipulating classes is the main way in which we manipulate webpages.

- [Live Website](https://bhoamikhona.github.io/javascript/Section%2007/Modal%20Window/index.html)

## Table of Contents

- [Lessons Learned](#lessons-learned)
  - [Manipulating CSS Classes with JavaScript](#manipulating-css-classes-with-javascript)
  - [Handling Key Press Events](#handling-key-press-events)
- [Demo](#demo)
- [Author](#author)

## Lessons Learned

- Whenever we use `querySelector()` with a selector, which matches multiple elements, only the first one will get selected.
- `querySelectorAll()` - The document method `querySelectorAll()` returns a static NodeList representing a list of the document's elements that match the specified group of selectors.

> [!NOTE]
> NodeList is a little bit like an array. It is not exactly array but, for this project, it works as though it was an array.

> [!TIP]
> Just like an if-else statement, if there is only one line of code to execute in a for loop, then you don't have to use braces. But, that is true if and only if there is one line of code.

### Manipulating CSS Classes with JavaScript

- `Element.classList` - The `Element.classList` is a read-only property that returns a live `DOMTokenList` collection of the `class` attributes of the element i.e. The `classList` property returns the CSS class names of an element. This can be used to manipulate the class list.
  - Note: The `DOMTokenList` interface represents a set of space-separated tokens. [Learn More](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList)
  - `Element.classList.remove("className")` - `remove()` method removes the class of the name passed in the parameters, from the element, the property `classList` is targetting.
  - Note: When using the method `Element.classList.remove("className")` do not use the `.` while passing the class name, it is only for selecting the element.
  - `classList` Properties and Methods
    - `add()` - Adds one or more tokens to the list
    - `contains()` - Returns true if the list contains a class
    - `entries()` - Returns an iterator with key/value pairs from the list
    - `forEach()` - Executes a callback function for each token in the list
    - `item()` - Returns the token as a specified index
    - `keys()` - Returns an Iterator with the keys in the list
    - `length` - Returns the number of tokens in the list
    - `remove()` - Removes one or more tokens from the list
    - `replace()` - Replaces a token in the list
    - `supports()` - Returns true if a token is one of an attribute's supported tokens
    - `toggle()` - Toggles between tokens in the list
    - `value` - Returns the token list a s a string
    - `values()` - Returns an iterator with the values in the list
- In practice, adding and removing classes, like we do in this project, is the main way in which we change styles on websites. That's because, a class basically aggregates many styles in just one class.
- Usually, when we need to manipulate styles on a page, then always just export the styles into a class, and then use the class in JS to manipulate like we do in this project.

### Handling Key Press Events

- In order to listen to keyboard events, we still need to use `addEventListener()` method because, the key press event is simply just another type of event.
  - Keyboard events are so-called global events because, they do not happen on one specific element and for global events like keyboard events, we usually listen on the whole document.
  - There are 3 types of events for keyboard.
    - `keydown` - The key down event is fired as soon as we just press down the key.
    - `keypress` - The key press event fires continuously as we keep our finger on a certain key.
    - `keyup` - The key up event only happens when we lift our finger off of the key.
  - The information about which key was pressed will be stored in the event that is going to occur as soon as any key is pressed.
  - As you hit a key on the keyboard, a key down event is generated and our listener function is waiting for that event to happen, and anytime an event like this occurs, JS generates an object, and that object contains all the information about the event itself, and we can then access that object in the event handler function.
  - In order to access that object which contains the event information, we need to pass a parameter to the call back function in the event listener.

## Demo

![modal-windo-demo](https://github.com/bhoamikhona/javascript/assets/50435319/a38cd641-de9e-4d26-91a3-e9ae982e8dc4)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
