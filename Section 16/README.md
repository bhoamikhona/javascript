# Section 16: Asynchronous JavaScript - Promises, Async/Await, and AJAX

**About:** Let's now continue learning important JavaScript features. One topic that we haven't touched yet is asynchronous JavaScript. The goal of asynchronous JavaScript is basically to deal with long-running tasks, that basically run in the background. The most common use case of asynchronous JavaScript is to fetch data from remote servers, in so-called AJAX calls. That's what we will do in this section, while learning everything there is to learn about Promises, the fetch function, async/await, and error handling.

## Table of Content

- [Section 16: Asynchronous JavaScript - Promises, Async/Await, and AJAX](#section-16-asynchronous-javascript---promises-asyncawait-and-ajax)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Asynchronous JavaScript, AJAX, and APIs](#asynchronous-javascript-ajax-and-apis)
      - [Synchronous Code](#synchronous-code)
      - [Asynchronous Code](#asynchronous-code)
      - [What are AJAX calls?](#what-are-ajax-calls)
      - [What is an API?](#what-is-an-api)
    - [Our First AJAX Call: XMLHttpRequest](#our-first-ajax-call-xmlhttprequest)
  - [Author](#author)

## Lessons Learned

### Asynchronous JavaScript, AJAX, and APIs

- Let's start the section by understanding what asynchronous JavaScript actually is, and also learn about the most popular use cases of asynchronous JS, which is basically to make so-called <ins>AJAX calls</ins> to APIs.

#### Synchronous Code

- To understand what asynchronous JS code actually is, we first need to understand what synchronous (opposite of asynchronous) code is.
- Most of the code that we have been writing so far in the course has been synchronous code, and synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code, like in this small example:

```javascript
const p = document.querySelector('.p');
p.textContent = 'My name is Bhoami!';
alert('Text set!');
p.style.color = 'red';
```

- As the first line of code is reached in the execution, it is simply executed in the execution thread.
- Don't worry about the execution thread. It is not important here. It is just to make a point of synchronous vs. asynchronous code, as you will see in a minute.
- All you need to know is that the execution thread is a part of the execution context, which does actually execute the code in the computer's processor.
- Then, the next line of code is executed, and then the one after that, all in sequence.
- So, each line of code always waits for the previous line of code to finish execution.
- This can create problems when one line of code takes a long time to run.
- For example, in the example above, we have the `alert()` statement on line 3, which creates the alert window.
- As we have experienced in the past, this alert window will block the code execution. So, nothing will happen on the page until we click that OK button. Only then, the code can continue executing.
- So, the `alert()` statement is a perfect example of a long running operation, which blocks execution of the code.
- This is hopefully, a nice illustration of the problem with synchronous code.
- Now, most of the time synchronous code is fine and makes perfect sense.
- But imagine that execution would have to wait for example, for a 5 second timer to finish. That would jsut be terrible. Because meanwhile, nothing on the page would work during these 5 seconds.
- So, that's where asynchronous code comes into play.

#### Asynchronous Code

```javascript
const p = document.querySelector('.p');
setTimeout(function () {
  p.textContent = 'My name is Bhoami!';
}, 5000);
p.style.color = 'red';
```

- This example contains the 5 second timer that we were just talking about.
- The first line of code is still synchronous here and we also move to the second line in a synchronous way.
- But in the second line, we encounter the `setTimeout()` function, which will basically start a timer in an asynchronous way.
- This means that the timer will essentially run in the background without preventing the main code from executing.
- We also register a callback function, which will not be executed now, but only after the timer has finished running.
- We have actually already done this many times in practice before.
- This callback function, that we just mentioned, is asynchronous JS.
- And it is asynchronous because it is only going to be executed after a task that is running in the background finishes execution.
- In this case, that is the timer.
- So, this callback that we just talked about gets registered, and then we immediately move on to the next line.
- So, the main code is not being blocked and execution does not wait for the asynchronous timer to finish its work.
- That's the big difference between synchronous and asynchronous code.
- So previously, we had to wait for the user to click on the alert window to continue execution and again, that's because `alert()` is blocking synchronous code, but nwo with this timer, the callback is actually asynchronous.
- So, it is only going to be executed after the timer has finished.
- Therefore, we say that it is non-blocking because in the mean time, the rest of the code can keep running normally.
- Now, when the timer finally finishes after 5 seconds, the callback function will finally be executed as well.
- So, you'll seee that this callback runs after all the code, even though in the code, it doesn't appear at the end.
- Basically, an action was deferred into the future here in order to make the code non-blocking.
- We already saw this behavior happening before when we first learned about timers, we just didn't know that this is called asynchronous and non-blocking code.
- In summary, asynchronous programming is all about coordinating the behavior of our program over a certain period of time. This is essential to understand.
- So, asynchronous literally means not occuring at the same time. That's what asychronous programming is all about.
- Now, as we saw in this example, we need a callback function to implement the asynchronous behavior.
- However, that does not mean that callback function automatically make the code asynchronous. That is just not the case.
- For example, the array `map()` method accepts a callback function as well, but that doesn't make the code asynchronous.
- Only certain functions such as `setTimeout()` work in an asynchronous way. We just have to know which ones do and which ones don't.
- But please understand the fact that callback functions alone, do not make code asynchronous, that's essential to keep in mind.
- Anyway, in order to really understand this, let's see another example.

```javascript
const img = document.querySelector('.dog');
img.src = 'dog.jpg';
img.addEventListener('load', function () {
  img.classList.add('fadeIn');
});
p.style.width = '300px';
```

- This example is about loading an image.
- The first two lines run in a synchronous way, one after the other.
- In the second line, we set the `src` attribute of the image that we selected in the first line - and this operation is actually asynchronous.
- Setting the `src` attribute of any image is essentially loading an image in the background while the rest of the code can keep running - and this makes sense.
- Imagine that it is a huge image, we wouldn't want our entire code to wait for the image to load.
- That's why setting the `src` attribute was implemented in JavaScript in an asynchronous way.
- Once the image has finished loading, a load event will automatically be emitted by JS. We can then listen for that event in order to act on it.
- Listening for the load event is exactly what we do in the next line of our example as well.
- In our example, we use the `addEventListener()` to register a callback function for the load event.
- So, just line in the previous example, we provide a callback function that will be executed once the image has been loaded and not right away, because again, all this code is non-blocking.
- So, instead of blocking, execution moves on right to the next line immediately.
- Then once the image is completely loaded, it is displayed on the webpage and the load event is emitted.
- Since we are listening for that event, our callback function is finally executed.
- So, once more, we deferred an action into the future making the code asynchronous and non-blocking.
- At this point, you should have a pretty good understanding of asynchronous code.
- There is just one more important thing that needs to be mentioned, which is the fact that event listeners alone do not make code asynchronous, just like callback function alone, also do not make the code asynchronous.
- For example, an event listener, listening for a click on a button is not doing any work in the background. It is simply waiting for a click to happen, but it is not doing anything.
- So, there is no asynchronous behavior involved at all.
- Now, what makes this cade example (above) asynchronous is simply the fact that the image is loading asynchronously in the background, but not the fact that we are listening for the load events to happen.
- So, what matters is the asynchronous behavior of a task, like running a timer or loading an image.
- There are more examples of asynchronous behavior in JavaScript like the Geolocation API that we used in the last section or AJAX calls.
- AJAX calls are probably the most important use case of asynchronous JS.
- So, let's see what AJAX is all about.

#### What are AJAX calls?

- AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML and basically it allows us to communicate with remote web servers in an asynchronous way.
- In practice, we make AJAX calls in our code in order to request some data form a web server dynamically i.e. without re-loading the page so that we can use that data in our application dynamically.
- For example, in the next lesson, we are going to make AJAX calls to request data about countries, and we can then use that data about countries to build a small application that shows us information about the country that we are currently in.
- The possibilities and use cases are endless, but more about that in a second.
- For now, let's quickly understand how AJAX works.
- Let's say that we have our JS application running in the browser - which is also called the client.
- We want the application to get some data from a web server. Let's say the data about countries that we were talking about earlier.
- So with AJAX, we can do a HTTP request to the server, which has this data and the server will then send back a response containing that data that we requested.
- This back and forth between client and server all happens asychronously in the background, just the way we learned before.
- There can even be different types of requests, like get requests to receive data or post request to send data to a server. There is a whole lecture about this, a little bit later to really show you how it all works in detail.
- When we are asking a server to send us some data, this server usually contains a web API.
- This API is the one that has the data that we are asking for.
- An API is something pretty important so, let's now see what an API and web APIs actually are.

#### What is an API?

- First of all API stands for Application Programming Interface.
- In general terms, and on the very high level abstraction, an API is basically a piece of software that can be used by another piece of software in order to basically allow applications to talk to each other and exchange information.
- That's true not only for web development and JavaScript, but also for programming in general.
- In JavaScript and web development, there are countless types of APIs, like the DOM API or the Geolocation API that we have been using.
- These are called APIs because they are self-contained piece of software that allow other pieces of software to interact with them.
- For example, our Mapty application that we built in the previous section.
- Also, we can always implement a small and simple API in a class where we make some methods available as public interface.
- Again, objects made from a class can be seen as self-contained, encapsulated pieces of software that other pieces of software can interact with - and that fits the definition of API.
- But now, let's talk about the important type of API that we are actually interested in when we use AJAX. Those APIs are what we like to call the Online APIs.
- An online API is essentially an application running on a web server, which receives requests for data, then retrieves this data from some database and then sends it back to the client.
- When building applications in practice, we simply call these online APIs, API; and many people will also call these APIs, Web APIs, or simply just API.
- Jonas came up with the term Online API because the term Web API is actually also used for other things.
- Of course, we can build our own Online APIs, but that requires backend development i.e. development with servers and databases. This is something really interesting that you can learn about, after this course.
- Anyway, for now, we are interested in using 3rd party APIs i.e. the APIs that other developers make available for us - most of the time for free.
- So, let's now imagine that you are building a traveling application, and you have a database with different destinations and tours that you're offering.
- So, on your own server, you could build your own API that can receive requests from your front-end applicaiton in JavaScript and send back the results. That would be your own API, hosted on your own server.
- But that alone would probably not be enough to build a complete application.
- So, you could also use some 3rd party APIs.
- There are really APIs for everything.
- In our example, the travel application, you could use an API to get weather data in your destinations, data about the destination countries themselves, data about flights, about currency conversions, and you could even use APIs to send email or text messages or embed Google maps into your applications.
- So, as you see, the possibilities are really endless with PIs, and we can even say that APIs is what the modern web as you know it possible in the first place.
- So, using APIs in JS is super popular and everyone does it all the time.
- Now, just to finish, let's quickly talk about API data formats.
- AJAX stands for Asynchronous JavaScript And XML. So, X stands for XML which is a data format - which used to be widely used to transmit data on the web.
- However, these days, basically no API uses XML data anymore.
- The term AJAX is just an old name that got very popular back in the day so, it is still used today - even though we don't use XML anymore.
- So, instead, most APIs these days use the JSON data format.
- JSON is the most popular data format today because it is basically just a JavaScript object, but converted to a string.
- Therefore, it is very easy to send across the web and also to use in JavaScript once the data arrives.
- Now that we know what asynchronous JS is,a nd also what AJAX and APIs are, let's finally use all this in practice, and make our very first AJAX call in the next lesson.

### Our First AJAX Call: XMLHttpRequest

- Now that we know about AJAX and APIs, let's actually make our first API call.
- In this lesson, we are going to build a nice UI component which contains data about a certain country.
- This data about the country is going to come from a third party online API.
- Let's get started.
- In JavaScript, there are multiple ways of doing AJAX calls but, we are going to start with the most old school one - that's called the `XMLHttpRequest()` function.

```javascript
const request = new XMLHttpRequest();
```

- That's the first step of using the `XMLHttpRequest()` way of doing AJAX calls.
- As mentioned before, this is the old school way of doing AJAX in JavaScript but, we are still learning about it for 2 reasons:
  - First, know that `XMLHttpRequest()` exists because you might need it in the future.
  - Second, to learn how AJAX calls used to be handled with events and callback functions. Only after that, we should move on to a more modern way of handling asynchronous JavaScript, which is going to be a feature called Promises.
- Anyway, next we need the URL to which we will make the AJAX call.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);
```

- Now, we need to send this request.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);
request.send();
```

- Now in order to get the result, we couldn't simply set a variable to `request.send()` i.e. we cannot simply do `const data = request.send()`.
- The reason why we cannot do this is because the result is simply not there yet.
- So, this AJAX call that we just sent is being done in the background while the rest of the code keeps running.
- So, this is the asynchronous, non-blocking behavior that we talked about in the last lesson.
- So, instead of setting `request.send()` to variable, what we need to do is to register a callback on the request object for the load event.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);

/**
 * Here we send the request.
 *
 * That request then fetches the data in the background and then, once
 * that is done, it will emit the `load` event.
 */
request.send();

/**
 * Using the `addEventListener()` we are waiting for that `load` event
 * to emit so, as soon as the data arrives, its callback function will be
 * called.
 */
request.addEventListener('load', function () {
  /**
   * The `this` keyword inside the `addEventListener()` is the `request`.
   * So, we could also log `request` but, let's stick with `this`.
   *
   * The response is in the property `responseText` - Again, this property
   * is only set once the data has actually arrived.
   */
  console.log(this.responseText);
});
```

- Now if you look in the console, we will have our first data - and as you can see, it kind of looks like a bunch of data about India indeed.
- Now we just need to convert this result into an actualy JavaScript object because, what we have is JSON.
- Remember that JSON is basically just a big string of text.
- To convert it, we need to use `JSON.parse()` method.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);

/**
 * Here we send the request.
 *
 * That request then fetches the data in the background and then, once
 * that is done, it will emit the `load` event.
 */
request.send();

/**
 * Using the `addEventListener()` we are waiting for that `load` event
 * to emit so, as soon as the data arrives, its callback function will be
 * called.
 */
request.addEventListener('load', function () {
  /**
   * The `this` keyword inside the `addEventListener()` is the `request`.
   * So, we could also log `request` but, let's stick with `this`.
   *
   * The response is in the property `responseText` - Again, this property
   * is only set once the data has actually arrived.
   */
  console.log(this.responseText);

  // converting JSON to JS object and storing it in a variable
  const data = JSON.parse(this.responseText);
  console.log(data);
});
```

- Now, we have an array of objects where the object has all the data about India.
- Since, it is an array, we can take out the object that we want from it.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);

/**
 * Here we send the request.
 *
 * That request then fetches the data in the background and then, once
 * that is done, it will emit the `load` event.
 */
request.send();

/**
 * Using the `addEventListener()` we are waiting for that `load` event
 * to emit so, as soon as the data arrives, its callback function will be
 * called.
 */
request.addEventListener('load', function () {
  /**
   * The `this` keyword inside the `addEventListener()` is the `request`.
   * So, we could also log `request` but, let's stick with `this`.
   *
   * The response is in the property `responseText` - Again, this property
   * is only set once the data has actually arrived.
   */
  console.log(this.responseText);

  // converting JSON to JS object and storing it in a variable
  const data = JSON.parse(this.responseText).pop();
  console.log(data);
});
```

- Now we can build the card component. To do that we can create a template literal with HTML code in it and add the data in it dynamically.
- Then append the html element into HTML document.

```javascript
const request = new XMLHttpRequest();

// first parameter is to mention the kind of request we want to make
// second parameter is a string containing the URL to which the AJAX call should be made to
request.open('GET', `https://restcountries.com/v3.1/name/india`);

/**
 * Here we send the request.
 *
 * That request then fetches the data in the background and then, once
 * that is done, it will emit the `load` event.
 */
request.send();

/**
 * Using the `addEventListener()` we are waiting for that `load` event
 * to emit so, as soon as the data arrives, its callback function will be
 * called.
 */
request.addEventListener('load', function () {
  /**
   * The `this` keyword inside the `addEventListener()` is the `request`.
   * So, we could also log `request` but, let's stick with `this`.
   *
   * The response is in the property `responseText` - Again, this property
   * is only set once the data has actually arrived.
   */
  console.log(this.responseText);

  // converting JSON to JS object and storing it in a variable
  const data = JSON.parse(this.responseText).pop();
  console.log(data);

  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
        <p class="country__row"><span>💰</span>${data.currencies.INR.name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
```

- And it works.
- Now, let's re-use the same code to create an element like the one we already have for multiple countries.
- To do that we can put what we have inside a function and then call that function for different countries.

```javascript
const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // first parameter is to mention the kind of request we want to make
  // second parameter is a string containing the URL to which the AJAX call should be made to
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  /**
   * Here we send the request.
   *
   * That request then fetches the data in the background and then, once
   * that is done, it will emit the `load` event.
   */
  request.send();

  /**
   * Using the `addEventListener()` we are waiting for that `load` event
   * to emit so, as soon as the data arrives, its callback function will be
   * called.
   */
  request.addEventListener('load', function () {
    /**
     * The `this` keyword inside the `addEventListener()` is the `request`.
     * So, we could also log `request` but, let's stick with `this`.
     *
     * The response is in the property `responseText` - Again, this property
     * is only set once the data has actually arrived.
     */
    // console.log(this.responseText);

    // converting JSON to JS object and storing it in a variable
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          ).join(', ')}</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');
```

- By calling this functiont wice, we will basically have two AJAX calls happening at the same time.
- And if we re-load the page a couple of times, the country cards might appear in different order.
- The reason for that is basically that the data arrives at a slightly different time, each time that we are loading the page.
- So in fact, this really shows the non-blocking behaviour in action.
- Now, if we actually wanted these requests to be made in a specific, pre-defined order, then we would basically have to chain the requests.
- Which means to make the second request only after the first request has finished.
- That's what we are going to do in the next lesson so that we can learn about something that developers call <ins>callback hell</ins>.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
