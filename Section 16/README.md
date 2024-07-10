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
    - [Our First AJAX Call: XMLHTTPRequest](#our-first-ajax-call-xmlhttprequest)
    - [How the Web Works: Requests and Responses](#how-the-web-works-requests-and-responses)
      - [What happens when we access a web server](#what-happens-when-we-access-a-web-server)
    - [Welcome to Callback Hell](#welcome-to-callback-hell)
    - [Promises and the Fetch API](#promises-and-the-fetch-api)
      - [What are promises?](#what-are-promises)
      - [The Promise Lifecycle](#the-promise-lifecycle)
    - [Consuming Promises](#consuming-promises)
    - [Chaining Promises](#chaining-promises)
    - [Handling Rejected Promises](#handling-rejected-promises)
    - [Throwing Errors Manually](#throwing-errors-manually)
    - [Asynchronous Behind the Scenes: The Event Loop](#asynchronous-behind-the-scenes-the-event-loop)
      - [Review: JavaScript Runtime](#review-javascript-runtime)
      - [How Asynchronous JavaScript Works Behind The Scenes](#how-asynchronous-javascript-works-behind-the-scenes)
      - [Recap](#recap)
      - [Microtasks and Microtasks Queue](#microtasks-and-microtasks-queue)
    - [The Event Loop in Practice](#the-event-loop-in-practice)
    - [Building a Simple Promise](#building-a-simple-promise)
    - [Promisifying The Geolocation API](#promisifying-the-geolocation-api)
    - [Consuming Promises with Async/Await](#consuming-promises-with-asyncawait)
    - [Error Handling With try...catch](#error-handling-with-trycatch)
    - [Returning Values from Async Functions](#returning-values-from-async-functions)
    - [Running Promises in Parallel](#running-promises-in-parallel)
  - [Author](#author)

## Lessons Learned

### Asynchronous JavaScript, AJAX, and APIs

- Let's start this section by understanding what asynchronous JavaScript actually is, and also learn about the most popular use cases of asynchronous JavaScript, which is basically to make so-called AJAX calls to APIs.

#### Synchronous Code

- To understand what asynchronous JS code is, we first need to understand what synchronous (opposite of asynchronous) code is.
- Most of the codes that we have been writing so far in the course has been synchronous code,
- Synchronous simply means that the code is executed line by line, in the exact order of execution that we defined in our code, just like this small example:

```javascript
const p = document.querySelector('.p');
p.textContent = 'My name is Bhoami!';
alert('Text set!');
p.style.color = 'red';
```

- As the first line of code is reached in the execution, it is simply executed in the execution of thread.
- Don't worry about the execution of thread, it is not important here. It is just to make a point of synchronous vs. asynchronous code.
- All you need to know is that the execution of thread is part of the execution context, which does actually execute the code in the computer's processor.
- Anyway, then the next line of code is executed, then the one after that, all in sequence.
- So, each like of code always waits for the previous line to finish execution.
- This can create problems when one line of code takes a long time to run.
- For example, in our example above, in the third line, we have an `alert()` statment, which creates an alert window.
- As we've experienced in the past, this alert window will block the execution. So, nothing will happen on the page until we click on the OK button.
- Only when we have clicked OK, the code can continue executing.
- So, the `alert()` statement is a perfect example of a long running operation, which blocks execution of the code.
- So, only after we click "OK", the window disappears and the next line can run.
- This is hopefully a nice illustration of the problem with synchronous code.
- For the most part, synchronous code is fine and makes perfect sense but imagine that execution would have to wait for example, a 5 second timer to finish. That would be terrible because, meanwhile, nothing else on the page would work during these 5 seconds.
- That's where asynchronous code comes into play.

#### Asynchronous Code

```javascript
const p = document.querySelector('.p');
setTimeout(function () {
  p.textContent = 'My name is Bhoami!';
}, 5000);
p.style.color = 'red';
```

- This example contains the 5 second timer that we were talking about.
- The first line of code is still synchronous here, and we also move to the second line in a synchronous way.
- But, in the second line, we encounter the `setTimeout()` function, which will basically start a timer in an asynchronous way.
- This means that the timer will essentially run in the background without preventing the main code from executing.
- We also register a callback function, which will not be executed now, but only after the timer has finished running.
- We have already done this many times before in practice.
- This callback function that we just mentioned, is asynchronous JS. It is asynchronous because it is only going to be executed after a task that is running in the background finished execution. In this case, that is the timer.
- So, the main code is not being blocked and the execution does not wait for the asynchronous timer to finish its work.
- That's the big difference between synchronous and asynchronous code.
- Previously, we had to wait for the user to click the OK button on the alert window to continue execution, and that's because `alert()` is blocking, synchronous code.
- But now, with the timer, the callback is actually asynchronous.
- So, it is only going to be executed after the timer has finished. Therefore, we say that it is non-blocking, because in the meantime, the rest of the code can keep running normally.
- When the timer finally finishes after 5 seconds, the callback function will finally be executed as well.
- So, you'll see that this callback runs after all the other code, even though in the code, it doesn't appear at the end.
- So basically, an action was deferred into the future in order to make the code non-blocking.
- We have already seen this behaviour happening before when we first learned about timers, we just didn't know that it is called asynchronous and non-blocking code.
- So, in summary, asynchronous programming is all about coordinating the behaviour of our program over a certain period of time. This is essential to understand.
- So, asynchronous literally means not occuring at the same time.
- That's what asynchronous programming is all about.
- Now, as we saw in the example above, we need a callback function to implement this asynchronous behavior.
- However, that does not mean that callback functions automatically make code asynchronous. That is just not the case.
- For example, the array's `map()` method accepts a callback function as well, but that doesn't make the code asynchronous.
- Only certain functions such as `setTimeout()` work in an asynchronous way.
- We just have to know which ones do and which ones don't.
- But please understand this very important fact that callback functions alone do not make code asynchronous - that's essential to keep in mind.
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
- The first two lines run in a synchronous way i.e. one after the other.
- In the second line, we set the `src` attribute of the image that we selected in the first line, and this operation is actually asynchronous.
- Setting the `src` attribute of any image is essentially loading an image in the background while the rest of the code can keep running.
- This makes sense because, imagine that it is a big image, we wouldn't want our entire code to wait for the image to load. That's why setting the `src` attribute was implemented in JS in an asychronous way.
- Once the image has finished loading, a `load` event will automatically be emitted by JavaScript.
- So, we can then listen for that event in order to act on it.
- Listening for the `load` event is exactly what we do in the third line of the example above. There we use the `addEventListener()` and register a callback function for the load event.
- So, just like in the previous example, we provide a callback function that will be executed once the image has been loaded; and not right away because that code is non-blocking.
- So, instead of blocking, execution moves right on to the next line immediately.
- Then once the image is completely loaded, it is displayed on the webpage and the load event is emitted.
- Since we are listening for that event, our callback function is finally executed.
- So once more, we deferred an action into the future making the code asynchronous and non-blocking.
- At this point, you should have a pretty good understanding of asynchronous code.
- There is just one more important thing that needs to be mentioned here, which is the fact that event listeners alone do not make the code asynchronous, just like callback functions alone, also do not make the code asynchronous.
- For example, an event listener, listening for a click on a button is not doing any work in the background. It is simply waiting for a click to happen, but it is not doing anything. So, there is no asynchronous behaviour involved at all.
- What makes this code example (example above) asychronous is simply the fact that the image is loading asynchronously in the background, but not the fact that we are listening for the `load` event to happen.
- So what matters is the asynchronous behaviour of a task, like running a timer or loading an image.
- There are mroe examples of asynchronous behavior in JS like the Geolocation API that we used before, or AJAX calls.
- AJAX calls are probably the most important use case of asynchronous JS.
- So, let's see what AJAX is all about.

#### What are AJAX calls?

- AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML.
- It allows us to communicate with remote web servers in an asynchronous way.
- In practice, we make AJAX calls in our code in order to request some data from a web server dynamically.
- For example, in the next lesson, we are going to make AJAX calls to request data about countries.
- We can then use that data about countries to build a small application that shows us information about the country that we are currently in.
- Possibilities and use cases are endless but, more about that in a minute.
- For now, let's quickly understand how AJAX works.
- Let's say that we have our JavaScript application running in the browser, which is also the called the client.
- We want the application to get some data from a web server - let's say the data about countries.
- With AJAX, we can do an HTTP request to the server, which has this data.
- The server will then send back a response containing the data that we requested.
- This back and forth between client and server all happen asynchronously in the background, just the way we learned before.
- There can even be different types of requests, like GET requests to receive data or POST request to send data to a server.
- But, there is a whole lesson about this a bit later to really understand how all of it works in detail.
- When we are asking a server to send us some data, this server usually contains a web API.
- This API is the one that has the data that we are asking for.
- So, an API is something pretty important so, let's now understand what an API and web APIs actually are.

#### What is an API?

- First of all, API stands for **A**pplication **P**rogramming **I**nterface.
- In general terms, and on the very high level of abstraction, an API is basically a piece of software that can be used by another piece of software in order to basically allow applications to talk to each other and exchange information.
- That's true not only for web development and JavaScript, but for programming in general.
- In JavaScript and web development, there are countless types of APIs, like the DOM API or the Geolocation API that we have been using.
- These are called APIs because they are self-contained piece of software that allow other pieces of software to interact with them. For example, our [Mapty](https://bhoamikhona.github.io/javascript/Section%2015/index.html) application that we built in the [previous section](../Section%2015).
- Also, we can always implement a small and simple API in a class where we make some methods available as a public interface.
- Again, objects made from a class can be self-contained encapsulated pieces of software that other pieces of software can interact with. That fits the definition of API.
- Now, let's talk about the important type of API that we are actually interested in when we use AJAX. These APIs are called "Online APIs" by some people.
- An online API is essentially an application running on a web server, which receives requests for data, then retrieves this data from some databse and then sends it back to the client.
- When building applications in practice, we simply call these online APIs, API.
- Many people will also call these APIs, Web APIs, or simply API.
- The term Web API is also used for other things that is why some people prefer to call them Online APIs.
- Of course, we can build our own Online APIs but that requires backend development with servers and databases.
- This is something that is really interesting that you can learn after this course.
- Anyway, for now, we are interested in 3rd party APIs. APIs that other developers make available for us, most of the times for free.
- Let's now imagine that you are building a travel application, and you have a database with different destinations and tours that you are offering.
- So, on your own server, you could build your own API that can receive requests from your frontend application in JavaScript and send back the results.
- That would be your own API hosted on your own server.
- But that alone would probably not be enough to build a complete application.
- So, you could also use some 3rd party APIs.
- There are really APIs for everything.
- In the example of travel application, you could use an API to get weather data in your destinations, data about destination countries themselves, data about flights, about currency conversions.
- You could even use APIs to send emails or text messages or embed Google maps into your application.
- So as you see, possibilities are really endless with APIs, and we can even say that APIs is what made the modern web as you know it possible in the first place.
- So, using APIs in JavaScript is super popular and everyone does it all the time, that's why we are learning it in detail.
- Now, just to finish, let's quickly talk about data formats.
- AJAX stands for **A**sychronous **J**avaScript **A**nd **X**ML.
- So, the X there stands for XML which is a data format that used to be widely used to transmit data on the web.
- However, these days, basically no API uses XML data anymore.
- The term AJAX is just an old name that got very popular back in the day so, it is still used today, even though we don't use XML anymore.
- Instead, most APIs these days use the JSON data format.
- JSON is the most popular data format today because it is basically just a JavaScript object, but converted to a string.
- Therefore, it is very easy to send across the web and also to use in JavaScript once the data arrives.
- Now that we know what asynchronous JavaScript is, and what AJAX and APIs are, let's finally use all of it in practice, and make our very first AJAX call in the next lesson.

### Our First AJAX Call: XMLHTTPRequest

- Now that we know about AJAX and APIs, let's actually make our first API call.
- In this lesson, we are going to build a nice UI component which contains data about a certain country.
- This data about the countries is actually going to come from a third party online API.
- This is really exciting, and almost magical - to get the kind of data from the internet and work with it.
- In JavaScript, there are multiple ways of doing AJAX calls but, we are going to start with the most old school one, and that is `XMLHttpRequest()` function.
- We can call this function with the `new` keyword and store the result in a variable.

```javascript
const request = new XMLHttpRequest();
```

- That's the first step of using the `XMLHttpRequest` way of doing AJAX calls.
- As previously mentioned, this is the old school way of doing AJAX in JavaScript but, we are learning about it for two reasons:
  - First, you need to know that `XMLHttpRequest` exists because, you might actually need it in the future.
  - Second, you need to know how AJAX calls used to be handled with events and callback functions. Only after that we should move on to a more modern way of handling asynchronous JavaScript, which is going to be a feature called Promises.
- Anyway, next, we need the URL to which we will make the AJAX call.
- To do that, we need to call the `open()` method that is available on `XMLHttpRequest` object. This `open()` method takes two parameters. The first parameter is the type of request that we want to make, in our case it is "GET", because remember that the type of HTTP request to get data is simply "GET".
- The second parameter is a string containing the URL to which the AJAX call should actually be made.

```javascript
const request = new XMLHttpRequest();
request.open('GET', ``);
```

- SIDE-NOTE
  - On GitHub, there is this huge repositories which is called [Public APIs](https://github.com/public-apis/public-apis).
  - There you will find a list of a ton of public and free APIs that you can use.
  - The one that we are going to use is called [REST Countries](https://restcountries.com/)
  - In the table, in GitHub respository, we see that the API that we are going to use needs no authentication, it uses HTTPS and CORS.
  - So, any API that you use should always have CORS set to "Yes" or maybe to "Unknown".
  - CORS stands for **C**ross **O**rigin **R**esource **S**haring.
  - Without CORS, we cannot access a third party API fom our own code.
  - In the documentation of [REST Countries](https://restcountries.com/) API, we simply look for a so-called API endpoint.
  - Endpoint is essentially just another name for the URL that we need.
  - Look at the documents and select the one that provides an endpoint for getting the data for a specific country that we want.
  - That's what we are going to use.

```javascript
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/india`);
```

- With this, we opened the request but now, we also need to send it.
- So you see, there are a lot of steps involved when using this way of doing

### How the Web Works: Requests and Responses

- In this lesson, we are going to go over a very high-level overview of how the Web actually works behind the scenes in regards to requests and responses.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c7a6b7e6-ad36-47d9-a7b9-360500e268be)
- Above is the diagram that we saw when we first talked about AJAX calls.
- To recap, whenever we try to access a web server, the browser, which is the client, sends a request to the server and the server will then send back a response and that response contains the data or the web page that we requested.
- This process works the exact same way no matter if we are accessing an entire web page or just some data from a web API.
- This whole process actually has a name, and it is called the <ins>request-response model</ins> or the <ins>client-server architecture</ins>.
- Anyway, let's now dive a bit deeper into this.

#### What happens when we access a web server

- Let's use the example of the URL that we accessed in the last lesson to get our country data.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c4aadebc-19d1-44d8-9cee-51e8b66f45ce)
- Every URL gets an HTTP or HTTPS, which is for the protocol that will be used on this connection. We will talk about this a bit later, in this lesson.
- Then we have the domain name, which is [restcountries.com](https://restcountries.com/) in this case, and also, after a slash, we have the so-called "resource" that we want to access.
- In our case it is "v3.1/name/{name}"
- Now this domain name, restcountries.com is actually not the real address of the server that we are trying to access.
- It is really just a nice name that is easy for us to memorize.
- But what this means is that we need a way of converting the domain name to the real address of the server.
- That happens through a so-called <ins>DNS</ins> which stands for <ins>domain name server</ins>.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/5b8d8599-157e-4b96-98f5-f9ff137ac51f)
- DNS are a special kind of server. They are basically like the phone books of the Internet.
- The first step that happens when we access any web server is that the browser makes a request to a DNS and this special server will then simply match the web address of the URL to the server's real IP address.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/18655dae-8267-4f87-b100-3760b53969ac)
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/d52a6ebf-a02f-4c79-88fa-b3f831333421)
- All of this happens through your internet service provider, but the complete details don't really matter here.
- What you need to retain from this first part is that the domain is not the real address and that a DNS will convert the domain to the real IP address.
- Then, after the real IP address has been sent back to the browser, we can finally call it.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/6584069d-3e9d-45a1-8c59-aadd8c03a217)
- This is what the real address looks like: "https://104.27.142.889:443"
- It still has the protocol, but then comes the IP address, and also the port that we access on the server.
- This port number is really just to identify a specific service that's running on a server.
- So, you can think of it like a sub-address.
- This port number has nothing to do with the "/v3.1/name/{name}" that we want to access.
- That resource will actually be sent over in the HTTP request, as we will see in a moment.
- That wraps up the first step.
- So, once we have the real IP address, a TCP socket connection is established between the browser and the server. So, they are now finally connected.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/db0c0dee-028f-4335-8bc6-692bafd3d439)
- This connection is typically kept alive for the entire time that it takes to transfer all files of the website or all data.
- What are TCP and IP?
- TCP is the transmission control protocol, and IP is the internet protocol. Together they are communication protocols that define exactly how data travels across the web.
- They are basically the internet's fundamental control system, because again, they are the ones who set the rules about how data moves on the internet.
- Don't worry if that sounds confusing. We will learn a bit more about TCP/IP a bit later in this lesson.
- Anyway, now it is time to finally make our request. The request that we make is an HTTP request where <ins>HTTP</ins> stands for <ins>**H**yper**T**ext **T**ransfer **P**rotocol</ins>.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/24a81fde-da9b-4152-b843-f997771f59e8)
- So, after TCP/IP, HTTP is another communication protocol.
- By the way, a communication protocol is simply a system of rules that allows two or more parties to communicate.
- In the case of HTTP, it is just a protocol that allows clients and web servers to communicate. That works by sending requests and response messages from client to server and back.
- A request message will look something like this:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/a95a3e18-da1d-4e4c-bbf7-672ceb5c2cbd)
- The beginning message is the most important part, called the <ins>start line</ins>.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b9a72c49-37b8-46a3-b69b-9a6fdc182dcf)
- And the one in our example contains the HTTP method that is used in the request, then the request target and the HTTP version.
- About the HTTP methods, there are many available but, the most important ones are:
  - GET - for simply requesting data
  - POST - for sending data
  - PUT and PATCH - to modify data
- So, you see, an HTTP request to a server is not only for getting data, but we can also send data.
- Now about the request target. This is where the server is told that we want to access the "rest/v2/alpha" (image example) resource.
- We had it in the URL before and now it is simply sent as the target in the HTTP request. So then the server can figure out what to do with it.
- Now, if the target was empty, so if it was just a slash, then we would be accessing the website's route, which is just "rescountries.eu" in the example image.
- Then the next part of the request are the request headers, which is just some information that we sent about the request itself.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/1b1555a2-6208-4570-86ef-47c16d33c9f0)
- There are tons of standard different headers, like what browser is used to make the request, at what time, the user's language, and many more.
- Finally, in the case we are sending data to the server - there will also be a request body, and that body will contain the data that we are sending, for example, coming from an HTML form.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/79a93712-6745-43d3-a9a9-cc9b61b5267a)
- So, that is the HTTP request, and hopefully all of that made sense.
- Now, of course, it is not the developers who manually write these HTTP requests, but, it is still helpful and valuable that you understand what an HTTP request and also a response looks like.
- There is also HTTPS.
- The main difference between HTTP and HTTPS is that HTTPS is encrypted using TLS or SSL, which are yet some more protocols.
- Besides that, the logic behind HTTP requests and responses still apply to HTTPS.
- So, our request is formaed and now it hits the server, which will then be working on it until it has our data or web page ready to send back.
- Once it is ready, it will send it back using an HTTP response.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/cbfbba66-cd13-465e-abfa-4e167e161cf6)
- The HTTP response message actually looks quite similar to the request.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/bdddfce3-db1e-4d2f-8419-fceace46521d)
- Now, in this case, the start line has a status code and a message besides the version.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/50baa110-460a-4e58-b2bb-6fef51898fbb)
- These are used to let the client know whether the request has been successful or failed.
- For example, 200 means OK; and the status code that everyone knows is 404, which means page not found. So, this where that 404 comes from.
- Then the response headers are information about the response itself, just like before.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/64d6b3e7-d0a6-449c-ade2-9c2ddc201490)
- There are a ton avialble and we can also make up our own actually.
- Finally, the last part of the response is, again, the body - which is present in most reposnses.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/1b50251c-3277-499d-8e59-e6d62bb9dc36)
- This body usually contains the JSON data coming back from an API or the HTML of the web page that we requested or something like that.
- So, we talked in great detail about the most important parts here, which are the HTTP request and response.
- But in our imaginary example, we only just did one request to restcountries.eu and got one response back.
- That's how it is going to work when all we do is to access an API.
- However, if it is a webpage that we are accessing, then there will be many more requests and responses.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/45118c27-5cd3-4d6e-85b7-165ab07750a7)
- That's because when we do the first request, all we get back is just the initial HTML file.
- That HTML file will then get scanned by the browser for all the assets that it needs in order to build the entire webpage like JS, CSS files, image files, or other assets.
- Then for each different file, there will be a new HTTP request made to the server.
- Basically, this entire back and forth between client and server happens for every single file that is included in the webpage.
- However, there can be multiple requests and responses happening at the same time, but the amount is still limited because otherwise, the connection would start to slow down.
- Anyway, when all the files have finally arrived, then the webpage can be rendered in the browser, according to the HTML, CSS, and JS specifications that you already know.
- Now, as a final piece of the puzzle, let's talk about TCP/IP and figure out how this request and response data is actually sent across the web.
- We mentioned before that TCP and IP are the communication protocols that define how data travels across the web.
- We won't go into a lot of detail here but, here is what we need to know:
  - First, the job of TCP is to break the requests and responses down into thousands of small chunks, called packets before they are sent.
  - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/5ab9701c-d14a-47f6-82be-6dace5d8accb)
  - Once these small packets arrive at their final destination, TCP will re-assemble all the packets into the original request or response.
  - This is necessary so that each packet can take a different route through the internet because this way the message arrives at the destination as quick as possible - which would not be possible if we sent the entire data simply as a big chunk.
  - That would be like trying to go through dense traffic with the biggest bus that you can imagine - probably not a good idea.
  - Second, the job of the IP protocol is to actually send and route these packets through the internet.
  - ![tcpip-gif](https://github.com/bhoamikhona/javascript/assets/50435319/1377ef0d-db00-4d0b-9acd-30f658da63dd)
  - So, it ensures that they arrive at the destination they should go, using the IP addresses on each packet.
  - That's it.
- That's a broad overview of what really happens behind the scenes of the web.
- Hopefully, you found this information useful and interesting.
- Anyway, now let's go back to our JavaScript AJAX calls.

### Welcome to Callback Hell

- In the last lesson, we did a simple AJAX call to fetch data from a country's API.
- We created a function for that and as we call the function multiple times, multiple AJAX calls were made at the same time. Basically, the call were running in parallel and we could not control which one finished first.
- However, in this lesson, let's create a sequence of AJAX calls so that the second one runs only after the first one has finished.
- Here's what we are going to do:
  - When we get a country's data, it has a property called `border` which holds an array with of strings. These strings are essentially codes that represent a country that are neighbours of the original country.
  - So, what we will do now is after the first AJAX call is completed, we will get the `borders` of the original country and then based on it, we will also render the neighbouring country on our UI.
  - So, in this case, the second AJAX call really depends on the first one, because the data about neighbouring countries is of course a result of the first call.
  - Without the first call, we wouldn't even know which data to fetch in the second call.
  - So, what we need to implement is a sequence of AJAX call.

```javascript
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
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
```

- Here we have the code from the last lesson.
- First, let's change the name of the function to `getCountryAndNeighbour()`.

```javascript
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
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

getCountryAndNeighbour('india');
```

- Again, we get country as an input and then we do our first AJAX call.
- Once the load event is fired (when the data arrives), we then handle that data.
- Now let's export the functionality of creating an html element and inserting it into the DOM in its own function. So, that we can call it not just for the original country but also, its neighbouring countries.

```javascript
const renderCountry = function (data) {
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
};

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText).pop();
    console.log(data);
    renderCountry(data);
  });
};

getCountryAndNeighbour('india');
```

- The UI should look the same as before at this point.
- Now let's get the neighbour country.

```javascript
const renderCountry = function (data) {
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
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data?.borders?.[0];

    // if there is no neighbouring country, return
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
  });
};

getCountryAndNeighbour('india');
```

- Now just like beofore, we have to listen for the load event on request2.

```javascript
const renderCountry = function (data) {
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
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data?.borders?.[0];

    // if there is no neighbouring country, return
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText);
    });
  });
};

getCountryAndNeighbour('india');
```

- You are starting to see now that the second AJAX call, in the way we are setting it up here, is really dependent on the first one.
- That's because we are firing up second AJAX call in the callback function of the first one.
- Basically, inside of the callback function, we are now adding a new event listener for the new request.
- Now if we look at the console, we indeed get the data about Bangladesh, a neighbouring country to India.
- And now, no matter how many times we re-load the page, the data about Bangladesh will always appear after India, because there is no way that the second AJAX call can be made before the first one - in our example.
- Now let's render the neighbouring country on our UI.

```javascript
const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
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
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data?.borders?.[0];

    // if there is no neighbouring country, return
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText).pop();
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');
```

- Once again, the second AJAX call would not have been possible without the first one.
- So, what we have here is one callback function inside of another one.
- In other words, we have nested callbacks.
- But now imagine that we wanted to do more in sequence, like the neighbour of the neighbour of the neighbour - 10 times over.
- In that case, we would end up with 10 times over nested callback functions.
- For that kind of structure/behavior, we have a special name, which is <ins>callback hell</ins>.
- Basically, callback hell is when we have a lot of nested callbacks in order to execute asynchronous tasks in sequence.
- In fact, this happens for all asynchronous tasks, which are handled by callbacks - and not just AJAX calls.
- For example:

```javascript
// callback hell another example:
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

- Here too of course, we have callback hell.
- In fact, callback hell is pretty easy to identify by the triangular shape that is formed, that you can see in the example above.
- The problem with callback hell is that it makes our code look very messy. But even more important, it makes our code harder to maintain, very difficult to understand and to reason about.
- This kind of code will have more bugs thereby making it worse code.
- RULE: The code that is hard to understand, is basically bad code, because it will have more bugs. This is because the harder it is to understand code and to reason about, the more difficult it will be to add new features and to add more functionality to the application.
- Given all these problems with callback hell, we of course need a way to solve callback hell.
- Fortunately for us, since ES6, there is actually a way of escaping callback hell by using something called <ins>promises</ins>.
- So, let's now take the next step in our journey of asynchronous JS, which is to learn about promises.

### Promises and the Fetch API

- In the last lesson we got a glimpse into callback hell and it was not pretty.
- In this lesson, let's learn about a modern JavaScript feature called <ins>promises</ins>, so that we can escape callback hell.
- However, before we learn about promises, we should actually see one.
- So, let's now replace the old `XMLHttpRequest()` function with the modern way of making AJAX calls - and that is by using the Fetch API.
- This is how we do it:

```javascript
// using XMLHttpRequest()
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/india`);
request.send();

// using fetch API
const request = fetch(`https://restcountries.com/v3.1/name/india`);
console.log(request);
```

- Now there are some more options that we can specify in the `fetch()` function, if we'd like but, to make a simply request like the one we have above, all we really need is to pass in the URL, that's it.
- So, for more complex AJAX calls, the `fetch()` function can take in an object of options as well, but for now, we don't need that.
- Now, we check the console, after logging in the request, we see that the `fetch()` function immediately returned a promise.
- So, as soon as we started the request, stored the result in `request` variable, and then logged it, we immediately got a promise in the console - and right next to it, in the angle brackets, it says pending.
- If we expand it, then it says "fulfilled" and then we also have a promise value.
- What matters here is that now we actually have a promise and it is stored in the `request` variable.
- But, what exactly is a promise, and what can we do with it?

#### What are promises?

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/3c2f6fb2-ae14-4881-9790-9641c9a9d6ae)
- The formal definition of a promis is that it is an object that is used as a placeholder for the future result of an asynchronous operation.
- If that sounds weird to you, we can also say that a promise is like a container for an asynchronously delivered value. OR a promise is a container for a future value.
- A perfect example of a future value is the response coming from an AJAX call.
- So, when we start an AJAX call, there is no value yet, but we know that there will be some value in the future. So, we can use a promise to handle this future value.
- This will really make sense once we go back to code.
- But to understand this concept even better, we can use the analogy of a lottery ticket.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/75f1eef0-4a43-4a16-9b12-18b94a5a4508)
- A promise is just like a lottery ticket. When we buy a lottery ticket, we essentially buy a promise that we will receive some amount of money in the future if we guess the correct outcome.
- So, we buy the ticket now with the prospect of winning money in the future and the lottery draw - which determines if we get the money or not happens asynchronously.
- So, of course, we don't have to drop everything and keep waiting until the lottery draw happens.
- Now, in case we did get the corret outcome, we will receive the lottery money because we have the lottery ticket which is a promise that we bought.
- Now, what's the advantage of using promises?
- There are two actually.
- First, by using promises, we no longer have to rely on events and callback functions to handle asynchronous results.
- Events and callback functions can sometimes cause unpredictable results so, it is a big win already.
- But even better, with promises, we can chain promises for a sequence of asynchronous operations instead of nesting, like we did in the last lesson.
- With this, we can finally escape callback hell, which was our initial goal, all along.
- By the way, promises are an ES6 feature i.e. they became available in JS in 2015 so by now, they are widely used by everyone.

#### The Promise Lifecycle

- Since promises work with asynchronous oeprations, they are time sensitive.
- So, they change over time.
- So, promises can be in different state and this is what they call the cycle of a promise.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/310a7464-0585-40b2-872f-6fb94213afdd)
- In the very beginning, we say that a promise is pending. This is before any value resulting from the asynchronous task is available.
- During this time, the asynchronous task is still doing its work in the background.
- Then when the task finally finished, we say that the promise is settled.
- There are two different types of settled promises:
  - Fulfilled promises
    - A fulfilled promise is a promise that has successfully resulted in a value, just as we expect it.
    - For example, when we use the promise to fetch data from an API, a fulfilled promise successfully gets that data, and it is now available to being used.
  - Rejected promises
    - A rejected promise means that there has been an error during the asynchronous task.
    - For example, in the case of fetching data from an API, an error would be for example, when the user is offline and cannot connect to the API server.
- Going back to the analogy of the lottery ticket, the lottery draw is basically the asynchronous task, which determines the result.
- Once the result is available, the ticket would be settled.
- If we guessed the correct outcome, the lottery ticket will be fulfilled and we get our money.
- However, if we guessed wrong, then the ticket basically gets rejected and all we did was waste our money.
- These different states are very important to understand because when we use promises in our code, we will be able to handle these different states in order to do something as a result of either a successful promise or a rejected one.
- Another important thing about promises is that a promise is only settled once so, from there, the state will remain unchanged forever.
- So, the promise was either fulfilled or unchanged but, it's impossible to change that state.
- These different states that we just observed are relevant and useful when we use a promise to get a result, which is called, <ins>to consume a promise</ins>.
- We consume a promise when we already have a promise, for example, the promise that was returned from the `fetch()` function, right at the beginning of this lesson.
- But in order for a promise to exist in the first place, it must first be built i.e. it must be created.
- In the case of fetch API, it is the `fetch()` function that builds the promise and returns it for us to consume.
- So, in this case, we don't have to build the promise ourselves in order to consume it.
- Most of the time, we will actually just consume promises, which is also the easier and more useful part. So, that's what we will do in the next couple of lessons.
- But sometimes, we also need to build a promise and not just consume it. Of course we will learn how to do that, a bit later.
- Let's start using promises in the next lesson.

### Consuming Promises

- In this lesson, we will learn how to consume a promise.
- In this case, we will consume the promise that was returned by the `fetch()` function.
- So, let's now implement the `getCountryData()` function from the very first lesson but, using a promise.

```javascript
const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`);
};
```

- As we already know, calling the `fetch()` function like this, will immediately return a promise.
- In the beginning, the promise is of course, still pending because the asynchronous task of getting the data is still running in the background.
- Of course, at certain point, the promise will then be settled in either a fulfilled or a rejected state.
- But for now, let's assume success. So, assume that the promise will be fulfilled and that we have a value available to work with.
- So, to handle this fulfilled state, we can use the `then()` method that is available on all promises.
- In the `then()` method, we need to pass a callback function that we want to be executed as soon as the promise is actually fulfilled i.e. as soon as the result is available.
- This callback function inside `then()` will recieve one argumnet once it is called by JS and that argument is the resulting value of the fulfilled promise. We can call this argument `response` because it is the response of an AJAX call in this case.

```javascript
const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
    response
  ) {});
};
```

- That's it, this is how we handle a fulfilled promise.
- But now, let's do something with the response that we have received; and as always, let's start by logging it to the console.

```javascript
const getCountryDataFetch = function (country) {
  // prettier-ignore
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response) {
      console.log(response);
  });
};

getCountryDataFetch('india');
```

- We get the response, indeed, along with the type of the object which is actually called `Response`.
- When we expand this response object, we will see a few things about the response itself, for example, status code and headers.
- Anyway, what we are actually interested in is the data itself and that data is in the response body.
- When we click on the `body`, we see that the body is `ReadableStream`. So, we cannot really look at the data just yet.
- In order to be able to actually read this data from the body, we need to call the `json()` method on the response.
- `json()` is a method that is available on all responses of the `fetch()` method.

```javascript
const getCountryDataFetch = function (country) {
  // prettier-ignore
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function(response) {
      console.log(response);
      response.json()
  });
};

getCountryDataFetch('india');
```

- Again, the `json()` method is a method that is available on all the response objects coming from the `fetch()` function i.e. all of the resolved values; and indeed, the response in our case is in fact a resolved value.
- Therefore, it does have the `json()` method attached to it.
- The problem is that this `json()` function itself is also asynchronous function.
- This means that it will also return a new promise and that's a bit confusing, but this is just how it works.
- Anyway, now we need to return the promise that is coming from the `json()` method so that we can handle it.
- To handle the promise coming from `json()`, we use another `then()` method, like so:

```javascript
const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
};

getCountryDataFetch('india');
```

- Now if we look at the console, we are back to having the same data that we had when we used `XMLHttpRequest()` but this time, using a promise (two promises to be precise).
- Let's recap what happened here.
- The first part is pretty straight forward - which is the `fetch()` function returning a promise; and then we handle that promise using a `then()` method.
- But then, to actually read the data from the response, we need to call the `json()` method on that response object. Now this itself, will also return a promise.
- So, if we then return that promise from the `then()` method of the `fetch()` function then basically, the `then()` function called on `fetch()` becomes a new promise itself.
- Since it is now a promise, we can call the `then()` method on that.
- In this second `then()` method, we get a callback and access to the data because the resolved value of `response.json()` is going to be the data itself.
- Now all we have to do is to render the country.

```javascript
const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data.pop());
    });
};

getCountryDataFetch('india');
```

- So, we just did the same thing as before, but this time using promises.
- And if don't have all the `console.log()` functions in there, then we can simplify it a lot.
- After simplification, it will look like this:

```javascript
const getCountryDataFetchSimplified = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data.pop()));
};

getCountryDataFetchSimplified('usa');
```

- Now if you compare the code that we wrote while using `XMLHttpRequest()` vs. `fetch()` then you'll have to agree that the code with `fetch()` is easier to read and to reason about.
- So, it is very easy to understand that `fetch()` fetches something, which gives us a reponse and then `json()` transforms that response into json and then we take that data and reder it into a country card component on our UI.
- So, it almost reads like English sentences and that's very helpful to understand the code now and also in the future.
- Now, just to finish, you might be wondering that we are still using callbacks here.
- That's true. Promises do not get rid of callbacks but, they do in fact get rid of callback hell.
- So, even if it doesn't look like a big change for now, it will look like a change after we add the functionality of loading the neighbouring country.
- So, let's do that in the next lesson.

### Chaining Promises

- Let's now learn how to chain promises in order to also render the neighbouring country, of the initial country that we give to the function.
- In this lesson, we will now take chaining to a new level and actually chain together, two sequential AJAX calls.
- So just like before, we first get the data about the country and then we also want to get the data about the neighbouring country.
- So, the second AJAX call depends on the first AJAX call - so, they need to be done in sequence.
- To do that, let's simply modify the code from the previous lesson.
- The second AJAX call needs to happen inside the second `then()` method.
- So, as soon as we get the data for the original country, we need to do the AJAX call for the neighbouring country.

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    });
};

getCountryDataFetchChain('usa');
```

- For now, this is not going to do anything because what we need to do now is to actually return the new promise.
- Because then, when we do that, we will be able to chain a new `then()` method on the result of the previous `then()` method.

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    });
};

getCountryDataFetchChain('usa');
```

- In the last lesson, we oversimplified things about how all of this works.
- Actually, the `then()` method always returns a promise, no matter if we actually return anything or not.
- But if we do return a value, then that value will become the fulfillment value of the return promise.
- We can confirm that by returning a number instead of the data, like so:

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      // return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
      return 23;
    })
    .then(data => alert(data));
};

getCountryDataFetchChain('usa');
```

- Indeed, we get an alert window which says 23.
- This happens because whatever we return from the promise in the second `then()` method, will become the fulfilled promise value in the third `then()` method.
- The fullfilled value i.e. the success value of the promise will be the value that we return from the second `then()` method - which in our example above is 23.
- Therefore, in the next `then()` method, the data will be 23.
- Again, the data that we receive in the third `then()` method is the fullfilled value of the promise that we are handling.
- Anyway, of course, the same is true for promises.
- So by doing this:

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(data => console.log(data));
};

getCountryDataFetchChain('usa');
```

- So by returning the `fetch()` promise from the second `then()` method, the fullfilled value of the third `then()` method will be the fullfilled value of the previous promise.
- This might sound confusing but, what you need to understand is that the second `then()` method returns a promise and in the third `then()` method we need to handle the success value of that promise.

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    // here we are calling it response because it really is the response of the fetch() - we also call json() on it so that the string is converted to a JS object
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'));
};

getCountryDataFetchChain('usa');
```

- As we can see, it works.
- So, as you see, promises really allow us to handle these complex asynchrnous operations with as many steps as we want.
- So, right now we have 4 steps (i.e. 4 `then()` methods) but, we can extend it as much as we want.
- Even if we want the neighbour of the neighbour of the neighbour (10 times over), we could easily do that by chaining all the promises one after another, and all without callback hell.
- Here, instead of callback hell, we have flat chain of promises, and it is very easy to read and understand.
- So, as a conclusion to this and the previous lesson, promises really are an incredibly powerful and elegant solution to handle asynchronous code.
- Now, just to finish, let's look at a pretty common mistake that many beginners make, which is to chain the `then()` method directly onto a new nested promise.

```javascript
const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // DON'T DO THIS
      // Many beginners do this mistake, where instead of returning the fetch() promise, they chain the then() method on it
      fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then(response => response.json())
        .then(data => renderCountry(data.pop(), 'neighbour'));
    });
};

getCountryDataFetchChain('usa');
```

- This still works but then, we are in fact back to callback hell.
- Because now indeed, we have one callback hell function defined inside another one.
- That's exactly what we are trying to avoid so, don't do this.
- So, always return the promise and then handle it outside by simply continuing the chain.
- Anyway, let's now move on and actually handle errors because that is also a pretty common scenario when we work with promises and especially with AJAX calls.

### Handling Rejected Promises

- Until now, we have always assumed that everything went well with our AJAX calls, so we never handled any errors.
- However, an important part of web development is to actually handle the errors because it is very common that errors happen in web applications.
- Because it is very common that errors happen in web applications.
- So, in this lesson, let's talk about how to handle errors in promises.
- To start, remember that a promise in which an error happens is a rejected promise.
- So in this lesson, we are going to learn how to handle promise rejections.
- The only way in which the `fetch()` promise rejects is when the user loses his internet connection.
- So, for now, that's going to be the only error that we will handle here.
- To do that, we will simulate not having the internet using the Network tab on the chrome developer tools.
- Assuming that you did the necessary changes in the network tab:
- Now if we click the button, we get the internet disconnected error in the console.
- So, at this point, for the first time, the promise that's returned from the `fetch()` function was rejected.
- So, let's now handle that rejection.
- There are two ways of handling rejections.
- The first one is to pass a second callback function into the `then()` method.
- So, the first callback function in the `then()` method is always going to be called for the fulfilled promise but, we can also pass in a second callback function, which will be called when the promise was rejected.
- So, let's do that.
- This second callback will be called with an argument which is basically the error itself.

```javascript
const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // second callback with error handling
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'));
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- So now, we actually handled the error by displaying the alert window with error message in it - and the error that we saw previously in the console, is now gone.
- So now, in fact, we no longer have the uncaught error in the console because we did actually catch the error in the `then()` method.
- Handling the error is also called catching the error.
- That's the reason why the erorr that we had in the console before, disappeared.
- So with this, we are now handling the error that might occur in the promise from the `fetch()` function.
- Now in this case, there are then no more errors because the chain stops there when it is handled.
- But what if there was no error from the `fetch()` promise but then the `fetch()` promise for the neighbouring country was rejected?
- Well then we would also have to catch an error there:

```javascript
const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // second callback with error handling
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderCountry(data.pop(), 'neighbour'));
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- However, that is a bit annoying and in fact, there is a better way of basically handling all these error globally i.e. just in one central place.
- To do that, let's remove all of the second callbacks in the `then()` methods.
- Instead, we can handle all the errors no matter where they appear in the chain, right at the end of the chain, by adding a `catch()` method.

```javascript
const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => alert(err));
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- So, this `catch()` method at the end of the chain will basically catch any errors that occur in any place, in the whole chain - no matter where that is.
- So, errors basically propagate down the chain until they are caught, and only if they are not caught anywhere then we get the uncaught error that we saw right in the beginning.
- Now instead of having that annoying alert window, let's just log the error to the console and create a string to represent that error.

```javascript
const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => console.error(`${err} 💥💥💥`));
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- Usually, simply logging the error to the console is not enough in a real application with a real user interface.
- So, instead of just logging something to the console, let's also display an error message for the user to see.
- So, that's then a more real use case for the catch block.
- So, we still want to log the error to the console but besides that, let's actually now create a function that will also render some kind of error.

```javascript
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err}`);
    });
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- NOTE that the error that is generated in the `catch()` method, is a real JS object.
- So, we can create errors in JS with a constructor, for example, just like a map or a set.
- And any error in JS that was created like that contains a message property.
- So, we can use that in `renderError()` to basically only print the message of that error and not the whole object itself.
- We will actually learn more about the built-in error object of JS in the next lesson.

```javascript
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    });
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- Now if we try it, we indded get our custom error in the console, as well as on the UI.
- It's not super pretty but, that's not the point here.
- On the UI, it is just the message but, in the console, we get the entire error along with its stack trace i.e. it shows us exactly where the error is coming from.
- So, that's how we handle errors happening in promises in any `then()` handler.
- Basically, handling any promise rejection no matter where it happens in the chain.
- Now just to finish, there is one more quick method that we need to see, and that is also available on all promises.
- So, besides `then()` and `catch()`, there is also the `finally()` method.
- The callback function in the `finally()` method, will always be called - whatever happens with the promise.
- So, no matter if the promise is fulfilled or rejected, the callback function in the `finally()` method will always be called.
- So, that's the difference between the other two:
  - The `then()` method is only called when the promise is fulfilled
  - The `catch()` method is only called when the promise is rejected
  - `finally()` method is always called, no matter whether the promise is fulfilled or rejected.
- Now, the `finally()` method is not always useful, but in certain cases it comes in really handy.
- We use `finally()` method for something that always needs to happen no matter the result of the promise. A good example of that is to hide a loading spinner in web applications when you load some data.
- So these applications show a spinner when an asynchronous operation starts and then hide it once the operations completes. And that happens no matter if the operation was successful or not.
- So, for that, the `finally()` method is perfect.
- In our case, what we need to do is to fade-in the container.
- So, no matter whether we are rendering the country component or the error message, the `countriesContainer` should always become visible so, that's what we can put in the `finally()` method.

```javascript
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
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
  // countriesContainer.style.opacity = 1;
};

const getCountryDataFetchError = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryDataFetchError('usa');
});
```

- Now if we check it, it works beautifully!
- Just notice that this works because `catch()` itself returns a promise.
- That's the only way `finally()` can work since it works only on promises.
- Now, let's try to simulate another error so that we can know what to do next.
- Let's say that we are trying to search for a country that simply doesn't exist.
- So, our API is not going to find any result for that.

```javascript
getCountryDataFetchError('abc');
```

- Now we get a weird error that says "Cannot read property of 'flag' of undefined".
- This error is weird and it doesn't really reflect the true error - which is simply that our API cannot find any country with the name "abc".
- So, the true error is of course not that we cannot read "flag" of undefined but, it is in fact that our API cannot find any country.
- That's reflected with the status code of 404 in the console.
- However, as mentioned earlier, the `fetch()` promise only rejects when there is no internet connection, but with a 404 error like this, which is not a real error but, it kind of is... Anyway, with the 404 error, the `fetch()` promise still gets fulfilled.
- So, there is no rejection and so our `catch()` handler cannot pick up on this error.
- It does pick up on the other error which is "Cannot read property of 'flag' of undefined" but, that is not the one that we want to handle.
- In this case, we really want to tell the user that no country was found with the name of "abc".
- So, that's what we will do in the next lesson.

### Throwing Errors Manually

- In this lesson, we are going fix the request 404 error that we saw happening in the last lesson.
- So, as we saw in the last lesson, the problem was that during the `fetch()`, there was a 404 error, which is because our API couldn't find any country with the name of "abc".
- But, even though there was obviously a big problem with the request, the `fetch()` function still did not reject in this case.
- Many people think that the promise should be rejected in this case, but it doesn't so, we will have to do it manually.
- To check what is going on, we can log the response in the very first `then()` handler right after the `fetch()`.

```javascript
const getCountryWithErrorHandling = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log('response', response);
      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

getCountryWithErrorHandling('abc');
```

- Again, for now, we are just taking a look at the response object.
- In the response object, if you expand it, you will see that the "ok" property is set to false.
- The reason for that is of course the status code 404.
- When the request goes well, the "ok" is set to true and that's because the status code is 200.
- So, 200 literally stands of OK.
- So, we can now use the fact that this reponse has the "ok" property set to false to reject the promise ourselves, manually.
- We can do that by creating a new error.

```javascript
const getCountryWithErrorHandling = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log('response', response);

      // this is the real error message that we want to see
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

getCountryWithErrorHandling('abc');
```

- This is something that we never did before, so let's analyze what happens here.
- We create the new error by using the constructor function, and then we pass in a message, which is going to be the error message.
- Then we use the `throw` keyword which will immediately terminate the current function, just like `return` does.
- The effect of creating and throwing an error in any of these `then()` methods is that the promise will immediately reject.
- Basically, the promise returned by the `then()` handler will be a rejected promise.
- That rejection will then propagate all the way down to the `catch()` handler, which we already have set up.
- So, now if we check our UI, the error message that is rendered is exactly the one that we passed in the `Error()` constructor function.
- So, any error that happens in any of the callback functions i.e. `then()` methods, it will immediately terminate that `then()` handler and will propagate down to the `catch()` method.
- In the `catch()` method, we then handle that error, which is why we see it in our UI.
- In fact, the same is true for any other error.
- So, before we added our own error, we had the "Cannot read property of 'flag' of undefined" and that's because somewhere in our `renderCountry()` function we are trying to read the 'flag' from the data that we received, but the data that we received for "abc" country does not contain a flag. Therefore, it created the error.
- This error then caused rejection of the promise and it was handled in the `catch()` method.
- So, any error will cause any promise to reject but, in the first `then()` after the `fetch()`, we are simply creating our own error to basically reject the promise on purpose so that we can then handle that error in the `catch()` down the chain.
- Now you might be wondering, why should we even bother to handle all these errors? Isn't that just a bunch of work and a waste of time?
- First, handling these errors is the only way in which we can actually display errors for our users, like we did in our example.
- But even more important, it is really just a bad practice to leave these rejected promises, hanging around without handling them.
- So, don't do that, always use `catch()` method; and if necessary, you can also use `finally()`.
- Now, what if there was no error in the first `then()` method after the `fetch()` but, we have a problem in the second `fetch()` method (i.e. when fetching data for the neighbouring country)?

```javascript
const getCountryWithErrorHandling = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log('response', response);

      // this is the real error message that we want to see
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders?.[0];
      const neighbour = 'xyz'; // invalid neighbouring country

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

getCountryWithErrorHandling('abc');
```

- So, now we get another error - which is a 400 error.
- 400 status code means something else, but in any case, the error is not handled.
- So, we now need to go ahead a handle that error over there as well.

```javascript
const getCountryWithErrorHandling = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log('response', response);

      // this is the real error message that we want to see
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      // const neighbour = data[0].borders?.[0];
      const neighbour = 'xyz'; // invalid neighbouring country

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

getCountryWithErrorHandling('abc');
```

- But now, of course, we have duplicate code here, which we shouldn't have.
- So, to keep the code DRY, it might be a good idea to now create a helper function.
- This helper function will wrap up the fetch, the error handling, and also the conversion to JSON, because it's a bit cumbersome to have all these steps all the time.
- Instead, we will encapsulate it into a nice function.
- So, let's do that, and we can call that function `getJSON()`

```javascript
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};
```

- This `getJSON()` function will actually return a promise.
- So, this is then just like any other promise that we can call in our chain.
- So, let's refactor our code accordingly.

```javascript
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryWithErrorHandling = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

// getCountryWithErrorHandling('abc');
```

- So, that's working great but, now there is still one more thing that we need to do, which is to handle the fact that sometimes there might be no neighbour.
- Right now, when there is no neighbouring country, we are simply returning the function.
- But, that doesn't really do anything. So, let's fix that.

```javascript
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryWithErrorHandling = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryWithErrorHandling('usa');
});

// getCountryWithErrorHandling('abc');
getCountryWithErrorHandling('australia');
```

- So now, we get a real error message that actually makes sense to the user.
- Of course, the UI can be a lot better, but this is just for demostration purposes.
- But it does nicely demonstrate, how we can create a real error message that does actually make sense.
- This is super important for any UI that you are building. This is because, in web applications like our example, errors will happen, that is gauranteed so, your application needs to be ready/prepared for it.
- Recap:
  - The big takeaway from this lesson is that whenever we want to create some error that we want to handle in the `catch()` method, all we need to do is to throw and create a new error, just like we did in our example.
  - Of course, we can do that for multiple reasons.
  - In this case, we did it simply because in this situation, no neighbour can be found. So, that is a good reason to display an error message on the UI. Since we display the error message in our `catch()` method, the best way of doing that is to indeed throw an error.
  - Remember that this works because throwing an error inside a `then()` method will immediately reject the promise and rejected promises travel down the chain until it is eventually caught somewhere - in our case, it is the `catch()` method.
  - So, when working with real applications in the real-world, make sure to keep this technique in mind, because it is really important.

### Asynchronous Behind the Scenes: The Event Loop

- We learned what AJAX and APIs are. We used a bunch of asynchronous code already and we learned all about promises.
- But, what's missing is to finally understand how all of it really works behind the scenes of JavaScript. So, let's find that out.
- To start, let's quickly review the JavaScript runtime that we talked about way back in the course, just to make sure that the rest of this lesson will make sense.

#### Review: JavaScript Runtime

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/d6593478-3b23-46df-a331-9e247384922a)
- A JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code.
- The heart of every JS runtime is the engine - this is where code is actually executed and where objects are stored in memory. So, these two things happen in the call stack and in the heap.
- It is important to note here that JavaScript only has one thread of execution.
- So, it can only do one thing at a time. There is absolutely no multi-tasking happening in JavaScript itself.
- Now, other languages like Java can execute multiple pieces of code at the same time, but not JavaScript.
- Next, we have the web APIs environment. These are some APIs provided to the engine, but they are not actually a part of the JavaScript language itself. These are things like the DOM, timers, fetch API, geolocation API, etc.
- Next up, there is the callback queue. It is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred.
- Finally, whenever the call stack is empty, the event loop takes callbacks from the callback queue and puts them into the call stack so that they can be executed.
- So, the event loop is the essential piece that makes asynchronous behavior possible in JavaScript. It is the reason why we can have a non-blocking concurrency model in JavaScript.

> [!NOTE]
>
> A concurrency model is simply how a language handles multiple things happening at the same time.

- But, how does this non-blocking concurrency actually work? and why is the event loop so important? Let's find out.

#### How Asynchronous JavaScript Works Behind The Scenes

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/bcd1e338-af0c-4406-8b4a-0107c5d27365)
- Let's focus on the essential parts of the runtime here. That's the call stack, the event loop, the web APIs, and the callback queue.
- So, as you know by now, a JavaScript engine is built around the idea of a single thread.
- But if there is only one thread of execution in the engine then how can asynchronous code be executed in a non-blocking way?
- That is the question to which we will answer in this lesson.
- Essentially, you will learn how the JS concurrency model really works behind the scenes, using all the parts of the JavaScript runtime that you already know.
- As always, we will do this by looking at a real code example.

```javascript
el = document.querySelector('img');
el.src = 'dog.jpg';
el.addEventListener('load', () => {
  el.classList.add('fadeIn');
});

fetch('https://someurl.com/api').then(res => console.log(res));

// More code...
```

- Let's go through the code line by line.
- However, you already know how the call stack works so, it is best that you focus more on the code and on the web APIs and callback queue.
- Let's start by selecting the image element and in the next line, we set the `src` attribute of that image to "dog.jpg".
- And as we learned before, this will now start to load this image asynchronously in the background.
- But this time, we can actually understand what that mysterious background actually is.
- So, as you already know, everything related to the DOM is not really a part of JS, but of the web APIs.
- So, it is in a web APIs environment where the asynchronous tasks related to the DOM will run.
- In fact, the same is true for timers, AJAX calls, and really all other asynchronous tasks.
- So, again, these asynchronous tasks will all run in the web API environment of the browser.
- If the image would be loading in a synchronous way, it would be doing so right in the call stack blocking the execution of the rest of the code.
- But, as we already learned, that would be terrible.
- That's why loading images in JavaScript is asynchronous.
- So, it does not happen in the call stack i.e. not in the main thread of the execution, but reall in the web APIs environment, as mentioned before.
- If we want to do something after the image has finished loading, then we need to listen to the `load` event.
- So, that's exactly what we do in the next line of code.
- There we attach an event listener to the `load` event of that image and pass a callback function as always.
- In practice, this means to register the callback in the web APIs environment, exactly where the image is loading.
- ![gif](https://github.com/bhoamikhona/javascript/assets/50435319/84e96069-a3f0-4427-9f21-aa9eaa11fe9e)
- And the callback will stay there until the `load` event is emitted.
- So, we are handling asynchronous behavior in the web APIs environment with a callback, just as we learned before.
- Anyway, let's go back to the code.
- In the next line, we make an AJAX call using the fetch API.
- And as always, the asynchronous fetch operation will happen in ther web APIs environment.
- That's because, if we were do it in the call stack then we would be blocking the call stack and create a huge lag in our application.
- Finally, we use the `then()` method on the promise returned by the `fetch()` function.
- This will also register a callback in the web API environment so that we can react to the future resolved value of the promise.
- So, this callback is associated with a promise that is fetching the data from the API, and that's going to be important later on.
- With this, we have now executed all the top level code i.e. all the code that is not inside any callback function in a synchronous way.
- We also have the image loading in the background and some data being fetched from an API.
- So, now it is time for this to get really interesting.
- Let's say the image has finished loading and therefore the `load` event is emitted on that image.
- What happens next, is that the callback for this event is put into the callback queue.
- The callback queue is basically an ordered list of all the callback functions that are in line to be executed.
- You can think of this callback queue, as a todo list that you would write for yourself with all the tasks that you have to complete.
- So, the callback queue is also a todo list of a kind, but with tasks that the call stack will eventually have to complete.
- In this example, there are no other callbacks in the queue yet, but there could be, of course.
- So, if there were already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue, and there it would sit patiently for its turn to finally run. This actually has big implications.
- So, imagine that you set a timers for 5 seconds.
- So, after 5 seconds that timer's callback will be put on the callback queue.
- Let's say that there were already other callbacks waiting, and that it took 1 second to run all of those callbacks.
- Then, in that case, your timers callback would only run after 6 seconds and not 5.
- So, these 6 seconds are the 5 seconds that passed for the timer, plus the one second that it took to run all the other callbacks that were already waiting in line in front of your timer.
- This means that the timers duration that you define is not a guarantee.
- The only guarantee is that the timers callback will not run before 5 seconds, but it might very well run after 5 seconds have passed.
- So, it all depends on the state of the callback queue and also, another queue that we are going to learn about in a second.
- Another thing that is important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses, etc.
- We learned before that DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks.
- So, if a click happens on a button with `addEventListener()` then the same thing will happen that we illustrated above for the asynchronous `load` event.
- Anyway, now it is finally time to learn about the event loop.
- So, here is what the event loop does:
- It looks into the call stack and determines whether it is empty or not, except for the global context.
- Then, if the stack is indeed empty, which means that there is currently no code being executed, then it will take the first callback from the callback queue and put it on the call stack to be executed.
- This is called <ins>an event loop tick</ins>.
- So, each time the event loop takes a callback from the callback queue, we say that there was an event loop tick.
- So, as we can see here, the event loop has the extremely important task of doing coordination between the call stack and the callbacks in the callback queue.
- So, the event loop is basically who decides exactly when each callback is executed.
- We can also say that the event loops does the orchestration of the entire JS runtime.
- Another thing that becomes clear from this whole explanation is tha the JS language itself has actually no sense of time.
- That's because everything that is asynchronous does not happen in engine.
- It's the runtime who manages all the asynchronous behavior and it is the event loop who decides which code will be executed next.
- But the engine itself simply executes whatever code it has been given.
- This is of course a lot to take in so, let's try to recap here.

#### Recap

- The image started loading asynchronously in the web APIs' environment and not in the call stack.
- We then used an `addEventListener()` to attach a callback function to the `load` event for the image.
- This callback is basically our asynchronous code. It is code that we deferred into the future because we only want to execute it once the image has loaded.
- In the meantime, the rest of the code kept running.
- Now, the `addEventListener()` did not put the callback directly in the callback queue.
- It simply registered the callback, which then kept waiting in the web APIs' environment until the `load` event was fired off.
- Only then the environment put the callback in the queue.
- While in the queue, the callback kept waiting for the event loop to pick it up and put it in the call stack.
- This happened as soon as the callback was first in line and the call stack was empty.
- That's it.
- All this happened so that the image did not have to load in the call stack, but in the background in a non-blcoking way.
- In a nutshell, the web APIs' environment, the callback queue, and the event loop, all together make it possible that asynchronous code can be executed in a non-blocking way event with only one thread of execution in the engine.

#### Microtasks and Microtasks Queue

- That was already a lot to understand, but we are not done yet.
- We still have the `fetch()` function getting data from the AJAX call in the background.
- This is basically happening with a promise.
- With promises, things work in a slightly different way, which is why we included the promise example as well.
- Let's say that the data has finally arrived and the fetch is done.
- Now, callbacks related to promises like the one in our example, actually do not go into the callback queue.
- So, again, the callback in the `then()` method which is coming from a promise will not be moved into the callback queue.
- Instead, callbacks of promises have a special queue for themselves, which is the so-called <ins>microtasks queue</ins>.
- The special thing about the microtasks queue is that it basically has priority over the callback queue.
- So, at the end of an event loop tick i.e. after a callback has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue.
- If there are, it will run all of them before it will run any more callbacks from the regular callback queue.
- By the way, we call these callbacks from promises, <ins>microtasks</ins>. Therefore the name microtasks queue.
- There are actually other microtasks but, that's not relevant here.
- Going back to our example, currently, we actually do have a microtask sitting in the microtasks queue, the call stack is also empty and therefore, the event loop will not take this callback and put it in the call stack just like it does with callbacks from the callback queue.
- It doesn't matter if the callback queue is empty or not.
- This would work the exact same way even if there were some callbacks in the callback queue.
- Again, that's because microtasks always have priority.
- In practice, this means that microtasks can basically cut in line before all other regular callbacks.
- Now, if one microtask adds a new microtask then that new microtask is also executed before any callbacks from the callback queue.
- This means that the microtask queue can essentiall starve the callback queue.
- Because if we add more and more microtasks, then callbacks in the callback queue can never execute.
- This is usually never a problem but, it is good to know since it is still a possibility. This could also be an interview question. If so, you now know the answer.
- Anyway, as you can hopefully see - the idea of running asynchronous code with regular callbacks and with microtasks coming from promises is very similar.
- The only difference is that they go into different queues and that the event loop gives microtasks priority over regular callbacks.
- That's finally it. That's all you need to know about how asynchronous JavaScript really works behind the scenes.
- This knowledge can be extremely helpful and valuable to you because you are going to be way more confident writing asynchronous code now.
- Also, you will ace any job interview question about asynchronous JS.
- Actually, a lot of JS developers don't know anything about this. So, this knowledge will put you in the top 10% or even top 5% of JS developers. That's just amazing on itself.
- In the next lesson, we will see all of this in practice.

### The Event Loop in Practice

- Let's now see some of the things that we learned in the previous lesson, in practice.
- Let's build an extremely simple example. We will start by logging a start string to the console.

```javascript
console.log('Test start');
```

- Then create a `setTimeout()` timer, which will again log something to the console after exactly 0 seconds.
- Basically, it is a timer whose callback function should be called after exactly 0 seconds.

```javascript
console.log('Test start');

// this timer will be put on the callback queue afte 0 seconds
setTimeout(() => console.log(`0 sec timer`), 0);
```

- So, what this means is that after 0 seconds, the callback function of the `setTimeout()` will be put on the callback queue.
- Next up, let's build a promise that will resolve immediately (this is something that we will learn in the next lesson, in detail). For now, just type the code.
- `Promise.resolve()` allows us to create a promise that is immediately resolved. So, one that immediately has a success value.
- So, its fulfilled/success value will be what we pass within `Promise.resolve()` function.
- We can then handle that resolved promise using the `then()` method, where we will simply log the success value to the console.

```javascript
console.log('Test start');

// this timer will be put on the callback queue afte 0 seconds
setTimeout(() => console.log(`0 sec timer`), 0);

// building a promise that will resolve immediately - will learn about this in detail in the next lesson
Promise.resolve('Resolved promise 1').then(res => console.log(res));
```

- Now just to finish, let's just log another string.

```javascript
console.log('Test start');

// this timer will be put on the callback queue afte 0 seconds
setTimeout(() => console.log(`0 sec timer`), 0);

// building a promise that will resolve immediately - will learn about this in detail in the next lesson
Promise.resolve('Resolved promise 1').then(res => console.log(res));

console.log(`Test end`);
```

- For now, that's it.
- So in what order do you think that these 4 message that we have in our code, will be logged to the console?
- Let's think about it before we check the result.
- The first two message that are going to be printed on the console, should be pretty obvious, that's because we already know that any top level code i.e. code outside of any callback will run first.
- So, of course, the first two logs will come from the synchronous `console.log()` i.e. "Test start" and "Test end".
- But now, between the timer and the resolved promise, it might be a little bit trickier.
- Both the timer and the promise will finish at the exact same time, which is right after 0 seconds.
- The timer will finish in 0 seconds, because that's the amount of time we mentioned.
- And the promise because we told it to immediately become resolved.
- Therefore, they will both finish at the exact same time.
- So, which one do you think will be handled first? or in other words, which of these two callbacks will be executed first?
- Well, the timer appears first in the code and so it kind of finished first. So, its callback will be put in the callback queue first.
- But, does that mean that the callback of the timer will be executed first?
- No. This is because of the microtasks queue.
- The callback of the resolved promise will be put on the microtasks queue; and this microtasks queue, as you learned previously, has priority over the callback queue.
- So, after this whole code runs, we will have one callback in the callback queue and one in microtasks queue.
- Therefore, the one from the microtasks queue should be executed first.
- Therefore, the first message to appear between the timer and resolved promise 1 will be the one from the resolved promise 1.
- So, the order in which they should appear is first the start string, then the end string, then the string from resolved promise, and finally the string from the timer.
- So, now if we look at the console, the result is as expected.
- This proves what we learned in the last lesson.
- Now, remember that the implication of the fact that microtasks have priority over regular callbacks is that if one of the microtasks takes a long time to run, then the timer will actually be delayed and not run after the 0 seconds that we specified in the `setTimeout()` function.
- Instead, it will run a little bit later just after the microtask is actually done with its work.
- So, to finish this lesson, let's actually simulate what we just said.
- To do that, let's create another promise that will immediately be resolved. Of course we want to print something to the console so that we know when it got executed. But before we log that, we actually want its callback function in the `then()` method to have a really heavy task, which should take a lot of time. To do that, let's take the help of a `for` loop by making it loop over a large number.

```javascript
console.log('Test start');

// this timer will be put on the callback queue afte 0 seconds
setTimeout(() => console.log(`0 sec timer`), 0);

// building a promise that will resolve immediately - will learn about this in detail in the next lesson
Promise.resolve('Resolved promise 1').then(res => console.log(res));

// long running task in the promise - to demonstrate that the timer really doesn't run after 0 seconds
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log(`Test end`);
```

- So this line of code: `for (let i = 0; i < 10000000000; i++) {}` simulates that the callback function takes a really long time.
- So, really just the microtask takes a long time.
- It is not the asynchronous task itself.
- The promise itself will be resolved immediately but then, the microtask that it contains i.e. the one that it puts on the microtasks queue - that's the one that will take a long time.
- So, by doing that, we can see that the callbacks in the callback queue, just like our timer, will indeed be delayed and not run after 0 seconds.
- So, now if we look in the console, we will see that "Resolved promise 2" took a long time to appear.
- And only after the "Resolved promise 2" was logged, the 0 second timer was logged onto the console.
- So, this is an actual proof that the 0 seconds that we have on the `setTimeout()` is not a guarantee. That is exactly what we wanted to see.
- This means that you cannot do high precision things using JS timers. Just keep that in mind, whenever you are working with promises.
- That's it for this lesson.
- Now we are ready to go back to some more practical aspects of asynchronous JS, and that will be to create promises from scratch in the next lesson.

### Building a Simple Promise

- At this point of the section, you know all about consuming promises but we have never actually built our own promise. So, let's do that in this lesson.
- Let's go back to our lottery example from the [Promises and the Fetch API](#promises-and-the-fetch-api) lesson and basically simulate a lottery using a promise.
- Remember that in that example, a fulfilled promise means to win the lottery while the rejected promise means to lose.
- So, let's get to work and we create a new promise using the `Promise()` constructor, just like many other built-in objects.

```javascript
new Promise();
```

- This means that promises are essentially just a special kind of object in JS.
- The promise constructor takes exactly one argument and that is the so-called <ins>executor function</ins>.

```javascript
// passing in an executor function inside the Promise() constructor
new Promise(function () {});
```

- As soon as the promise constructor runs, it will automatically execute the executor function that we pass in.
- As it executes the executor function, it will do so by passing in two other arguments.
- Thos arguments are the resole and reject functions.

```javascript
// passing in an executor function inside the Promise() constructor
new Promise(function (resolve, reject) {});
```

- We will use the `resolve()` and `reject()` functions in a second. For now, let's actually build the executor function.
- Also, we should store the result of `new Promise()` in some variable.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {});
```

- So, all of this: `new Promise(function (resolve, reject) {})` will create a new promise that we are going to store into the variable `lotteryPromise`.
- So, it is just the `fetch()` function, which also creates a new promise.
- Now the executor function that we specified in the `Promise()` constructor function, is the function which will contain the asynchronous behavior that we are trying to handle with the promise.
- So, this executor function should eventually produce a result value that is basically going to be the future value of the promise.
- So, let's do exactly that, in the executor function - starting with a simplified version.
- In our lottery example, let's say that we win in 50% of the cases and lose in the other 50%.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  /**
   * Here we will generate a random number between 0 and 1. If the
   * number is greater than 0.5 then we want to call the resolve()
   * function that we pass into this function.
   */
  if (Math.random() >= 0.5) {
    /**
     * In this situation, we say that we win the lottery.
     *
     * This means a fulfilled promise.
     *
     * In order to set the promise as fulfilled, we use the resolve()
     * function.
     *
     * Basically, calling the resolve() function like this, will make
     * the promise as fulfilled.
     *
     * We can also call it a resolved promise, that's the reason why this
     * method is called resolve.
     */
    resolve();
  }
});
```

- In the `resolve()` function, we pass the fulfilled value of the promise so that it can later be consumed with the `then()` method.
- So, of course, we are going to handle the result of this promise just like we handled any other promise with the `then()` method.
- In this case, let's simply pass in a string.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  /**
   * Here we will generate a random number between 0 and 1. If the
   * number is greater than 0.5 then we want to call the resolve()
   * function that we pass into this function.
   */
  if (Math.random() >= 0.5) {
    /**
     * In this situation, we say that we win the lottery.
     *
     * This means a fulfilled promise.
     *
     * In order to set the promise as fulfilled, we use the resolve()
     * function.
     *
     * Basically, calling the resolve() function like this, will make
     * the promise as fulfilled.
     *
     * We can also call it a resolved promise, that's the reason why this
     * method is called resolve.
     */
    resolve(`You WIN! 💰`);
  }
});
```

- Now let's handle the opposite case, where we basically want to make the promise as rejected.
- As you can imagine, for that we can call the `reject()` function.
- Then into the `reject()` function, we pass in the error message that we later want to be able to catch in the catch handler.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  /**
   * Here we will generate a random number between 0 and 1. If the
   * number is greater than 0.5 then we want to call the resolve()
   * function that we pass into this function.
   */
  if (Math.random() >= 0.5) {
    /**
     * In this situation, we say that we win the lottery.
     *
     * This means a fulfilled promise.
     *
     * In order to set the promise as fulfilled, we use the resolve()
     * function.
     *
     * Basically, calling the resolve() function like this, will make
     * the promise as fulfilled.
     *
     * We can also call it a resolved promise, that's the reason why this
     * method is called resolve.
     */
    resolve(`You WIN! 💰`);
  } else {
    reject(`You lost your money 💩`);
  }
});
```

- So, you see, this promise is either going to be moved to the fulfilled state or the rejected state.
- So, we always need to make sure that the promise ends up in one of the two states.
- Now it is time to actually try it out by consuming the promise that we just built.
- To consume the promise, the `lotteryPromise` is going to be a promise object so, we can always call the `then()` method on it, like so:

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  /**
   * Here we will generate a random number between 0 and 1. If the
   * number is greater than 0.5 then we want to call the resolve()
   * function that we pass into this function.
   */
  if (Math.random() >= 0.5) {
    /**
     * In this situation, we say that we win the lottery.
     *
     * This means a fulfilled promise.
     *
     * In order to set the promise as fulfilled, we use the resolve()
     * function.
     *
     * Basically, calling the resolve() function like this, will make
     * the promise as fulfilled.
     *
     * We can also call it a resolved promise, that's the reason why this
     * method is called resolve.
     */
    resolve(`You WIN! 💰`);
  } else {
    reject(`You lost your money 💩`);
  }
});

// consuming the lotterPromise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

- That's it.
- So now, if the promise is fulfilled, we will get the string "You WIN! 💰" and if it is rejected, we will get the string "You lost your money 💩" logged onto the console.
- This is amazing. However, right now, this is not asynchronous.
- So, let's actually simulate the lottery draw by adding a simple timer.
- This timer will then simulate the time that is passed between buying the lottery ticket and actually getting the result.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 🔮`);
  setTimeout(function () {
    /**
     * Here we will generate a random number between 0 and 1. If the
     * number is greater than 0.5 then we want to call the resolve()
     * function that we pass into this function.
     */
    if (Math.random() >= 0.5) {
      /**
       * In this situation, we say that we win the lottery.
       *
       * This means a fulfilled promise.
       *
       * In order to set the promise as fulfilled, we use the resolve()
       * function.
       *
       * Basically, calling the resolve() function like this, will make
       * the promise as fulfilled.
       *
       * We can also call it a resolved promise, that's the reason why this
       * method is called resolve.
       */
      resolve(`You WIN! 💰`);
    } else {
      reject(`You lost your money 💩`);
    }
  }, 2000);
});

// consuming the lotterPromise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

- Another thing that we can do is to instead of passing just a string in the rejected promise, we can also create a new error object.
- So basically creating a real error.

```javascript
// passing in an executor function inside the Promise() constructor
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 🔮`);
  setTimeout(function () {
    /**
     * Here we will generate a random number between 0 and 1. If the
     * number is greater than 0.5 then we want to call the resolve()
     * function that we pass into this function.
     */
    if (Math.random() >= 0.5) {
      /**
       * In this situation, we say that we win the lottery.
       *
       * This means a fulfilled promise.
       *
       * In order to set the promise as fulfilled, we use the resolve()
       * function.
       *
       * Basically, calling the resolve() function like this, will make
       * the promise as fulfilled.
       *
       * We can also call it a resolved promise, that's the reason why this
       * method is called resolve.
       */
      resolve(`You WIN! 💰`);
    } else {
      reject(new Error(`You lost your money 💩`));
    }
  }, 2000);
});

// consuming the lotterPromise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

- With this we made the whole promise make a little bit more sense because now, by using the timer, we actually encapsulate some asynchronous behavior into this promise.
- That's the whole point of promises in the first place.
- Now if we look in the console, we immediately get the "lottery draw is happening" string logged, and then after 2 seconds, we either win the lottery or lose.
- But if we now lose, we see that the simple string is now an actual error; and it also tells us where it is coming from.
- So indeed, actually creating a new error object is a bit better.
- So, this is how we encapsulate any asynchronous behavior into a promise.
- In practice, most of the time, all we actually do is to consume promises; and we usually only build promises to basically wrap old callback based functions into promises.
- This is a process that we call <ins>promisifying</ins>.
- Basically, promisifying means to convert callback based asynchronous behavior to promise based.
- Let's see that in action.
- So, what we are going to do is to actually promisify the `setTimeout()` function and create a wait function.
- So, let's create a function called `wait` and this function will take in a number of seconds.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {};
```

- Inside of this function we will actually create and return the promise - usually, that's what we do i.e. creating a function and then, from there returning a promise.
- So, this will then encapsulate the asynchronous operation even further.
- Essentially, that's also what the `fetch()` function does.
- It is a function that returns a promise, and so that is exactly what we will do with this `wait()` function.
- In a sense, this is a more real-world example.
- As mentioned before, this `wait()` function will return a new promise.
- This new promise will take an executor function. But in this case, we won't need the `reject()` function because it is actually impossible for the timer to fail.
- Therefore, we will never mark this promise as rejected. Hence, we won't specify the `reject()` function in the executor function.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {});
};
```

- All we have to do now is to call the `setTimeout()` in the executor function, and within the `setTimeout()`, we will pass the `resolve` function.
- In this case, we are not even going to pass any resolved value into the `resolve()` function because that's not mandatory.
- In the case of the timer, it is also not really necessary to wait for some value.
- In this case, all we want to do is to make our code wait. So, no resolved values are needed.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
```

- That's it.
- Now, we could improve this even further or just make it smaller by using arrow functions. But for now, we will simply consume this promise.
- To consume, let's call our wait function.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2);
```

- This will not wait for 2 seconds, and after 2 seconds, it will resolve.
- Then, we can handle that resolved value with `then()` method.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// since we are not going to get any resolved value, we can leave the parameters in the then() method empty.
wait(2).then(() => {
  // here in this callback, we can run any code that we want to be
  // executed after 2 seconds.
  console.log(`I waited for 2 seconds`);

  // we have to return a new promise here, just like before
  return wait(1);
});
```

- So, this is exactly what we did before when we wanted to chain two sequential AJAX calls using the `fetch()` function.
- So, in the result of the first `fetch()`, we would create a new `fetch()` and return it. So, that's what we are doing here.
- Therefore, all of this returns a new promise, and then we can one more time handle that.

```javascript
// promisifying setTimeout()
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// since we are not going to get any resolved value, we can leave the parameters in the then() method empty.
wait(2).then(() => {
  // here in this callback, we can run any code that we want to be
  // executed after 2 seconds.
  console.log(`I waited for 2 seconds`);

  // we have to return a new promise here, just like before
  return wait(1).then(() => console.log(`I waited for 1 second`));
});
```

- With this, we once again have a nice chain of asynchronous behavior that happens nicely in a sequence and all without the callback hell.
- To compare:

```javascript
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/** ------------------------------ VS ------------------------------ **/

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
  });
```

- As you can see, we not longer have an ugly and difficult to understand callback hell.
- Instead, we have a nice sequence of asynchronous behavior.
- Finally, there is also a way to very easily create a fulfilled or rejected promise immediately.

```javascript
// immediately resolved promise
Promise.resolve();
```

- `Promise.resolve()` is a static method on the `Promise()` constructor.
- We can then pass in the resolved value in it.

```javascript
// immediately resolved promise
Promise.resolve('abc').then(x => console.log(x));
```

- To immediately reject the promise, we use `reject()`, like so:

```javascript
// immediately rejected promise
// here we didn't use then() because there will be no resolved value
// anyway so, we directly use catch()
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
```

- So, this is how we build our own promises and how we promisify a very simple callback based on asynchronous behavior function such as setTimeout.

### Promisifying The Geolocation API

- Let's now keep promisifying things and this time around, we are going to promisify the geolocation API.
- This is going to be really cool because it will allow us to take the small app that we built in the last coding challenge to the next level.
- We used the geolocation API before, and so, let's start by reviewing how it works.
- Remember, we use `navigator.geolocation.getCurrentPosition()`, and then this function accepts 2 callbacks, where the first one is for success and the second one is for error.
- The first callback function gets access to the `Position` object so, let's pass that as an argument to the first callback function and then simply log that to the console, like so:

```javascript
navigator.geolocation.getCurrentPosition(position => console.log(position));
```

- Now let's create the second callback with the error.

```javascript
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);
```

- Now, just like we learned in the mapty app, JS will ask for permission to figure out our location.
- When we allow, then at some point JS will figure out the location and then get the data back which we log onto the console.
- This is actually asynchronous behavior in exactly the way that we have been talking about.
- The code is not blocked, which we can check by logging something after `getCurrentPosition()`

```javascript
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);

console.log('Getting position');
```

- Now if we look at the console, the "Getting position" string is logged first and the actual data arrives a bit later - since that was offloaded to the background i.e. the web API environment.
- So, this is very clearly a callback based API. We have to pass in different callbacks and so, this is another great opportunity to promisify a callback based API, to a promise based API.
- So, let's do that, and it is actually pretty simple.
- Let's create a function just like we did with the `wait()` function.
- This function requires no inputs but, it will return a new promise which we can handle later.

```javascript
navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.error(err)
);

console.log('Getting position');

const getPosition = function () {
  return new Promise();
};
```

- This `Promise()` constructor function will take an executor function which gets access to resolve function and reject function that we can use to mark the promise as either rejected for fulfilled.
- Within the executor function, we can grab the `getCurrentPosition()` function and put it inside, like so:

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.error(err)
    );
  });
};
```

- Now, we need to change what happens in each of the callback functions of `getCurrentPosition()`.
- For the success callback function of the `getCurrentPosition()` function, we want to resolve the promise that we get i.e. we want to mark it as fulfilled.
- Therefore, we call the `resolve()` function and pass in the position object, since that is the actual fulfilled value that we want to get from this promise.
- That's the whole reason of using this `getPosition()` function in the first place i.e. to get access to the current position.

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => console.error(err)
    );
  });
};
```

- In the error callback, we do the same but this time we call `reject()` instead of `resolve()`.

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};
```

- This is going to work just fine but, we can make it even simpler.
- This is because if `getCurrentPosition()` automatically calls the success and error callback functions, and if it also automatically passes in the position then, we can simply do this:

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
```

- This is exactly the same as what we had before.
- Before we manually specified the callback but, all we did was to take the position and pass it down into resolve().
- But now, that happens automatically.
- Now `resolve()` itself is the callback function, which will get called with the position. The same with `reject()`.
- Now, let's call this function.

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
```

- For now, we don't need the `catch()` block.
- Now, if we check the console, it works as expected.
- We successfully promisifies the geolocation API to a promise based API.
- But now, let's take it to the next level.
- In the last coding challenge, we built a function which received GPS coordinates as an input, and then rendered the corresponding country.
- Now we got these coordinates via geolocation so, we don't even have to pass in any coordinates into that function.

```javascript
// getting country when received coordinates
const whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data?.features?.[0]?.properties?.address?.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data.pop());
      countriesContainer.style.opacity = 1;
    })
    .catch(err => console.error(`${err.message} 💥💥💥`));
};
```

- In this `whereAmI()` function, we pass in latitude and longitude, then we use reverse geocoding which gave us the country that those coordinates belong to and based on that country, we could get all the data about the country and then display it on our web page.
- But now, since we have our `getPosition()` functiom, we actually no longer need to even pass in these coordinates and so, now we are going to be able to build a function that will tell us where we are in the world, simply based on the geolocation of our device.
- So, in the `whereAmI()` function, we will now start by getting the position.

```javascript
console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data?.features?.[0]?.properties?.address?.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data.pop());
      countriesContainer.style.opacity = 1;
    })
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

btn.addEventListener('click', whereAmI);
```

- It works! I got the country that I am currently in, which is indeed India - and all of that was simply done using geolocation.
- So, now we have the ability of basically displaying the flag of a country simply based on geolocation on any device.
- Now, just imagine that you would have to use all of these asynchronous operations using callback functions - that would literally be hell.
- Therefore the name, callback hell.
- But with what we have here, it is a really nice flat chain of promises that's easy to handle and manage.
- Anyway, with this, we saw that we can really promisify all kinds of asynchronous stuff in JS.
- For example, we could also promisify the old XML HTTP request function that we used in the beginning to make AJAX calls, or also, we could promisify the image loading example that we have seen a couple of times in our slides - and that's what we are going to do in the next coding challenge.

### Consuming Promises with Async/Await

- Now that you are comfortable with consuming and building promises, let's turn our attention back to actually consuming promises.
- That's because in ES 2017, there is now an even better and easier way to consume promises, which is called async/await.
- Let's see how it works.
- In this lesson we will basically be re-creating the `whereAmI()` function that we have been building but, this time using asyc/await.
- We start by creating a special type of function, which is an async function. We do that by simply adding the keyword `async` before the keyword `function`, like so:

```javascript
const whereAmIAsync = async function (country) {};
```

- This function is now an async function. An async function meaning an asynchronous function. So, this function will basically keep running in the background while performing the code that is inside of it.
- Then, when the function is done, it will automatically return a promise. More on that in the next lesson.
- For now, what's important is that inside an async function, we can have one or more await statements.
- `await` keyword is used before a promise.

```javascript
const whereAmIAsync = async function (country) {
  // this will return a promise
  await fetch(`https://restcountries.com/v3.1/name/${country}`);
};
```

- In an `async` function, we can use the `await` keyword to basically wait for the result of the promise that is right next to it.
- So basically, `await` will stop the code execution of the function at the line where it is mentioned, until the promise is fulfilled i.e. until the data is fetched.
- Now you might think, isn't stopping the code, blocking the execution?
- That's a really good question however, the answer is no.
- Because stopping execution in an async function, which is what we have here, is actually not a problem.
- This is because this function is running asynchronously in the background.
- Therefore, it is not blocking the main thread of execution i.e. it is not blocking the call stack.
- In fact, that's what's so special about a async/await.
- So, it's the fact that it makes our code look like a regular synchronous code while behind the scenes, everything is in fact, asynchronous.
- Anyway, as soon as the promise next to the `await` keyword is resolved, the value of the whole expression `await fetch(`https://restcountries.com/v3.1/name/${country}`);` is going to be resolved value of the promise. So, we can simply store it into a variable.

```javascript
const whereAmIAsync = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
};
```

- Just to see that this function is indeed asynchronous, let's log something to the console after we call it.

```javascript
const whereAmIAsync = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  console.log(res);
};

whereAmIAsync('india');
console.log('FIRST');
```

- "FIRST" will be logged first because `whereAmIAsync()` is an async function.
- So, once the async function is called, it is then loaded off to the background. So the `fetch()` function inside it will be running in the background, without blocking the main thread.
- Now if the check the console, we indeed get "FIRST" printed first and then we get the response.
- But this time, we got the response in a nice and elegant way.
- So, you see, by using async/await or asynchronous function, our code really looks and feels like synchronous code.
- We can simply "await" until the value of the promise is returned, and then assign that value to a variable - and that is something that is impossible before.
- Before we had to mess with callback functions and that was true in callback hell but, also by consuming promises with the `then()` method.
- But now, with async/await, that is just completely gone.
- So, now this looks like a regular synchronous code where we simply assign values to a variable; and that makes it so much easier and clean.
- Now, before you use async/await all over the place, you need to first understand that async/await is in fact, simply syntactic sugar over the `then()` method in promises.
- So, behind the scenes we are still using promises.
- We are simply using a different way of consuming them here, in this case.
- So, what we have here is exactly the same as doing it with `then()` and `catch()`.
- Now that we know how async/await works, it is time to actually recreate the, `whereAmI()` function.
- First of all, we need to get the JSON out of the response that we get from the `fetch()` function. To do that, we will have to call `json()` on the response.

```javascript
const whereAmIAsync = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  res.json();
};

whereAmIAsync('india');
console.log('FIRST');
```

- Remember that `json()` itself returns a new promise. So, previously, we would have returned that promise and then chained another `then()` handler.
- But now, this becomes so much easier. All we have to do is use the keyword `await` before using `json()` and then store the result in a variable, like so:

```javascript
const whereAmIAsync = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  console.log(data);
};

whereAmIAsync('india');
console.log('FIRST');
```

- Now if we look in the console, we get the same data as before.
- So, now all we have to do is to render it. We will render it using the `renderCountry()` function that we created in one of the previous lessons.

```javascript
const whereAmIAsync = async function (country) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  const data = await res.json();
  renderCountry(data.pop());
};

whereAmIAsync('india');
console.log('FIRST');
```

- Now if we look at our UI, we will get the country card and all without the chaining of the promises like we had before.
- This is very elegant to simply be able to store the fulfilled promise value immediately into a variable without having to mess with callback functions.
- Now let's finish the function along with all the other functionality as well i.e. with geolocation and reverse geo-coding.
- For that, we will use the `getPosition()` function that we built before.
- Note that async/await is only about consuming promises. The way that we build them is not influenced in any way.

```javascript
const whereAmIAsync = async function (country) {
  // getting position
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // reverse geocoding
  const resGeo = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  );
  const dataGeo = await resGeo.json();

  // fetching country
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
  );
  const data = await res.json();
  renderCountry(data.pop());
  countriesContainer.style.opacity = 1;
};

whereAmIAsync('india');
console.log('FIRST');
```

- Now we get the data of the country that we are currently situated in.
- Of course we don't need to pass the name of the country any more so, let's get rid of that.

```javascript
const whereAmIAsync = async function () {
  // getting position
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // reverse geocoding
  const resGeo = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  );
  const dataGeo = await resGeo.json();

  // fetching country
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
  );
  const data = await res.json();
  renderCountry(data.pop());
  countriesContainer.style.opacity = 1;
};

whereAmIAsync();
console.log('FIRST');
```

- So we now have all of this in one nice async function that runs behind the scenes until everything in it is finished.
- We are awaiting 5 promises in our `whereAmIAsync()` function in a very easy way; and the code looks and feels a lot more normal, like synchronous code.
- So, this async/await feature was a magnificient addition to the JS language.
- Just keep in mind that async/await is basically a syntactic sugar over consuming promises.
- So, it is a bit like classes in JS, which also hides the true nature of how things work behind the scenes.
- But it is not a problem as long as you know how promises and asynchronous JS actually work behind the scenes.
- Also async/await is actually used together with the more traditional `then()` method of consuming promises a lot, as we will see in the next lesson.
- But as of right now, if we refresh our web page too fast, we get the 404 and 403 errors like ebfore.
- That is where our code falls apart because we have a cascade of errors and nothing works anymore.
- The reason for all of those errors is because right now we don't have any error handling in our async/await code.
- So, let's fix that in the next lesson.

### Error Handling With try...catch

- In this lesson, we are going to learn how error handling works with async/await.
- With async/await, we can't use the `catch()` method that we used before, because we can't really attach it anywhere.
- Instead, we use something called a try...catch statement.
- The try...catch statement is actually used in regular JS as well. So, it has been in the language since the beginning.
- So, try...catch has nothing to do with async/await but, we can still use it to catch errors in async functions.
- But, before we do that, let's look at a more simple example, just to see how try...catch works.
- We can basically wrap all our code in a `try` block, and JS will try to execute this code just as a normal code.
- To see how try...catch works, first lets create a `const` and a `let` variable and then "accidentally" try to re-assign the `const` variable when our goal really was to re-assign `let` variable.

```javascript
let y = 1;
const x = 2;
x = 3;
```

- This gives us an error since we are trying to re-assign the `const` variable.
- Now let's create a try...catch statement and put the above code inside the `try` block.
- NOTE that the `catch` block will have access to whatever error occured inside the `try` block. So, we can do something with this error.
- For now, we can simply log the error message to the console.

```javascript
// error from catch block since `const` variable re-assigned
try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.error(err.message);
}
```

- Now if we check the console, we get the error as expected but, if we expand it, it tells us which line that error is coming from and that line happens to be the one inside out `catch` block.
- So, the script does no longer die in this case, instead we can simply catch the error in the `catch` block and handle it accordingly.
- Of course if there was no error at all, i.e. we re-assigned the `let` variable as we wanted to, then there won't be an error coming from that `catch` block.

```javascript
// no error since `let` variable re-assigned
try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  console.error(err.message);
}
```

- Anyway, this is just a stupid syntax error and we are not going to use try...catch to find mistakes that we make in our code.
- So, let's now use try...catch for something more useful, which is to actually handle real errors in async functions.
- Let's wrap all of our code from the `whereAmIAsync()` (renamed to `whereAmITry()`) function into a `try` block.
- And in the catch block, we can simply log the error to the console for now.

```javascript
const whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );
    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );
    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

whereAmITry();
```

- So, now if you see, the code still works the same.
- Now if we try to refresh the page very fast we will get the 404 error which is, the country cannot be found.
- So, at this point, we do have some error handling i.e. we are able to add the error to the UI but, just like before, this error is not really meaningful, because the `fetch()` promise does not reject on a 404 or a 403 error, which was actually the original error that caused everything to collapse.
- 403 error is because we are doing too many requests to the reverse geo-coding API.
- But the solution is simple, because its exactly the same as before.
- All we have to do is to manually create an error and so that error will then be caught in the `catch()` block.
- To create the error, we can do that right after the `fetch()` request and use its `ok` property, just like before.

```javascript
const whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );
    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

whereAmITry();
```

- Now we can do the same thing for getting the country.

```javascript
const whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

whereAmITry();
```

- Now, for the first promise i.e. getting coordinates from the geolocation API, we do not need to throw an error manually. That's because in the case that somethig goes wrong with the geolocation, we already built out promise in a way that it automatically rejects in that case.
- So, in that case, we will then immediately get an error, which will get caught in the `catch` block.
- But as we already know, the same is not true for the promise coming from `fetch()`.
- So, that promise only gets rejected when the user has no internet connection.
- But in the case of the 404 or 403 error, the `fetch()` promise does not reject. Therefore, we do that manually by throwing a new error which will get caught in the `catch` block.
- That is the complete version now of the `async` function, complete witha pretty robust error handling strategy.
- So, please never ignore handling errors, especially when it comes to asynchronous code like the one we have here.
- There is always a lot of stuff that can go wrong, which is why our application needs to be ready to handle that.
- Having said that, in the next lesson, we will dive even deeper into how async functions really work. So, let's get to it.

### Returning Values from Async Functions

- At this point, we have a pretty good idea of how to work with async/await.
- However, there is one important thing missing.
- Right now, it might still be a little unclear what an `async` function actually is and how it works. So, let's fix that.
- To understand what is happening, let's add some `console.log()` around calling the `WhereAmITry()` function.

```javascript
console.log(`1: Will get location`);
whereAmITry();
console.log(`2: Finished getting location`);
```

- If we check the result now, hopefully you will already know what the order of the logs will be.
- Indeed, we get the first log then the second log and then we get all the logs coming from the `async` function.
- That's because it is an async function which runs in the background.
- So, JS immediately moves on to the next line.
- If it was a regular function and there were `console.log()` in the regular function, then that would appear between the first log and the second long.
- But in this case, it is an async function, therefore it runs in the background until the results arrive.
- Now let's say that we wanted to return a string from the `whereAmITry()` function.

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
whereAmITry();
console.log(`2: Finished getting location`);
```

- Now, we want to access that string where we are calling the `whereAmITry()` function.
- If it was a regular function, we would simple store the returning value into a variable (let's call it `city`) and log it to the console like so:

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
const city = whereAmITry();
console.log(city);
console.log(`2: Finished getting location`);
```

- What do you think is going to happen in this case?
- The `city` variable now holds the promise.
- Remember that when we first started to work with async/await, we mentioned that an `async` function always returns a promise.
- So, we just got the proof of that.
- If we think about it, it actually makes sense that we get a promise instead of the value that we are manually trying to return from the function.
- The reason for that is that, at the point of code where we are calling the function, JS has simply no way of knowing yet that there is a string that we want to return because the function is still runing, but it is also not blocking the code where we are calling it.
- Therefore, at the point of code where we are calling the function, JS has no way of knowing what will be returned from the `whereAmITry()` function.
- Therefore, all that this function returns is a promise.
- Now the value that we return from an async function, i.e. the string in our case, will become the fulfilled value of the promise that is returned by the function.
- So, that's important to understand.
- Again, the promise that we see when we log the `city` variable to the console, its fulfilled value is going to be the string that we are returning from the `async` function, as long as there is no error in the function.
- For now, let's assume success.
- Since we know that `whereAmITry()` will return a promise, we also know how we can actually get the data that we want.
- All we have to do is to use `then()` method to get the fulfilled value, like so:

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
// const city = whereAmITry();
// console.log(city);

whereAmITry().then(city => console.log(city));
console.log(`2: Finished getting location`);
```

- Now if we look at the console, we get the result that we wanted.
- With this, we successfully returned a value from the async function.
- We will be able to do a little bit better but for now, let's think about errors.
- If any error occurs in the `try` block, then the `return` statement will never be reached because it will immediately jump to the `catch` block.
- To see it in action, we can change the variable that we are passing into the rest countries fetch request like so:

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.countryyyyyyy}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
// const city = whereAmITry();
// console.log(city);

whereAmITry().then(city => console.log(city));
console.log(`2: Finished getting location`);
```

- Now we get a 404 error for country not being found.
- Indeed, now nothing was returned from the function hence, we get `undefined` in the console.
- What's interesting here is that the log still worked. The `console.log()` that logged `undefined` is still running.
- This means that the `then()` method on `whereAmITry().then(city => console.log(city));` was still called, which in turn means that the promise returned by `whereAmITry()` was fulfilled and not rejected.
- So, even though there was an error in the async function, the promise that the async function returns is still fulfilled and not rejected.
- In fact if we add a `catch` handler to where we are calling the async function, let's see what happens.

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.countryyyyyyy}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

console.log(`1: Will get location`);
// const city = whereAmITry();
// console.log(city);

countriesContainer.style.opacity = 1;
whereAmITry()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message} 💥`));
console.log(`2: Finished getting location`);
```

- We should still get the error on the UI because it is coming from our manually thrown error in the `try` block.
- But notice that no error is coming from the `catch` block.
- So again, this means that even though there was an error in the `async` function, the promise that it returns is still fulfilled.
- Now, if we wanted to fix that i.e. if we want to be able to catch that error where we are calling the function as well, then we would have to re-throw that error in the `catch` block of that function.
- Re-throwing the error mean to basically throwing the error again so that we can propagate it down.
- With that, we will manually reject a promise that is returned from the async function.

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.countryyyyyyy}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);

    // reject promise returned from the async function
    throw err;
  }
};

console.log(`1: Will get location`);
// const city = whereAmITry();
// console.log(city);

countriesContainer.style.opacity = 1;
whereAmITry()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message} 💥`));
console.log(`2: Finished getting location`);
```

- Now we get the same error out where we are calling the function as we had in the `try` block of our function.
- So re-throwing an error is sometimes the correct solution to that problem.
- Finally, if we wanted to fix the fact that second string is printed before the function call then how would we do that?
- We can simply add `finally` block, since finally block will be executed no matter if the promise is fulfilled or rejected.

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);

    // reject promise returned from the async function
    throw err;
  }
};

console.log(`1: Will get location`);
// const city = whereAmITry();
// console.log(city);

countriesContainer.style.opacity = 1;
whereAmITry()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message} 💥`))
  .finally(() => console.log(`2: Finished getting location`));
```

- Now we first get the first string logged, then the result from the function, and then the second string.
- This might have been a little confusing but, hopefully you understood how all the pieces fit together.
- This of course, works just fine but, there is still a problem here.
- The problem is using the `then()` and `catch()` method along with `async`/`await`.
- So, we are mixing the old and new way of working with promises, all in the same code.
- It is preferable to only use `async` functions instead of having to mix them.
- So, let's now convert the chain of `then()`, `catch()`, and `finally()` into `async`/`await`. We can of course do that because, when we call the `whereAmITry()` function, it returns a promise so, just like any other promise, we can handle it using async/await.
- It would be great if we could simply use `await` without the `async` function, but that doesn't work, at least for now.
- There is actually a proposal in the works to make it happen but, for now, `await` can only be used inside an `async` function.
- However, we don't really want a new complete function here. Instead, we can use and IIFE.

```javascript
whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);

    // reject promise returned from the async function
    throw err;
  }
};

console.log(`1: Will get location`);

(async function () {
  try {
    const city = await whereAmITry();
    console.log(city);
  } catch (error) {
    console.error(`${error.message} 💥`);
  }
  console.log(`2: Finished getting location`);
})();
```

- NOTE that this pattern for IIFE is one of the last remaining pattern for IIFEs.
- Great! we managed to do the conversion and now everything is using async/await.
- And now we know how to return data from an async function and how to properly receive and handle that returned data.
- In real life, this is something that happens all the time.
- It is pretty common that we have async function calling other async function and returning values between them.
- That is why we are learning all of it, to make sure that you really correctly understand how async functions work behind the scenes.

### Running Promises in Parallel

- Let's now imagine that we wanted to get some data about three countries at the same time, but in which the order that the data arrives does not matter at all.
- So, let's now implement an async function, using everything that we know at this point.
- This function will simple take in three countries and it will log the capital cities of these three countries as an array.
- NOTE: In an async function we really always need to wrap our code into a try...catch block.

```javascript
// this function was created in the "throwing errors manually" lesson
// in this lesson, we are going to simply utilize it
getJSON = function (url, errorMsg = 'Something went wrong') {
  // this function takes in a url from which we want to fetch data
  // it returns the JSON data if it is success or throws an error
  // the error message can customized or the default one will be used
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    console.log([data1.capital?.[0], data2.capital?.[0], data3.capital?.[0]]);
  } catch (error) {
    console.error(error);
  }
};

get3Countries('greece', 'france', 'italy');
```

- Great! This works just fine, and also at the first sight, this seems to make sense.
- But we really think about it, it doesn't make so much sense because what we did here was to run all the 3 AJAX calls one after another, even though the result of the second one does not depend on the first one; and the result of the third one does not depend on any of the previous ones.
- So actually, this doesn't make much sense. Why should the second AJAX call wait for the first one?
- If we look at the network tab on the chrome developer tools, we will see that the AJAX call for our country 2 is made only after the data for country 1 has arrived. The same goes for country 3.
- So, instead of running these promises in sequence, we can actually run them in parallel i.e. all at the same time.
- Then we can save valuable loading time, making the 3 countries load at the same time.
- Each of these countries take up half a second so, by running them parallel, we can basically save 1 second - which is a lot of time when loading a website.
- So, let's do that. In order to do that, we use `Promise.all()` combinator function.
- This if, once again, kind of a helper function on the `Promise` constructor. So, it is a static method.
- This function will take in an array of promises and it will return a new promise, which will then run all the promises in th array at the same time.

```javascript
// this function was created in the "throwing errors manually" lesson
// in this lesson, we are going to simply utilize it
getJSON = function (url, errorMsg = 'Something went wrong') {
  // this function takes in a url from which we want to fetch data
  // it returns the JSON data if it is success or throws an error
  // the error message can customized or the default one will be used
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log([data1.capital?.[0], data2.capital?.[0], data3.capital?.[0]]);
  } catch (error) {
    console.error(error);
  }
};

get3Countries('greece', 'france', 'italy');
```

- Now if you see on the network tab, after the first 3 AJAX calls that we are making separately, when code comes to the line of `Promise.all()` function, all the 3 AJAX calls are made at the same time.
- Now, as we mentioned earlier, `Promise.all()` will first run all the promises in the array that we pass into it at the same time then, it will return a new promise.
- So now, we can handle that promise in the exact same way as before.

```javascript
// this function was created in the "throwing errors manually" lesson
// in this lesson, we are going to simply utilize it
getJSON = function (url, errorMsg = 'Something went wrong') {
  // this function takes in a url from which we want to fetch data
  // it returns the JSON data if it is success or throws an error
  // the error message can customized or the default one will be used
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1.capital?.[0], data2.capital?.[0], data3.capital?.[0]]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

get3Countries('greece', 'france', 'italy');
```

- Once again, if we now look at the network tab in the chrome developer tools, you will see that the 3 AJAX calls were made at the same time.
- So, they are running in parallel, and no longer in sequence.
- Now if we look the console, the data that we logged in, it is an array.
- In this array, in this case, we get another array with an object inside it with the data that we are looking for.
- So, `Promise.all()` receives and array and it also returns an array.
- Now to create the same output as before, all we have to do is to loop over this data, and take out the part that we want.

```javascript
// this function was created in the "throwing errors manually" lesson
// in this lesson, we are going to simply utilize it
getJSON = function (url, errorMsg = 'Something went wrong') {
  // this function takes in a url from which we want to fetch data
  // it returns the JSON data if it is success or throws an error
  // the error message can customized or the default one will be used
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1.capital?.[0], data2.capital?.[0], data3.capital?.[0]]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0]?.capital?.[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('greece', 'france', 'italy');
```

- Now we get the exact same result as before.
- One important thing to note here is that if one of the promises reject then the whole `Promise.all()` rejects as well.
- So, we say that `Promise.all()` short-circuits when one promise rejects.
- Great! So, whenever you have a situation in which you need to do multiple asynchronous operations at the same time, and operations that don't depend on one another, then you should always run them in parallel, just like we did here using `Promise.all()`.
- This is actually more common than you might think so, please keep this technique in mind and your users will thank you for it.
- Of course, in case you are not using async/await then you can take the result from individual calls and handle them using `then()`. It will work just the same.
- That is the `Promise.all()` combinator. It is called combinator function because it allows us to combine multiple promises.
- There are other combinator functions, and so let's take a look at them in the next lesson.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
