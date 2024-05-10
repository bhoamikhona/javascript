'use strict';

/**********************************************************************/
/************* SELECTING, CREATING, AND DELETING ELEMENTS *************/
/**********************************************************************/

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
let header = document.querySelector('.header');
console.log(header);

/**
 * If we want to select multiple elements, then we should use
 * `document.querySelectorAll()`.
 */

let allSections = document.querySelectorAll('.section');
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

let h1 = document.querySelector('h1');

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
let nav = document.querySelector('.nav');

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

/**********************************************************************/
/*********** EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION ***********/
/**********************************************************************/

console.log(
  `/*********** EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION ***********/`
);

/**
 * Let's now use the power of event bubbling to implement something
 * called event delegation.
 *
 * So, what we are going to do, is to implement a smooth scrolling
 * bahavior in the navigation, so that when we click on one of the nav
 * links then it automatically scroll smoothly to the corresponding
 * section.
 *
 * Right now, if we click one of those links, it moves to the
 * corresponding section but, we want it to happen smoothly.
 *
 * So, let's not go ahead, and use event delegation to implement this
 * navigation.
 *
 * First, let's implement this without using event delegation so that
 * we can see the problem in the approach that we have been using so
 * far.
 *
 * To begin, let's select all of the three links in the nav links.
 */

// const allNavLinks = document.querySelectorAll('.nav__link');

// allNavLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     console.log('link');
//   });
// });

/**
 * Now you already start to see the problem, which is that be default,
 * clicking on one of these nav links, wills croll to the position in
 * HTML.
 *
 * That's because of the so-called anchors.
 *
 * <a class="nav__link" href="#section--1">Features</a>
 *
 * The `href="#section--1"` are called anchors i.e. the # and the name.
 * This will automatically move the page to the element which has the
 * ID of it.
 *
 * So, we need to prevent that from happening; and for that, we can
 * use `e.preventDefault()`
 */

// const allNavLinks = document.querySelectorAll('.nav__link');

// allNavLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('link');
//   });
// });

/**
 * Now we are no longer scrolling to the page, and the URL is also not
 * changing.
 *
 * So, that problem is fixed and so now, let's implement the smooth
 * scrolling.
 *
 * The anchor however, is still going to be very useful. This is because
 * we can take the value of the `href` attribute and select the element
 * we want to scroll to.
 *
 * This is because, if we think about, `#section--1` pretty much looks
 * like a selector for an ID.
 */

// const allNavLinks = document.querySelectorAll('.nav__link');

// allNavLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     // this refers to the current element
//     // we used getAttribute() because we want the relative path, we don't want the absolute path
//     const id = this.getAttribute('href');
//     console.log(id);
//   });
// });

/**
 * The `id` now pretty much looks like a selector already. So now, we
 * can take and select an element based on it, and then simply smooth
 * scroll to that element.
 *
 * So for that, we are going to use `scrollIntoView()` method.
 */

// const allNavLinks = document.querySelectorAll('.nav__link');

// allNavLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');

//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

/**
 * That's it.
 *
 * That works beautifully.
 *
 * Now, as you see, this works just fine but, the problem is that it is
 * not really efficient.
 *
 * We are adding the exact same event handler callback function once to
 * each of the three links in the navigation.
 *
 * So, the exact same function is now attached to the three elements,
 * and that is kind of unnecessary.
 *
 * Of course, it would be fine for only three elements, but what if we
 * had 1000, or 10,000 elements?
 *
 * If we were to attach an event handler callback function to 10,000
 * elements like we did above then we would be effectively creating
 * 10,000 copies of the exact same function.
 *
 * So, that would certainly impact the performance. So, it is just not
 * a clean solution in that case and so, the better solution in that
 * case is without a doubt, to use event delegation.
 *
 * In event delegation, we use the fact that event bubble up; and we
 * do that by putting the event listener on a common parent of all the
 * elements that we are interested in.
 *
 * In our case, that is the navLinks element.
 *
 * So, we will put our event handler on the navLinks element and then
 * when a user clicks on one of the links, the event is generated, and
 * bubble up, just as we saw in the last lesson.
 *
 * Then, we can basically catch that event in the common parent element,
 * and handle it there. This is because we also know where the event
 * actually originate by using `event.target` property.
 *
 * So, that's what event delegation is and let's go ahead and implement
 * it.
 *
 * In event delegation, we basically need two steps:
 * 1) We add the event listener to a common parent element of all the
 * elements that we are interested in.
 * 2) In that event listener, determine what element originated the
 * event - so that we can then work with that element where the event
 * was actually created.
 */

// Event Delegation
// 1) Add event listener to common parent element
// 2) Determine what element originated the event

/* 
// adding the event listener to common parent element
navLinks.addEventListener('click', function (e) {
  // figuring out where the event originated - this is stored in e.target
  console.log(e.target);
});
 */

/**
 * So, e.target becomes really, really useful now in this strategy,
 * because we can now use this information to see where exactly this
 * event happened.
 *
 * Now if we click on any link, we can then see where the even occured
 * in the log.
 *
 * Also, if we click inside the navLinks but outside navLink, we can
 * see where the click happened, which is navLinks and not any particular
 * navLink. This part is important to notice because we actually
 * only want to work with the click that happened on one of the links.
 * But the click that happened on navLinks is not at all relevant.
 */

// // adding the event listener to common parent element
// navLinks.addEventListener('click', function (e) {
//   // figuring out where the event originated - this is stored in e.target
//   console.log(e.target);
// });

/**
 * Now we need a matching strategy here in order to match only the
 * elements that we are actually interested in.
 *
 * In this case, the best way to do that is to simply check if the
 * `target` has `nav__link` class.
 *
 * NOTE: Matching strategy can be one of the hardest things to come up
 * with, when you use this technique.
 */

// navLinks.addEventListener('click', function (e) {
//   console.log(e.target);

//   if (e.target.classList.contains('nav__link')) {
//     console.log('link');
//   }
// });

/**
 * Now we only get "link" in the console if we click on one of the
 * navLink but, if we click outside of those, we get nothing.
 *
 * So now, we basically, successfully only selected the link elements
 * itslef.
 *
 * Now we can do exactly what we did before.
 */

navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

/**
 * So as you see, we still get the same sections as logged to the
 * consoel, and it scrolls to exactly where we want it to go.
 *
 * So, this works beautifully, and we successfully implemented event
 * delegation, which is a lot better, and a lot more efficient than
 * simply attaching the same event handler to multiple elements.
 *
 * Instead, we simply added one big event handler function to the parent
 * element of all the elements that we are interested in, and then we
 * simply determined where the click event came from.
 *
 * We also needed a matching strategy because we wanted to ignore clicks
 * that did not happen right on one of the nav links.
 *
 * And coming up with a matching strategy is probably the hardest part
 * of implementing event delegation.
 *
 * But there will be plenty of example in the rest of the course and
 * it will make a lot more sense to you at some point.
 *
 * Hopefully, you are now convinced that event delegation is a much
 * better strategy, even though it requires a little bit more work than
 * the first implementation that we did.
 *
 * In fact, there is actually an even more important use case of event
 * delegation, which is when we are working with elements that are not
 * yet on the page on runtime i.e. by the time the page loads.
 *
 * A great example of that are buttons that are dynamically added while
 * using the application.
 *
 * It is not possible to add event handlers onto elements that do not
 * exist, but we will still be able to handle events on elements that
 * don't exist at the beginning by using event delegation one more
 * time.
 *
 * And we will actually do it later in this section.
 */

/**********************************************************************/
/*************************** DOM TRAVERSING ***************************/
/**********************************************************************/

console.log(
  `/*************************** DOM TRAVERSING ***************************/`
);

/**
 * This lesson is going to be about traversing the DOM.
 *
 * DOM traversing is basically walking through the DOM. Which means that
 * we can select an element based on another element.
 *
 * This is very important because sometimes, we need to select elements
 * relative to a certain other element.
 *
 * For example, a direct child or a direct parent element.
 *
 * Or sometimes we don't even know the structure of the DOM at runtime.
 *
 * And in all of these cases, we need DOM traversing.
 *
 * This lesson is going to be another very nice reference lesson for you.
 *
 * Let's now work with the h1 element and from here, we are going to go
 * downwards, upwards, and also sideways.
 *
 * So, let's quickly select this element.
 */

h1 = document.querySelector('h1');

/**
 * Let's start by going downwards i.e. selecting child elements.
 *
 * So, the first way of doing that is to use `querySelector()` because
 * we already know that `querySelector()` also works on elements, not
 * only on the document.
 */

// going downwards i.e. selecting child elements of h1
console.log(h1.querySelectorAll('.highlight'));

/**
 * Indeed, that selected all the elements with the highlight class that
 * are the children of h1 element.
 *
 * This would work no matter how deep these child elements would be
 * inside of the h1 element.
 *
 * Also, if there were other elements with the class "highlight" on this
 * page that were not a child of the h1 element, those won't be
 * selected because they are not a child of h1 element.
 *
 * So these are the two points that are important to note here about
 * `querySelector()` and `querySelectorAll()`.
 */

/**
 * Sometimes, all we need are the direct children, and for that, we can
 * use `h1.childNodes`
 */

console.log(h1.childNodes);

/**
 * Now let's take a look at the console and we will see that here we
 * get all kinds of stuff.
 *
 * We get text, comments, and even elements. This is because we already
 * know that nodes can be anything so they can be text or elements or
 * even comments as we have in our log.
 *
 * So, this really gives us, every single node of every single type that
 * there exists.
 *
 * But many times we are simply interested in the elements themselves.
 *
 * If we wanted text we could've used `textContent` or `innerHTML`
 * property instead.
 *
 * So, `childNodes` is not that used. Instead, we can use `children`,
 * like so:
 */
console.log(h1.children);

/**
 * This then gives us an HTMLCollection which, remember, is a live
 * collection i.e. it is updated and in our case, we only get three
 * elements that are actually inside of the h1 which are <br> and two
 * <span> elements.
 *
 * But keep in mind that `children` only works for direct children.
 *
 * Finally, there is also first and last element child.
 *
 * These names might be a bit confusing but, they are due to the messy
 * nature of JavaScript with all of the different things being
 * implemented at different points in time. Therefore, it was difficult
 * to keep consistent naming conventions.
 *
 * Anyway, let's use `firstElementChild` property.
 */

h1.firstElementChild.style.color = 'white';

/**
 * Now only the first child of the h1 element get the while color.
 *
 * We can also do `lastElementChild`
 */

h1.lastElementChild.style.color = 'black';

/**
 * Now let's go upwards i.e. selecting parents.
 *
 * For direct parent it is actually very straightforward.
 * So, it is `parentNode` which is very similar to `childNodes`.
 */

console.log(h1.parentNode); // we get the div with class header__title

/**
 * In the console we can see that the header__title is the direct parent
 * of the h1 element that is why, that's what we get.
 *
 * Then there is also `parentElement`, which is usually what we are
 * interested in but, in this case, it is simply the same. This is
 * because the header__title element is also a node in this case.
 */

console.log(h1.parentElement); // we get the div with class header__title

/**
 * However, most of the time we actually need a parent element which
 * is not a direct parent.
 *
 * Or in other words, we might need to find a parent element no matter
 * how far away it is in the DOM tree.
 *
 * For that, we have the closest() method.
 *
 * Let's say that on a page, we had mutliple headers i.e. multiple
 * elements with a class of header, but for some reason, we only wanted
 * to find the one that is the parent element of h1.
 *
 * For that we can use `closest()`. So, the closest() method receives a
 * query string just like `querySelector()` and `querySelectorAll()`.
 */

// using css custom property as value here
h1.closest('.header').style.background = 'var(--gradient-secondary)';

/**
 * Indeed, it worked.
 *
 * So, it selected the closest parent element that has the class header
 * to our h1 element and then it simply applied the style to that
 * element.
 *
 * So, this is a very important one and we are going to use it all the
 * time especially for event delegation. So, take a note of that, or
 * just keep it in mind.
 *
 * Now, if this selector passed in the closest() actually matches the
 * element on which we are calling closest(), then that's actually the
 * element that's going to be returned.
 */

h1.closest('h1').style.background = 'var(--gradient-primary)';

/**
 * Now you'll see that indeed, the h1 element itself has been affected.
 *
 * So, we can think of `closest()` as basically being the opposite of
 * `querySelector()`. They both receive a query string as an input but,
 * querySelector() finds children, no matter how deep in the DOM tree,
 * while the closest() method finds parents - also no matter how far
 * up in the DOM tree.
 *
 * So, it is a very important method to keep in mind, and now let's go
 * sideways i.e. selecting siblings.
 */

// Going Sideways i.e. Selecting siblings.

/**
 * For some reason in JavaScript, we cna only access direct siblings.
 *
 * Basically, only the previous and the next one.
 */

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

/**
 * In our case, the previous sibling element is null and it makes sense
 * because if we look at the DOM, there is nothing there. This is because
 * h1 is the first child of its parent element, therefore it doesn't
 * have a previous sibling.
 *
 * However, it does have a next sibling and so we get back the
 * <h4> element which comes right after our h1 element.
 *
 * Also, just like before, we also have the same properties for nodes.
 */

console.log(h1.previousSibling);
console.log(h1.nextSibling);

/**
 * Here the previousSibling and nextSibling are actually text.
 *
 * But it is not important because most of time, we are going to be
 * working with elements anyway.
 *
 * Now if we really need all the siblings and not just the previous and
 * the next one, then we can use the trick of moving up to the parent
 * element and then read all the children from there.
 */

console.log(h1.parentElement.children);

/**
 * Now we get all the children, and that of course also includes itself.
 *
 * Now just for fun, let's actually do something with them here. So, we
 * get an HTMLCollection, which is not an array but, it is still an
 * iterable that we can spread into an array.
 *
 * Then we can loop over and it do something using forEach() method.
 */

// creating an array from all the sibling elements and looping over it
[...h1.parentElement.children].forEach(function (el) {
  // comparison between elements work just fine
  if (el !== h1) {
    el.style.transform = 'scale(0.5)';
  }
});

/**
 * Indeed, all the other siblings now, except for the h1 itself, are
 * now 50% smaller than what they used to be.
 *
 * So, this is how we can work with all the sibling elements of one
 * element.
 */

/**
 * That's the fundamentals of DOM traversing; and we are going to need
 * them all the time, especially, when we are doing some more complex
 * event delegation like we will do throughout the rest of the section.
 */

/***********************************************************************/
/********************* BUILDING A TABBED COMPONENT *********************/
/***********************************************************************/

console.log(
  `/********************* BUILDING A TABBED COMPONENT *********************/`
);

/**
 * In this lesson, we are going to implement a very popular component
 * which is a tabbed component.
 *
 * You will see tabbed components on many websites these days so, it is
 * great to learn how to build one yourself.
 *
 * A tabbed component can appear in many different ways, but what they
 * all have in common is that they have some kind of tabs and when you
 * click on them, the content in the content area will change.
 *
 * So, let's go ahead and implement one of our own.
 *
 * For this component, we actually need a bunch of HTML. So, let's take
 * a look at at that first. (head over to the HTML file for that)
 *
 * Also, take a look at the CSS because a lot CSS will also be involved
 * here.
 *
 * As we click on one of the tabs, we will not create any new content.
 * What we will do instead is to hide the other tabs.
 */

// Tabbed Component

/**
 * We will start by selecting the tabs and other necessary components.
 */

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

/**
 * We have our selections nicely done and now we can actually work on
 * the functionality.
 *
 * Let's start by adding event handlers to the tab buttons because that
 * is the action that we actually want to handle in this component.
 *
 * We could use forEach() to go over tabs and attach an event handler
 * on all of them, like so:
 */

// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

/**
 * Indeed, we get "TAB" logged to the console.
 *
 * However, we already learned in the last lesson that doing what we did
 * here is bad practice because what we had 200 tabs? Then we would have
 * 200 copies of the exact same callback function (of the event handler).
 *
 * That would simply slow down the page and it is not desirable.
 *
 * So, let's comment it out and use event delegation instead.
 *
 * Remember for event delegation, we need to attach the event handler
 * on the common parent element of all the elements that we are
 * interested in.
 *
 * In our case, it is the `tabsContainer`. So, let's attach our event
 * handler to that element instead.
 */

tabsContainer.addEventListener('click', function (e) {
  /**
   * Now we need to work on our matching strategy. So, let's figure out
   * which button was clicked.
   *
   * For that, let's create an element called "clicked" that we can then
   * use to work with.
   */
  let clicked = e.target;
  console.log(clicked);

  /**
   * With e.target there is a problem. The numbers on the button are
   * inside of a span element so, when we click on that, we get the
   * span element instead of the button element.
   *
   * So, we are not actually clicking on the ubtton but, we still need
   * the button.
   *
   * So, no matter if we click on the button itself or on the span
   * element, we actually need the button itself. This is because, from
   * that button, we will need to read the `data-tab` attribute.
   *
   * This is because the `data-tab` contains the number of tab which is
   * going to be useful later to we can show right content in relation
   * to the tab that was clicked. So this is where the data attribute
   * becomes really important to store information in the DOM.
   *
   * Basically, we need a way of finding the button element whenever we
   * click on the span element.
   *
   * One simple way to fix it (which would not really fix it) is to do
   * DOM traversing and simply select the parent element.
   *
   * We can move up the DOM tree and instead of simply taking `e.target`,
   * we can use the parent element of that.
   *
   * So, let's see what happens then?
   */

  clicked = e.target.parentElement;
  console.log(clicked);

  /**
   * Now indeed, when we click the number, we get the button element of
   * that span.
   *
   * Now the problem appears that when we click on the button itself,
   * because now we get the parent of the button instead. That is not
   * what we want.
   *
   * We basically want the button no matter if we click on the number
   * i.e. the span element or the button itself.
   *
   * So, we need a way of selecting the parent element that is always
   * a tab.
   *
   * Can you think of a special method that we learned previously to
   * do that? The solution is in our previous lesson of DOM traversing.
   *
   * We want to go upwards but, we want to specify that we want to select
   * an operations tab. So, we can use the `closest()` method for
   * exactly that.
   *
   * Remember in the last lesson we mentioned that `closest()` become
   * very helpful in event delegation? Well, this is one of those cases.
   *
   * So, this method makes it really easy for us to dynamically get the
   * element that we are interested in.
   *
   * So, instead of always selecting the parentElement, we will search
   * basically for the closest operations tab. That is exactly the
   * query that we will need for the closest() method.
   */
  clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  /**
   * This should now fix our problem.
   *
   * Now, no matter if we click the number span or the button itself,
   * we get the button element, which is the one we are looking for.
   *
   * This works because now it is looking for the closest parent with
   * the class name of "operations__tab" which is the button itself.
   *
   * Now, let's do something with the selected tab.
   *
   * So, the tab that is currently active has a bit of a different
   * styling as you can see on the UI.
   *
   * That's because the active tab has a class called
   * "operations__content--active".
   *
   * So, we can simply add that to the tab button that just clicked.
   */
  // clicked.classList.add('operations__tab--active');

  /**
   * Now if you click on one of the tabs, you will see that it
   * "activates" that particular tab.
   *
   * Of course, the other tabs will have to be "de-activated" but we will
   * take care of that in a second.
   *
   * For now, watch what happens when we actually click on the tab
   * container itself i.e. outside of the tab buttons but inside of the
   * tab container.
   *
   * We get null (type error)
   *
   * That's because null is the result of the `closest()` method when
   * there is no matching parent element to be found.
   *
   * So, when we click in the container, there is going to be no parent
   * with the class of `operations__tab` going to be found, therefore,
   * we get null.
   *
   * So, we need to fix that in our code now, and basically ignore
   * any clicks that happen in that area i.e. ignore clicks in the area
   * where the result is going to be null.
   *
   * We can do that by checking if there is "no" clicked then return
   * immediately.
   */

  // guard clause
  if (!clicked) return;

  // clicked.classList.add('operations__tab--active');

  /**
   * This is something that we haven't done before.
   *
   * So, what we are doing here is called guard clause.
   *
   * Guard clause is basically an if statement which will return early
   * if some condition is matched.
   *
   * In this case, when there is nothing clicked then we want to
   * immediately finish this function.
   *
   * In this case, when we have `null`, which is a falsy value will
   * become true in the if statement and the function will return
   * immediately, and none of the code that is after it will be executed.
   *
   * But of course, if the `clicked` does exist then the return statement
   * in the if statement will not be executed and the rest of the code
   * will be executed just fine.
   *
   * Now whenever we click outside of the tab buttons but inside the
   * tab container, nothing happens. Of course we still get `null` as
   * the value but, it is no longer throwing an error.
   *
   * This is because JS is no longer trying to add a class to `clicked`
   * when we click outside, in the tab container.
   *
   * Now, let's take care of basically putting all "de-activating" other
   * buttons when one of them is clicked.
   *
   * Basically, we should remove the "operations__tab--active" class
   * from the ones that we want to "de-activate".
   *
   * The solution to that is that before we add this class to anyone,
   * we will simply remove it on all of the tabs.
   *
   * This is something that we do quite usually i.e. basically clearing
   * the class on all of them and only then adding it afterwards on
   * one of them.
   */

  // remove active class from tab button and then add that active class to one that user clicked on.
  tabs.forEach(function (t) {
    t.classList.remove('operations__tab--active');
    clicked.classList.add('operations__tab--active');
  });

  /**
   * Finally, now let's activate the content area itself because that
   * is the amin part that we are interested in.
   *
   * Remember that the information about which content area should be
   * displayed is in the data attribute i.e. `data-tab` which is stored
   * in the button.
   *
   * So if we press the second tab then the data-tab is equal to 2 and
   * that means that we want to select the element which has the class
   * of `operations__content--2`.
   *
   * So, let's do that.
   */

  // document
  //   .querySelector(`.operations__content--${clicked.dataset.tab}`)
  //   .classList.add('operations__content--active');

  /**
   * Now those contents show up one below another whenever we click on
   * a tab.
   *
   * So, indeed we successfully read the value from the data-tab
   * attribute.
   *
   * Of course this is not quite finished yet because we want the other
   * ones to be hidden. That's the whole idea of this component.
   *
   * Basically, all we need to do is to do that same that we did for the
   * tab buttons i.e. removing the "active" class for all of them before
   * adding it to the one we are interested in.
   */

  // remove active class from all the content areas
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // add the active class to the content related to the button on which the user clicked on.
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/**
 * Now our component should be working as expected.
 *
 * RECAP:
 *
 * The whole idea when we build components like this is to just add and
 * remove classes as necessary to manipulate the content to our needs.
 *
 * That's the exact same thing that we did with the modal window.
 *
 * If you take a look at its code, it is a bit similar to the tabbed
 * component i.e. to hide and display modal window.
 *
 * With the tabbed component, the code is a bit more complex but, the
 * idea is the same. It is to work with classes that have some styles
 * for showing and hiding the classes.
 *
 * So if you are not familiar with CSS, then it is important that you
 * check that out to build these components and the same goes for HTML.
 */

/***********************************************************************/
/***************** PASSING ARGUMENTS TO EVENT HANDLERS *****************/
/***********************************************************************/

console.log(
  `/***************** PASSING ARGUMENTS TO EVENT HANDLERS *****************/`
);

/**
 * Let's now create a nice effect on our page navigation, where all the
 * links fade out when we hover over one of them, except for the link
 * that we are actually hovering over.
 *
 * This will teach us something really valuable, which is how to pass
 * arguments into event handler functions.
 *
 * Let's start by taking a look at our HTML. We have nav__link elements,
 * and those are the elements that we are going to be working with.
 */

// Menu fade animation.

/**
 * Now, of course, we do not want to attach an event listener to each
 * of the nav__link elements. We already know that we should do event
 * delegation here instead.
 *
 * So, let's find a common parent element of all of the links, and also,
 * including the logo in the navbar.
 *
 * So, if we were only working with nav__link elements, then we would
 * have chosen nav__links element. But we also want to work with the
 * logo so, we will instead use the entire navigation as our parent
 * container on which we will handler the event that is going to bubble
 * up from the links.
 *
 * So, keep in mind that all of this works because event bubble up from
 * their target.
 *
 * So, let's select the navbar (which has the class .nav) and store it
 * in a variable.
 */

nav = document.querySelector('.nav');

/**
 * Let's now attach an event listener to the navbar.
 *
 * But this time, we are not going to use the `click` event. Instead,
 * we will use the `mouseover` event.
 *
 * Previously, we used the `mouseenter` event. The `mouseenter` and
 * `mouseover` events are pretty similar with the big difference that
 * `mouseenter` does not bubble.
 *
 * But here, we need the event to actually bubble so that it can even
 * reach the navbar therefore, we use `mouseover`.
 *
 * There are also opposite events of `mouseover` and `mouseenter` and we
 * use them to basically undo what we do on hover.
 *
 * The opposite of `mouseenter` is `mouseleave`; and the opposite of
 * `mouseover` is `mouseout`.
 *
 * So, we are also going to need that one, so let's do that as well.
 */

// nav.addEventListener('mouseover', function (e) {});
// nav.addEventListener('mouseout', function (e) {});

/**
 * As always, if you want to know more, you can check out the MDN docs.
 *
 * Now we have our parent element and as always, we need to match the
 * element that we are actually looking for. In our case, it is the
 * elements with the `nav__link` class.
 *
 * So, let's simply check for that.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//   }
// });

// nav.addEventListener('mouseout', function (e) {});

/**
 * So as you see, we are not using the `closest()` method. That's because
 * there are simply no child-elements that we could accidentally click
 * in the `nav__link` elements.
 *
 * That was the reason why we needed the closest method in the tabs
 * component because we had the tab button but, we could have also
 * clicked on the span element inside the tab button. Therefore, we had
 * the need there to find the closest element i.e. closest button to
 * both of those places.
 *
 * But here, that is not necessary. So therefore, a simple check, like
 * we have here is enough.
 *
 * So now, we can store the e.target into a variable called `link`.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//   }
// });

// nav.addEventListener('mouseout', function (e) {});

/**
 * Next up, we need to select all the sibling elements. Basically, all
 * the other links.
 *
 * And remember that we can do that by going to the parent and then
 * selecting the children from there.
 *
 * Now in this case, the parent of `nav__link` is `nav__item` and the
 * only thing that `nav__item` includes is always just one link.
 *
 * So you see that each of the link is actually inside of one nav__item.
 *
 * So now, we would have to move up manually, not just once, but twice.
 *
 * So, instead of doing that, we will again use the closest method.
 *
 * Again, instead of moving up manually, like one or two steps, we can
 * simply search for a parent which matches a certain query.
 *
 * That is a bit more robust because even if we would then at some point,
 * maybe change the structure of the HTML, then our JavaScript would
 * keep working.
 *
 * Here when we are trying to get all the sibling elements, we are
 * targetting the nav element. Even though nav is not the closest parent
 * i.e. there is another parent to all the nav__link elements, which is
 * nav__links but, it is no problem of choose an even higher up parent
 * like we are doing here.
 *
 * Now that we have a parent for all the sibling elements, we then
 * select all of its children elements that have the class of `nav__link`
 * so, these are going to be the siblings of the link where we are
 * hovering over.
 *
 * NOTE: These sibling links will also include the link that we are
 * hovering over.
 *
 * As we already learned before, we can use query selector on an
 * element to search for a certain query only in that element.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   }
// });

// nav.addEventListener('mouseout', function (e) {});

/**
 * Now let's also select the logo.
 *
 * And we could select it manually by its class name but, let's just
 * suppose that there are many navigations on thispage.
 *
 * So, again, to make the solution really robust, it is best to simply
 * move up to the closest parent, in this case, the navigation and from
 * there, we simply select the image.
 *
 * So this then would not only work for this navigation but, it will
 * also work on others.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//   }
// });

// nav.addEventListener('mouseout', function (e) {});

/**
 * Now we have all our elements selected, now we just ened to change
 * the opacity of the siblings and of the link selected.
 *
 * Before we set the opacity for the siblings, we will use the if
 * statement to check if the element is the targetted element or not
 * since the `siblings` also include the target link.
 *
 * We also want to fade the logo out when we hover over one of the links.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 0.5;
//       }
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {});

/**
 * Now if you try it on the UI, you will see that it works.
 *
 * Now the thing is the it doesn't go back.
 *
 * So, once we have the opacity at 0.5, it will not automatically go
 * back to the opacity of 1, which is the original one.
 *
 * That's why we have the mouseout event to basically undo what we do
 * in the mouseover event.
 *
 * So, let's copy everything from the mouseover event and paste it
 * inside the mouseout event and change the opacity to 1.
 */

// nav.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 0.5;
//       }
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) {
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 1;
//   }
// });

/**
 * Now if we try it out in our UI, it works just the way we want it to.
 *
 * Of course it doesn't work with the logo because the entire effect
 * only works if the target contains the nav__link class.
 *
 * But that wasn't the point anyway. We just wanted it to work on any of
 * the links.
 *
 * Notice that the "open account" button is also a link. So, it also
 * works on that one.
 *
 * So our effect is working already but this is very repititive.
 * The code in `mouseover` and `mouseout` events are exactly the same
 * except for the values of opacity.
 *
 * So, let's refactor this code. Usually, refactoring works by creating
 * a new function. So, let's do that here.
 *
 * We will need some arguments here but more about that later.
 *
 * First, what we need to do is to compare the two pieces of code that
 * we are trying to refactor and then figure out what is the same and
 * what is different.
 *
 * In this case, it is pretty simple.
 *
 * All the changes that we need are the values of opacity.
 *
 * So, we can simple take the code from the event listener and create
 * an argument or a parameter for that opacity.
 *
 * And we can then pass that opacity into the function.
 *
 * Of course we still the `event` parameter, and then we need the
 * `opacity`.
 *
 * With this, we refactored our code nicely here.
 */

let handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });
    logo.style.opacity = opacity;
  }
};

/**
 * But now, how do we actually use this function?
 *
 * Usually, when we have the event handler as a separate function, all
 * we do is to pass in that function without invoking it and it works.
 *
 * Just like we did below:
 */

// nav.addEventListener('mouseover', handleHover);
// nav.addEventListener('mouseout', handleHover);

/**
 * But now, the problem is that we actually want to pass in values into
 * the handleHover() function. So, we need to tell the handleHover()
 * function the value of opacity.
 *
 * Also, we need a way of passing the `event`.
 *
 * You might think that we could simply pass in parameters like we
 * usually do i.e. using a set of parentheses, like so:
 */

// nav.addEventListener('mouseover', handleHover(e, 0.5));
// nav.addEventListener('mouseout', handleHover(e, 1));

/**
 * But this does not work.
 *
 * The first problem that occurs is that `e` is not defined but, the
 * main problem is that the `addEventListener()` expects a callback
 * function as the second parameter.
 *
 * When we use the parentheses, we are essentially invoking the function.
 * So, the value will then be the value returned from that function call;
 * in our case that is `undefined` because we aren't returning anything
 * from handleHover(). But, by doing that, the second parameter will no
 * longer be a function, it will become the value that is returning from
 * the function call.
 *
 * So, this is simply not going to work.
 *
 * So, we went over this many times, but it is always good to remember
 * that JavaScript indeeds expects a callback function as the second
 * parameter in the `addEventListener()` - and not just some other
 * regular value which would be the result of calling the function, like
 * we did above.
 *
 * The solution to this problem would be to still have a callback
 * function as the second parameter to the `addEventListener()`, like
 * a regular one, which JS will then call for us whenever the event
 * happens.
 *
 * Then, in that callback function, we could then actually call the
 * function with the event and opacity, like so:
 */

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

/**
 * This works because here we are basically calling the function
 * manually.
 *
 * So, the handleHover() will only execute as soon as JS executes the
 * callback function in the event handler.
 *
 * So, here we are back to working because here we are back to passing
 * in a real function.
 *
 * Now it should be working again, and indeed it does.
 *
 * So, that is the second version of our code working but, we can do
 * even better and remove the anonymous callback functions altogether.
 *
 * We can do that by using the bind() method that we already studied
 * before.
 *
 * Remember that the bind() method creates a copy of the function that
 * it is called on, and it will set the `this` keyword in the function
 * call to whatever value that we pass into bind().
 *
 * So, let's do that.
 */

handleHover = function (e) {
  console.log(this); // checking the `this` keyword
  console.log(e.currentTarget); // checking the current target
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

/**
 * This is going to work because `handleHover.bind(0.5)` and
 * `handleHover.bind(1)` are going to be a function, because bind()
 * returns a new function.
 *
 * In this function that is returned by bind() the `this` keyword will
 * be set to 0.5 and 1 respectively.
 *
 * To check, we can log the `this` keyword in the handleHover() function.
 *
 * Now you see indeed, that it is 1 or 0.5
 *
 * Also, remember that usually the `this` keyword is equal to the
 * current target.
 *
 * So, let's check that as well.
 *
 * The currentTarget has remained unaltered.
 *
 * By default the `this` keyword is the same as the current target i.e.
 * the element on which the event listener is attached to, but when we
 * set the `this` keyword manyally, of course, it becomes whatever we
 * set it to.
 *
 * So now, just like before, instead of `opacity`, we can set the value
 * of opacity as `this` because that holds the value of `opacity`.
 *
 * So, essentially, we used the bind() method here to pass an argument
 * into a handler function.
 *
 * So, any handler function can only ever have one real argument and that
 * is the `event`.
 *
 * But, if we want to pass additional values into the handler function,
 * then we need to use the `this` keyword like we just did here.
 *
 * And if we wanted multiple values, then we could of course, pass in
 * an array or an object instead of passing just one value in the bind()
 * method.
 *
 * So, this is kind of a workaround into the fact that the handler
 * function can only take one argument.
 *
 * So, it is really nice effect and as mentioned before, it also taught
 * us how we can pass arguments, essentially, into handler functions.
 */

/**********************************************************************/
/********* IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT *********/
/**********************************************************************/

console.log(
  `/********* IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT *********/`
);

/**
 * Let's implement another pretty common feature on webpages, which is
 * that the navigation bar becomes attached to the top of the page after
 * we scroll to a certain point.
 *
 * This is called a sticky navigation so, let's build one for our site.
 *
 * We basically add a CSS class called `sticky` from our CSS file
 * whenever we scroll upto a certain point.
 *
 * All the CSS `sticky` class does is to set the position to fixed and
 * changes the background color to transparent white.
 *
 * To implement this, we are going to use the `scroll` event for now.
 *
 * So, there is a better way to do what we are going ot do now but, let's
 * start by working with the `scroll` event because sometimes that is
 * good to know as well.
 *
 * The `scroll` event is available on `window` and NOT the `document`.
 *
 * This event will be fired off each time that we scroll our page.
 *
 * Let's start by actually taking a look at the event - just so we can
 * see that it does actually fires each time that we scroll.
 */

// window.addEventListener('scroll', function (e) {
//   console.log(e);
// });

/**
 * As you can see in the log, we scroll just a little bit and it creates
 * a ton of events. So, the scroll event is not really efficient and
 * usually it should be avoided.
 *
 * But for now, let's use that.
 *
 * Let's start by getting our current scroll position.
 *
 * The scroll position is really on the `window` object and not at the
 * `event`.
 */

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
// });

/**
 * As you see in the console, each time we scroll, the scroll event is
 * fired and we get the current scroll position.
 *
 * Remember that the scroll position that we get is basically from the
 * top of the view port to the very top of the webapge.
 *
 * That's why in the beginning we start at 0 because now the visible part
 * of the site is exactly also at the top of the page.
 *
 * So, remember that to make the navigation sticky, we will add the
 * `sticky` class from the CSS file.
 *
 * But now the question is, when exactly should the navigation actually
 * become sticky?
 *
 * It should happen as soon as we reach the first section.
 *
 * We cannot hardcode that value because the scroll position value that
 * we get is dependent on the size of the viewport.
 *
 * Therefore, we need to calculate it dynamically. So, how do we do that?
 *
 * Remember that we can determine the position of the first section.
 */

// const initialCoords = section1.getBoundingClientRect(); // current top value of section 1

/**
 * Let's now use this value to add the sticky class.
 *
 * So, whenever the position of `window.scrollY` is greater than the
 * initial coordinates at the top, then we want to add the sticky class.
 *
 * If not then we want to remove it.
 */

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/**
 * Indeed, it works.
 *
 * So, this works just fine for now, but as mentioned before, this is
 * pretty bad for performance.
 *
 * So, using the scroll event for performing a certain action at a
 * certain position of the apge is really not the way to go.
 *
 * That's because the scroll event fires all the time, no matter how
 * small the change is.
 *
 * That makes for a pretty bad performance, especially for mobile.
 *
 * On a modern computer you are of course not going to notice anything
 * but, if you are using this page on an older smartphone, then it is
 * not going to be so nice.
 *
 * So, in the next lesson, we are going to take a look at a better
 * and way more efficient tool, which is the intersection observer
 * API.
 */

/***********************************************************************/
/************* A BETTER WAY: THE INTERSECTION OBSERVER API *************/
/***********************************************************************/

console.log(
  `/************* A BETTER WAY: THE INTERSECTION OBSERVER API *************/`
);

/**
 * Let's now implement the same sticky navigation that we implemented
 * in the last lesson but this time, using the new intersection observer
 * API.
 *
 * What is the intersection observer API and why is it so helpful?
 *
 * This API allows our code to basically observe changes to the way
 * that a certain target element intersects another element, or the
 * way it intersects with the viewport.
 *
 * From this definition alone, you might be able to see that this will
 * be useful in implementing the sticky navigation.
 *
 * Let's start this lesson by learning how the intersection observer
 * API actually works, without the sticky navigation. This is because,
 * in the beginning, this can seem a bit intimidating and confusing.
 *
 * To use the intersection observer API, we need to start by creating a
 * new intersection observer. We do it like so:
 */

// new IntersectionObserver();

/**
 * Within `IntersectionObserver()` function, we will need to pass in
 * an object of options and and a callback function. But let's leave
 * that for a bit later.
 *
 * Let's first store the result of calling `IntersectionObserver()` into
 * a variable - let's call it `observer`.
 */

// let observer = new IntersectionObserver();

/**
 * Now we have to use this `observer` to basically observe a certain
 * target. To do that, we call a method called `observe()` on `observer`.
 *
 * We pass in the target element into `observe()` method. In our case,
 * the target element will be `section1`.
 */

// observer.observe(section1);

/**
 * This will make more sense when we start creating the options and the
 * callback so, let's start by options.
 *
 * The options objects, as its first property, needs `root`. This root
 * is the element that the target is intersecting.
 *
 * Again, `section1` is the target and the root element will be the
 * element that we want our target element to intersect.
 *
 * This will all make more sense when you see it in action.
 *
 * For the value of `root`, we could now select an element or as an
 * alternative, we can write `null`, and then we will be able to observe
 * our target element intersecting the entire viewport.
 *
 * Viewport meaning the entire rectangle area which shows the current
 * portion of the page.
 *
 * The second property is `threshold`. Threshold is basically the
 * percentage of intersection at which the observer callback will be
 * called. This might be confusing but, let's just set it to 10% which
 * is 0.1 and then when we have the obsCallback function working, we
 * will see what actually happens in practice.
 */

// let obsCallback = function (entries, observer) {};
// let obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// // we pass in the callback function and options object into IntersectionObserver()
// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

/**
 * The observer callback function will get called each time that the
 * observed element i.e. our target element is intersecting the root
 * element at the threshold that we defined.
 *
 * Take a note of this because it is actually a bit difficult to figure
 * it out from reading the documentation.
 *
 * In our current example, whenever the first section i.e. our target
 * is intersecting the viewport (viewport because that is the root) at
 * 10% (10% because that's the threshold), then the observer callback
 * function will be called and it doesn't matter if we are scrolling up
 * or down.
 *
 * This callback function will be called with two arguments viz entires
 * and the observer object itself. So, we pass in the entire observer
 * instance itself in the callback. So, let's specify them:
 */

// let obsCallback = function (entries, observer) {};
// let obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// // we pass in the callback function and options object into IntersectionObserver()
// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

/**
 * In this case, we are only interested in the entries but sometimes,
 * using the observer is also useful.
 *
 * We can also have multiple thresholds i.e. we can pass in an array
 * for the value of threshold, and we will do that in a minute.
 *
 * So, the `entries` that we pass into the observer callback is threshold
 * entires.
 *
 * In this case, we only have one element as threshold but, let's create
 * a more general function already which basically loops over the
 * entries so that we can take a look at all of them.
 */

// let obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// let obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// // we pass in the callback function and options object into IntersectionObserver()
// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

/**
 * Now if we take a look at the console, we already get an intersection
 * observer entry.
 *
 * This is not really interesting yet, because this is just the first
 * one that we got and we can see that the ratio in the intersection is
 * at 0 but, let's see in a second what that actually means.
 *
 * So, as we scroll through the page and as soon as we hit our target,
 * we get our first real entry in the console which appeared because
 * our target element came into the viewport.
 *
 * Our target element is the whole section 1 and once it appears in
 * the viewport, you essentially see that it starts intersecting with the
 * viewport.
 *
 * So, our observer is observing that, and if you expand the intersection
 * observer entry, you will see the intersection ratio at the time
 * that the callback was called which is 0.1... and that's exactly the
 * 10% threshold that we defined in our options object.
 *
 * We also get the `isIntersecting` property, which in our case is true,
 * and that is because indeed, our target i.e. the whole section 1 is
 * now intersecting the viewport.
 *
 * And we are looking for the viewport because we set the `root` to
 * `null`.
 *
 * Now if we move below section 1 and scroll back up again, we see
 * another intersection entry. The intersection ratio in that one is
 * close to 10% but not 10 - it is below 10 and that is why the
 * `isIntersecting` property is `false`.
 *
 * You can see why this is more efficient. It is because we only get
 * to see this kind of event in the situation that we are actually
 * interested in. In this case, that is the threshold of 10%.
 *
 * As we keep scrolling, and go completely out of section1 view, we
 * get another intersection where `isIntersection` is false. That's
 * because we no longer have 10% visible.
 *
 * So, you can think of threshold as the percentage that we want to have
 * visible in our root.
 *
 * This is the very fundamentals of how the intersection observer API
 * works, and it is a bit confusing and it takes time to figure it all
 * out so probably, the best idea for a beginner is to pause this lesson
 * at this point and explore a little bit on your own.
 *
 * So, you can use different threshold values and maybe use different
 * targets or roots as well.
 *
 * So, it would be a good idea to experiment more with this.
 *
 * What we are going to do now is to specify an array to specify
 * different thresholds, and one of them is going to be zero, and the
 * other one 0.2 i.e. 20%
 *
 * So, 0% means that our callback will trigger each time that the target
 * element moves completely out of the view, and also as soon as it
 * enters the view.
 *
 * That's because the callback function will be called when the threshold
 * is passed when moving into the view and moving out of the view, and
 * this is really important to remember.
 *
 * On the other hand, if we passed 1 as a threshold value, then that
 * means that the callback will only be called when 100% of the target
 * element is actually visible in the viewport.
 *
 * In the case of section1 , that is impossible because section1 is
 * already bigger than the viewport.
 *
 * Let's now experiment with 0 as the threshold.
 *
 * We get intersection event right away, and the intersection ratio is
 * exactly at 0, but it is already intersection and so it is because
 * basically the threshold was already passed.
 *
 * Then we get another intersection for 0 when the section is completely
 * out of the viewport.
 */

// let obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// let obsOptions = {
//   root: null,
//   // threshold: [0, 1, 0.2],
//   threshold: [0, 0.2],
// };

// // we pass in the callback function and options object into IntersectionObserver()
// let observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

/**
 * So this is how the intersection observer API works, and let's now
 * quickly use it in order to implement the sticky navigation, because,
 * at this point, you might already be able to imagine how useful this
 * can be for implementing sticky navigation in an easy way.
 *
 * Let's think about it. When do we want our navigation to be sticky?
 *
 * We want it to be sticky when the header moves completely out of the
 * view.
 *
 * So this time, we are going to observe the header element.
 */

// header = document.querySelector('.header');

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   // adding the sticky class when it is NOT intersecting i.e. when the section is not in the view port
//   // removing the sticky class when it is intersecting i.e. when the section is in the viewport
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
// });
// headerObserver.observe(header);

/**
 * Now if you check the UI, it should work.
 *
 * But we are not actually done yet because, we are going to make it a
 * bit different, a bit better.
 *
 * We want the navbar to appear when the distance between the start
 * of the section1 and the top of the viewport is the same as the height
 * of the navbar.
 *
 * This way, the navigation won't overlap the section1 right in the
 * beginning.
 *
 * So, let's implement it and thankfully, it is a bit wasy to do and
 * we can do it by specifying another property in the options which
 * is `rootMargin`.
 *
 * This `rootMargin` (for example 90) is a box of 90 pixels that will be
 * applied outside of the target element.
 *
 * NOTE: The unit for this has to be px, unfortunately rem or % does
 * not work here.
 */

// header = document.querySelector('.header');

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   // adding the sticky class when it is NOT intersecting i.e. when the section is not in the view port
//   // removing the sticky class when it is intersecting i.e. when the section is in the viewport
//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: '-90px',
// });
// headerObserver.observe(header);

/**
 * Now if you look at the UI, you will that the navigation appeared
 * exactly 90px before the threshold.
 *
 * Play around with it because it is important to understand what
 * happens with positive and negative rootMargin. It is an important
 * property as we need it in many situations.
 *
 * One final detail, let's calculate the `rootMargin` dynamically instead
 * of hard coding it.
 *
 * For that, we can use again the `getBoundingClientRect()` function.
 * This is because if you have a responsive website, then probably the
 * size of all your elements will change at certain points and then
 * it is not a good idea to hardcode 90px.
 */

header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  // adding the sticky class when it is NOT intersecting i.e. when the section is not in the view port
  // removing the sticky class when it is intersecting i.e. when the section is in the viewport
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/**
 * Now it works regardless of how small/big the view port is.
 *
 * It works beautifullyy and correctly in all situations and this is
 * a lot more performant and a lot better than the solution from the
 * last lesson.
 *
 * So, play around with this and we have two more examples with the
 * intersection observer API coming up and so that's going to be another
 * great opportunity to learn how this API really works.
 *
 * This is important because it is important to do certain things at
 * certain positions of the page i.e. things related to scrolling.
 */

/**********************************************************************/
/******************** REVEALING ELEMENTS ON SCROLL ********************/
/**********************************************************************/

console.log(
  `/******************** REVEALING ELEMENTS ON SCROLL ********************/`
);

/**
 * Let's implement another really cool and modern feature using the
 * intersection observer API.
 *
 * This time we are going to reveal elements as we scroll close to them.
 *
 * This effect can give you pages a very nice touch.
 *
 * You can, in fact, easily implement it without any external library.
 *
 * We basically reveal each section as we approach it.
 *
 * The animation itself comes from CSS.
 *
 * So, once more, we will actually achieve this by simply adding a class
 * to each of the sections as we approach them - and we will do that
 * by using the observer API.
 *
 * Let's create a new observer
 */

// selecting all sections
allSections = document.querySelectorAll('.section');

// callback function
/**
 * We only have on threshold. So, let's get that entry from entries using
 * destructuring.
 *
 * In the entry, the `target` property becomes important as it tells us
 * which element was intersected. This is important because we want to
 * make exactly that section visible, not all the sections.
 *
 * But we are observing all the sections using our observer.
 *
 * So now, we need a way of knowing, which is the section that actually
 * intersected the viewport.
 *
 * That is what we can use the taget for.
 *
 * So, we select the current target and remove the 'section--hidden'
 * class from it to make our animation work.
 *
 * Now, the first section is already there on the first load of the page.
 * That's because of the very first entry that always get printed in the
 * beginning.
 *
 * But, if we look at `isIntersecting` property of that entry, it says
 * `false`, so let's use that to our advantage and fix the problem.
 */
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

/**
 * We want to observe 4 sections in this case.
 *
 * And it is indeed possible to observe them all using the same observer.
 *
 * Let's select all the sections and then we will observe them as
 * multiple targets, all using the `sectionObserver` that we created
 * below.
 */
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

/**
 * Now we can loop over `allSections` node list using forEach()
 *
 * We use forEach() whenever we want to do something which does not
 * involve creating a new array.
 *
 * In the callback function of forEach(), we will simply observe all
 * the sections.
 *
 * Now, while we are looping over all the sections, we will add the
 * `section--hiden` class on all of them so that, on the initial
 * load of the page, the sections are not visible.
 */

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

/**
 * Now we will go back to the new IntersectionObserver() and set the
 * options values.
 *
 * The first property in the options would be `root`, which we will set
 * to null as it will then take the viewport as the root.
 *
 * The second property is threshold and we will set it to something
 * greater than 0. That's because we don't want it to show the section
 * right as it enters the viewport, but a little bit later.
 *
 * Let's say 15% which is 0.15
 *
 * That was the setup.
 *
 * Now, let create the logic in the revealSection() function. So, let's
 * go there.
 *
 * Now, we can do one more small improvement, which is to now unobserve
 * the section elements because, if you look in the console, if we keep
 * scrolling even after all the sections are visible, the observer
 * keeps observing the section.
 *
 * But, they are no longer necessary because they already did all the
 * work they needed to.
 *
 * So, to that, in the revealSection() function, after removing the
 * 'section--hidden' class, we can simply unobserve them.
 */

/***********************************************************************/
/************************* LAZY LOADING IMAGES *************************/
/***********************************************************************/

console.log(
  `/************************* LAZY LOADING IMAGES *************************/`
);

/**
 * One of the most important things when building any website is
 * performance; and images have by far the biggest impact on page
 * loading.
 *
 * So, it is very important that images are optimized on any page.
 *
 * For that, we an use a strategy called lazy loading images.
 *
 * So, in this lesson we will learn how to implement that strategy in
 * JavaScript.
 *
 * The main ingredient to the lazy loading strategy is that we have a
 * very low resolution image, which is really small and which is loaded,
 * right in the beginning.
 *
 * The dimensions of this small is only 200px x 120px and it is only 16kb
 * and the original one is almost half a megabyte.
 *
 * The original image then we reference in the <img> element as a
 * `data-src` attribute's value.
 *
 * `data-src` is a special `data` attribute that we learned about
 * earlier in this section.
 *
 * So, it is not a standard HTML attribute and any other attribute would
 * workbut instead, we used one of the special `data` attributes that
 * we can do ourselves.
 *
 * The idea is that as we scroll to one of the low resolution images,
 * whose value of the `src` tag is the low resolution image, we will then
 * replace its value with the path to the high-resolution image which is
 * specified in the `data-src` attribute.
 *
 * We then also remove the `lazy-img` css class which gives the image
 * a blurry effect.
 *
 * NOTE: The blurry effect is added to hide the fact that the image is
 * low-resolution as it will look very ugly and pixelated otherwise.
 *
 * So, let's implement it and it is not that hard, using the intersection
 * observer API.
 *
 * NOTE: That this one is really great for performance while the other
 * things that we did so far are more visual things. This one really
 * impacts how we website works and especially for the users who might
 * have slow internet connection or low data plan or a slow cell phone.
 *
 * Let's start by selecting our images, and let's call them imgTargets
 */

// selecting all the images which has the attribute of `data-src`
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

// loadImg callback function
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src value with data-src value
  entry.target.src = entry.target.dataset.src;

  // Remove the blur effect
  /**
   * How do we remove the css class which gives our image a blurry
   * effect?
   *
   * It is a little bit tricky because the replacing the value of the
   * `src` attribute happens behind the scenes.
   *
   * So, JS finds the new image that it should load and displays on the
   * UI and it does that behind the scenes.
   *
   * Once it is finished loading that image, it will emit the load event.
   *
   * The load event is just like any other event so, we can just listen
   * for it and then do something on that image.
   *
   * This is important to do because if we remove the blur effect right
   * after the value of the `src` attribute was replaced, and if the
   * user has slow internet, the image will still be pixelated, as the
   * image would still be loading. Therefore, we only remove the blur
   * after the image has completely loaded and emits the `load` event.
   */

  // on the target image, adding event listener, and listening for the load event
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  /**
   * As the last step, we can now just stop observing these images
   * because it is not longer necessary as they already did our task of
   * loading.
   */
  observer.unobserve(entry.target);
};

// creating img observer
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});

imgTargets.forEach(img => imgObserver.observe(img));

/**
 * Hopefully, after this lesson, you are convinced that it is really
 * important to implement this kind of functionality into your websites.
 *
 * All you really need to do is to generate the placeholder images and
 * blur them a little bit and then implement the sort of "lazy-load"
 * logic, which really isn't too much work.
 *
 * Now, ideally, we don't want our users to notice that we are
 * lazy-loading the images. All of that should basically happen in the
 * background without our users noticing that.
 *
 * So, we should probably makes these images load a bit earlier.
 *
 * To do that, we can specify a `rootMargin` in observer options.
 *
 * `rootMargin` is something that we also did with sticky navigation
 * to make it load a bit before the threshold was actually reached,
 * and here we are doing the same thing.
 *
 * So, exactly 200px before any of the images is loaded, it should
 * already start loading.
 *
 * By doing that, we don't see any delay in loading when we browse the
 * page.
 */

/**********************************************************************/
/**************** BUILDING A SLIDER COMPONENT: PART 01 ****************/
/**********************************************************************/

console.log(
  `/**************** BUILDING A SLIDER COMPONENT: PART 01 ****************/`
);

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

// This variable (curSlide) keeps track of the current slide index. It
// is initialized to 0, indicating the first slide.
let curSlide = 0;

// This constant (maxSlide) stores the total number of slides by getting
// the length of the slides NodeList.
const maxSlide = slides.length;

// This function moves the slides to the specified slide number. It
// calculates the transformation value for each slide to shift them
// horizontally. It's called initially to position the slides.
const goToSlide = function (slideNum) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slideNum)}%)`)
  );
};

// This line calls the goToSlide function to initially position the
// slides at index 0.
goToSlide(0);

// This function handles the logic for moving to the next slide. It
// increments the curSlide variable and calls goToSlide with the new
// index.
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

// This function handles the logic for moving to the previous slide. It
// decrements the curSlide variable and calls goToSlide with the new
// index.
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
