# Section 13: Advanced DOM and Events

**About:** At this point of the course, you are already pretty good at working with the DOM. But, there are still a ton of things to learn. So, to do that, in this section, we will build a beautiful website project with a lot of different components and visual effects that require pretty advanced DOM manipulation techniques. After this section, you will have all the tools that you need in order implement any visual component or effect that you can imagine. Many of the things that we are going to learn in this section could also be added to a webpage simply by using a third party library but, you want to master JavaScript and the DOM. Therefore, you need to know how to do things yourself. So, let's go learn advanced DOM manipulation now.

## Table of Content

- [Section 13: Advanced DOM and Events](#section-13-advanced-dom-and-events)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [PROJECT: "Bankist" Marketing Website](#project-bankist-marketing-website)
    - [How The DOM Really Works](#how-the-dom-really-works)
      - [Review: What is the DOM?](#review-what-is-the-dom)
      - [How The DOM API is Organized Behind The Scenes](#how-the-dom-api-is-organized-behind-the-scenes)
    - [Selecting, Creating, and Deleting Elements](#selecting-creating-and-deleting-elements)
    - [Styles, Attributes, and Classes](#styles-attributes-and-classes)
    - [Implementing Smooth Scrolling](#implementing-smooth-scrolling)
    - [Types of Events and Event Handlers](#types-of-events-and-event-handlers)
    - [Event Propagation: Bubbling and Capturing](#event-propagation-bubbling-and-capturing)
    - [Event Propagation in Practice](#event-propagation-in-practice)
    - [Event Delegation: Implementing Page Navigation](#event-delegation-implementing-page-navigation)
    - [DOM Traversing](#dom-traversing)
    - [Building a Tabbed Component](#building-a-tabbed-component)
    - [Passing Arguments to Event Handlers](#passing-arguments-to-event-handlers)
  - [Author](#author)

## Lessons Learned

### PROJECT: "Bankist" Marketing Website

- In this section, we are going to build yet another project. So, let's start by taking a look at it.
- Over the last two sections, we built the application for a fictional bank called Bankist.
- Now, in this section, we're going to be building a marketing website for the same fictional bank.
- Features that we are going to implement in this project:
  - Lazy Loading
  - Sticky Navbar
  - Greying out other Navlink while you hover over one of them
  - Pop-up window
  - Tabbed component
  - Slider component
  - Smooth scrolling animation
- So, there are a lot of dynamic effects that we are going to learn in this project.
- All of these effects are for sure, some of the most important and commonly usef effects that you will see on all websites.

### How The DOM Really Works

- Let's start this section by learning how the DOM really works behind the scenes and more specifically, how the DOM is organized internally.
- This will make it easier to understand everything else that is going to follow in this section.

#### Review: What is the DOM?

- Remember that the DOM is basically, the interface between all JavaScript code and the browser, or more specifically HTML documents that are rendered in and by the browser.
- We have written a ton of JavaScript code in this so far, but many times completely without interacting with the browser i.e. without using the DOM.
- But now, we are back to working with webpages and therefore, with the DOM; and this time, we are going to learn as much as possible about the DOM and how to create amazing dynamic effects.
- Let's remember what we already know about the DOM which is that we can use it to make JavaScript interact with the browser. More specifically, we can create, modify, and delete elements; set styles, classes, and attributes; and listen and respond to events.
- In practice, this works because a DOM tree is generated from any HTML document and a DOM tree is a tree like structure made out of node which looks like this:
- ![javascript](https://github.com/bhoamikhona/javascript/assets/50435319/ed15713c-a972-45f2-b999-2bce731675a2)
- We can then interact with this tree as we already did a couple of times in this course.
- How does that interaction actually work?
  - The DOM is a very complex API (Application Programming Interface). So, it is the interface we can use to programmatically interact with the DOM.
  - In practice, that means that the DOM contains a ton of methods and properties that we use to interact with the DOM tree such as `querySelector()`, `addEventListener()`, or `createElement()` methods or also the `innerHTML`, `textContent`, or `children` properties and many, many more.
  - In the DOM, there are different types of nodes as mentioned previously.
  - For example, some nodes are HTML elements but, others are just text.
  - ![javascript (1)](https://github.com/bhoamikhona/javascript/assets/50435319/04c18136-b745-4530-87b0-58c5cf97294d)
  - This is really important to understand because all these DOM methods and properties are organized into these different types of objects.
  - So, let's now take a look at how the DOM API is organized behind the scenes.

#### How The DOM API is Organized Behind The Scenes

- First, every single node in the DOM tree is of the type, node.
- And just like everything else in JavaScript, each node is represented in JavaScript by an object.
- This object gets access to special node methods and properties, such as `textContent`, `childNodes`, `parentNode`, `cloneNode()`, and many others.
- We already knwo that there are different types of nodes.
- So, how should these be represented?
- These node types have a couple of child types - so to say. These child types are element type, text type, comment type, and also the document type.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c3bb03be-9ce0-4d34-92db-6bb8406b8913)
- So, whenever there is text inside any element, we already know that it gets its own node; and that node will be of the type, text.
- The same happens for HTML comments. This is because the rule is that everything that is in the HTML has to go into the DOM as well.
- For the element itself, there is the element type of node. This type of node gives each HTML access to a ton of useful properties such as `innerHTML`, `classList`, `children`, or `parentElement`.
- There are also many useful methods like `append()`, `remove()`, `insertAdjacentHTML()`, `querySelector()`, `closest()` and that's just to name a few.
- So, each element will be represented internally as an object.
- Now, just to make this complete, the element type has internally an HTML element, child type.
- That element type itself has exactly one child type for each HTML element that exists in HTML.
- So, we have a special type for buttons, a special type for images, for links, and so on and so forth.
- This is important because each of these HTML elements can have different unique properties.
- For example, an image has a `src` attribute in HTML which no other element has or the anchor tag for links has the `href` attribute which no other element has.
- So, the DOM needs a way of storing these different attributes and therefore, different types of HTML elements were created in the DOM API.
- Just to make sure that we are all on the same page, the diagram in the image above is not a DOM tree. It is not a representation of any HTML document.
- It is just a way that different types of nodes are represented behind the scenes in the DOM API.
- Now comes the really important part because, what makes all of this work is something called <ins>inheritance</ins>.
- What is inheritance?
- Inheritance means that all the child types will also get access to the methods and properties of all their parent node types.
- For example, an HTML element will get access to everything from the element type, like `innerHTML`, or `classList`.
- Besides that, it will also get access to everything from the node type because, that is also its parent type.
- So, we can think of this as though the HTML button element for example, is also an element and also a node.
- This might all seeam a bit weird and confusing but, we will learn why this kind of inheritance works very soon when we finally talk about object oriented JavaScript.
- For now, what you need to understand is that a DOM API is broken up into these different types of nodes. You also need to understand that each of these types of nodes has access to different properties and methods and that some of them even inherit more properties and methods from their ancestors in this organization.
- We didn't yet talk about the `document` node type. So `document`, which we use all the time in DOM manipulation is in fact just another type of node.
- It contains important methods such as `querySelector()`, `createElement()`, and `getElementById()`.
- Note how `querySelector()` is available on both the document and element types.
- So, keep this in mind because it will be important later on.
- Now there is just one final missing piece here because the DOM API actually needs a way of allowing all the node types to listen to events.
- We usually listen for events by calling the `addEventListener()` method on an element or the document.
- So, why does that work?
- Well it is because there is a special node type called `EventTarget` which is a parent of both the node type and also the window node type.
- So, with this, thanks to inheritance, we can call `addEventListener()` on every single type of node in the DOM API because all elements as well as document and window, and even text and comment will inherit this method. Therefore, we will be able to use `addEventListener()` on all of them just as if it was their own method.
- Just to be clear, we never do manually create an `eventTarget` object. This is just an abstract type that we do not use in practice.
- This all really happens behind the scenes to make all the functionality work as we expect it to work.
- So, in a nutshell, this is how the DOM API works and is structured behind the scenes.
- There are still some simplifications here but, this is all that really matters.
- If you want to go event deeper than this, there is still tons of material that you can check out in the MDN documentation and it is really fascinating.
- But, all that you need to know is in this lesson.

### Selecting, Creating, and Deleting Elements

- Selecting Elements
  - `document.documentElement` - selecting the HTML document itself
  - `document.head` - selecting the head of the HTML document
  - `document.body` - selecting the body of the HTML document
  - `document.querySelector()`
  - `document.querySelectorAll()` - returns a node list
  - `document.getElementById()`
  - `document.getElementsByTagName()` - returns live HTML collection
  - `document.getElementsByClassName()` - returns live HTML collection
  - Live HTML Collection vs. Node List
- Creating and Selecting Elements
  - `insertAdjacentHTML()`
  - `document.createElement()`
  - `element.prepend(elementToAdd)` - prepend() essentially adds the `elementToAdd` as the first child element inside `element`
  - `element.append(elementToAdd)` - append() essentially adds the `elementToAdd`
    > [!NOTE]
    > If we use prepend() to add an element in the DOM and then use append() for the same element, there won't be two same elements on the webpage. This is because each element is unique. If you want two elements that are same on the webpage, you will have to use `cloneNode()` to clone the element that you want to display on the UI, more than once.
  - `element.before(elementToAdd)` - adds the `elementToAdd` before the `element` as a sibling
  - `element.after(elementToAdd)` - adds the `elementToAdd` after the `element` as a sibling
- Delete Elements
  - `element.remove()` - deletes the element on which the `remove()` method is called upon.
  - Before `remove()` method, we used DOM traversing i.e. first selecting the parent element using `parentElement` property and then selecting its child element and removing it by using `removeChild()` method. An example of this: `message.parentElement.removeChild(message)`
  - `parentElement`
  - `removeChild()`
- Others
  - `classList`
  - `textContent`
  - `innerHTML`
  - `cloneNode()`

### Styles, Attributes, and Classes

- Styles
  - `style` property
  - `getComputedStyle()`
  - `setProperty()`
  - `document.documentElement.style.setProperty('--color-primary', 'red')` - Example to change the property value in the `:root` of CSS.
- Attributes
  - Selecting attributes
    - Example: `document.querySelector('.nav__logo').alt`
  - Setting custom attributes in DOM and getting them in JS using `getAttribute()`
  - `setAttribute()`
  - `link.href` - this will give us absolute URL
  - `link.getAttribute('href')` - this will give us relative URL
  - Data Attributes
    - Setting Data Attributes in DOM, example: `data-version-number="3.0"` (Remember to use kebab case here)
    - Getting Data Attributes in JS, example: `logo.dataset.versionNumber` (Remember to use camel case here)
    - All data attributes are stored in `dataset` property
- Classes
  - `element.classList.add()` - You can add multiple classes at once separated by comma
  - `element.classList.remove()` - You can remove multiple classes at once separated by comma
  - `element.classList.toggle()`
  - `element.classList.contains()`
  - Getting and Setting Classes using `className`
  - The `add()`, `remove()`, `toggle()`, and `contains()` methods allow us to add and remove classes based on their names, without interfering with the classes that are already there.
  - Just keep in mind that `contains()` is really called `contains()` and not `includes()` like it is called in arrays.

> [!CAUTION]
> Do not using `className` to set classes as it will override existing classes and it only allows us to set one class on any element. Use `element.classList.add()` instead.

### Implementing Smooth Scrolling

- `getBoundingClientRect()`
  - The `Element.getBoundingClientRect()` method returns a `DOMRect` object providing information about the size of an element and its position relative to the viewport.
  - It takes no parameters.
  - The returned value is `DOMRect` which is the smallest rectangle which contains the entire element, including its padding and border-width. The `left`, `right`, `top`, `bottom`, `x`, `y`, `width`, and `height` properties describe the position and size of the overall rectangle in pixels. Properties other than `width` and `height` are relative to the top-left of the viewport.

> [!NOTE]
> A viewport represents a polygonal (normally rectangular) area in computer graphics that is currently being viewed. In web browser terms, it refers to the part of the document you are viewing which is currently visible in its window (or the screen, if the document is being viewed in full screen mode). Content outside the viewport is not visible onscreen until scrolled into view.
> The portion of the viewport that is currently visible is called the visual viewport. This can be smaller than the layout viewport, such as when the user has pinched-zoomed. The layout viewport remains the same, but the visual viewport became smaller.

- `window.pageXOffset`
  - This property returns the pixels a document has scrolled from the upper left corner of the window.
  - It is equal/alias to `scrollX` property.
    - The read-only `scrollX` property of the `window` interface returns the number of pixels that the document is currently scrolled horizontally.
  - This property is read only.
- `window.pageYOffset`
  - This property returns the pixels a document has scrolled from the upper left corner of the window.
  - It is equal to the `scrollY` property.
    - The read-only `scrollY` property of the `window` interface returns the number of pixels that the document is currently scrolled vertically.
  - It is read-only property.
- `clientHeight`
  - The `element.clientHeight` read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it is the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).
- `clientWidth`
  - The `element.clientWidth` property is zero for inline elements and elements with no CSS; otherwise it's the inner width of an element in pixels. It includes padding but excludes border, margins, and vertical scrollbars (if present).
- `window.scrollTo()`
  - `window.scrollTo()` scrolls to a particular set of coordinates in the document.
  - Parameters:
    - `x-coord` is the pixel along the horizontal axis of the document that you want displayed in the upper left.
    - `y-coord` is the pixel along the vertical axis of the document that you want displayed in the upper left.
    - - OR -
    - `options` - A dictionary containing the following parameters:
      - `top` - specifies the number of pixels along the Y axis to scroll the window or element.
      - `left` - specifies the number of pixels along the X axis to scroll the window or element.
      - `behavior` - determines whether scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth` - scrolling should animate smoothly
        - `instant` - scrolling should happen instantly in a single jump
        - `auto` - scroll behavior is determined by the computed value of `scroll-behavior`.
          - The `scroll-behavior` CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs.
  - It returns `undefined`
- `scrollIntoView()`
  - The `Element` interface's `scrollIntoView()` method scrolls the element's ancestor containers such that the element on whcih `scrollIntoView()` is called is visible to the user.
  - Parameters:
    - `alignToTop` (optional) - A boolean value.
      - If `true`, the top of the element will be aligned to the top the visible area of the scrollable ancestor. Corresponds to `scrollIntoViewOptions: {block: "start", inline: "nearest"}`. This is the default value.
      - If `false`, the bottom of the element will be aligned to the bottom of the visible area of the scrollable ancestor. Coressponds to `scrollIntoViewOptions: {block: "end", inline: "nearest"}`.
    - `scrollIntoViewOptions` (optional) - An object with the following properties:
      - `behavior` (optional) - Determines whehther scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth`
        - `instant`
        - `auto`
      - `block` (optional) - Defines vertical alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `start`
      - `inline` (optional) - Defines horizontal alignment. One of `start`, `center`, `end`, or `nearest`. Defaults to `nearest`.
  - Returns `undefined`

### Types of Events and Event Handlers

- `mouseenter` event
- All the events: [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
- `on-event` properties; example:
  - `onmouseenter`
  - `onclick`
  - NOTE: `on-event` is the old way of listening to events. Now we simply use `addEventListener()`.
- Two ways of why `addEventListener()` is better than `on-event` property:
  - `addEventListner()` allows us add multiple event listeners to the same event. So we could use the `addEventListner()` again on the same element, with the same type of event but, change the callback function.
  - If we did that using `on-event` property, the second one would overrride the first one.
  - The second advantage of using `addEventListener()` is that we can actually remove those events using `removeEventListener()` if we don't need it anymore - which we cannot do with `on-event` property.
- `removeEventListener()` - removes an event listener previously registered with `addEventListener()`.
- Handling events as HTML attributes (this one should not be used)

### Event Propagation: Bubbling and Capturing

<!-- Theory Lesson -->

- JavaScript events have a very important property. They have a so-called <ins>capturing phase</ins> and a <ins>bubbling phase</ins>.
- So, what does that mean? Let's find out.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/92ee7d7f-3932-4573-be6f-451f707f554c)
- Here (in the image above) we have a very simple HTML document and a DOM tree, but only for the anchor element that is highlight with the red border.
- So, here we can see exactly all the parent elements of that red anchor element.
- That's because we are going to simulate what exactly happens with an event when someone clicks on that link.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/d5a0c80a-aaf2-4e9a-b5a7-5dbdf04691b6)
- Let's now say that a click happens on the link; and as we already know, the DOM then generate a click event right away.
- However, this event is actually not generated at the target element i.e. at the element where the event happened, in this case, the click on the anchor element.
- Instead, the event is actually generated at the root of the document, so at the very top of the DOM tree.
- From there, the so-called capturing phase happens, where the event then travels all the way down from the document root to the target element.
- As the event travels down the tree, it will pass through every single parent element of the target element.
- So, in example, it first goes to HTML element, then body element, then section, then paragraph, then finally to anchor tag where it finally reaches its target.
- As soon as the event reaches the target, the target phase begins, where events can be handled right at the target.
- And as we already know, we do that with event listeners, such as this one:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/ab15f539-c47a-4a79-b902-edb1c0ba6d85)
- So, event listners wait for a certain event to happen on a certain element, and as soon as the event occurs, it runs the attached callback function.
- In this example, it will simply create an alert window.
- Again, this happens during target phase.
- After reaching the target, the event then actually travels all the way up to the document root again in the so-called bubbling phase.
- So, we say that the events bubble up from the target to the document root.
- And just link in the capturing phase, the event passes through all its parent elements, and really just the parents, not through any sibling elements.
- So, as an event travels down and up the tree, they pass through all the parent elements, but not through any sibling element.
- Now you might be wondering why is this so important? Why are we learning about all this detail?
- It is indeed important because basically, it is as if the event also happened in each of the parent elements.
- So again, as the event bubbles through the parent element, it is as if the event happened right in that very element.
- What this means is that we attach the event listener, also for example, to the section element, then we would get the exact same alert window for the section element as well.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/062d3f8d-8aca-44be-a8bf-1a1e3176e9f1)
- So, we would have handled the exact same event twice; once at its target, and once at one of its parent element.
- This behavior will allow us to implement really powerful patterns, as we will see throughout the rest of the section.
- So, this is very, very important to uderstand.
- Now, by default, events can only be handled in the target, and in the bubbling phase. However, we can set up event listeners in a way that they listen to events in the capturing phase instead.
- Also, not all types of events that do have a capturing and bubbling phase. Some of them are created right on the target element, and so we can only handle them there.
- But most of the events do capture and bubble, just like we learned in this lesson.
- We can also say that the events propagate, which is really what capturing and bubbling is.
- It is events propagating from one place to another.
- Hopefully, all this made sense, and we will see all of it in action, in the next lesson.

### Event Propagation in Practice

- `e.currentTarget`
- `e.target` vs. `e.currentTarget`
- How the bubbling and capturing phase actually look like in practice.
- stopping event propagation using `e.stopPropagation` - do not use it as it is a bad practice to stop propagation.
  - Stopping propagation like this can sometimes fix problems in very complex applications with many event handlers for the same events, but in general, it is not really a good idea to stop the propagation of events.
- Using the third parameter of the `addEventListener()` function to make it listen for events in capturing phase instead of bubbling phase.
  - By default, it is set to `false`.
  - Listening for events in capturing phase is rarely used but, listening for them in bubbling phase could be useful for something called <ins>event delegation</ins>, which we will learn about in the next lesson.

### Event Delegation: Implementing Page Navigation

- When we add an event listener to multiple elements using the for loop, for 3 elements it doesn't feel like much but, if you have large amount of elements like that, then it become in-efficient because it is almost like creating an event handler for all of those elements.
- Event Delegation is a solution to the inefficiency.
- It takes the advantage of events bubbling up the DOM tree to target the events that occured and keeping only big event handler.
- The way it works is that you select a parent element of all of those elements in which you want to use the event handler on.
- Example:

```html
<nav class="nav">
  <a href="#section1" class="nav__link">link 1</a>
  <a href="#section2" class="nav__link">link 2</a>
  <a href="#section3" class="nav__link">link 3</a>
</nav>
```

- So, in the example above, you select the nav element itself, which is the parent element of all the links on which you want to set the event handler on; and you add the event handler on the nav element instead of the links.
- Now whenever a click happens on the nav link, the event bubbles up through its parents and one of its parent is the nav itself - that is where you catch the event and define in the event handler what you need to happen.
- So, the two steps of event delegation are:
  - Add event listener to a common parent element
  - Determine what element orginated the event.
    - You can do that by `event.target` property
- One other thing that you want to keep in mind is "matching strategy" which might be the most difficult part of this whole thing.
- So, since you are adding the event listener on the parent element and not on the link itself, you want to separate out the events that actually happen on the link vs the ones that happen inside the navbar but outside the link.
- To do that, in most cases you could use a unique class name to all the ones that you want to target but, in other cases, you might have to figure out how to do that depending on the situation you have at hand.
- Also, there is an even more important use case of event delegation, which is when we are working with elements that are not yet on the page on runtime i.e. by the time the page loads.
- A great example of that are buttons that are dynamically added while using the application.
- This is a great example because it is not possible to add event handlers onto elements that do not exist, but we will still be able to handle events on elements that don't exist at the beginning by using event delegation. We will see this in action, later in this section.

### DOM Traversing

- Traversing Downward i.e. selecting child elements of an element
  - Using `querySelector()` and `querySelectorAll()` on elements instead of document.
  - `childNodes` property
  - `children` property
  - `firstElementChild` property
  - `lastElementChild` propert
- Traversing Upwards i.e. selecting parents of an element
  - `parentNode` property
  - `parentElement` property
  - `closes()` method
- Traversing Sideways i.e. Selecting siblings
  - Can only get direct siblings in JS.
  - `previousElementSibling` property
  - `nextElementSibling` property

### Building a Tabbed Component

- The concept of guard clause.

### Passing Arguments to Event Handlers

- `mouseover` event
- `mouseout` event
- `mouseenter` event
- `mouseleave` event
- Passing arguments into event handlers

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
