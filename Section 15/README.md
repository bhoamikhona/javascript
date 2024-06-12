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
    - [Displaying a Map Marker](#displaying-a-map-marker)
    - [Rendering Workout Input Form](#rendering-workout-input-form)
    - [Project Architecture](#project-architecture)
    - [Refactoring for Project Architecture](#refactoring-for-project-architecture)
    - [Managing Workout Data: Creating Classes](#managing-workout-data-creating-classes)
    - [Creating a New Workout](#creating-a-new-workout)
    - [Rendering Workouts](#rendering-workouts)
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
  - Any variable that is a global variable in any script will be available to all the other scripts - as long as the they appear after the original script where it was first defined.

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

### Displaying a Map Marker

- We want a marker to appear on the map whereever we click on it.
- To do that, we cannot really use an event listener on the entire map element because then we would have no way of knowing where exactly the user clicked on the map.
- So, we would have no way of knowing the GPS location of whatever location the user clicked on the map because, that is data that only the map knows.
- Therefore, we need access to the coordinates of the point that was clicked.
- In summary, we cannot really use `addEventListener()` for this task, like we have been using all the time.
- Instead, we can use something similar that is actually available on leaflet library.
- This is where the map variable `const map = L.map('map').setView(coords, 13);` comes into play for the first time.

```javascript
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { longitude, latitude } = position.coords;
      console.log(longitude, latitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      /**
       * To know exactly where the user clicked on the map, the following
       * `map` variable is going to come into play.
       *
       * Before when we just took this code from the documentation, we
       * didn't really understand why we were storing the result of
       * creating a map into a variable but now, this is going to be
       * important because it is onto this `map` object where we can now
       * basically add an event listener.
       *
       * So, the idea is similar to what we do when using
       * `addEventListener()`, but on the map, we can use the `on()`
       * method.
       *
       * The `map` object is in fact an object that was generated by a
       * leaflet. We can see that because of the `L` namespace.
       * Therefore, `map` is going to be a special object with a couple
       * of methods and properties on it.
       */
      const map = L.map('map').setView(coords, 13);
      console.log(map);

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      /**
       * This `on()` method is not coming from JS itself. Instead, it is
       * coming from the leaflet library.
       *
       * The first parameter that the `on()` method takes is the type of
       * the event; and the second parameter is the callback function.
       *
       * So, indeed, it is very similar to `addEventListener()`.
       *
       * When leaflet calls this `on()` method, it will do so with a
       * special map event.
       *
       * If we expand the `mapEvent` we will find a property called
       * `latlng`. This property is an object with the latitude and
       * longitude value of where we clicked on the map. So, we can use
       * that to our advantage.
       */
      map.on('click', function (mapEvent) {
        console.log(mapEvent);
        const { lat, lng } = mapEvent.latlng;

        // creating a marker
        /**
         * marker() - creates the marker
         * addTo() - adds the marker to the map
         * bindPopup() - creates a popup and binds it to the marker
         * popup() - allows you to customize the popup on the map (read docs for more)
         * setPopupContent() - allows you to write whatever you want on it
         * openPopup() - opens the popup when you click on the map
         */
        L.marker([lat, lng])
          .addTo(map)
          .bindPopup(
            L.popup({
              maxWidth: 250,
              minWidth: 100,
              autoClose: false,
              closeOnClick: false,
              className: 'running-popup',
            })
          )
          .setPopupContent('Workout')
          .openPopup();
      });
    },
    function () {
      alert('Could not get your position');
    }
  );
}
```

### Rendering Workout Input Form

- `focus()`
  - The `HTMLElement.focus()` method sets focus on the specified element, if it can be focused. The focused element is the element that will receive keyboard and similar events by default.
  - Parameters:
    - `options` (optional) - An optional object for controlling aspects of the focusing process. This object may contain the following properties:
      - `preventScroll` (optional)
      - `focusVisible` (optional)
  - Returns `undefined`
- `addEventListener()` event types:
  - `submit`
  - `change`

### Project Architecture

- Before we continue any further in our project, we should now think a little bit about our project architecture.
- There are some quite advanced architecture patterns in JS, and we will talk a little bit about it by the end of the course.
- But in this small project, we will simply use OOP with classes, just like we learned in the last section.
- This way, we can then use these OOP concepts in a real project.
- Remember that architecture is all about giving the project a structure.
- In that structure, we can then develop the functionality.
- So, in this project, the main structure will come from classes and objects.
- Let's now dig a little bit deeper into this architecture that we are going to use.
- To start, one of the most important aspects of any architecture is to decide where and how to store the data.
- Because data is probably the most fundamental part of any application. Since without data, it doesn't even make sense to have an appliation in the first place.
- What would the application be about, if not about some sort of data?
- Now, in this case, the data that we need to store and to manage comes directly from the user stories.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/e3e2a0fd-36d4-415f-9360-28be02ab52a2)
- Right in the first user story, we can already see that we will somehow need to store the location, distance, time, pace, and steps per minute.
- And to fit the second user story, we will have to implement basically the same data. i.e. location, distance, time, and spped along with elevation gain instead of steps per minute.
- So, we will design our classes, so that they can create objects that will hold this kind of data.
- This is the best way of designing classe sot fit all user stories:
- ![mapty-project-architecture](https://github.com/bhoamikhona/javascript/assets/50435319/e79caf63-8359-423e-bd77-63a173d3d006)
- As you can see, we are going to have a big parent class, which will be called workout.
- It will hold the distance, duration, and coordinates.
- Then we will have a more specific class for running, which will hold the cadence and the pace.
- The reason why the classes are designed like this is because the distance, duration, and coordinates are common to both types of activities viz running and cycling. Therefore, they are in the parent class.
- The same will also be true for some methods - we will see that once we implement it.
- Then, for each type of activity, we have one child class, so that each child class can hold the data and methods that are specific to the type of activity.
- Hopefully that made sense.
- This is the whole reason why inheritance actually exist - so that we can hav more specific classes that inherit behavior and common properties that are common to all the child classes.
- So, the cadence and apce are specific for running and then the elevation gain and speed are specific to cycling.
- In the parent class, you also see that we have other properties viz id and data but, we will see why, once we start implementing the code.
- That's it for data.
- This kind of diagram is something that you will commonly see when working in OOP.
- So, usually each class is represented by a box where in the top part, you are going to have the properties and in the bottom part, you are going to have methods.
- Of course, each class will have more than just the constructor method (that's why we have the three dots there).
- So, for now, that's all we need to know about the architecture of our data.
- But now, for the rest of the architecture, it is going to be more about structuring the code that we already have from the previous lessons.
- The events that we already have are:
  - loading of the page
  - receiving a position from the Geolocation API
    - This is not an event in the traditional sense i.e. we are not handling it with `addEventListener()` but, we can still classify it as an event.
  - A click on the map
  - changing the input from cycling to running and vice versa
  - submitting the form
- All we have to do now is to create different functions that will handle these different events.
- Infact, what we are going to do is to create a bit class called App that will basically hold all of these functions as methods.
- ![Mapty-architecture-part-1](https://github.com/bhoamikhona/javascript/assets/50435319/8c5a8483-564f-48f8-9173-62174ef370cc)
- So from a quick look at this application class diagram, we can immediately see that loading the page will of course trigger the constructor of the object that we are going to create through the class.
- So then right at the beginning, we want to get the current position of the user using the Geolocation API. That's why there is that arrow pointing from constructor to `_getPosition()` in app class.
- Then as we receive that position, we want to load the map based on that position.
- Therefore, we are going to have a method called `_loadMap(position)`.
- Then as we click on the map, we want a method called `_showForm()`.
- As we change the input, we want a method called `_toggleElevationField()`.
- Then - probably the most important one is the event of submitting the form.
- The `_newWorkout()` method will basically be the heart of the entire class, because this is the one that will create new running/cycling objects. Of course these objects will be built based on the data that's coming in from the form.
- And as the user keeps adding running or cycling workouts, a new object will be created for each of the workouts - and each of them will then be stored in a workouts array, which will basically hold all of these objects.
- So, this is going to be an important class property that all method of the class will then be able to use to work with the workouts.
- So, with this structure, we have everything that is related to building the application itself, organized into one neat block of data and functionality.
- And actually, having a class that contains all the data and methods about the application, like we have here is a pretty common thing that you will see in simple JavaScript applications like Mapty.
- If the application was a bit more complex, then we could divide this architecture even further and create one class that would only be concerned with the user interface and one class for the so-called business logic - basically, the logic that works only with the underlying data.
- But in this case, we can just keep it simple, like we have.
- So, as mentioned before, this architecture will then allow us to have everything that is about the application in one nice, self-contained block.
- Besides the application itself, we then also have the classes that are only concerned about the data.
- Therefore, application and data will be nicely separated in a very logical way.
- Now, what's also great about this is that we will be able to protect all of these methods, so that they are nicely encapsulated and not accessible from everywhere else in the code.
- So, this will make the code a lot easier to work with because we will know for sure that no place else in the code is working with the data.
- Anyway, this is the initial approach for architecture that we are now going to implement.
- We will keep adding more methods and properties as we go but, this is already an excellent starting point.
- Take a couple of minutes to study this diagram (above).
- In the next lesson, we will refactor our code to fit this architecture.

### Refactoring for Project Architecture

- If you are working with event listeners in classes, then you will have to often use `bind()` to set the value of `this` keyword. This is because when you have a callback function, the `this` keyword will point to the element on which the event listener is attached, and not to the class in which you are working. Keep that in mind.

### Managing Workout Data: Creating Classes

### Creating a New Workout

- Guard Clause: It means that we will basically check for the opposite of what we are originally interested in and if that opposite is true, then we simply return the function immediately.
- `Number.isFinite(value)`
  - The `Number.isFinite()` static method determines whether the passed value is a finite number -- that is, it checks that a given value is a number, and the number is neither positive `Infinity`, negative `Infinity`, nor `NaN`.
  - Parameter `value` - The value to be tested for finiteness.
  - It returns a boolean value. `true` if the given value is a finite number. Otherwise `false`.

### Rendering Workouts

- Remember that we use `data` properties usually to build a bridge between the user interface and the data that we have in our application.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
