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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
