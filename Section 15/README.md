# Mapty App: OOP, Geolocation, External Libraries, and More!

**About:** Welcome to our next project and this one is going to be the coolest, most real-world project thus far. We are going to apply everything that we have learned so far, including advanced concepts such as functions, arrays, and object oriented programming. We will also learn some new things like how to use geolocation and how to use third party libraries in our project. Even more importantly, you will actually learn how to plan a project, because building a project is not just writing some code, it is also about thinking and taking decisions and solving problems. It is important to learn that so that eventually, you can build projects on your own.

## Project Overview

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/8dc757e1-2aee-4421-93d1-2a303adf0821)
- This is the [Mapty Application](https://bhoamikhona.github.io/javascript/Section%2015/index.html).
- We have a sidebar on the left and the main part of this application is the huge map.
- This map is loaded from a third party service. Also, the position is automatically obtained by the browser using geolocation.
- When you first load the webpage, the application will ask you if you'd like to allow for it to know your location.
- Once you click allow, JS will fetch your positon and it will then also load the map on your current position.
- The goal of this application is for the user to log their workouts.
- Once you click somewhere on the map, a form will appear on the left sidebar where you can input what kind of activity you did and its details.
- Once you submit the form, the details will be printed nicely on the sidebar along with a pop-up/pin on the map.
- We can add as many workouts as we like on the app.
- Let's say we have activities all over the place so, what's cool about this is that we can click on any activity on displayed on the sidebar and it will automatically move the map to that workout.
- Another thing that is special here is that when we close this app or re-load it, it retains all the data i.e. it maintains its state.
- Essentially, this data about the workouts is going to be stored in the browser and then each time we load this webpage, we will read the data from the browser.

## Table of Content

- [Mapty App: OOP, Geolocation, External Libraries, and More!](#mapty-app-oop-geolocation-external-libraries-and-more)
  - [Project Overview](#project-overview)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [How to Plan a Web Project](#how-to-plan-a-web-project)
      - [Project Planning](#project-planning)
      - [Planning Mapty](#planning-mapty)
        - [User Stories](#user-stories)
        - [Features](#features)
        - [Flowchart](#flowchart)
        - [Architecture](#architecture)
    - [Using the Geolocation API](#using-the-geolocation-api)
    - [Displaying a Map using Leaflet Library](#displaying-a-map-using-leaflet-library)
  - [Author](#author)

## Lessons Learned

### How to Plan a Web Project

#### Project Planning

- Step 01: User Stories
  - A <ins>user story</ins> is basically a description of the application's functionality from the user's perspective.
  - Then, all the user stories put together will clearly describe the functionality of the entire application.
- Step 02: Features
  - User stories are basically a high-level overview of the whole application, which will allow us developers to determine the exact <ins>features</ins> that we need to implement in order to make the user stories actually work as intended.
- Step 03: Flow Chart
  - To visualize the different actions that a user can take, and how the program react to these actions, we usually put all these features into a nice <ins>flow chart</ins>.
  - Once we know exactly what we are going to build, it is time to think about how we are going to build it. This brings us to the project's architecture.
- Step 04: Architecture
  - In this context, <ins>architecture</ins> simply means how we will organize our code, and what JS features we will use.
  - So, the project's architecture is essentially what holds all the code together.
  - It gives us a structure in which we can then develop the application's functionality.
- Step 05: Development
  - Once we have thought about the project's architecture, we are finally done with the planning step, and are then ready to finally move on to the development step.
  - So, this is where we implement the plan using JS code.

#### Planning Mapty

- Let's now plan the application that we are going to build in this section.

##### User Stories

- There are multiple formats in which we can write user stories, but the most common one is write sentences with this format:
  - "As [type of user], I want [an action] so that [a benefit]"
- This format of the user story answers the questions: who?, what? and why?
- User stories for Mapty:
  - As a user, I want to log my running workouts with location, distance, time, pace, and steps/minute, so I can keep a log of all my running.
  - As a user, I want to log my cycling workouts with location, distance, time, speed, and elevation gain, so I can keep a log of all my cycling.
  - As a user, I want to see all my workouts at a glance, so I can easily track my progress over time.
  - As a user, I want to also see my workouts on a map, so I can easily check where I workout the most.
  - As a user, I want to see all my workouts when I leave the app and come back later, so that I can keep using the app over time.
- We could have written these stories in a different way, and certainly different people will come up with different user stories for the same application.
- But what matters is that we can use user stories to describe exactly what the application will do.
- In the real world, you will be building the app on your own therefore, you will really have to think as if you were the user and put yourself in the user's feet so that you can come up with these user stories and buld your features from there.

##### Features

| User Stories                                                                     | Features                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Log my running workouts with location, distance, time, pace, and steps/minute    | <ul> <li>Map where user clicks to add new workout (best way to get location coordinates)</li> <li> Geolocation to display map at current location (more user friendly) </li><li> Form to input distance time, pace, steps/minute</li></ul> |
| Log my cycling workouts with location, distance, time, speed, and elevation gain | <ul><li> Form to input distance, time, speed, elevation gain </li></ul>                                                                                                                                                                    |
| See all my workouts at a glance                                                  | <ul><li>Display all workouts in a list</li></ul>                                                                                                                                                                                           |
| See my workouts on a map                                                         | <ul><li>Display all workouts on the map</li></ul>                                                                                                                                                                                          |
| See all my workouts when I leave the app and come back later                     | <ul><li>Store workout data in the browser using local storage API</li><li>On page load, read the saved data from local storage and display</li></ul>                                                                                       |

##### Flowchart

- The flowchart should of course contain the different features that we are going to implement, but it is also going to contain how the different parts of the app interact with each other, which event makes sense to implement, and also how data flows across the application.
- Whenever we start to build a flowchart, it is a good idea to start with events.

> [!NOTE]
>
> Async means that there is an operation that takes some time, and only after it is completed, then the rest of the operations that depend on it can be executed.

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/1b9e82f3-2420-495c-a407-649b9bb723e8)
- Keep in mind that this flow chart itself has nothing to do with the implementation itself.
- This is just how the program is going to work.
- And we might very well implement in some other language, it doesn't have to be JS.
- Essentially, this is only what our program should do, but not how it does it. That is more specific and that's actually for architecture.

##### Architecture

- Just like the flowchart, we don't always need to have the perfect final architecture figured out before implemetation.
- We can first do some experiments, play around with the code, and only then, think about the architecture for the final project in case.
- Of course we can do it right in the beginning, but it is not always necessary.
- So, to start this project, we will actually simply start coding, and start to implement the features according to the flowchart that we developed.
- Then as we start to need more organization, and ways to manage our data, we will come back to thinking about the architecture.

### Using the Geolocation API

- The Geolocation API is called an API because it is in fact, a browser API just like, for example, internationalization or timers, ro anything that browsers give us.
- So, Geolocation is just another API but, it is also a very modern one.
- There are many other modern APIs like that, for example, to access the user's camera or even to make a user's phone vibrate.
- Geolocation is very easy to use, all you have to do is this: `navigator.geolocation.getCurrentPosition()`
- `getCurrentPosition()`
  - The `getCurrentPosition()` method of the `Geolocation` interface is used to get the current position of the device.
  - Parameters:
    - `success` - A callback function that takes a `GeolocationPosition` object as its sole input parameter.
    - `error` (optional) - An optional callback function that takes a `GeolocationPositionError` object as its sole input parameter.
    - `options` (optional) - An object including the following parameters:
      - `maximumAge` (optional)
      - `timeout` (optional)
      - `enableHighAccuracy` (optional)

### Displaying a Map using Leaflet Library

- [Leaflet](https://leafletjs.com/) - A third party library for interactive maps.
  - The `L` namespace
  - `L.map().setView()`
- Global Variables:
  - Any variable that is a global variable in any script will be available to all the other scripts - as long as the they appear after that script.

```javascript
// getCurrentPosition() takes in two callback function - one is for success and the other is for error
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { longitude, latitude } = position.coords;
      console.log(longitude, latitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];
      /**
       * Here, L is a namespace that leaflet provides for - much like the
       * Intl namespace we get internationalization.
       *
       * This namespace provides us with a function called map() which
       * takes in one parameter - this parameter must be the id of the
       * container in HTML, in which we want to display the map.
       *
       * In our case, the container's id is also `map` so, that works out.
       *
       * In the setView() function, we pass in an array with the values
       * of latitude and longitude - in that order of the area we want to
       * display in the map. The second parameter is a number which tells
       * how zoomed-in or how zoomed-out should the map be rendered.
       *
       * NOTE that `L` is a global variable inside of the leaflet script
       * so, we can access it directly in the console.
       */
      const map = L.map('map').setView(coords, 13);

      /**
       * The map that we see on the page is basically made up of small
       * tiles and these tiles, they come from the url passed into the
       * `tileLayer()` method.
       *
       * Open Street Map is basically an open source map that everyone
       * can use for free.
       *
       * So, open street map is the one that we are going to use but,
       * leaflet also works with all other kinds of maps as well, for
       * example Google maps, if that is what you prefer.
       *
       * We can also use this url (the one that we pass into tileLayer())
       * to change the appearance of our map. You can google around to see
       * what other map styles are available.
       *
       * Default open street map style: https://tile.openstreetmap.org/{z}/{x}/{y}.png
       */
      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /**
       * This marker is for the for the pin on the map along with the
       * popup.
       *
       * In the next lesson, we will talk about how to create our own
       * markers and how display one when we click on the map.
       */
      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    function () {
      alert('Could not get your position');
    }
  );
}
```

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
