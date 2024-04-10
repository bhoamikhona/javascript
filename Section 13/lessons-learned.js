'use strict';

/************************************************************************/
/************** SELECTING, CREATING, AND DELETING ELEMENTS **************/
/************************************************************************/

console.log(
  `/************** SELECTING, CREATING, AND DELETING ELEMENTS **************/`
);

/**
 * In this lesson we are going to learn how to select, create, and delete
 * elements with JavaScript.
 *
 * The goal of this lesson is more to be a quick reference for you in the
 * future because these methods that we are going to see here are actually
 * way more difficult to find and to understand from the MDN
 * documentation.
 *
 * So, when you need some of these methods in the future then all you have
 * to do is to come back to this lesson and see how it works.
 *
 * Let's start by learning a little bit more about selecting elements.
 */

// Selecting Elements

/**
 * We are going to start at the very top of any HTML document which is
 * `document`. So, we do have a special way of selecting the entire
 * document of any webpage by using the `documentElement` on the
 * `document`.
 *
 * So, just using `document` is not enough to select the document element
 * because that is not the real DOM element.
 *
 * For example, if we want to apply CSS styles to the entire page, we
 * need to select `documentElement`.
 */

console.log(document.documentElement); // the entire HTML element

/**
 * We can also easily select the head and the body.
 */

console.log(document.head); // head element
console.log(document.body); // body element

/**
 * So, for these special elements viz documentElement, head, and body
 * we don't even need to write any selector but, otherwise, as you already
 * know, we can use `querySelector()`.
 */

// this will return the first element that matches the passed selector
const header = document.querySelector('.header');
console.log(header);

/**
 * If we want to select multiple elements, then we should use
 * `document.querySelectorAll()`.
 */

const allSections = document.querySelectorAll('.section');
console.log(allSections);

/**
 * As you know already, the `querySelectorAll()` will return a node list
 * and then that will contain all of the elements that are a section
 * which are selected by our selector.
 *
 * These are the ones that we have been using all the time and in-fact
 * they are the most used ways of selecting elements.
 *
 * As you learned from the previous lesson, these are available not only
 * on the document i.e. `document.querySelector()` but, also on the
 * elements.
 *
 * Actually, we use this a lot when we want to select child elements as
 *  we will do a little bit later in this section.
 *
 * Next, we also already talked about `getElementById()` and within that,
 * we only pass the ID name itself without the selector.
 */

console.log(document.getElementById('section--1'));

/**
 * There also some others.
 */

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

/**
 * The `getElementsByTagName()` method returns an HTML collection, which
 * is different from a Node List because an HTML collection is actually
 * a so-called live collection.
 *
 * This means that if the DOM changes then this collection is also
 * immediately updated, automatically.
 *
 * For example, if we delete a button from the UI, and we go back to the
 * console and check for allButtons, we will find that one of them is
 * gone - which is the one that we deleted.
 *
 * So, that is something that is very important to keep in mind when we
 * use the `getElementsByTagName()` selector.
 *
 * Sometimes, it is actually quite helpful to have an HTML collection
 * like this - which updates automatically because, of course we can
 * also delete elements from the DOM programmatically, not just manually,
 * like we saw above with `allButtons`.
 *
 * The same does not happen with a NodeList.
 *
 * If we delete one of the sections from the UI, and then check
 * allSections, we will still have all the sections there, in the node
 * list.
 *
 * That's because this variable i.e. `allSections` was created by the
 * time when our deleted section still existed; and it didn't update
 * itself after one of the sections was deleted.
 *
 * So, that is important to keep in mind.
 *
 * Finally, let's also see `getElementsByClassName()`. This is similar to
 * getElementById() and getElementsByTagName().
 *
 * `getElementsByClassName()` will also return a live HTML collection.
 */

console.log(document.getElementsByClassName('btn'));

/**
 * So, this is how we select elements.
 *
 * We already knew `querySelector()` and `querySelectorAll()` which are
 * the modern ones but, the other ones have their place as well.
 *
 * So, in case we need a live HTML collection, which in some cases it is
 * helpful, we can use getElementsByTagName() and getElementsByClassName()
 * but, most of the time, we keep using the querySelector() and
 * querySelectorAll().
 */

// Creating and Inserting Elements
/**
 * Next up, let's talk about creating and inserting elements.
 *
 * We can create HTML elements using the `insertAdjacentHTML()` function
 * that we used before in the bankist application to insert movements.
 *
 * It is a quick and easy way of creating elements that used and liked a
 * lot.
 */

let html = `<h2>
"InsertAdjacentHTML()"
</h2>`;

document
  .querySelector('.header__title')
  .insertAdjacentHTML('beforebegin', html);

/**
 * But, let's now focus on some other ways of creating elements because
 * sometimes it is more useful to actually build the element a bit more
 * from scratch, like more programmatically using a combination of some
 * other methods.
 *
 * So, let's see how and then it will make sense.
 */

/**
 * Let's use the `createElement()` method. The first argument that we
 * pass into this method is the element that we want to create. For
 * example, a div.
 *
 * So, createElement('div') will return a DOM element of <div>
 *
 * So, let's create a div, and store that into a variable called message.
 */
let message = document.createElement('div');

/**
 * Now, this element is no where in our DOM yet. All it is, is a DOM
 * object that we can now use to do something on it but, it is not yet
 * in the DOM itself.
 *
 * If we want it on our page, then we need to manually insert it on our
 * page. But first, let's actually do something with it.
 *
 * For example, we can add classes to it.
 */

// now, this is like a selection for example querySelector() so, we can
// use it to select the element that we created and then do something
// with it like adding classes to it.
// Basically, `message` is just an object that represents a DOM element.
message.classList.add('cookie-message');

// we can also add text to the element
// message.textContent = 'We use cookies for improveed functionality and analytics.';
message.innerHTML =
  'We use cookies for improveed functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

/**
 * We now have this element and all we have to do now is to insert it
 * into our DOM.
 *
 * Let's do that in our header.
 */
// header.prepend(message);

/**
 * Now indeed, it is in our DOM.
 *
 * prepend() basically adds the element as the first child of the
 * element that it is call upon.
 *
 * But, we can also add it as the last child. For that, we use append()
 */

// header.append(message);

/**
 * Now what we see here is the the element was only inserted once.
 *
 * This is because, the `message` element is now indeed a live element
 * living in the DOM. Therefore, it cannot be at multipel places at
 * the same time.
 *
 * It is just like a person that also cannot be at two place
 * simultaneously.
 *
 * So, what happened here is that we first prepended the element and then
 * we appended it. What append() did here was to basically move the
 * element from being the first child to being the last child.
 *
 * Basically, it moved the element and did'nt really insert it because
 * it was already inserted in the DOM by prepend().
 *
 * What this means is that we can use the prepend() and append() methods
 * not only to insert elements but also, to move them.
 *
 * Again, that is because a DOM element is unique. So, it can always only
 * exist at one place at a time.
 */

/**
 * But now, what if we actually wanted to insert multiple copies of the
 * same element?
 *
 * In that case, we actually would have to copy the first element.
 * To clone, we use the cloneNode() method and we pass in `true` as
 * its argument.
 *
 * So, comment out the `header.append(message)` and let's clone it, before
 * we add it to the DOM once again.
 */

// All the child elements of the `message` element will also be copied
// header.append(message.cloneNode(true));

/**
 * Now, as you see, we get the same cookie message in both places, but
 * usually this is not what we want.
 *
 * So, let's actually only append it.
 */

header.append(message);

/**
 * Now to finish, there are actually two more methods and they are
 * before() and after().
 *
 * As the name suggests, before() will insert the element before the
 * header element i.e. as a sibling; and the after() will insert the
 * element after the header element as a sibling.
 */

// header.before(message);
header.after(message);

/**
 * That is how we create and insert elements programmatically and now,
 * to finish, let's also delete elements.
 *
 * What we are going to do is, we are going to remove the 'cookie-message'
 * element, when we click on the "Got it!" button.
 *
 * So, let's select that button, and as we click it, remove the cookie
 * message.
 */

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // here we don't have to select the `message` element again because
    // we already have it stored in memory.
    message.remove();
  });

/**
 * This remove() method is actually very recent.
 *
 * Before this method existed, all we could do was to remove child
 * elements.
 *
 * So, we had to first select the parent element and then remove the child
 * element from there.
 * So, it would look like this:
 */

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // select the parent first, then remove the child element
    message.parentElement.removeChild(message);

    // NOTE: This will give an undefined error for now because the
    // above event listener is still working so, by the time code
    // reaches here, the "message" element must have been gone which
    // is why it says undefined. But, if you comment tha above code
    // and then try, this code will work just fine.
  });

/**
 * This was a bit cumbersome but, that is how we used to do it before
 * remove() method was introduced; and you might find it in some of the
 * old code bases.
 *
 * Also, many people don't know about the remove() method just yet.
 *
 * By the way, this way of moving up and down the DOM tree, like selecting
 * the parent element first, is called DOM traversing; and there is a
 * whole lesson about that a bit later in this section.
 *
 * This is how we select, create, insert, and delete elements.
 *
 * To make this 100% complete, just make sure that you review the insert
 * adjacent HTML method as well - that we used before in the Bankist
 * application.
 */

/***********************************************************************/
/******************* STYLES, ATTRIBUTES, AND CLASSES *******************/
/***********************************************************************/

console.log(
  `/******************* STYLES, ATTRIBUTES, AND CLASSES *******************/`
);

/**
 * We will start working on the project very soon. But, for now, we need
 * another reference lesson.
 *
 * So here, we are going to learn about styles, and attributes, and
 * classes, and you will be able to keep all of the relevant tools here
 * in one simple lesson so that you can reference all of them in the
 * future.
 *
 * Some of these tools we will use later in the project but, it is
 * impossible to create examples for all the functions and methods that
 * we are going to learn now, but they are still important, so let's go.
 *
 * Let's keep working on our cookie message banner.
 *
 * We are going to start by talking about styles and we've already set
 * CSS styles before but, there are still some more things to learn.
 *
 * First, let's go back to the basics i.e. set a style on an element.
 */

// STYLES:

message.style.backgroundColor = '#37383d';

/**
 * Now the style nicely got applied to our element.
 *
 * Again, we didn't have to manually select the `message` element first
 * because we already had it stored in the `message` variable.
 *
 * Now, let's set the width of the `message` element.
 *
 * Remember that we have to write the CSS value exactl as we would do in
 * CSS i.e. we have to always include the unit.
 */

message.style.width = '120%';

/**
 * Remember that these styles are actually set as inline styles i.e.
 * styles directly in the DOM - in the style attribute of the HTML
 * element.
 *
 * You might think that we will be able to read styles using the `style`
 * property but, let's see what happens.
 */

// we get nothing
console.log(message.style.height);

/**
 * We get nothing.
 *
 * This is because using the `style` property like this only works for
 * inline styles that we set ourselves also using the `style` property.
 *
 * So, it will work for the background color because we set that style
 * using the `style` property as an inline style.
 */

console.log(message.style.backgroundColor); // rgb(55, 56, 61)

/**
 * Again, this worked because it is an inline style and a style that
 * we set using the `style` property i.e. we set it ourselves, manually.
 *
 * But, we cannot get a style that is hidden inside of a class or maybe
 * that doesn't even exist.
 *
 * For example, let's say that we wanted to get the color. The color is
 * defined in the stylesheet but, if we try to log it here, then it is
 * nowhere to be found.
 */

// we get nothing
console.log(message.style.color);

/**
 * We can still get the styles if we really want to, all we need to do is
 * to use the `getComputedStyle` function.
 *
 * It sounds a bit weird but, this is how it works:
 */

console.log(getComputedStyle(message));

/**
 * As you see in the console, we get a huge object which contains all of
 * the properties with their values.
 *
 * So, in practice, we simply take a certain property, like color, from
 * there.
 */

console.log(getComputedStyle(message).color); // rgb(187, 187, 187)

/**
 * These are the computed styles, which means that it is the real style
 * as it appears on the page - even if we do not declare it in our CSS.
 *
 * For example, the `height`. We didn't define it ourselves but, the
 * browser of course needed to calculate the height to display it and
 * so, we can then get access to that value.
 */

console.log(getComputedStyle(message).height); // 50px

/**
 * Let's say we now wanted to increase the height of the `message`
 * by 40px. To do that, we could simply get its height and then add
 * 40 to it like so:
 */

// note we used Number.parseFloat() because getComputedStyle() returns a string with "px" or unit.
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

/**
 * So, this getComputedStyle() can come in really handy.
 *
 * But now, finally, let's also work with CSS custom properties, which
 * we usually just call CSS variables.
 *
 * CSS custom properties are the ones in the `:root` declaration in the
 * CSS file.
 *
 * They are called custom properties but, they are more like variables.
 *
 * The idea of CSS variables is very similar to the idea of variables in
 * JavaScript.
 *
 * So this way, we can change the value in many places all over our CSS
 * files by simply changing the value in `:root`
 *
 * Now, if we can change the value from `:root` then we can also change
 * the value from JavaScript. So, let's see how.
 *
 * Before that, we first need to see where these properties are defined.
 * They are defined in the document root - in JavaScript that is
 * equivalent to the document i.e. `document` element.
 *
 * Let's say that we want to change the value for --color-primary
 *
 * We get that from the document root which is the document element in
 * JS, we access its `style` property and then call `setProperty()` on it.
 *
 * The `setProperty()` method takes two parameters. The first argument
 * is what we want to change, and the second argument takes in the value
 * of what we want it to be changed to.
 */

document.documentElement.style.setProperty('--color-primary', 'orangered');

/**
 * Now if you look at our UI, everywhere in our style where we used
 * the --primary-color, the color is now changed.
 *
 * So, with this, we can easily change the style of our page, simply by
 * setting one property.
 *
 * That is how we change the value of CSS custom properties.
 *
 * Also, we can use the `setProperty()` for all properties but, usually
 * it is just easier to do it the way we did above. But, we cannot do
 * that for custom properties so, in that case, we have to use
 * `setProperty()`.
 */

// resetting primary color to its original value
document.documentElement.style.setProperty('--color-primary', '#5ec576');

// ATTRIBUTES
/**
 * That's it for styles, let's talk a little bit about attributes now.
 *
 * In HTML, just to remember, every element has an attribute e.g.
 * `src`, `id`, `class` etc.
 *
 * So, in JavaScript, we can of course, access and change these different
 * attributes.
 *
 * Let's select the logo and access some of its default attributes.
 */

const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist Logo
console.log(logo.src); // http://127.0.0.1:5500/Section%2013/img/logo.png

/**
 * As you see in the console, we get the alternative text and the source
 * of that image.
 *
 * The source might look a bit different than the one we have in the
 * HTML file but, more on that in a second.
 *
 * So, this works because on images, they are supposed to have the `alt`
 * and the `src` attributes on them and so if we specify them in HTML,
 * then JS will automatically create these properties on the object,
 * but if we add some other attribute that is not a standard then
 * JavaScript, will not automatically create a property on the object.
 *
 * So, let's go to the lessons-learned.html file and write a 'designer'
 * attribute to the logo image.
 *
 * If we now try to read `logo.designer`, it is not going to work.
 */

console.log(logo.designer); // undefined

/**
 * We get undefined - this is because `designer` is not a standard
 * property that is expected to be on images.
 *
 * Another one that works here and that's a bit different that you might
 * expect is `className`
 */

console.log(logo.className); // nav__logo

/**
 * So, className returns a string value of all the classes in the class
 * attribute of the element on which it is called upon.
 *
 * You might think it should be `class` but, it is `className` for
 * historical reasons.
 *
 * Now, the way we tried above for `designer` attribute does not work
 * that way but, of course, there is another way of reading its value
 * from the DOM. It is just a little bit more difficult but, it is not
 * a problem.
 *
 * To do that, we simple have to use `getAttribute()` method, like so:
 */

console.log(logo.getAttribute('designer')); // bhoami

/**
 * Just as we can read these values for these attributes, we can also
 * set them. For example:
 */

logo.alt = 'Beautiful minimalist logo';

/**
 * Now if you check the alt text of the logo in the chrome dev tools,
 * you will the updated alt text.
 *
 * There is also the opposite of getAttribute(), which is setAttribute().
 */

logo.setAttribute('company', 'Bankist');

/**
 * If we check the HTML in chrome dev tools, we will find the logo with
 * a new attribute called 'company' and its value set to 'Bankist'.
 */

/**
 * Remember that we got a different src in compare to the `src` attribute
 * on the logo element.
 */

// src in our HTML: img/logo.png
// we got: http://127.0.0.1:5500/Section%2013/img/logo.png
console.log(logo.src);

/**
 * Basically, the actual `src` is different than what we have in the HTML.
 *
 * So, the `src` that we got from `logo.src` is basically the absolute
 * URL, while what we have in the HTML is just a relative URL i.e.
 * relative to the folder in which the lessons-learned.html is located.
 *
 * If we want to get the `src` which is in the HTML file, then we also
 * have to use `getAttribute()`.
 */

console.log(logo.getAttribute('src')); // img/logo.png

/**
 * Sometimes, you really need the relative one so, make sure you use
 * `getAttribute()` at that point.
 *
 * The same is true for the `href` attributes on anchor tags.
 */

const link = document.querySelector('.nav__link--btn');

console.log(link.href); // http://127.0.0.1:5500/Section%2013/lessons-learned.html#
console.log(link.getAttribute('href')); // #

/**
 * Here, you once again see that you get the absolute URL when you use
 * `link.href` and you get the relative URL when you use `getAttribute()`.
 */

// DATA ATTRIBUTES
/**
 * Finally, there are also special types of attributes, called data
 * attributes.
 *
 * Data attributes are special kind of attributes that start with the
 * word data.
 *
 * Let's add one to our logo in the lessons-learned.html file.
 *
 * The data attribute has to start with the word 'data' and then dash,
 * and then what ever we want.
 *
 * What's special about this is that now this attribute is at logo.dataset
 */

// Here we use camelCase for version number while, we use kebab-case in
// HTML for this attribute.
// So just like property names, we have to convert this into camel case
// when working in JS - keep that in mind.
console.log(logo.dataset.versionNumber); // 3.0

/**
 * So for these special attributes, they are always stored in the dataset
 * object.
 *
 * We use data attributes quite a lot when we work with the UI and
 * especially when we need to store data in user interface i.e. in the
 * HTML code.
 *
 * We will see how useful that can be throughout the rest of this project
 * and of the course.
 */

// CLASSES
/**
 * Finally, to finish, let's talk about classes - even though, at this point, we already know
 * all there is to know about classes.
 */

logo.classList.add('c', 'd'); // you can add multiple classes
logo.classList.remove('c', 'd'); // you can remove multiple classes
logo.classList.toggle('c');
logo.classList.contains('c');

/**
 * Just as we can read a class using the `className` property, we can use it to set a class.
 */

// reading className
console.log(logo.className); // nav__logo c

// setting class using className - DO NOT USE THIS becuase it will override existing classes
// this is just for demonstration purposes only.
logo.className = 'bhoami';

// re-setting original class
logo.className = 'nav__logo';

/**
 * Now if you check HTML in chrome dev tools, the classes for logo must be udpated.
 *
 * However don't use className to set classes because it will override the existing classes
 * and also, it allows us to only put one class on any element.
 *
 * The add(), remove(), toggle(), and contains() methods allow us to add and remove classes
 * based on their names, without interfering with the classes that are already there.
 *
 * Just keep in mind that contains() is really called contains() and not includes() like it
 * is called in arrays.
 *
 * Hopefully, this lesson will serve as a nice reference for all the different ways of
 * working with classes, attributes, and styles in JS.
 *
 * In the next lesson, we will finally start working with our project.
 */

/***********************************************************************/
/******************** IMPLEMENTING SMOOTH SCROLLING ********************/
/***********************************************************************/

console.log(
  `/******************** IMPLEMENTING SMOOTH SCROLLING ********************/`
);

/**
 * Let's now start working on the Bankist website and we are going to
 * start by implementing smooth scrolling.
 *
 * The functionality that we are going to implement now is when we click
 * on the "Learn more" button in the header, it will smoothly scroll to
 * the first section.
 *
 * That's it, a simple effect.
 *
 * We are going to see two ways of doing this.
 *
 * First one is a bit more old school, which will allow us to learn a
 * couple of interesting things, and then finally, we will learn the
 * more modern way, which only works in super modern browsers.
 *
 * Let's start by selecting the button and the section that we want
 * to scroll to.
 */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

/**
 * Now we need to start by adding an event listener to the button.
 */

// btnScrollTo.addEventListener('click', function (e) {});

/**
 * In the first way that we are going to implement, we need to first
 * get the coordinates of the element that we want to scroll to.
 *
 * We get those coordinates by using getBoundingClientRect() method.
 */

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log('s1coords', s1coords);
// });

/**
 * Now when we click the button, we get a DOMRect rectangle - it has
 * these properties:
 * - The X position - which is measured from the left side
 * - The Y position - which is measured from the top
 * - Width of the element
 * - Height of the element
 * - and others
 *
 * This element is probably not the best one to understand this, so let's
 * get this rectangle for the button.
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());
});
 */

/**
 * The getBoundingClientRect() is bsically relative to the visible view
 * port. This means that if we scroll a little and then click on the
 * button again, we will get changed values for x and y position that
 * will be relative to the visible view port at that point.
 *
 * In fact, we can also get the current scroll position, like so:
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);
});
 */

/**
 * Now if we scroll a little and then click the button, and check the
 * console, we will get the current scroll position.
 *
 * At the very top, those values should be 0, 0
 *
 * Basically, the Y position is the distance between the current top of
 * the view port to the very top of the web page.
 *
 * And the X position is the distance between the current left of the
 * view port to the very left of the web page.
 *
 * Sometimes, it is very important to know those in certain applications.
 *
 * We can also read the height and width of the view port.
 *
 * NOTE: Viewport represents the area in computer graphics being currently
 * viewed. In web browser terms, it is generally the same as the browser
 * window, excluding the UI menu bar, etc. That is the part of the
 * document you are viewing.
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // height and width of the viewport
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
});
 */

/**
 * Now if we change the viewport height/width and click the button, we
 * will see its height and width at that point.
 *
 * So, by now, we get all kinds of interesting information about
 * coordinates, scrolling, and dimensions of the view port.
 *
 * Anyway, the goal of the actually getting these coordinates to is
 * because we need them to scroll to the first section when we click the
 * button.
 *
 * Essentially, we need those coordinates so we can tell JS, where to
 * scroll to.
 *
 * So, in order to do that, we will use a method called `window.scrollTo()`
 * `window.scrollTo()` is a global function that is available on the
 * window object, and its first argument is the left position and the
 * second argument is the top position.
 *
 * So, in our case, we need the left and top position of the section1,
 * and we can get that from `section1.getBoundingClientRect()`.
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // height and width of the viewport
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  window.scrollTo(s1coords.left, s1coords.top);
});
 */

/**
 * Now if we click the button, it works. We are at the top of section1.
 *
 * However, if we scroll some and then click the button, it doesn't scroll
 * as we expected it to.
 *
 * That's because, `s1coords.top` is always relative to the viewport, not
 * to the document. So, not to the top of the page.
 *
 * Basically, `s1coords.top` is relative to top edge of the view port,
 * not to the top of HTML doc.
 *
 * So, it works when we are at the very top of the HTML doc. That's
 * because the y-position in DOMRect of the section1 is the same as the
 * top in its DOMRect - which is basically the distance between the
 * top of the section1 and top of the viewport/HTML doc.
 *
 * But, if we scroll, then the distance between the top of section1 and
 * the top of viewport is a lot less. So, it only scrolls that much less
 * of a distance. While, in fact, we want it to scroll all the way to
 * the top of section1.
 *
 * This might all be a bit confusing so, you might have to play around
 * with it on your own to really get the hang of it. Otherwise, it is
 * going to be hard to make sense of it.
 *
 * But, the solution to this problem is to simply add the current scroll
 * position to the top value of the RectDOM.
 *
 * With that, we will then determine the position of the section1, not
 * relative to viewport but, relative to the top of the page.
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // height and width of the viewport
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
});
 */

/**
 * Now it works just as expected.
 *
 * So, by doing this, we basically determined the absolute position of
 * the section1 element relative to the document i.e. the entire webpage.
 *
 * That is important to note. So, if you need the absolute position of
 * any element relative to the webpage, then you calculate it using
 * top of the DOMRect and window.pageYOffset - similarly for the
 * horizontal positioning.
 *
 * Now, we can make this even better because, there is a way of making
 * this animation nice and smooth.
 *
 * To achieve that, we need to pass in an object instead of an argument
 * to the `scrollTo()` method, like so:
 *
 * The properties of this object would be left, top, and behavior.
 */

/* 
btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // height and width of the viewport
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Smooth Scrolling
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
 */

/**
 * Now if we try it out, it works.
 *
 * The browser automatically figures out the speed it should go to make
 * it look really nice.
 *
 * So, this was kind of the old school way of doing it where we had to
 * manually calculate all of the values and then saying where we want
 * to scroll to.
 *
 * But, there is a more modern way and it works like this:
 *
 * We simply take the element that we want to scroll to, and that is
 * section1, and on that, we call `scrollIntoView()`. In this method
 * we pass in an object which specifies the behavior and we set that
 * behavior to smooth. And that's actually it.
 */

btnScrollTo.addEventListener('click', function (e) {
  // DOMRect for section 1
  const s1coords = section1.getBoundingClientRect();
  console.log('s1coords', s1coords);

  // DOMRect for button
  // NOTE: e.target is essentially the element that was clicked, which is the button
  console.log(e.target.getBoundingClientRect());

  // scroll position
  console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // height and width of the viewport
  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Smooth Scrolling
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // New way of smooth scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

/**
 * Now we don't need any of the old school way, and it works the same
 * without any of the weird calculations/positions.
 *
 * But, this modern way only works for modern browsers, so if you only
 * need to support those, then you are 100% fine using only
 * `scrollIntoView()` method.
 *
 * But it is still good to know everything that we learned in the old
 * school method.
 *
 * By the way, these `clientHeight` and `clientWidth` are not counting
 * with the scroll bars. It is just dimensions of the view port, that are
 * actually available for the content - and that excludes any scroll
 * bars.
 */

/**********************************************************************/
/***************** TYPES OF EVENTS AND EVENT HANDLERS *****************/
/**********************************************************************/

console.log(
  `/***************** TYPES OF EVENTS AND EVENT HANDLERS *****************/`
);

/**
 * In this lessons and the next ones, we are going to talk a little bit
 * more about events.
 *
 * We have already worked with events ebfore, but now, let's add some
 * more important concepts and also make things a bit more clear.
 *
 * An event is basically a signal that is generated by a certain DOM
 * node and a signal means that something has happened, for example,
 * a click somewhere or the mouse moving, or the user triggering the
 * full screen mode and really anything of importance, that happens
 * on our webpage, generate an event.
 *
 * And as we already know, we can then listen for these events in our
 * code using EventListeners so that we can handle them if we'd like.
 *
 * But, no matter if we handle a certain event or not, for example, a
 * click, that event will always happen when a user clicks. So, it does
 * not matter if we are actually listening for it or not; and that's
 * going to be important to understand in the next lesson.
 *
 * We already worked with a couple of different events earlier in the
 * course, but now let's take a look at another type of event, which
 * is the mouseenter event, but let's start by selecting an element
 * and let's use the h1 element this time.
 */

const h1 = document.querySelector('h1');

/**
 * We already know about addEventListener() but, in this lesson, we
 * are going to take a look at two more ways of listening for events.
 *
 * The `mouseenter` event here is a bit like the hover event in CSS.
 *
 * It fires whenever a mouse enters a certain element - just as the name
 * suggests.
 */

/* 
h1.addEventListener('mouseenter', function (e) {
  console.log(`addEventListener: Great! You are reading the heading! :D`);
});
 */

/**
 * Let's try it out now, and indeed, as we hover over the heading, we
 * get the string logged onto the console.
 *
 * Let's now take a look at the list of different events on MDN.
 * https://developer.mozilla.org/en-US/docs/Web/API/UI_Events
 *
 * Here you will see that there are all these different kinds of events
 * that we can eventually learn how to respond to.
 *
 * But, usually the most important ones are the ones related to mouse
 * and keyboard ones.
 *
 * But for example, there are also some for the clipboard, for full
 * screen, for resizing the page, and for when we scroll the page, and so
 * on and so forth.
 *
 * Anyway, let's now see another way of attaching an event listener to
 * an element, and that is by using the so-called `on-event` property
 * directly on the element.
 *
 * For example, when we want to listen for `mouseenter`, there is a
 * property called `onmouseenter`, and then we can simply set that
 * property to a function that defines what to do when the said event
 * occurs.
 */

/* 
h1.onmouseenter = function (e) {
  console.log(`onmouseenter: Great! You are reading the heading! :D`);
};
 */

/**
 * Now, if we check our console, it should work.
 *
 * And actually, for each of the events that we saw in the MDN docs,
 * there is one `on-event` property just like `onmouseenter`.
 *
 * For example, for `click` event, there is `onclick`.
 *
 * However, this way of listening to events is a bit old school. So, it
 * used to be done like this in the old days but now, we usually always
 * use `addEventListener()`.
 *
 * We are just learning about `on-event` in case you ever come across it
 * in some code bases.
 *
 * There are two reasons as to why the `addEventListener()` is better.
 *
 * The first one is that it allows us to add multiple event listeners to
 * the same event. So we could use the `addEventListener()` again on the
 * same element, with the same type of event but, change the callback
 * function.
 *
 * But, if we did the same with the `on-event` property, then the second
 * function will simply override the first one.
 *
 * That's one advantage of the addEventListener.
 *
 * The second one, even more important, we can actually remove an event
 * handler in case we don't need it anymore.
 *
 * This is something that we haven't done before but, it is actually
 * very simple and very useful from time to time.
 *
 * To do that, first we need to export the callback function into a named
 * function.
 *
 * So, we cannot just write, for example, the same function and expect
 * it to work - that is not going to work.
 *
 * After we listened for an event and then handled that event in the
 * function, we can then remove that event listener by using
 * `removeEventListener()`.
 */

const logH1 = function (e) {
  console.log(`addEventListener: Great! You are reading the heading! :D`);

  // h1.removeEventListener('mouseenter', logH1);
};

h1.addEventListener('mouseenter', logH1);

/**
 * This is why we had to export that function, so that we could target
 * it while removing the event listener as well.
 *
 * So, now if we hover over the h1 element, we will get the log once
 * and then after that, we will get nothing. So, it will work exactly
 * once.
 *
 * That's because, in the same event handler function, we also then
 * removed the event listener.
 *
 * So, this makes it that we can only listen for the event once.
 *
 * So, this is a nice pattern whenever you only want to listen to any
 * event just once.
 *
 * But, of course, the removeEventListener() doesn't have to be inside
 * the callback function.
 *
 * You can remove the event listener at any place in our code.
 *
 * Example, we could remove it after a certain time has passed.
 */

// removing the event listener after 3 seconds have passed
setTimeout(() => h1.removeEventListener('mouseenter', logH1), 3000);

/**
 * So, this is another pattern of removing the event listener but of
 * course there are going to be other situations where this is helpful.
 *
 * Finally, there is also a third way of handling events, which is by
 * using an HTML attribute.
 *
 * This one should not be used but, just for the sake of curiosity, we
 * are going to take a look at it.
 *
 * So, head over to the lessons-learned.html for that.
 *
 * Those are the different ways of handling events and also how to
 * remove event listeners in case we don't need them anymore.
 *
 * Next up, you will learn the most important property of events, which
 * is bubbling. So, let's move on to it. (Theory Lesson)
 */

/***********************************************************************/
/******************** EVENT PROPAGATION IN PRACTICE ********************/
/***********************************************************************/

console.log(
  `/******************** EVENT PROPAGATION IN PRACTICE ********************/`
);

/**
 * Let's now see event propagation in practice, and mainly event
 * bubbling.
 *
 * We are going to do that by attaching event handlers to the "Features"
 * navigation link and all of its parent elements.
 *
 * Then, as we click on the link, we will give all of these elements
 * random background colors, and this will then allow us to visiualize
 * exactly how event bubbling is happening.
 *
 * It will make sense once we see it actually working. So, let's start
 * by creating random color.
 *
 * A color is just a string, like RGB, and the the values between 0 and
 * 255. Example: rgb(30, 255, 189)
 */

// get a random number between min and max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// get a random color
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

/**
 * Now let's attach the event handler to the "Features" link in navbar,
 * and its parent elements as well.
 */

const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

// navLink.addEventListener('click', function (e) {
//   // remember that in an event handler, the this keyword always points
//   // to the element on whcih that event handler is attached.
//   this.style.backgroundColor = randomColor();
// });

/**
 * As of now, when we click on the "Features" link, its background color
 * changes. The background color changes ONLY of the link.
 *
 * But, let's now attach the event listener to the its parent element
 * and see what happens.
 */

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

/**
 * Now even its parent elements' background colors are changing.
 *
 * So, based on what we learned in the last lesson, why do you think
 * that is happening?
 *
 * Well, just as we learned before, the event actually happens at the
 * document root and from there it then travels down to the target
 * element.
 *
 * The target in this case is the "Features" link.
 *
 * Then, from there, it bubbles up; and bubbling up means that basically,
 * it is as if the event had also happened in all of the parent elements.
 *
 * That is the reason why the particular event on the navLink is now
 * also being handled by the event listener on navLinks and nav.
 *
 * So, it is as if the click event on the "Features" link had also
 * happened on the navLinks and nav element.
 *
 * So, all three events are now handling the same event which happened
 * on the "Features" link.
 *
 * Now, what do you think happens when we click on the navLinks i.e.
 * outside of navLink?
 *
 * The "features" link itself remains unchanged but, the background color
 * of navLinks and nav changes.
 *
 * So, from navLinks, the event only bubbles up to its parent elements.
 *
 * Great!
 *
 * Let's now dig a little bit deeper and talk about the event targets.
 * Let's add a console.log() to each of these events.
 */

// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();

//   // e.target is essentially where the event originated i.e. where it first happened.
//   // it is not the element on which the event handler was attached. It
//   // is where the event first happened.
//   console.log('LINK', e.target);
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target);
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target);
// });

/**
 * Now watch what happens when we click on the "Features" link.
 *
 * Again, all the three elements got a random background color, and as
 * you see, the `e.target` is always the same on each one.
 *
 * That target is of course, the element where the click first happened.
 *
 * And it appears in all three handlers because all of them are
 * essentially handling the exact same event.
 *
 * So, the `e` i.e. the event argument that each of these event listeners
 * receive is the exact same event. Again, this is because of event
 * bubbling.
 *
 * So, the event originates from the "Features" link but then, it bubbles
 * up to its parent element, which is navLinks, and from there to its
 * next parent element, and from there, it will travel even further up
 * in the DOM tree.
 *
 * So, we can handle that event in all of the parent elements and that
 * is exactly what we did here.
 *
 * Now besides `e.target`, there is also `e.currentTarget`; and the
 * currentTarget is indeed, the element on which the event handler is
 * attached.
 */

// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

/**
 * Now if you check, the current target is not the same in each element.
 * It represents the element on which the handler is attached.
 *
 * So, you might have noticed that the currentTarget is exactly the same
 * as the `this` keyword in the event handlers.
 *
 * This is because the `this` keyword is also pointing to the element
 * on which the event listener is attached to.
 */

// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
// });

/**
 * All of this is important to know when you really want to gain a
 * deep understanding of the DOM and how it works.
 *
 * If you check the console, we get `true` for e.currentTarget === this
 * on each element. So, they are going to be exactly the same in any
 * event handler.
 */

/**
 * Another thing that we need to know is that we can actually stop the
 * event propagation. Let's see how.
 *
 * All we have to do is to simply call on the event,
 * `e.stopPropagation()`
 */

// navLink.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true

//   // stopping event propagation - commenting it because it is not a good practice to stop propagation.
//   // e.stopPropagation();
// });

// navLinks.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
// });

// nav.addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
//   console.log(e.currentTarget === this); // true
// });

/**
 * So, if we try to the click on the "Features" link now, let's see
 * what happens.
 *
 * Now the two parent elements did not change their background colors,
 * which means that the event never arrived at those elements.
 *
 * That's why they weren't handled there, and again, that is because
 * we stopped the propagation at the navLink. So, the propagation
 * phase then never happened for this event. Therefore, these events
 * never reached the navLinks and nav elements.
 *
 * In practice, it is usually not a good idea to stop propagation, but
 * we saw it here in case we really need it sometime.
 *
 * Stopping the event propagation like this can sometimes fix problems
 * in very complex appplications with many handlers for the same events,
 * but in general, it is not really a good idea to stop the propagation
 * of events.
 *
 * So, as we just saw, the three event handlers that we set up receive
 * events from the target elements and also from the bubbling phase.
 *
 * In other words, the event handler functions are listening for click
 * events that happen on the event itself or one of the parent elements;
 * and they are also listening for events bubbling up from their child
 * elements and that's the reason why the color changes in all of the
 * parent elements.
 *
 * So, the two phases that we just described are phase 2 and phase 3 from
 * the last lesson.
 *
 * But now, what about the capture phase - which was phase 1?
 *
 * As we learned, events are capturned when they come down from the
 * document root all way to the target, but our event handlers are not
 * picking up these events during the capture phase.
 *
 * As mentioned before, the `addEventListener()` is only listening for
 * events in the bubbling phase, but not in the capturing phase.
 *
 * That is the default behavior of the `addEventListener()` method,
 * and the reason for that is that the capturing phase is usually
 * irrelevant for us. It is just not that useful.
 *
 * On the other hand, the bubbling phase can be very useful for something
 * called event delegation. That's is something that we are going to do
 * in the next lesson.
 *
 * However, if we really do want to catch events during the capturing
 * phase, we can define a third parameter in the `addEventListener()`
 * function. The third parameter will take true or false. If we set it
 * to true, then the event handler will no longer listen to bubbling
 * events, but instead, to capturing events.
 *
 * In practice, that's going to look the same but as we take a look in
 * the console log, the nav will be first one appearing instead of
 * navLink, since we set the third parameter to true in nav.
 *
 * The reason for that is that the nav element is now actually
 * listening for events as it travels down from the DOM, while the
 * others are listening for the event, as it travels back up - that
 * happens later so, the nav is the first one to show up.
 */

navLink.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true

  // e.stopPropagation();
});

navLinks.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
  console.log(e.currentTarget === this); // true
});

// setting the third parameter to true
// this means that it will listen to capturing events and not to bubbling events
nav.addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
    console.log(e.currentTarget === this); // true
  },
  true
);

/**
 * They are all still working with the same event. They are simply
 * doing it in different phases of the event propagation.
 *
 * If that sounds confusing, please look at the last lesson again.
 *
 * NOTE: By default, the third parameter of the addEventListener()
 * is set to false.
 *
 * As mentioned before, capturing is rarely used these days. And the
 * only reason why both capturing and bubbling exist are for historical
 * reasons - from the time where different browsers implemented different
 * versions of JavaScript.
 *
 * Anyway, what really matters is that you understand why the three
 * elements, nav, navLinks, and navLink, get three different background
 * colors, even though the click only happend on the navLink element.
 */
