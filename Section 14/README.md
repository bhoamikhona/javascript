# Section 14: Object-Oriented Programming (OOP) With JavaScript

**About:** In modern JavaScript, there are two major paradigms, object-oriented programming and functional programming. In this section, you are going to learn everything you need to know about OOP in JavaScript. This is absolutely essential if you want to become a professional JavaScript developer. We are going to dive really deep into what OOP actually is and different ways of implementing it in JavaScript. We are going to start with contructor functions, then move to ES6 classes and also talk about `object.create`. By the end of the section, we will even implement inheritance between classes using all these different techniques. So, this is going to be a full packed section so, let's dive right in.

## Table of Content

- [Section 14: Object-Oriented Programming (OOP) With JavaScript](#section-14-object-oriented-programming-oop-with-javascript)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [What is Object-Oriented Programming?](#what-is-object-oriented-programming)
      - [Classes and Instances (Traditional OOP)](#classes-and-instances-traditional-oop)
      - [The 4 Fundamental OOP Principles](#the-4-fundamental-oop-principles)
        - [Abstraction](#abstraction)
        - [Encapsulation](#encapsulation)
        - [Inheritance](#inheritance)
        - [Polymorphism](#polymorphism)
    - [OOP in JavaScript](#oop-in-javascript)
      - [OOP in JavaScript: Prototypes](#oop-in-javascript-prototypes)
        - [Classical OOP: Classes](#classical-oop-classes)
        - [OOP in JS: Prototypes](#oop-in-js-prototypes)
      - [3 Ways of Implementing Prototypal Inheritance in JavaScript](#3-ways-of-implementing-prototypal-inheritance-in-javascript)
        - [Constructor Functions](#constructor-functions)
        - [ES6 Classes](#es6-classes)
        - [Object.create()](#objectcreate)
    - [Constructor Functions and the new Operator](#constructor-functions-and-the-new-operator)
    - [Prototypes](#prototypes)
    - [Prototypal Inheritance and The Prototype Chain](#prototypal-inheritance-and-the-prototype-chain)
    - [Prototypal Inheritance on Built-in Objects](#prototypal-inheritance-on-built-in-objects)
      - [Building a custom property/method on Array prototype](#building-a-custom-propertymethod-on-array-prototype)
      - [Looking at Prototypes of More Built-In Objects](#looking-at-prototypes-of-more-built-in-objects)
    - [ES6 Classes](#es6-classes-1)
    - [Setters and Getters](#setters-and-getters)
    - [Static Methods](#static-methods)
  - [Author](#author)

## Lessons Learned

### What is Object-Oriented Programming?

- This section is about Object-Oriented Programming (OOP) and this lesson is going to be a very general, high-level overview of this programming paradigm.
- We will talk about what OOP is, how it works in general, and about its four fundamental priciples.
- So, this is going to be a really important and valuable lesson so, let's get started.
- First of all, what is OOP?
  - OOP is a programming paradigm that is based on the concept of objects.
    - Paradigm simply means the style of the code i.e. how we write and organize code.
  - We use objects to model i.e. to describe aspects of the real world, like a user or a to-do list item, or even more abstract features like an HTML component or some kind of data structure.
  - Now, as we already know, objects can contain data, which we call properties, and also code, which we call methods.
  - So, we can say that by using objects, we pack all the data and the corresponding behavior, all into one big block.
  - This makes it super easy to act directly on the data.
  - Speaking of blocks, that's exactly what objects are supposed to be.
  - So, in OOP, objects are self-contained pieces of code or blocks of code, like small applications on their own.
  - We then use these objects as building blocks of our applications make objects interact with one another.
  - These interactions happen through a so-called public interface, which we also call API.
  - This interface is basically a bunch of methods that a code, outside of the objects, can access and that we use to communicate with the object.
- Why does OOP actually exist?
  - This paradigm was developed with the goal of organizing code i.e. to make it more flexible and easier to maintain.
  - Before OOP, we might have had a bunch of codes scattered across multiple functions, or even in the global scope without any structure.
  - And this particular crazy style of code is what we call spaghetti code.
  - Spaghetti code makes it very hard to maintain large code bases and let alone, add new functionalities to it.
  - So, the idea of OOP was basically created as a solution to this problem.
  - And apparantly it worked. Because today, OOP is probably the most popular and most widely used programming paradigm in large scale software engineering.
  - Now, OOP is certainly not the only way of writing organized and maintainable code.
  - In fact, there are many other paradigms that have become increasingly popular and one of them is functional programming.
  - Functional programming allows us to achieve the exact same goal of basically avoiding spaghetti code.
    - NOTE: We will talk about functional programming later in the course and compare it with OOP. But for now, let's focus on OOP.

#### Classes and Instances (Traditional OOP)

- Now, using objects is nothing new for us at this point. We have been using them all the time.
- However, up until now, we have basically only used objects as loose collections of data and without making them interact without one another.
- Also, we didn't have a way to generate objects programmatically.
- All we ever did was use simple object literals.
- But, in OOP, we actually need a way to generate new objects from our code.
- To do that in traditional OOP, we use something called <ins>classes</ins>.
- You can think of a class as a blueprint, which can then be used to create new objects based on the rules described in the class.
- So, it is just like an architecture where the architext develops a blueprint to exactly plan and describe a house.
- But the blueprint is really just an abstract plan, like a set of rules, but nothing tangible that you can actually touch.
- However, from that blueprint, many real houses can then be built in the real-world.
- With classes, it is just the same.
- So, let's take a look at this fictional user class as an example:

```javascript
/**
 * Just a representation, NOT actual JS syntax!
 *
 * JS does NOT support real classes like represented here:
 */

// like a blueprint from which we can create new objects
User {
  user
  password
  email

  login(password) {
    // login logic
  }

  sendMessage(str) {
    // Sending logic
  }
}
```

- We say fictional because this is not actual JavaScript syntax.
- Because JavaScript does not actually support real classes like the one we are looking at here.
- We do have a class syntax in JavaScript too, but it still works a bit differently from what we are going to see here.
- However, the idea of creating object from a kind of blueprint is still a very useful mental model to have.
- Because in general terms, this is still how OOP works across all languages and that includes JS.
- That is the reason why we are learning it as a conceptual overview, and for use to have a mental model.
- Back to our fictional class, we can see that it kind of describes a user who has a username, a password, and an email.
- So, it is a description of data about a user, but it is not the data itself yet.
- Because remember, the class is really just a plan and a plan doesn't contain the real world data just yet.
- On the other hand, we then have the behavior that is associated with the data.
- In this case, that's just a login method and a method to send messages.
- So, just like we learned earlier, this calss has everything related to a user.
- So, data and behavior all packed into one nice, self-contained block.
- But now, let's use this class and actually create a new object from this class.

```javascript
// instance
{
  user: 'bhoami',
  password:'dk23s',
  email:'bhoami@email.com'

  login(password){
    // login logic
  }

  sendMessage(str) {
    // Sending logic
  }
}
```

- Now, we actually have real data about the user and the object and not just a description of the data like we have in the class.
- We call all objects created through a class, <ins>instances</ins> of that class.
- So, an instance is a real object that we can use in our code, which was created from a class, and the class itself is not an object.
- Back to the blueprint analogy from earlier, this instance is like a real house, which was created from the abstract blueprint created by the architect.
- The beauty of this is that now, we can use this class to create as many instances as we need in our application.
- Just like we can build multiple hourses from just one blueprint.
- All of these instances, of course can have different data in them, but they all share the same functionality, which is to login and send messages.
- So, now we know that we can create classes to generate objects from these classes. So, we know how classes work, but the next logical question is, how do we actually design a class?
- In other words, how do we actually model real-world data into classes?
- So, these questions are just like an architecture student asking, well, how do we actually plan and design a house?
- That's of course a very good question.
- The answer is, as you an imagine, not straightforward.
- There is not a single correct way of designing classes.
- There are, however, four fundamental principles that can guid us toward a good class implementation.
- These principles are <ins>abstraction</ins>, <ins>encapsulation</ins>, <ins>inheritance</ins>,and <ins>polymorphism</ins>.
- These are actually techniques that can also be used outside of OOP, but they are especially relevant in this context.
- So, let's take a more detailed look at each of them.

#### The 4 Fundamental OOP Principles

##### Abstraction

- The first one is abstraction.
- Abstraction basically means to ignore or to hide details that don't matter.
- This allows us to get an overview perspective of whatever it is that we are implementing instead of messing with details that don't really matter to our implementation.
- Let's say that we are implementing a phone for a user to use.
  - SIDE-NOTE: Even though this doesn't make much sense in code, it is still a great example and analogy.
- Without abstraction we could design our class to include everything that there is about the phone, including all the internal stuff like verifying the phone's temperature and voltage, turning on the vibration motor or the speaker, and other low-level details.
- But as a user interacting with a phone, do we really need all of this detail? Not really.
- So, in reality, when we interact with a real phone, all of these details have been abstracted away from us as the user; and all that we are left with is a simple phone that we basically only interact with using the home button, volume buttons, and the screen.
- Everything else is gone because, we simply don't need it as a user.
- So, the phone then operates kind of as a black box, without us seeing what is happening inside.
- Now, of course, the phone still needs to vibrate and to measure voltage or to turn on the speaker, but we can hide these details from the user.
- That is exactly what abstraction means.
- Now, going back to the example of a user from earlier, we could implement a user's phone number, mailing address, hair color, shoe size, and tons of other stuff that we might now need in our application.
- So, we simply ignore these details.
- Now, abstraction is really important, not just in OOP, but in programming in general.
- In fact, we create and use abstractions all the time.
- For example, take the `addEventListener()` function that we use all the time.
- Do we actually know how exactly it works behind the scenes? No.
- Do we care? No, and we don't have to.
- Because once more, the low-level details of how exactly it works has been abstracted away from us.
- We are simply the user.
- So, we can use that function wihout completely understanding it and without having to implement it ourselves.
- That's abstraction, which actually blends in with the next principle, which is encapsulation.

##### Encapsulation

- Encapsulation basically means to keep some properties and methods private inside the class sothat they are not accessible from outside the class.
- However, some methods can, of course, be exposed as public interface, which we call API.
- This is exactly what we meant at the beginning of the lesson when we said tha interactions between object happen through a public interface.
- Going back to our example of a user before, this is what private properties might look like conceptually:

```javascript
User {
  user
  private password
  private email

  login(word) {
    this.password === word
  }

  comment(text) {
    this.checkSPAM(text)
  }

  private checkSPAM(text) {
    // verify logic
  }
}
```

- Again, this is all hypothetical here because the `private` keyword actually does not exist in JS.
- Anyway, as we already know, outside code cannot access these properties.
- However, inside the class, they are still accessible.
- For example, the password is, of course, necessary in the login method.
- So, there we can use it.
- And by having these critical properties nicely encapsulated like this, we prevent external code from accidentally manipulating this internal state.
  - NOTE: The term "state" simply refers to an object's data.
- This is really important because allowing external code to manipulate internal state directly can cause many kinds of bugs, especially in large code bases and developer teams.
- Now, as you see, there is also a private method in the example above viz checkSPAM() method.
- Again, it is not accessible from outside a class, but it is used internally to check if a comment is spam or not.
- So, we want no one else outside of the class to be able to use this method, and so basically we don't make it part of the public interface.
- The public interface is essentially all the methods that are not private i.e. they are not encapsulated.
- So, making methods private makes it easier for us to change our code without breaking code from the outside, which might rely on some of these methods.
- For example, if the checkSPAM() method was public, then it could be used anywhere in our code.
- And if we then changed the implementation of the method, it might break that code that is relying on it.
- So again, this helps avoiding bugs and also spaghetti code.
- And really this is not just some theory, this is a real practical scenario.
- There is a real reason why encapsulaton and private methods and properties exist.
- So, in summary, we should always have the goal to nicely encapsulate most of our state and methods and only leaving essential method public for the reasons that we just learned.
- Next up, we have inheritance.

##### Inheritance

- Let's say we have two classes, user and admin.

```javascript
// Parent class
User {
  user
  password
  email

  login(password) {
    // login logic
  }

  sendMessage(str) {
    // sending logic
  }
}

// Child class
Admin {
  user
  password
  email
  permissions
}

login(password) {
  // login logic
}

sendMessage(str) {
  // sending logic
}

deleteUser(user) {
  // deleting logic
}
```

- As we can see, they have actually a lot in common.
- In fact, admin has all the properties and methods that user has.
- This makes sense because, if you think about it, an admin is also an user.
- So, an admin also need a password and an email, and he also needs to log in, for example.
- However, if we design our classes like this i.e. as two separate identities, we will end up with a lot of duplicate code and we already know that that's bad.
- That's where inheritance comes into play.
- In OOP, when we have two classes that are closely related, like user and admin here, we can have one class inherit from the other.
- So, we will have one parent class and one child class.
- The child class then extends the parent class.
- Great! But, what does all of that actually mean?
- Well, it's actually quite intuitive.
- Just like you as a child probably inherited some features of your parents, a child class inherits all the properties and methods from its parent class.
- In more formal terms, inheritance makes all properties and methods of a certain class available to a child class, which, of course, then forms a hierarchy between these two classes.
- The goal of this is to re-use logic that is common to both of the classes.
- In this case, both the admin and the user needs to log in.
- So, instead of writing that logic twice, it makes sense to inherit the login method from the more global class, which is the parent class "User", to the more specific class, which is the child class "Admin".
- Now, of course, a child class can then also have its own methods and properties.
- So at the end of the day, the child class ends up with some methods and properties from its parent and some of its own.
- So, we can say that the admin is also a user, but basically, an <ins>extended</ins> user i.e. with some added functionality.

##### Polymorphism

- Finally, the last principle is polymorphism.
- It sounds weird because it comes from Greek, where it literally means "many shapes".
- In the context of OOP, in simple terms, polymorphism means that a child class can overwrite a method that it inherited from a parent class.

```javascript
// Parent class
User {
  user
  password
  email

  login(password) {
    // login logic
  }

  sendMessage(str) {
    // sending logic
  }
}

// Child class
Admin {
  user
  password
  email
  permissions
}

login(password) {
  // DIFFERENT LOGIN
}

sendMessage(str) {
  // sending logic
}

deleteUser(user) {
  // deleting logic
}

// Child class
Author {
  user
  password
  email
  posts
}

login(password) {
  // MORE DIFFERENT
}

writePost() {
  // writing logic
}
```

- In the example above, we have our user and admin classes again. But now, we also have a third class, which is the "Author".
- Now, admin and author are both really just special kinds of users, and so it makes sense that they both inherit from the user class, just like we studied in the Inheritance.
- Therefore, they inherit all the properties and methods from the user class, but we are going ot focus on the login() method now.
- Let's say that an admin requires a different kind of login method.
- For example, a more secure one, which has two-factor authentication.
- And let's say that we also need a special login method for authors.
- So, how do we give them different login methods?
- It is quite simple actually.
- In each class we simply just write a new method, which is also called login.
- Then, according to polymorphism, that method will overwrite the login method that has been inherited from the user class.
- That's it. That's all you need to know about polymorphism.
- This wraps up the introduction to OOP.
- This was a lot to take in so make sure you understand everything before moving on, in this section.
- Next up, we will talk about what OOP actually looks like in JS because, as mentioned earlier, it is implemented a bit differently from what we learned in this lesson.

### OOP in JavaScript

- In this lesson, we will learn about OOP specifically in JavaScript - how it is different from the more traditional OOP and also different ways of implementing this paradigm in JavaScript.

#### OOP in JavaScript: Prototypes

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/13645acc-5485-4ddc-abd7-a8a02b1ccb7b)

##### Classical OOP: Classes

- Just to review, in the last lesson, we talked about the classical OOP model with classes and instances created from these classes.
- Remember, a class is like a blueprint which is a theoretical plan which we use to build many houses in the real world.
- In the same way, the theoretical class can be used to create actual objects which are called instances which we can then use in our code.
- This process of creating an instance is called <ins>instantiation</ins>.
- Earlier, we mentioned that in JavaScript, things works a bit differently. So, why did we first learn about classes and instances?
- It is because we do have similar concepts in JavaScript and so, it is very useful to first understand the class instance model.
- Plus, many people also use this terminology in the context of JavaScript.
- Finally, JavaScript syntax itself uses also some of these terms for example, instances.
- So, you really need to know what a class is and what an instance is.
- Anyway, how does OOP actually work in JS?

##### OOP in JS: Prototypes

- In JS we have something called <ins>prototypes</ins> and all objects in JS are linked to a certain prototype object.
- So we say that each object has a prototype.
- The prototype object contains methods and properties that all the objects that are linked to that prototype, can access and use.
- This behavior is usually called <ins>prototypal inheritance</ins>.
- Again, prototypal inheritance means that all objects that are linked to a certain prototype object can use the methods and properties that are defined on that prototype.
- Basically, objects inherit methods and properties from the prototype which is the reason why this mechanism is called prototypal inheritance.
- Just note that this inheritance is actually different from the inheritance that we talked about in the last lesson.
- That was one class inheriting from another class.
- But, in this case, it is basically an instance inheriting from a class.
- That's very different so, keep that in mind.
- We can also say that objects delegate behavior to the linked prototype object.
  - Behavior is just another term for methods.
- So besides prototypal inheritance, we also call this mechanism, <ins>delegation</ins>.
- So technically, objects delegate their behavior to the prototype.
- On the other hand, in classical OOP with classes, the behavior, so the methods, are actually copied from the class to the object. So, that is completely different.
- Don't stress out about the terminology here. It is a lot of new concepts and words to take in but, this is just to paint a very clear picture and to provide a complete overview.
- What matters is that you understand how the prototypal inheritance actually work.
- Anyway, we have actually already seen this mechanism in action many times before but, without knowing that it was happening.
- For example, each time that we used an array method like `map()`, we are able to use that method because of prototypal inheritance.
- So, when you go to MDN to check the documentation for any array method, what you will see there is that it is actually called `array.prototype.map()`. But, why is that relevant? What does that mean?
- Well, `array.prototype` is the prototype object of all the arrays that we create in JavaScript.
- This prototype object contains all the array methods, including `map()`.
- So, this where they are defined.
- Since `array.prototype` is the prototype of an example array `num = [1, 2, 3];`, it means that `num` is linked to that prototype.
- Therefore, it is has access to all the methods that are defined on the `array.prototype` object, just like the `map()` method.
- So, in a sense, our array inherits the `map()` method. Or again, we can also say that the array delegated the behavior of mapping to its prototype.
- You can choose whatever makes more sense in your mind.
- But what matters is that the `map()` method is actually not defined on the `num` array itself but, on its prototype.
- Also, we are going to check out this behavior in our code practice.

#### 3 Ways of Implementing Prototypal Inheritance in JavaScript

- Right now you might have a ton of questions in your head:
  - How do we actually create prototypes?
  - How do we link objects to prototypes?
  - How can we create new objects without having classes from which we can instantiate objects?
- In summary, the question is: "How do we implement OOP in JS in practice?".
- In JavaScript, there are 3 different ways of doing all this:
  - Constructor functions
  - ES6 Classes
  - `Object.create()`

##### Constructor Functions

- So, first, constructor functions are a way of creating objects programmatically, using a function which will also set the new object's prototype.
- This is actually how built-in objects like arrays or maps or set are implemented.
- Also, this is how OOP has been done in JS since the beginning.

##### ES6 Classes

- The ES6 release introduced classes into JavaScript.
- So now, ES6 classes are actually the more modern way of doing OOP in JS.
- However, keep in mind that these are actually not the kind of classes that we talked about in the last lesson and earlier in this lesson.
- They are instead just so-called <ins>syntactic sugar</ins> over constructor functions.
- This means that ES6 classes are basically just a layer of abstraction over constructor functions.
- So, it is really just a nicer syntax that makes it easier for newcomers to do OOP in JS.
- But, behind the scenes, ES6 classes are actually implemented with constructor functions.
- So, they also use prototypal inheritance just like we learned in the earlier.

##### Object.create()

- Finally, there is also the `Object.create()` function which is basically the easiest and the most straightforward way of linking an object to a prototype object.
- However, it is not as used as the other two methods as we will see over the next couple of lessons.
- Now, to finish, one more important thing to keep in mind is that the four principles of OOP that we learned in the last lesson viz abstraction, encapsulation, inheritance, and polymorphism are still valid and important with prototypal inheritance.
- Throughout this section, we will of course learn how to use and implement these principles.

### Constructor Functions and the new Operator

- Let's finally implement OOP now, starting with constructor functions.
- We actually kind of used OOP before, but in a very limited way because, we had no way of programmatically creating objects.
- So, all we did was to use some simple object literals.
- But now, all of that changes with constructor functions.
- We can use constructor function to build an object using a function.
- A constructor function is actually a completely normal function.
- The only difference between a regular function and a function that we call constructor function, is that we call a constructor function with the `new` operator.
- Let's now create a constructor function for a person.
- In OOP, there is this convention that constructor functions always start with a capital letter. So, we should follow that convention too.
- In fact, other built-in constructors like array or map, follow that convention as well.
- In this example, we are using function express but, function declaration will also work.
- An arrow function will not work as a function constructor. That's because it doesn't have its own `this` keyword and we need that.
- So, only function declarations and function expression work.

```javascript
const Person = function () {};
```

- Now remember that this function is basically going to produce an object and in this case, for a person.
- So, we want a person to have a `firstName` and `birthYear` so, we specify those as parameters in our constructor function so that we can then pass in the name and the birth year.

```javascript
const Person = function (firstName, birthYear) {};
```

- Now let's call this function.
- As mentioned previously, the only difference between a regular function, and a constructor function is that we call the constructor using the `new` keyword.

```javascript
const Person = function (firstName, birthYear) {};

new Person('Bhoami', 1995);
```

- This `new` operator is a very special operator because what it does is to call the `Person()` function but, it does a whole lot more than just that.
- So, let's see what exactly happens when we call a function with a `new` operator:
- Behind the scenes, there happen 4 steps:
  - 1. New empty object is created
  - 2. Function is called - In this function call, the `this` keyword will be set to the newly created object (in step 1)
    - Basically, in the execution context of the `Person()` function, the `this` keyword will point to the newly created empty object from step 1.
    - Remember that all of this happens because we are calling the function using the `new` operator.
  - 3. The newly created object is linked to a prototype. (more about this in next lesson)
  - 4. The last step is that the object that was created in the beginning is then automatically returned from the constructor function.
    - So, the function automatically returns the empty object from the beginning.
    - But actually, at this point, the object no longer needs to be empty.
    - And this is actually the trick of making the constructor function work.
- So, let's log the `this` keyword inside the `Person()` constructor function.

```javascript
const Person = function (firstName, birthYear) {
  console.log(this);
};

new Person('Bhoami', 1995);
```

- We already know that the `this` keyword should be the empty object that was created in step 1. Because the `this` keyword inside the constructor function will be exactly the empty object.
- Again, that's because we are calling it with the `new` keyword.
- This is what we get from the log: `Person {}`
- The browser console is actually already telling us that it is basically of the type `Person`. So, it just the name of the constructor function.
- Now, let's use this knowledge to our advantage because, we already know that in the end of this function, the `this` keyword will basically be returned.
- So, whatever we add to that empty object, will then be returned from the constructor function.
- That returned object, is going to be the object, that we are trying to build here.
- So, all we need to do is to now take that `firstName` parameter, so the value that we receive, and then create a property on the `this` keyword with the same name and then set it to that value, like so:

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;
};

new Person('Bhoami', 1995);
```

- Now let's store the returning value from the constructor function into a variable, and look at it in the console.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}
```

- This is what we get: `Person {firstName: 'Bhoami', birthYear: 1995}` in the console.
- Let's quickly recap what just happened here:
  - We are calling the constructor function with the `new` keyword or the `new` operator.
  - Therefore, a new empty object is created right away.
  - Then the function is called and the `this` keyword in that function is set to a newly created empty object.
  - Then, in the function, we start to set properties to that object.
  - We give those properties the exact same name as the parameters that we are passing in the constructor function.
  - Of course, they could have any other name, it doesn't have to be the same name as our arguments/parameters but, this is kind of a convention.
  - So, if we pass in `firstName` then we should also create a property called `firstName`.
  - So then, by the end of the function, our `this` keyword now has two new properties that we set inside the constructor function's body.
  - Then in step 4, that object that was created in the beginning, is then automatically returned from the function.
  - So, at this point, that is the object with the two properties - that's going to be the result of this function call.
- Now, we can use this constructor function to create as many different objects as we want.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}
```

- So, as you can see, we can really create as many objects now, based on the constructor function, as we like.
- So, this is a bit like the analogy from before, where the constructor function is now like a blueprint for a house, and then each of these objects that we create through the constructor function will be the actual house in the real world.
- So, in this case, the actual objects with actual data in them.
- So, each of them i.e. `bhoami`, `jonas`, and `matilda` are their own object that we created programmatically, using a constructor function.
- Now remember from one of the previous lessons, that in classical OOP, an object created from a class is called an instance.
- Now, we didn't technically create a class here because, as we discussed before, JS doesn't really have classes in the sense of traditional OOP.
- However, we did create an object from a constructor function. Actually 3 objects.
- And constructor functions have been used since the beginning of JavaScript to kind of simulate classes.
- So, therefore, we can still say that `bhoami` is an instance of `Person()`. The same goes for `jonas` and `matilda`.
- In fact, there is even an operator that we can use to test for that.
- The operator is `instanceof`

```javascript
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}

const jay = 'Jay';

console.log(bhoami instanceof Person); // true
console.log(jay instanceof Person); // false
```

- The `instanceof` will return `true` or `false`.
- Since we are talking about instances here. We can say that the `this.firstName` and `this.birthYear` in the constructor function will be the instance properties.
- That's because the properties `firstName` and `birthYear` will be available on all the instances that are created through the `Person()` constructor function.
- That's for properties but now, what about methods? What if we wanted to add a method to our objects?
- Well, just like we added properties, we can of course also add methods.
- So, let's create a method `calcAge()`

```javascript
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  // we can do the same with birthYear
  this.birthYear = birthYear;

  // creating a method - this works but this is a bad practice - never create a function inside of the constructor function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person {firstName: 'Jonas', birthYear: 1991}

const matilda = new Person('Matilda', 2017);
console.log(matilda); // Person {firstName: 'Matilda', birthYear: 2017}

const jay = 'Jay';

console.log(bhoami instanceof Person); // true
console.log(jay instanceof Person); // false
```

- So, we can create a method inside the constructor function as we did in the example above but, it is a bad practice.
- We should never create a method inside of a constructor function.
- That's because imagine we are going to create a 100s or even 1000s or 10,000s objects of the constructor function. Then what would happen is that each of these objects would carry around the method.
- So, if we had a 1000 objects, we would essentially create a thousand copies of `calcAge()` function.
- That would be terrible for the performance of our code. So, don't create a method inside of the constructor function.
- But instead, to solve this problem, we are going to use prototypes and prototype inheritance just like we discussed in the last lesson.
- That's it!
- These are the basics of constructor functions.
- Just note that function constructors are not really a feature of the JS language.
- Instead, they are simply a pattern that has been developed by other developers, and now, simply everyone uses it.
- So, the real magic here is the `new` operator.
- So, the most important thing to understand from this lesson, are really the four steps that happen behind the scenes when we use the `new` operator.
- So, make sure you understand them and then in the next lesson, we will work with prototypes and finally see the magic of prototypal inheritance in action.

### Prototypes

- Now it is time to finally start using prototypes, and after this, you will feel like a real pro-developer.
- We will continue with the example from the previous lesson.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);
```

- But now we are going to talk about prototypes.
- We talked about prototypes, prototypal inheritance, and delegation earlier already but, how does all of that actually work?
- It can be summarized like this:
  - First, each and every function in JS automatically has a property called `prototype`, and that includes constructor functions.
  - Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.
  - In our case, it would be `Person.prototype`.
  - So, all the objects that are created through the constructor function will inherit i.e. they will get access to all the methods and properties that are defined on the `prototype` property.
- Let's now actually add a method to this `prototype` property. Since `prototype` is an object, we can use the dot operator to add a method to it.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);
```

- Each object created by `Person` constructor function will now get access to all the methods of its `prototype` property.
- So, we should be able to use `calcAge()` on `bhoami` object.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42
```

- Indeed, we get to the correct age. So, it worked!
- So we can now use the `calcAge()` method on the `bhoami` object even though it is not really on the object itself.
- So, if we log the `bhoami` object, you will see that it contains `birthYear` and `firstName` but, it does not contain `calcAge()`.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}
```

- But still, we have access to it because of prototypal inheritance.
- The same will work for other objects as well.
- So, that effectively solves the problem that we talked about in the last lesson.
- In a nutshell, this is how we implement very basic prototypal inheritance in JavaScript in practice.
- So we just observed that `bhoami` and `jonas` objects are kind of somehow connected to the `Person()`. That's why they can have access to the methods in the `prototype` property of `Person()`.
- But, how and why does this actually work?
- It works because any object always has access to the methods and properties from its prototype.
- And the prototype of `bhoami` and `jonas` is `Person.prototype`.
- We can confirm that because each object has a special property called `__proto__`. This might look weird but, it is just how it works.

> [!WARNING]
>
> `__proto__` is deprecated. Instead use `Object.getPrototypeOf()`
>
> We also have `Object.setPrototypeOf()`.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));
```

- So, here we get the prototype of `bhoami`.
- It is not the prototype property but, it is simply the prototype.
- In this, we see the `calcAge()` function and that's why `bhoami` is able to use it.
- So the prototype of `bhoami` object is essentially the `prototype` property of the constructor function.
- So, let's check that as well.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true
```

- Indeed, it is true.
- But, what we just learned was probably a bit confusing.
- Shouldn't the `Person.prototype` be the `prototype` of the `Person` i.e. should the `prototype` property not be the prototype of `Person()`.
- Actually no. This is the confusing part. The `Person.prototype` is not actually the prototype of `Person()`.
- Instead, it is what is going to be used as the prototype of all the objects that are created with the `Person()` constructor function.
- So that is a subtle but important difference that you need to keep in mind.
- In fact, what we just said is confirmed by the comparison we just did above.
- There are actually other built-in methods that we can use to prove it by using `isPrototypeOf()` method like so:

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(bhoami)); // true
```

- This confirms one more time that `Person.prototype` is indeed the prototype of `bhoami`.
- The same would be true for any other object created using the `Person()` constructor function.
- But, `Person.prototype` is not the prototype of `Person()`, we can confirm that as well:

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true

// Person.prototype is the prototype of `bhoami` or any other object created by Person() constuctor function
console.log(Person.prototype.isPrototypeOf(bhoami)); // true

// Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); // false
```

- This very common confusion comes from bad naming of the `prototype` property.
- So, the fact that it is called `prototype` implies that it is a `prototype` of `Person()` but, as we just learned, it is actually not.
- Probably shouldn't be called "prototype" but instead, something like `prototypeOfLinkedObjects` or something similar.
- So, if it makes things easier then you can think of the `prototype` property as `prototypeOfLinkedObjects` property; even though of course it is not called that.
- So, take some time to really understand what the `prototype` of what object actually is here.
- Anyway, where does this `__proto__` property on `bhoami` actually comes from?
- Remember the `new` operator that we talked about? It contains the step number 3 where the newly created empty object is linked to `prototype`.
- So basically, it is the step number 3 which will create the `__proto__` property and sets its calue to the `prototype` property of the function that is being called.
- So, this is how JavaScript knows internally that the `bhoami` object is connected to `Person.prototype`.
- In fact, when we check the object created from the constructor function i.e. `console.log(bhoami)`, we will see the `prototype` on the console.
- So, we are essentially trying to understand what the `__proto__` property is, what is the `prototype` of the constructor and how they are all linked - because this is one of the most important things, and also one of the most difficult things to understand in JavaScript.
- There will also be a couple of diagrams in the next lesson that will basically bring all this knowledge together in an easier to understand way.
- Now, another thing that we need to learn is that we can also set properties on the prototype, not just methods.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true

// Person.prototype is the prototype of `bhoami` or any other object created by Person() constuctor function
console.log(Person.prototype.isPrototypeOf(bhoami)); // true

// Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); // false

// creating a property on the prototype
Person.prototype.species = 'Homo Sapiens';

console.log(bhoami);
console.log(bhoami.species); // Homo Sapiens
```

- Now if we take a look at `bhoami` or any other object created using `Person()`, then in its `prototype` you will see the `species` property.
- So, we can then do `bhoami.species` and then the `bhoami` object will then inherit the `species` property from the `prototype`.
- However, when we take a look at `bhoami`, the `species` is not really directly in the object, so it is not its own property.
- Own properties are only the ones that are declared directly on the object itself - not including the inherited properties.
- In JS, there is a way of checking for that using the `hasOwnProperty()` method.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const bhoami = new Person('Bhoami', 1995);
console.log(bhoami);

console.log(bhoami instanceof Person);

// taking a look at the prototype property:
console.log(Person.prototype);

// Adding a method to the prototype object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// taking a look at the prototype property after adding the calcAge() method
console.log(Person.prototype);

// using calcAge() on `bhoami` object
bhoami.calcAge(); // 42

console.log(bhoami); // Person {firstName: 'Bhoami', birthYear: 1995}

// prototype of bhoami
console.log(bhoami.__proto__);
console.log(Object.getPrototypeOf(bhoami));

// confirming that prototype of `bhoami` is the same as `Person()` prototype property
console.log(bhoami.__proto__ === Person.prototype); // true
console.log(Object.getPrototypeOf(bhoami) === Person.prototype); // true

// Person.prototype is the prototype of `bhoami` or any other object created by Person() constuctor function
console.log(Person.prototype.isPrototypeOf(bhoami)); // true

// Person.prototype is not the prototype of Person
console.log(Person.prototype.isPrototypeOf(Person)); // false

// creating a property on the prototype
Person.prototype.species = 'Homo Sapiens';

console.log(bhoami);
console.log(bhoami.species); // Homo Sapiens

// checking for properties that are directly on the object itself
console.log(bhoami.hasOwnProperty('firstName')); // true

// this is false because this property is not really inside of `bhoami` object. It simply has access to it because of its prototype.
console.log(bhoami.hasOwnProperty('species')); // false
```

- Sometimes, this method can be quite helpful in certain situations.

### Prototypal Inheritance and The Prototype Chain

- Let's now consolidate the knowledge that we got over the last two lessons in a nice diagram that brings everything together that we know so far.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/4a55f2e5-2660-4c16-8c12-8e756540813c)
- Everything starts with the `Person()` constructor function that we have been developing.
- This constructor function has a prototype property which is an object and inside that object, we defined the `calcAge()` method.
- And `Person.prototype` itself actually also has a reference back to person which is the `constructor` property.
- So, essentially `Person.prototype.constructor` is going to point back to person itself.
- Remember that `Person.prototype` is actually not the prototype of `Person()` but of all the objects that are created through the `Person()` function.
- Speaking of created objects, let's now analyze how an object is created using the `new` operator and the constructor function.
- So, when we call a function, any function with the `new` operator, the first thing that is going to happen is that a new empty object is created instantly.
- Then the `this` keyword and the function call is set to the newly created object.
- So, inside the function's execution context, this is now the new empty object and that's why in the function's code we set the `firstName` and `birthYear` properties on the `this` keyword because doing so, will ultimately set them on the new object.
- Next comes the magical step.
- Now the new object is linked to the constructor function's prototype property, in this case, `Person.prototype`.
- This happens internally by adding the `__proto__` property to the new object.

> [!WARNING]
>
> `__proto__` is deprecated. Instead use `Object.getPrototypeOf()`
>
> We also have `Object.setPrototypeOf()`.

- So, `Person.prototype` is now the new object's prototype which is denoted in the `__proto__` property of `jonas` (the example in the image above).
- Again, `__proto__` always points to the an object's prototype and that is true for all objects in JavaScript.
- Finally, the new object is automatically returned from the function unless we explicitly return something else.
- But in a constructor function like `Person()`, we usually never do that.
- With this, the result of the `new` operator and the `Person()` constructor function is a new object that we just created programmatically and that is now stored in the `jonas` variable.
- This whole process, is how it works with functions constructors and also with ES6 classes but not with the `Object.create` syntax, that we are going to use later.
- So, just keep this in mind once we reach the `Object.create` lectures.
- Why does this work this way and why is this technique so powerful and useful?
- To answer that, let's see `jonas.calcAge()` line of code.
- Here we are attempting to call the `calcAge()` function on the `jonas` object.
- However, JS can actually not find the `calcAge()` function directly in the `jonas` object.
- It is simply not there and we already observed this behavior in the last lesson.
- So, what happens now, in this situation?
- Well, if a property or a method cannot be found in a certain object, JS will look into its prototype and there it is.
- So, there is the `calcAge()` function that we were looking for and so JS will simply use that one.
- That's how the `calcAge()` function can run correctly and return a result.
- And the behavior that we just described is what we already called <ins>Prototypal Inheritance</ins> or <ins>Delegation</ins>.
- So, the `jonas` object inherited the `calcAge()` method from its prototype or in other words, it delegated the `calcAge()` functionality to its prototype.
- The beauty of this is that we can create as many `Person` objects as we like and all of them will then inherit this method.
- So we can call this `calcAge()` method on all the `Person` objects without the method being directly attached to all the objects, themselves.
- And this is essentially for code performance.
- Just imagine that we had a 1,000 objects in the code and if all of them would have to carry the `calcAge()` function around, then that would certainly impact performance.
- So instead, they can all simply use the `calcAge()` function from their common prototype.
- Now the fact that `jonas` is connected to a prototype and the ability of looking up methods and properties in a properties in a prototype is what we call the <ins>prototype chain</ins>.
- So the `jonas` object and it's prototype basically form a prototype chain but actually, the prototype chain does not end here.
- So, let's understand the prototype chain a bit better by zooming out and looking at the whole picture.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/65ecc186-5660-4bc5-a24e-c69245b99201)
- Here is the diagram that we already had with the `Person()` function constructor and its prototype property and the `jonas` object linked to its prototype via the `__proto__` property.
- Now, remember that `Person.prototype` itself is also an object, and all objects in JS have a prototype.
- Therefore, `Person.prototype` itself must also have a prototype.
- And the `prototype` of `Person.prototype` is `Object.prototype`.
- Why is that?
- Well, `Person.prototype` is just a simple object. Which means that it has been built by the built-in `Object()` constructor function.
- And this is actually the function that is called behind the scenes whenever we create an object literal. So, just an object with curly braces.
- Essentially, the curly braces are just like a short-cut to writing `new Object()`.
- Anyway, what matters here is that `Person.prototype` itself needs to have a prototype and since it has been created by the `Object()` constructor function, its prototype is going to be `Object.prototype`.
- It is the same logic as with the `jonas` object.
- Since `jonas` is built with `Person()`, `Person.prototype` is the prototype of `jonas`.
- Now thsi entire series of links betweent he objects is what is called the <ins>prototype chain</ins> and `Object.prototype` is usually the top of the prototype chain - which means that its prototype is `null`.
- So, its `__proto__` property will simply point to `null` - which then marks the end of the prototype chain.
- So, in a certain way, the prototype chain is very similar to the scope chain but with prototypes.
- So, in the scope chain, whenever JS can't find a certain variable in a certain scope, it looks up into the next scope and a scope chain and tries to find the variable there.
- On the other hand, in the prototype chain, whenever JS cannot find a certain property or method in a certain object, it is going to look up in the next prototype in the prototype chain and see if it can find it there.
- So again, the prototype chain is pretty similar to the scope chain but, instead of working with scopes, it works with properties and methods in objects.
- Now, let's see another example of a method lookup. To do that we call the `hasOwnProperty()` method on the `jonas` object.
- So, just like before, JS is going to start by trying to find the called method on the object itself.
- But of course, it can't find the `hasOwnProperty()` method on `jonas`.
- So, according to how the `prototype` chain works, it will then look into its prototype, which is `Person.prototype`.
- Now we didn't defin any `hasOwnProperty()` method there either. So, JS is not going to find it there.
- Therefore, it will move up even further in the prototype chain and now look into the `Object.prototype`.
- `Object.prototype` does actually contain a bunch of built-in methods and `hasOwnProperty()` is one of them.
- Great! So, JS can then take it and run it on the `jonas` object as if the `hasOwnProperty()` had been defined directly on `jonas`.
- Remember that the method has not been copied to the `jonas` object.
- Instead, it simply inherited the method from `Object.prototype` through the prototype chain.
- This is, in a nutshell, the magic of prototypes and a prototype chain.
- this will actually become even more interesting and useful once we add inheritance between two different kinds of objects or two different classes, so to say.
- For example, having a `Student` class inherit from a `Person` class just like we learned in one of the 4 pillars of OOP.
- So, there is a lot of exciting stuff ahead, so let's move on.

### Prototypal Inheritance on Built-in Objects

- `constructor` property
  - Returns a reference to the constructor function that created the instance object.
  - Note that the value of this property is a reference to the function itself, not a string containing the function's name.
  - Any object (with the exception of `null` prototype objects) will have a `constructor` property on its `[[Prototype]]`. Objects created with literals will also have a `constructor` property that points to the constructor type for that object -- for example, array literals create `Array` objects, and object literals create plain objects.
- `console.dir()`
  - It is a static method which displays a list of the properties of the specified JavaScript object.
  - In browser console, the output is presented as a hierarchical listing with disclosure triangles that let you see the contents of child objecs.
  - In other words, `console.dir()` is the way to see all the properties of a specified JS object in the console.

#### Building a custom property/method on Array prototype

- We know at this point that any array inherits all their methods from its prototype.
- Therefore, we can use that knowledge to extend the functionality of arrays even further.
- So, all we would have to do is to say `Array.prototype` then use the dot operator on it and add a new method to the Array prototype and then all the arrays will inherit it.

```javascript
const arr = [3, 2, 4, 3, 4, 2, 1, 1, 5, 6];

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique()); // [3, 2, 4, 1, 5, 6]
```

- However, what we did here i.e. extending the prototype of a built-in object is generally not a good idea.
- If you are working on a small project on your own then you might be able to get away with it but, really, don't get into the habit of doing this for multiple reasons.
- The first reason is that the next version of JS might add a method with the same name that we are adding but, it might work in a different way.
- So, your code will then use that new method, which remember, works differently, thereby breaking your code.
- The second reason why you shouldn't do this is because when you work on a team of developers, then this is really going to be a bad idea, because if multiple developers implement the same method with a different name then that's just going to create so many bugs that it is not worth doing this.
- So, it is just a nice and fun experiment but in practice, you really shouldn't do it.

#### Looking at Prototypes of More Built-In Objects

- HTML Elements:
  - Remember that all DOM elements are behind the scenes objects so, we can check their prototypes as well using the `__proto__` property.
- Functions
  - Functions are also objects in JS so, we can take a look at their prototype as well using `__proto__`

### ES6 Classes

- We learned how to implement prototypal inheritance with constructor functions and then manually setting methods on the constructor function's prototype property.
- But now it is time to turn our attention to ES6 classes, which essentially allow us to do the exact same thing but using a nicer and more modern syntax.
- As mentioned earlier, classes in JS do not work like traditional classes in other languages like Java or C++.
- Instead, classes in JS are just syntactic sugar over what we learned in the last few lessons.
- They still implement prototypal inheritance behind the scenes but with a syntax that makes more sense to people coming from other programming languages. That was the basic goal of adding classes to JS.
- Anyway, let's now implement `Person()` using a class:

```javascript
class PersonCl {}
```

- This is a class declaration but, just like in functions, we also have class expressions.

```javascript
// class expression
const PersonClExpr = class {};

// class declaration
class PersonClDecl {}
```

- You can pick whichever you like the most.
- It is just like a function declaration or function expression but, without any arguments. This is because, in fact, classes are just a special type of functions.
- So, although we use the `class` keyword here, behind the scenes, classes are still functions, and therefore, we have class expressions and class declarations.
- For now, let's continue with class declaration.
- Inside the class, the first thing that we need to do is to add the constructor method.

```javascript
const PersonCl {
  constructor() {}
}
```

- The constructor method actually works in a pretty similar way as a constructor function, as we studied previously but this one is actually a method of `class`.
- In fact, it needs to be called `constructor()` - that is the rule.
- But just like in constructor functions, we pass in arguments basically for the properties that we want the object to have.

```javascript
const PersonCl {
  constructor(firstName, birthYear) {}
}
```

- Now, the act of creating a new object actually also works in the exact same way as before i.e. using the `new` operator.
- Therefore, whenever we create a new object using the `new` operator, this `constructor()` will automatically be called.
- Let's try that:

```javascript
const PersonCl {
  constructor(firstName, birthYear) {}
}

const jessica = new PersonCl('Jessica', 1989);
```

- As you see, everything about creating a new instance is exactly the same as ebfore. We also use the `new` keyword.
- Therefore, just like before, the `this` keyword inside of the constructor will also be set to the newly created empty object.
- So, just like before, we set the properties of the object like this:

```javascript
const PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1989);
console.log(jessica);
```

- Basically, when we create a new instance, then it is the `constructor()` method inside the class that is going to be called and it will return a new object and then that object will be stored into `jessica`.
- So, now we have the properties that will be stored in the new object that we want to create.
- Now it is time for the methods.
- The methods we simply write like this:
  - So we simply add it inside the class. It is very easy and convenient.

```javascript
const PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge () {
    console.log(2037 - this.birthYear)
  }
}

const jessica = new PersonCl('Jessica', 1989);
console.log(jessica);
```

- What's important to understand here is that all of these methods that we write in the class, outside of the `constructor()` method, will be on the prototype of the objects, and not on the object themselves.
- So, this is really just like before, prototypal inheritance.
- We can confirm that by inspecting the `jessica` object on the console and checking it's prototype.

```javascript
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true
```

- So, as you see, `PersonCl` acts just like any other function constructor but, the only difference is that this code looks a bit nicer.
- So, with this syntax, we don't have to manually mess with the prototype property.
- All we have to do is to write the methods inside the class but, outside the `constructor()` method. Then they will automatically be added to the `prototype` property of the class basically.
- We can take this demonstration even further but also adding a method manually to the prototype.

```javascript
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

jessica.greet();
```

- So, as you see, this works.
- This is just one more proof that the class really just hides the true nature of the prototypal inheritance in JS.
- We could also add greet() directly in the class, like shown below.
- Notice that there are no commas between two functions added in the class.

```javascript
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica); // PersonCl {firstName: 'Jessica', birthYear: 1996}
jessica.calcAge(); // 41
console.log(jessica.__proto__ === PersonCl.prototype); // true

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
```

- So, this is great for people who are coming from another language and have experience with object-oriented programming, because it is going to be a bit easier for these developers to start writing object-oriented code in JavaScript.
- Now, if you are one of these developers, then please make sure that before just starting to use classes, you really, truly understand function constructors and the prototype, and the whole prototype chain logic.
- Important things to keep in mind:
  - First, classes are not hoisted, even if they are class declarations.
    - Function declarations are hoisted, which means that we can use them before they are declared in the code but, with classes, that doesn't work.
  - Second, just like functions, classes are also first-class citizens.
    - This means that we can pass them into functions and also return them from functions.
    - This because, as mentioned earlier, classes are really just a special kind of function behind the scenes.
  - Third, the body of a class is always executed in strict mode.
    - So, even if we didn't activate the strict mode for our entire script, all the code that is in the class will be executed in strict mode.
- So, keep these points in mind if you want to work with classes.
- Now you might ask if you should use contructor functions, like we have been doing or is it better to use classes?
  - The first remark here is that constructor functions are not like old or deprecated syntax.
  - It is 100% fine to keep using them.
  - Therefore, this is more a question of personal preference.
- Should you use classes without understanding prototypal inheritance, then the answer is no.
- Some people actually say that classes are really bad in general and that no one should ever be using them simply because they hide the true nature of JavaScript.
- But, it is absolutely okay to use classes in your code, as long as you understand everything that we learned so far about prototype and prototypal inheritance.
- So, you cannot skip that part, because you want to become an expert in JS, and also, you want to feel comfortable while writing your code and that essentially means to understand exactly what your code does.
- So, if you want to be confident, you need to understand.
- What a good benefit of using class is that it visually puts all the code that belongs to certain class into one nice block.
- With constructors, it might look like a big mess.
- But in the end, it all comes down to personal preference.

### Setters and Getters

- Let's now talk about a feature that is actually common to all objects in JavaScript, and that's getters and setters.
- Every object in JavaScritp can have setter and getter properties.
- We call these special properties <ins>assessor properties</ins>, while the more normal properties are called <ins>data properties</ins>.
- So getters and setters are basically functions that get and set a value, just as their names suggests but, on the outside they still look like regular properties.
- So first, let take a look at getters and setters in a simple object literal.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
};
```

- To add a getter to this object, we can start by basically writing a normal method.
- Let's say that we want a method to get the latest movement so, let's call it "latest". Then, to transform it into a getter, we simply prepend the keyword `get`.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
};
```

- Now we can use this getter like shown below:
  - So, we simply use it like a property. We don't call the method but instead, we write it as if it was just a property.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
};

console.log(account.latest); // 300
```

- Indeed, that returns 300.
- So, this can be very useful when we want to read something as a property, but still need to do some calculations before.
- Now, we can do the same as a setter by using the `set` keyword.
- So, let's create a setter method which basically adds a new movement to the `movements` array.
- And any setter method needs to have exactly one parameter. In our case, it will simply be a movement.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
```

- Now, it is not mandatory to specify a setter when we have a getter for the same property.
- Just a getter or just a setter would be enough.
- So, how do we use the setter now?
- If it was a regular method then we would have done this: `account.latest(50)`.
- But now, this is like a property, not a method.
- So, we can simply set it just like we would set any other property, like so:

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]
```

- So now if we look at the `movements` array, it will give us the complete array along with '50'.
- So in a nutshell, this is how getters and setters work for any regular object in JavaScript.
- However, classes do also have getters and setters, and they do indeed work in the exact same way.
- So, let's try them out with the person class example. We can add a getter for the age property.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}
```

- This is similar to the `calcAge()` method but, that doesn't matter. All we need to understand is how the getters and setters work in a class.
- Now we can essentially read the age of any object using a property.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jennifer = new PersonCl2('Jennifer', 1996);

console.log(jennifer.age);
console.log(jennifer);
```

- So, as you see, we get the result that we expected.
- So, the getter is indeed just like any other regular method that we set on the prototype.
- In fact, we can confirm that by looking at `jennifer` object.
- Now, what we did so far was a very simple use case of a getter.
- But, setters and getters can actually be very useful for data validation.
- Let's see an example, let's try some validation with the name.
- To do that, we will first take a fullName instead of firstName in Person class.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jennifer = new PersonCl2('Jennifer', 1996);

console.log(jennifer.age);
console.log(jennifer);
```

- Now, we are to expect a full name which basically contains a space between first name and last name.
- Now we can create a setter for the `fullName` property which will check if it is actually a full name.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const jennifer = new PersonCl2('Jennifer Davis', 1996);

console.log(jennifer.age);
console.log(jennifer);
```

- In this case, what is important to understand is that we are creating a property name that does already exist.
- So, `fullName` is already a property that we are trying to set inside the `constructor()` method but then, we also have the setter.
- So now what is going to happen is that each time this code is executed, so whenever we set the `fullName` inside the constructor then actually the setter method `fullName()` is going to be executed.
- So, the name that we pass in as `fullName` in the `constructor()` method, will then become `name` in the setter method `set fullname()`.
- Right now, we get an error and it is very cryptic error. What happens here is that there is a conflict.
- Right now both the setter function and the constructor function are trying to set the exact same property name.
- That gives origin to this weird error.
- So, what we do instead is to create a new property name inside the setter method, and the convention of doing that is adding an underscore at the start of the property name.
- Again, this is just a convention, it is not a JS feature. It is really just a different variable name to avoid the naming conflict.
- However, now when we do this, we are actually creating a new variable.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const jennifer = new PersonCl2('Jennifer Davis', 1996);

console.log(jennifer.age);
console.log(jennifer);
console.log(jennifer._fullName); // Jennifer Davis
console.log(jennifer.fullName); // undefined - it simply does not exist
```

- So, if we try to look at `jennifer` object, the property that exists is `_fullName`.
- Now we cannot do `jennifer.fullName` because that simply doesn't exist.
- To fix this, we now also need to create a getter for the `fullName` property. It will simply return `_fullName`.

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jennifer = new PersonCl2('Jennifer Davis', 1996);

console.log(jennifer.age);
console.log(jennifer);
console.log(jennifer._fullName); // Jennifer Davis
console.log(jennifer.fullName); // Jennifer Davis
```

- Now when we log `jennifer.fullName` we get the result that we want.
- Of course, the actual property that is still in the `jennifer` object is `_fullName` because that's what we do in the setter.
- But then, we can also compute the `fullName` just as we can compute the `age`.
- So this pattern is important to understand whenever we try to set a property that already exists.
- Now let's try another name with just `firstName`

```javascript
const account = {
  owner: 'Bhoami',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // 300
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
}

const jennifer = new PersonCl2('Jennifer Davis', 1996);

console.log(jennifer.age);
console.log(jennifer);
console.log(jennifer._fullName); // Jennifer Davis
console.log(jennifer.fullName); // Jennifer Davis

const walter = new PersonCl2('Walter', 1965);
console.log(walter);
```

- Now we get a log which says that it is not a full name.
- And if we inspect the `walter` object, it doesn't have any name. It only has `birthYear`.
- But if we change it to a full name then we will get `_fullName` in the object.
- So, this is another nice feature of classes that can be very useful sometimes.
- Now, we don't need to use getters and setters, and many people actually don't, but it is nice to use these features and especially when we need a validation like we did above.
- Next up, we are going to take a look at yet another feature of classes, which is static methods.
- So, let's check that out now.

### Static Methods

- In this lesson, we are quickly going to talk about static methods.
- A good example to understand what a static method actually is, is the built-in `Array.from()` method. This method essentially converts any array like structure to a real array.
- For example:

```javascript
const arr = Array.from(document.querySelectorAll('h1'));
console.log(arr);
```

- Remember that `querySelectorAll()` return a node list.
- Indeed, we get an array.
- That's not the point here. The point is that this `from()` method is really a method that is attached to the `Array()` constructor.
- So, we could not use the `from()` method on a Array.
- So, this: `[1, 2, 3].from()` is not going to work.

```javascript
const arr = Array.from(document.querySelectorAll('h1'));
console.log(arr);

// [1, 2, 3].from(); // not going to work
```

- So, `from()` is not a function. This is because the `from()` method is really attached t the entire `Array()` constructor and not to the prototype property of the constructor.
- Therefore, all the arrays do not inherit this method.
- So, `Array.from()` is basically a simple function, but it is a function that is attached to the `Array()` constructor.
- The reason for that is simply, so that developers know that it is related to Arrays.
- We also say that the `from()` method is in the `Array` namespace.
  - NOTE: We used the `namespace` before when we were learning about `Intl` and `Number.parseInt()`, etc.
  - These are good examples of static methods.
- We usually use these kind of methods as helpers, that should be related to certain constructor.
- So, you can imagine that it should be pretty easy to implement static methods or selfs.
- So, let's do that for both, our constructor function and also for the class.

```javascript
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.hey = function () {
  console.log('Hey there! 👋');

  //  the `this` keyword is the entire constructor function and the reason
  // for that is because that is exactly the object that is calling this
  // method.
  console.log(this);
};

// static method attached to constructor
Person2.hey();

// static method cannot be called on an instance because it is simply
// not in the prototype of the object
const arya = new Person2('Arya', 1995);
// arya.hey(); // error
```

- To create a static method in class, all we need to do is to use the `static` keyword.
- The other methods that we add are called <ins>instance methods</ins>.
  - The methods that are supposed to be in the prototype of the object and those that are not getters or setters.
  - They are called instance methods because all instances have access to them.

```javascript
const PersonCl3 = class {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Static Method
  static hey() {
    console.log('Hey there! 👋');

    // the `this` keyword points to this entire class
    console.log(this);
  }
};

PersonCl3.hey();
```

- Keep in mind that these static methods are not available on the instances, and sometimes they are still useful to implement some kind of helper function about a class or about a constructor function.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
