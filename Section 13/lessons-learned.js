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
