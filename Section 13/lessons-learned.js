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
