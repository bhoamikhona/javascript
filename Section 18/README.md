# Section 18: Forkify App - Building a Modern Application

**About:** In this section we take everything that we have learned throughout the course and put it all into one beautiful, modern, and really advanced application. We will use things like classes, modules, promises, async/await, parcel, and so much more. Also, we are going to dive even deeper into flow charts and project architecture in this project so that you become more and more confident and prepared to actually write applications by yourself. This will be a ton of work but also, a lot of fun. So, let's get started.

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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
