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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
