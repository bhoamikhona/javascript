# Section 18: Forkify App - Building a Modern Application

**About:** In this section we take everything that we have learned throughout the course and put it all into one beautiful, modern, and really advanced application. We will use things like classes, modules, promises, async/await, parcel, and so much more. Also, we are going to dive even deeper into flow charts and project architecture in this project so that you become more and more confident and prepared to actually write applications by yourself. This will be a ton of work but also, a lot of fun. So, let's get started.

- [Live Site](https://forkify-bhoami.netlify.app/)

## Table of Content

- [Section 18: Forkify App - Building a Modern Application](#section-18-forkify-app---building-a-modern-application)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [Project Overview and Planning - Part 01](#project-overview-and-planning---part-01)
      - [Project Overview](#project-overview)
      - [Project Planning](#project-planning)
      - [Flowchart - Part 01](#flowchart---part-01)
    - [Loading a Recipe from API](#loading-a-recipe-from-api)
    - [Rendering the Recipe](#rendering-the-recipe)
    - [Listening for load and hashchange Events](#listening-for-load-and-hashchange-events)
    - [The MVC Architecture](#the-mvc-architecture)
      - [The Model-View-Controller (MVC) Architecture](#the-model-view-controller-mvc-architecture)
    - [Refactoring for MVC](#refactoring-for-mvc)
    - [Helpers and Configuration Files](#helpers-and-configuration-files)
      - [Configuration File](#configuration-file)
      - [Helper File](#helper-file)
    - [Event Handlers in MVC: Publisher-Subscriber Pattern](#event-handlers-in-mvc-publisher-subscriber-pattern)
    - [Implementing Error and Success Messages](#implementing-error-and-success-messages)
    - [Implementing Search Results - Part 01](#implementing-search-results---part-01)
    - [Implementing Search Results - Part 02](#implementing-search-results---part-02)
    - [Implementing Pagination - Part 01](#implementing-pagination---part-01)
    - [Implementing Pagination - Part 02](#implementing-pagination---part-02)
    - [Project Planning - Part 02](#project-planning---part-02)
    - [Updating Recipe Servings](#updating-recipe-servings)
    - [Developing a DOM Updating Algorithm](#developing-a-dom-updating-algorithm)
    - [Implementing Bookmarks - Part 01](#implementing-bookmarks---part-01)
    - [Implementing Bookmarks - Part 02](#implementing-bookmarks---part-02)
    - [Storing Bookmarks with Local Storage](#storing-bookmarks-with-local-storage)
    - [Project Planning - Part 03](#project-planning---part-03)
    - [Uploading a New Recipe - Part 01](#uploading-a-new-recipe---part-01)
    - [Uploading a New Recipe - Part 02](#uploading-a-new-recipe---part-02)
    - [Uploading a New Recipe - Part 03](#uploading-a-new-recipe---part-03)
    - [Wrapping Up: Final Considerations](#wrapping-up-final-considerations)
      - [Documentation in JavaScript](#documentation-in-javascript)
      - [Improvement and Feature Ideas: Challenges](#improvement-and-feature-ideas-challenges)
  - [Author](#author)

## Lessons Learned

### Project Overview and Planning - Part 01

#### Project Overview

- Let's start by planning this application.
- This application is all about searching for recipes and displaying them in the user interface.
- We start by searching for any recipe, for example Pizza.
- Once you search it, you will see all the available recipes in the left side-bar.
- If we get more than 10 results, then those results get divided into multiple pages i.e. we have a nice pagination feature which is ver common in web applications.
- Once you click on one of those recipes, the details of those recipes show up on the right of the side-bar.
- These details include cooking time, number of servings, ingredients, and link to the page where the actual recipe comes from.
- We can increase/decrease the number of servings and the amount of ingredients will automatically get updated on the basis of that.
- We can also bookmark recipes.
- We can also add recipes.
- What's special about this recipe upload is that, all the recipes that you upload yourself, will only be visible for yourself.
- If you add a new recipe, for example Pasta, and you search for Pasta in the search bar, you will see the recipe that you added but, it will only be for yourself. This is because this application has like a fixed developer API key.
- So, each recipe is associated to a certain developer key and we will see what that means, by the end of the section when we actually implement it.
- That's it. That's the whole functionality of the forkify application, which seems pretty simple but, it is actually a lot of work to implement all of it. So hopefully, it will be a great learning experience for you.
- Let's now plan this application.

#### Project Planning

- Now that we know what the project looks like and also how it works, we need to go through the same planning steps that we did in the Mapty project.
- In this case, we will actually leave the architecture for a bit later; and only talk about user stories, features, and flow chart for now.
- To start, remember that a user story is a description of the application's functionality from a user's perspective.
- Basically, when we write user stories, we need to put ourselves in the shoes of our users.
- All the user stories put together will then provide a clear picture of how the whole application is going to work.
- Based on these stories we will then be able implement all our application's features.
- Let's say that we are now the project manager for Forkify and that we didn't know what the final version of the project is going to look like.
- For this project, the user stories could be the following:
  - As a user, I want to search for recipes, so that I can find new ideas for meals.
  - As a user, I want to be able to update the number of servings, so that I can cook a meal for different number of people.
  - As a user, I want to bookmark recipes so that I can review them later.
  - As a user, I want to be able to create my own recipes, so that I have them all organized in the same app.
  - As a user, I want to be able to see my bookmarks and own recipes when I leave the app and come back later, so that I can close the app safely after cooking.
- Now we can use all these user stories for our next step and come up with the features that we need in our application.

| User Stories                                                              | Features                                                                                                                                                                                                     |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Search for recipes                                                        | <ul><li>Search functionalit: input field to send request to API with searched keywords</li><li>Display results with pagination</li><li>Display recipe with cooking time, servings, and ingredients</li></ul> |
| Update the number of servings                                             | <ul><li>Change servings functionality: update all ingredients according to current number of servings</li></ul>                                                                                              |
| Bookmark recipes                                                          | <ul><li>Bookmarking functionality: display list of bookmarked recipes</li></ul>                                                                                                                              |
| Create my own recipes                                                     | <ul><li>User can upload own recipes</li><li>User recipes will automatically be bookmarked</li><li>User can only see their own recipes, not recipes from other users</li></ul>                                |
| See my bookmarks and own recipes when I leave the app and come back later | <ul><li>Store bookmark data in the browser using local storage</li><li>On page load, read saved bookmarks from local storage and display</li></ul>                                                           |

- With this, we know exactly what we need to implement.
- But now, let's take this list of unstructured features and actually put it into a nice flowchart, which will allow us to plan, how exactly the application is going to work.

#### Flowchart - Part 01

- We are going to start with only these first three features:
  - Search functionality. API search request
  - Results with pagination
  - Display recipe
- We are only doing these first three for now so that we don't get overwhelmed right from the start.
- So, we are going to build this flowchart in parts, starting with the three features mentioned above.
- As always, we are going to focus on events and the first event in our web application should probably be the user searching for a recipe.
- ![image](https://github.com/user-attachments/assets/1c6c8140-902b-4833-bb53-877043cb831f)
- When a user searches for a certain recipe, then we need to asynchronously load the search results from our API.
- Once the results are in, we will simply render them in our application.
- However, we will not render all the search results right away because that would be overwhelming.
- Instead, we will also render some pagination buttons, in order to hide, basically part of the search results on different pages.
- ![image](https://github.com/user-attachments/assets/68df79c9-83fe-4a62-9829-7bc3fd0a4258)
- Then as the user clicks on one of the pagination buttons, it will then render the search results for the new page that was selected and it will also render new pagination buttons.
- For example, when we are on page 2, then there will be a button to go back to page 1 and a button to go page 3.
- But when we are on page 3, the button to go back will point to page 2 and the button to go forward will point to page 4.
- So, we need to render these buttons everything that a user clicks on one of them.
- Finally, we also need a logic to actually display the recipe.
- ![forkify-flowchart-part-1](https://github.com/user-attachments/assets/de2d6a02-1e0b-4495-84c0-99bd152925db)
- When the user selects a recipe, we need to asynchronously load all the recipe data from the API and then once the data arrives, we render the recipe to the UI.
- We will also do the same whenever the page loads, with a recipe ID in the URL.
- So, whenever we click on a recipe, then the URL will change with the recipe ID in it.
- This is important; and that's because if we take the URL and copy-paste it to another browser, then the recipe corresponding to that ID should also load right away.
- That's why in the flowchart, we have the "Load recipe" on both of A. when the user selects a recipe from the UI or B. when the page loads with a recipe ID already in the URL.
- That's it for part 01 of the flowchart. In fact, these are basically already all core features i.e. the most important features of the application viz searching for recipes, rendering search results, and rendering individual recipe that was selected.
- All of these will probably take us half of the section to implement.
- So, there really is a lot to do.
- We will start implementing this project only with the recipe displaying i.e. feature number 03.
- This will allow us to start implementing some functionality and also play around with the application a little bit but still without thinking about the architecture i.e. without a rigid structure that might be imposed by architecture.
- With this, we have the first part of this application planned so, let's get to work.

### Loading a Recipe from API

- In this project we are using Sass instead of CSS.
- Sass is basically a better way of writing CSS. It has some nice additional features, which makes writing CSS in a large scale application a lot easier.
- Browsers don't actually understand Sass so, it has to be converted to CSS. Parcel will do that for us.

### Rendering the Recipe

- How to work with statics files along with Parcel

### Listening for load and hashchange Events

- Hashes in URL
- `hashchange` event
- Getting the current hash in the URL: `window.location.hash`

### The MVC Architecture

- We already implemented a part of the Forkify application but at this point, it has not structure whatsoever.
- So now, it is time to talk about the project architecture, but also about software architecture more in general.
- We touched on this already in the Mapty application a little bit earlier but in this lesson, let's go a little bit deeper.
- First of all, why do we even need an architecture when we build software?
- ![image](https://github.com/user-attachments/assets/fd90a175-0346-4af4-92ec-473681166928)
- There are actually multiple reasons.
- Structure
  - First, the architecture will give our project the structure in which we can then write the code.
  - So just like a house, software also needs a structure.
  - In software, structure basically means how we organize and divide code into different modules, classes, and functions.
  - All these will basically hold our code together and give it structure.
- Maintainability
  - The next reason is maintainability.
  - When we build a project, we always need to think about the future and keep in mind that the project is never really done.
  - It is never finished.
  - We will always need to change things in the future and we will need to maintain the project.
  - And that only works if the project is nicely structured.
  - Plus, we might even want to add new features to the project, which brings us to expandability.
- Expandability
  - Expandability is basically the ability to easily add new features in the future.
  - Once again, that is only possible with good structure, and a good overall architecture.
- So, the perfect architecture is basically one that allows for all these three aspects of structure, maintainability, and expandability.
- Now, in order to achieve that perfect architecture, we can of course create our own architecture from scratch.
- That's exactly what we did in the Mapty project.
- However, that only works with a really small project like the Mapty project.
- But when the project grows more complex, then it is going to be very hard to achieve a good architecture completely on our own.
- So instead, we can opt for a well established architecture pattern that developers have been using for years, or even for decades.
- Examples:
  - Model View Controller (MVC)
  - Model View Presenter (MVP)
  - Flux
  - etc.
- That is actually what we are going to do in the forkify project, because it is bit more complex than the Mapty project.
- These days in modern web development, many developers actually use a framework like React, Angular, Vue, or Svelte to take care of the architecture for them.
- So in this case, developers don't have to think a lot about architectures on their own.
- And probably this is actually a good idea at a certain point, especially for large scale applications.
- However, (and this is key) as mentioned many times before, it is very important that you really know JavaScript, before switching to some of these frameworks.
- That includes knowing how to implement an architecture by yourself.
- That's what we will learn in this project among many other things.
- This will make learning React, Vue, etc. learning so much easier, later down the road.
- Regardless of where the architecture comes from and who develops it, there are some components that any architecture must have; and that is business logic, state, an HTTP library, application logic, and presentation logic.
  - ![image](https://github.com/user-attachments/assets/9ac8d489-34ba-4788-8b60-1450d5ce9e4f)
  - Business Logic
    - Business logic is basically all the code that solves the actual business problem i.e. that's the code that is directly related to what the business does and what it needs.
    - If your business is What's App then your business logic will include sending messages.
    - If your business is a bank, then one of the many parts of business logic will be to store transactions.
    - If your business is a budget manager, then your business will certainly include calculating taxes.
    - Essentially, business logic is the logic that is really related to solve the problem that the business set out to solve in the first place.
  - State
    - Next is state which is one of the most important aspects of any web application.
    - So, the application state is essentially what stores all the data about the application that is running in the browser.
    - The data about application's frontend basically.
    - The state should store any data that you might fetch from an API or data that the user inputs, or what page the user is currently viewing and so on.
    - This data should be the so called <ins>single source of truth</ins>, which should be kept in sync with the user interface.
    - This means that if some data changes in the state, then the user interface should reflect that.
    - The same is true the other way around.
    - So, if something changes in the UI, the state should also change.
    - Storing and displaying data and keeping everything in sync is one of the most difficult tasks when building web applications.
    - That's why there are many state management libraries like Redux or MobX.
    - But in this project, we will keep things very simple and use a simple object to store our entire state.
  - HTTP Library
    - Next, the HTTP library is simply responsible for making an receiving AJAX requests.
    - We have been doing that using the `fetch()` function and so that's what we will keep doing here.
    - Most real world applications need some interaction with the web. So, that's why this is an aspect to keep in mind.
  - Application Logic (Router)
    - About the application logic, this is the code that is only concerned about the implementation of the application itself.
    - So, it's more the technical aspects of the application, which are not directly related to the underlying business problem.
    - For example, application logic includes handling of UI events and navigation on the page.
    - That's the reason why this component is many times also called a router; basically, mapping actions to the users' navigation.
  - Presentation Logic (UI Layer)
    - Finally, the presentation logic, which is also called the UI layer, is of course all about the visible part of the application.
    - Essentially, we can say that the presentation logic is responsible for displaying the application state on the user interface, in order to keep everything in sync.
- Any good architecture has a way of separating all these components, instead of mixing everything together in one big file, in one big mess.
- So, let's now take a look at a well established architecture pattern that we are going to use in this project.
- That is the Model View Controller (MVC) architecture.

#### The Model-View-Controller (MVC) Architecture

- ![image](https://github.com/user-attachments/assets/ac1a0926-4f13-4b68-ace1-67868f5b66bb)
- This architecture contains three big parts viz model, view, and controller.
- The view is of course, for the presentation logic. So, it is the part of the application that is interacting with the user.
- The model is all about the applications data. So, that's why it usually contains the state and also the business logic that manipulates the state.
- So, these two should be kept closely together.
- The model is also what contains the HTTP library that might get some data from the web, for example, from an API or backend.
- This is of course, also about the data. So, it also goes into the model.
- Finally, the controller is what contains the application logic; and it kind of sits between the model and the view.
- So, it basically creates a bridge between the model and the view, which in fact, should know nothing about each other.
- Again, the model and the view will exist completely independent from one another, and not even knowing that the other one exsits.
- In fact, one of the big goals of the MVC pattern is to actually separate business logic from application logic, which makes developing the application so much easier.
- But as a consequence, we then need something to connect these two parts - which is the controller.
- Now let's look at a typical flow of actions and of data as soon as some event happens on the user interface, for example a click.
- To start, it is going to be the controller who will handle that event, because handling an event is doing something in the application; and that is clearly part of the application logic.
- Now, this handling might involve updating the user interface and also ask the model for some data.
- So, we can say that the controller dispatches tasks to model and to the view.
- In other words, it controls and orchestrates this entire action; in fact, the whole application itself.
- Asking the model for some data might, of course involve doing an AJAX request to the web. So, that's exactly what the model does.
- Then when the data arrives, the controller takes the data and sends it to the view.
- Finally, to finish, the view will render that data to the user interface, and finish this whole cycle.
- In the diagram above, you see two types of arrows.
- The dotted arrows represent data flow between different parts, while the solid arrows represent actual function calls and module imports.
- So analyzing this, we can see that it is only the controller who imports and calls functions from the model, and from the view, but never the other way around.
- So, as we mentioned before, the model and the view are in fact completely standalone and completely isolated i.e. they don't import each other, and they don't even import the controller.
- In fact, they don't even know that the controller exists.
- All they do is to basically just sit there waiting to get some instructions from the controller.
- This part is pretty important to understand so, take some time to really analyze this.
- There are actually different ways of implementing the MVC pattern, where some are more complex than others.
- But this one is a the most popular way of doing it because, it makes the most sense.
- Anyway, let's now see this MVC architecture applied to the part of the Forkify application that we already implemented.
- ![image](https://github.com/user-attachments/assets/6e508d2b-5378-4f4a-8cfb-58a3f3b3ae86)
- This is a flowchart of loading and rendering a recipe, that we already implemented.
- Below that, there is also a reminder of the MVC diagram that we just analyzed.
- So, in this flowchart, handling these events is associated to the controller.
- Then loading the recipe happens in the model i.e. the controller basically calls some function that is in the mode.
- Then the model asynchronously gets the recipe data from the API.
- Once that data has arrived, the controller asks for that data, receives it, sends it to the view, which will then ultimately render the recipe on the screen.
- That's it.
- That's what every step of the flowchart is associated to in the MVC architecture.
- But this is still quite abstract because, the flowchart is simply what we will implement, and not how we will do that.
- So, let's go even deeper, and actually take a look at a detailed implementation diagram of our MVC architecture. Again, this is only about loading and rendering a recipe.
- ![image](https://github.com/user-attachments/assets/f1d0c2e2-24a0-48c8-90b4-1beec009fd71)
- Let's start by noticing how both the model and controller are implemented in a module, while the recipe view is actually a class.
- We will explore the reasons for this when we actually write the code.
- But now, ;et's just analyze the same data and actions flow, but this time, in this real implementation.
- When the user clicks on a search result, there is `controlRecipes()` function in the controller and this is the one that will handle that event.
- How exactly that happens doesn't matter for now. We will come back to it later.
- What matters is that this controller will instruct the recipe view to render a loading spinner while the UI waits for the data to arrive.
- In the meantime, the controller also called the `loadRecipe()` function in the model to fetch the recipe data from the Forkify API.
- The model also contains a big state object that we export from the model.
- This state will contain all sorts of data, like the current recipe, search results, bookmarks, etc.
- Anyway, as the data arrives, it will be stored in the state object; and the controller then reaches into the state object, grabs the recipe data, and finally calls the render method on the recipe view with that data in order to finally render the recipe to the user interface.
- Basically, the exact same steps as before, but this time actually implemented in our code (atleast in theory).
- Next up, let's actually go from theory to practice and implement this architecture in our code.

### Refactoring for MVC

### Helpers and Configuration Files

- Many real world applications have two special modules that are completely independent of the rest of the architecture.
- These are a module for the project configuration and also a module for some general helper functions that are going to be useful across the entire project.
- So, let's now implement these modules in our own project.

#### Configuration File

- Let's start with the configuration module i.e. `config.js`.
- In `config.js` module, we will basically put all the variables that should be constants and should be re-used across the project.
- The goal of having this file with all these variables is that it will allow us to easily configure our project by simply changing some of the data that is in the config file, hence the name config.
- Of course, we will not want to put all the variables in this file. The only variables that we do want in the config file are the ones that are responsible for kind of defining some important data about the application itself.
- One example of that is the API URL.
- Since we are fetching data from an API, we will use its URL in multiple paces across the project.
- But then imagine that at some point, the URL needs to change because there were some changes made to the API and it went from version 2 to version 3.
- So, as always, we don't want to change it everywhere and simply have a variable which contains the base URL which we can re-use.

#### Helper File

- It is usually called `helpers.js`.
- The goal of this file/module is to contain a couple of functions that we re-use over and over in our project.
- So then, in this module, we then have a central place for all of them.
- One great candidate to be in this module is to create a `getJSON()` function. Basicall, a function which will get JSON.

### Event Handlers in MVC: Publisher-Subscriber Pattern

- Let's now learn how we can listen for events and also handle events in our MVC architecture by using something called the <ins>Published-Subscriber Pattern</ins>.
- Let's start by analyzing the code that we already have.

```javascript
/***** controller.js *****/

// event controller
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
  }
};

controlRecipes();

// event listener
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
```

- Right now we are listening for the `hashchange` and `load` event in the controller.
- However, that doesn't make a lot of sense.
- This is because everything that is related to the DOM i.e. the view, should really be inside of a view.
- Maybe the two events `hashchange` and `view` don't really look like they belong to a view but, imagine that we were handling a `click` event on a button instead.
- So, listening for that event for sure should go into the view.
- Therefore, we can say the same about the `hashchange` and `load` events.
- In this end, it has more to do with DOM manipulation or with the DOM itself than with the controller.
- Therefore, we need a way of putting this logic in the recipe view:

```javascript
// event listener
['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
```

- However, the handler function that we use to handle the `hashchange` and `load` events is actually the controller `controlRecipes()`
- So, it is the function that is sitting inside the controller.js module.
- Therefore, we have a problem.
- We don't want the event listeners to be in the controller - we want them to be in the view.
- But the event controllers that we use for those event listeners are in the controller - and we want that function to stay there.
- So, let's now think about how we could solve this problem.
- ![image](https://github.com/user-attachments/assets/ab7c5420-265c-44ab-8450-880c941e7c60)
- To re-cap, we want to handle events in the controller because otherwise, we would have the application logic in the view and we don't want that.
- But on the other hand, we want to listen for events in the view, because otherwise, we would have DOM elements in the controller i.e. we would have presentation logic in a controller which would be wrong in our MVC implementation.
- Essnetially, event listeners should be attached to DOM elements in the view, but the events should then be handled by controller functions that live in the controller module.
- So, if you take a look at the diagram in the image above, that is just a part of the architecture diagram that we saw before.
- In the diagram we have the `controlRecipes()` function in the controller, and we have a special method in the view, which is called `addHandlerRender()`.
- We might think that it is very easy to connect these two functions because, why not simple call the `controlRecipes()` function right fromt he view whenever an event occurs?
- That's actually not possible because in the way we set up the architecture, the view does not know anything about the controller.
- So, it doesn't import the controller, and so we cannot call any of the functions that are in the controller from the view.
- So, it only works the other way around and therefore it is more complex than this.
- Fortunately, there is a good solution and this solution is called the Publisher-Subscriber Design Pattern.

> [!NOTE]
>
> Design Patterns in Programming are basically just standard solutions to certain kinds of problems.

- In the publisher subscriber pattern we have a publisher which is some code that know when to react.
- In this case, that's going to be the `addHandlerRender()` function because it will contain the `addEventListener()` method.
- Therefore, it will know when to react to the event.
- On the other hand, we have a subscriber which is code that actually wants to react.
- So, this is the code that should actually be executed when the event happens.
- In this case, that is the `controlRecipes()` function that we already have in our controller.
- Remember that the publisher does not know yet that the subscriber even exists because that subscriber is in the controller that the view cannot access.
- Finally, now comes the solution.
- The solution is that we can now subscribe to the publisher by passing into subscriber function as an argument.
- In practice, this means that as soon as the program loads, the `init()` function in controller.js is called which in turn immediately calls the `addHandlerRender()` function from the view.
- This is possible because the controller does in fact import both the view and the model.
- As we call `addHanlderRender()` function, we pass in our `controlRecipes()` function as an argument.
- Essentially, we subscribe `controlRecipes()` to `addHandlerRender()`.
- So, at this point, the two functions are basically finally connected.
- Now the `addHandlerRender()` listens for events using the `addEventListener()` method as always.
- Then, as soon as the event actually happens, the `controlRecipes()` function will be called as the callback function of `addEventListener()`.
- In other words, as soon as the publisher publishes an event, the subscribe will get called.
- This is how we implement event listeners and event handlers in the MVC architecture.
- This will allow us to keep the handler in the controller and the listener in the view.
- By that, keeping everything nicely separated.
- In summary, the handler subscribes to the publisher, which is the listener in this case, and then the publisher publishes an event, the subscriber is executed.
- If you want to think even deeper about this and are really interested in this, then notice how there is actually a profound difference between a certain arbitrary like function A simply calling function B directly & function A receiving function B as an input in order to then call the input function.
- So, this is all about control..
- In the first scenario, function A is in control.
- However, in the second scenario function A has no control.
- So it simply has to execute whatever function it receives.
- If you want, reflect a little bit on that and see that this is exactly what the Publisher-Subscriber Pattern in actually all about.
- Anyway, leaving that theory aside, let's go back to the code and implement what we just learned.

### Implementing Error and Success Messages

### Implementing Search Results - Part 01

### Implementing Search Results - Part 02

### Implementing Pagination - Part 01

### Implementing Pagination - Part 02

### Project Planning - Part 02

- We have been making a lot of progress in building our application.
- We can actually say already that the core functionality of the app is in fact already working.
- So now, let's take a breath and think a little bit about our next step in this short lesson.
- These are our core functionalities:
  - Search functionality - API search request
  - Results with pagination
  - Display recipe
- All of these we already have working at this point.
- But now let's take it to the next level and think a little bit about how we will implement our next features.
- ![24d0273b-81d6-4714-b58a-867ed46ec8db](https://github.com/user-attachments/assets/b2e80737-8f2e-48e3-995c-ab514c450160)
- Based on the user stories that we outlines in the beginning of this project, our next feature was a functionality for changing the servings of the displayed recipe.
- That's going to be quite easy.
- All we have to do is to listen and handle events on the change servings buttons and then basically update the recipe and render it again.
- Then, the next feature is the bookmarking functionality.
- This is going to be yet another one that will be a little bit complex to implement.
- Starting the the event, whenever the user bookmarks a certain recipe then we want to render that bookmark in the special bookmark in the special bookmarks panel, and we also want to update the button in the recipe.
- Basically, we will then re-render the recipe.
- Then whenever the user clicks on one of the bookmarks, then we want to render exactly the that recipe, on which the user clicked.
- So here we will need two events and by the time we reach this functionality, we will see in more details - how it is going to work.
- Next up, we want to be able to store this personalized bookmark data in the browser and also read it back when the page is loaded for the next time.
- So whenever there is a new bookmark, we basically store all the bookmarks to local storage; and then when the page loads, we load all the bookmarks back from the local storage and render them.
- That's it. That's what we will do over the next couple of lessons.
- Once we are done with that, the application will actually be almost finished.
- Let's now go back to code and implement the functionality of changing the servings right in the next lesson.

### Updating Recipe Servings

### Developing a DOM Updating Algorithm

- `createRange()`
  - The `Document.createRange()` method returns a new `Range` object. It takes no parameters.
- `createContextualFragment()`
  - The `Range.createContextualFragment()` method returns a `DocumentFragment` by invoking the HTML fragment parsing algorithm or the XML fragment parsing algorithm with the start of the range (the parent of the selected node) as the context node. The HTML fragment parsing algorithm is used if the range belongs to a `Document` whose HTMLness bit is set. In the HTML case, if the context node would be `html`, for historical reasons the fragment parsing algorithm is invoked with `body` as the context instead.
  - Parameters
    - `tagString`
      - Text that contains text and tags to be converted to a document fragment.
  - Return Value
    - A `DocumentFragment` object.
- `isEqualNode()`
  - The `isEqualNode()` method of the `Node` interface tests whether two nodes are equal. Two nodes are equal when they have the same type, defining characteristics (for elements, this would be their ID, number of children, and so forth), its attributes match, and so on. The specific set of data points that must match varies depending on the types of the nodes.
  - Parameters
    - `otherNode`
      - The `Node` to compare equality with.
  - Return Value
    - A boolean value that is `true` if the two nodes are equals, or `false` if not.
    - If `otherNode` is `null`, `isEqualNode()` always returns `false`.
- `nodeValue` property
  - The `nodeValue` property of the `Node` interface returns or sets the value of the current node.
  - A string containing the value of the currentNode, if any. For the document itself, `nodeValue` returns `null`. For text, comment, and CDATA nodes, `nodeValue` returns the content of the node. For attribute nodes, the value of the attribute is returned.
- `attributes` property
  - The `Element.attributes` property returns a live collection of all attribute nodes registered to the specified node.
  - It is a `NamedNodeMap`, not an `Array`, so it has no `Array` methods and the `Attr` nodes' indexes may differ among browsers.
  - To be more specific, `attributes` is a kye/value pair of strings that represents any information regarding that attribute.

### Implementing Bookmarks - Part 01

### Implementing Bookmarks - Part 02

### Storing Bookmarks with Local Storage

### Project Planning - Part 03

- Let's now take a breath and take a minute to discuss our next step in implementing this project.
- ![abd828c9-f5c1-468a-9579-f0dc113602d0](https://github.com/user-attachments/assets/5c61fb64-9660-4cb5-9461-b0e490850455)
- At this point, we have implemented all the features from 1 to 7, and now all that is left to do is steps 8, 9, and 10 - which are all about the user being able to upload their own recipes.
- So, whenever the user clicks the add recipe button in the menu bar, we want to display a recipe editor.
- This recipe editor is like a modal window which will pop up and it contains a form.
- On that form we will have to bind an event handler so that when the user submits that form i.e. creates a new recipe then we want to asynchronously upload that recipe to the API, render that recipe and also add it the user's bookmarks.
- Finally, all this is going to be set up in a way that only the user that uploaded the recipe will be able to see that recipe; and as mentioned before, we are going to implement this by using an API developer key.
- These are the last steps that we need to take in order to finish our application. So, let's start by doing that in the next lesson - starting with the simple functionality of displaying the window, when the user clicks add recipe button.

### Uploading a New Recipe - Part 01

- `FormData`
  - The `FormData` interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the `fetch()`, `XMLHttpRequest.send()`, or `navigator.sendBeacon()` methods.
  - It uses the same format a form would if the encoding type were set to `"multipart/form-data"`.
  - You can also pass it directly to the `URLSearchParams` constructor if you want to generate query parameters in the way a `<form>` would do it if it were using simple `GET` submission.
  - An object implementin `FormData` can directly be used in a `for...of` structure, instead of `entries()`.
  - `FormData()` creates a new `FormData` object.
- `Object.fromEntries()`
  - This static method transforms a list of key-value pairs into an object.
  - Parameters:
    - `iterable`
      - An iterable, such as an Array or Map, containing a lsit of objects. Each object should have two properties:
        - A string or symbol representing the property key
        - The property value
      - Typically, this object is implemented as a two-element array, with the first element being the property key and the second element being the property value.
  - Return value:
    - A new object whose properties are given by the entries of the iterable.

### Uploading a New Recipe - Part 02

### Uploading a New Recipe - Part 03

- `window.history` property
  - This read-only property returns a reference to the `History` object, which provides an interface for manipulating the browser session history (pages visited in tha tab or frame that the current page is loaded in).
- `pushState()`
  - This method of the `History` interface adds an entry to the browser's session history stack.
  - Syntax: `pushState(state, unused, url)`
  - Parameters:
    - `state`
      - The `state` object is a JS object which is associated with the new history entry created by `pushState()`.
      - Whenever the user navigates to the new `state`, a `popstate` event is fired, and the `state` property of the event contains a copy of the history entry's `state` object.
      - The `state` object can be anything that can be serialized.
    - `unused`
      - This parameter exists for historical reasons, and cannot be omitted; passing an empty string is safe against future changes to the method.
    - `url` (optional)
      - The new history entry's URL.
      - Note that the borwser won't attempty to load this URL after a call to `pushState()`, but it may attempt to load the URL later, for instance, after the user restarts the browser.
      - The new URL does not need to be absolute; if it is relative, it is resolved relative to the current URL.
      - The new URL must be of the same origin as the current URL; otherwise `pushState()` will throw an exception.
      - If this parameter isn't specified, it is set to the document's current URL.
  - Returning Value
    - None
- `back()`
  - The `back()` method of the `History` interface causes the browser to move back one page in the session history.
  - It has the same effect as calling `history.go(-1)`. If there is no previous page, this method call does nothing.
  - It is asynchronous. Add a listener for the `popstate` event in order to determine when the navigation has completed.
  - No parameters
  - No return values

### Wrapping Up: Final Considerations

#### Documentation in JavaScript

- There is a standard way of writing documentations for JavaScript functions and that is called <ins>JSDocs</ins>.
- To know more about it, you can visit [jsdoc.app](https://jsdoc.app/)
- What is the advantage of using JSDocs?
  - The most obvious one is that if you are working with someone else on your project, they can now more easily understand what exactly your function is doing.
  - This is because it is the standard way of writing it, everyone understands it.
  - Or at least everyone is familiar with the JSDoc format.
  - Because, if everyone describes their function in the same way, using this standard, then that becomes really easy for everyone to understand the documentation of each other.
  - What's also great about this is that JS or VS Code will take this data and then when we hover over the function, it will take that data and give us a nice overview of the function.
  - The same happens whenever we use the function in some other file and hover over it.
  - Example:

```javascript
   /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns  {undefined | string} A markup string is returned if render=false
   * @this {Object} View instance
   * @author Bhoami K Khona
   * @todo Finish implementation
   */
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
```

#### Improvement and Feature Ideas: Challenges

- ![image](https://github.com/user-attachments/assets/c46851d9-133c-434b-bafd-714c0b484085)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
