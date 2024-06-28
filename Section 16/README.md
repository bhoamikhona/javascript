# Section 16: Asynchronous JavaScript - Promises, Async/Await, and AJAX

**About:** In this section, we will continue learning important JavaScript features. One topic that we haven't touched yet is asynchronous JavaScript. The goal of asynchronous JavaScript is basically to deal with long running tasks, that basically run in the background. The most common use case of asynchronous JavaScript is to fetch data from remote servers, in so-called AJAX calls. That's what we will do in this section while learning everything there is to learn about Promises, the fetch function, async/await, and error handling. So, let's get started with this yet another exciting section.

## Table of Content

- [Section 16: Asynchronous JavaScript - Promises, Async/Await, and AJAX](#section-16-asynchronous-javascript---promises-asyncawait-and-ajax)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Asynchronous JavaScript, AJAX, and APIs](#asynchronous-javascript-ajax-and-apis)
      - [Synchronous Code](#synchronous-code)
      - [Asynchronous Code](#asynchronous-code)
      - [What are AJAX calls?](#what-are-ajax-calls)
      - [What is an API?](#what-is-an-api)
  - [Author](#author)

## Lessons Learned

### Asynchronous JavaScript, AJAX, and APIs

- Let's start this section by understanding what asynchronous JavaScript actually is, and also learn about the most popular use cases of asynchronous JavaScript, which is basically to make so-called AJAX calls to APIs.

#### Synchronous Code

- To understand what asynchronous JavaScript code actually is, we first need to understand what synchronous code (opposite of asynchronous) is.
- Most of the codes that we have been writing so far in the course has been synchronous code.
- Synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code, just like in this small example below:

```javascript
const p = document.querySelector('.p');
p.textContent = 'My name is Bhoami!';
alert('Text set!'); // Blocking
p.style.color = 'red';
```

- As the first line of code is reached in the execution, it is simply executed in the execution thread.
- SIDE-NOTE:
  - Don't worry about the execution thread. It is not important here.
  - It is just to make a point of synchronous vs. asynchronous code, as you will see in a minute.
  - All you need to know is that the execution thread is part of the execution context, which does actually execute the code in the computer's processor.
- Anyway, the next line of code is executed and then the next one, all in sequence.
- So, each line of code always waits for the previous line to finish execution.
- This can create problems when one line of code takes a long time to run.
- For example, in the 3rd line of code (in our example above), we have an `alert()` statement, which creates an alert window.
- As we've experienced in the past, this alert window will block the code execution i.e. nothing will happen on the page until we click the "OK" button. Only then, the code can continue executing.
- So, the `alert()` statement is a perfect example of a long running operation, which blocks the execution of the code.
- This is hopefully, a nice illustration of the problem with synchronous code.
- Most of the synchronous code is fine and makes perfect sense. But imagine that execution would have to wait for example, for a 5 second timer to finish. That would just be terrible, because meanwhile, nothing on the page would work during those 5 seconds.
- So, that's where asynchronous code comes into play.

#### Asynchronous Code

```javascript
const p = document.querySelector('.p');
setTimeout(function () {
  p.textContent = 'My name is Bhoami';
}, 5000);
p.style.color = 'red';
```

- This example contains the 5 second timer that was mentioned earlier.
- The first line of code is still synchronous and we also move to the second line in a synchronous way.
- However, in the second line, we encounter a `setTimout()` function, which will basically start a timer in an asynchronous way.
- This means that the timer will essentially run in the background without preventing the main code from executing.
- We also register a callback function, which will not be executed now, but only after the timer has finished running.
  - NOTE: We have already done this many times in practice before.
- This callback function in the `setTimeout()` is asynchronous JavaScript.
- It is asynchronous because it is only going to be executed after a task that is running in the background finishes execution. In this case, it is the timer.
- So, the callback of `setTimeout()` is registered and then we immediately move on to the next line.
- So, the main code is not blocked and execution does not wait for the asynchronous timer to finish its work.
- That's the big difference between synchronous and asynchronous code.
- Previously, we had to wait for the user to click on the alert window to continue execution. That's because alert is blocking synchronous code.
- But now, with the timer, the callback is actually asynchronous.
- So, it is only going to be executed after the timer has finished.
- Therefore, we say that it is non-blocking because in the mean time, the rest of the code can keep running normally.
- When the timer finally finishes after 5 seconds, the callback function will finally be executed as well.
- So, you'll see that this callback runs after all the other code, even though in the code, it doesn't appear at the end.
- So basically, an action was deferred into the future in order to make the code non-blocking.
- We already saw this behavior happening before when we first learned about timers, we just didn't know that it is called asynchronous and non-blocking code.
- In summary, asynchronous programming is all about coordinating the behavior of our program over a certain period of time; and this is essential to understand.
- So, asynchronous literally means - not occuring at the same time.
- Now, as we saw in the example above, we need a callback function to implement asynchronous behavior.
- However, that does not mean that callback functions automatically make code asynchronous. That is simply not the case.
- For example, the array `map()` method:

```javascript
[1, 2, 3].map(v => v * 2);
```

- The array `map()` method accepts a callback function as well, but that doesn't make the code asynchronous.
- Only certain functions such as `setTimeout()` work in an asynchronous way.
- We just have to know which ones do and which ones don't. But understand the fact that callback functions alone do not make the code asynchronous. That's essential to keep in mind.
- Anyway, in order to really understand this, let's see another example:

```javascript
const img = document.querySelector('.dog')
img.src = 'dog.jpg'
img.addEventListener('load', function() {
  img.classList.add('fadeIn')
})
p.style.width: '300px'
```

- This example is about loading an image.
- The first two lines run in a synchronous way i.e. one after the other.
- In the second line, we set the `src` attribute of the image that we selected in the first line; and this operation is actually asynchronous.
- So, setting the `src` attribute of any image is essentially loading an image in the background while the rest of the code can keep running.
- This makes sense because, imagine that it is a huge image - we wouldn't want our entire code to wait for the image to load.
- That's why setting the `src` attribute was implemented in JavaScript in an asynchronous way.
- Now, once the image has finished loading, a `load` event will automatically be emitted by JavaScript.
- So, we can then listen for that event in order to act on it.
- Listening for the `load` event is exactly what we do in the next line (in the example code) as well.
- So, we use the `addEventListener()` to register a callback function for the `load` event.
- So, just like in the previous example, we provide a callback function that will be executed once the image has been loaded, and not right away - because all of this code is non-blcoking.
- So, instead of blocking, execution moves on right to the next line, immediately.
- Then once the image is completely loaded, it is displayed on the webpage and the `load` event is emitted.
- Since we are listening for that event, our callback function is finally executed.
- So, once more, we deferred an action into the future, making the code asynchronous and non-blocking.
- At this point, you should have a pretty good understanding of asynchronous code.
- There's just one more important thing that is needed to be mentioned, which is the fact that event listeners alone, do not make code asynchronous, just like the callback functions alone, also do not make code asynchronous.
- For example, an event listener listening for a click on a button is not doing any work in the background. It is simply waiting for a click to happen, but it is not doing anything. So, there is no asynchronous behavior involved at all.
- What makes the code in our exmaple asynchronous is simply the fact that the image is loading asynchronously in the background, but not the fact that we are listening for the load events to happen.
- So what matters is the asynchronous behavior of a task, like running a timer or loading an image.
- There are more examples of asynchronous behavior in JavaScript, like the Geolocation API that we used before, or AJAX calls.
- AJAX calls are probably the most important use case of asynchronous JavaScript. So, let's see what AJAX is all about.

#### What are AJAX calls?

- AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML, and basically it allows us to communicate with remote web servers in an asynchronous way.
- In practice, we make AJAX calls in our code in order to request some data from a web server dynamically i.e. without re-loading the page so that we can use that data in our application dynamically.
- For example, right in the next lesson, we are going to make AJAX calls to request data about countries. We can then use that data about countries to build a small application that shows us information about the country that we are currently in - and the possibilities and use cases are endless. More about that in a minute.
- For now, let's quickly understand how AJAX works.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/eb096267-2461-46b5-8261-45c7c351d9fd)
- Let's say that we have our JavaScript application running in the browser, which is also called the client.
- We want the application to get some data from a web server - let's say the data is about countries that we were talking about earlier.
- So with AJAX, we can do an HTTP reques to the server which has this data.
- The server will then send back a response containing the data that we requested.
- This back and forth between client and server happens asynchronously in the background, just the way we learned before.
- There can even be different types of requests, like GET requests to receive data or POST requests to send data to a server.
- We will talk about this in greater detail in the next lesson, to really understand how it works.
- Now, when we are asking a server to send us some data, this server usually contains a web API.
- This API is the one that has the data that we are asking for.
- An API is something pretty important so, let's now understand what an API and web APIs actually are.

#### What is an API?

- API stands for **A**pplication **P**rogramming **I**nterface.
- In general terms, and on the very high level of abstraction, an API is basically a piece of software that can be used by another piece of software in order to basically allow applications to talk to each other and exchange information.
- That's true not only web development and JavaScript, but for programming in general.
- In JavaScript and web development, there are countless types of APIs, like the DOM API or the Geolocation API that we have been using.
- These are called APIs because they are a self-contained piece of software that allow other pieces of software to interact with them.
- For example, our Mapty application that we built in the previous section.
- Also, we can always implement a small and simple API in a class where we make some methods available as a public interface.
- Again, objects made from a class can be seen as self-contained encapsulated pieces of software that other pieces of software can interact with. That fits the definition of API.
- But now, let's talk about the important type of API that we are actually interested in, when we use AJAX.
- Those APIs are called Online APIs (coined by Jonas Schmedtmann).
- An Online API is essentially an application running on a web server, which receives requests for data, then retrieves this data from some database and then sends it back to the client.
- When building applications in practice, we simply call these online APIs, API.
- Many people will also call these APIs, Web APIs or simply API.
- So, Jonas Schemdtmann came up with the term "Online API" because the term Web API is actually also used for other things.
- Ofcourse, we can build our own Online APIs, but that requires back-end development i.e. development with servers and databases.
- This is something that is really interesting that you can learn after learning JavaScript.
- Anyway, for now, we are interested in using third party APIs. So, APIs that other developers make available for us - most of the times for free.
- So, let's now imagine that you are building a travelling application, and you have a database with different destinations and tours that you are offering.
- So, on your own server, you could build your own API that can recieve requests from your front-end application in JavaScript and send back the results.
- So that would be your own API hosted on your own server.
- But that alone would probably not be enough to build a complete application. So, you could also use some 3rd party APIs.
- There are really APIs for everthing.
- So in our example, travel application, you could use an API to get weather data in your destinations, data about the destination countries themselves, data about flights, about currency conversions, and you could even use APIs to send emails or text messages or embed Google maps into your applications.
- So as you see, the possibilities are really endless with APIs, and we can even say that APIs is what made the modern web as you know it possible in the first place.
- So using APIs in JavaScript is super popular and everyone does it all the time. So, that's why we learning all of these details.
- Now to finish, let's quickly talk about API data formats.
- AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML. So, the X there, stands for XML.
- XML is a data format which used to be widely used to transmit data on the web.
- However, these days basically no API uses XML data anymore.
- The term AJAX is just an old name that got very popular back in the data, and so it is still used today, even though we don't use XML anymore.
- Instead, most APIs these days use the JSON data format.
- JSON is the most popular data format today because it is basically just a JavaScript object, but converted to a string.
- Therefore, it is very easy to send across the web and also to use in JavaScript once the data arrives.
- Now that we know what asynchronous JavaScript is and also what AJAX and APIs are, let's finally use all of it in practice and make our very first AJAX call in the next lesson.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
