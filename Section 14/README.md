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
    - [Object.create](#objectcreate-1)
    - [Inheritance Between "Classes": Constructor Functions](#inheritance-between-classes-constructor-functions)
    - [Inheritance Between "Classes": ES6 Classes](#inheritance-between-classes-es6-classes)
    - [Inheritance Between "Classes": Object.create](#inheritance-between-classes-objectcreate)
    - [Another Class Example](#another-class-example)
    - [Encapsulation: Protected Properties and Methods](#encapsulation-protected-properties-and-methods)
    - [Encapsulation: Private Class Fields and Methods](#encapsulation-private-class-fields-and-methods)
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

- So, `from()` is not a function. This is because the `from()` method is really attached the entire `Array()` constructor and not to the prototype property of the constructor.
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

### Object.create

- We learned about constructor functions and ES6 classes. But there is also a third way of implementing prototypal inheritance aka delegation.
- That third way is to use `Object.create` which works in a pretty different way than constructor functions and classes work.
- With `Object.create` there is still the idea of prototypal inheritance. However, there are no prototype properties involved and also, no constructor functions, and no `new` operator.
- Instead, we can use `Object.create` to essentially manually set the prototype of an object, that we want.
- So, if we can set the prototype to any object, let's actually create an object that we want to be the prototype of all the person object.
- Essentially, let's re-create the `Person` class from earlier.
- It is going to be a simple object literal.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
```

- That's it. That is all the methods that we want the person object to inherit.
- Now all we need to do is to actually create a person object with the `PersonProto` object as the prototype.
- For that, we can use the `Object.create`.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
```

- Now `Object.create(PersonProto)` will return a brand new object that is linked to the prototype that we pass in `Object.create`.
- So `steven` is now an empty object and it will be linked to the `PersonProto` object, which will be its prototype.
- We can see that in the console.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);
```

- Again, for now the `steven` object is empty but, it has the `PersonProto` prototype with `calcAge()` method in it.
- But now, we don't have any properties on the object yet.
- So, let's quickly fix that.
- Right now we are adding properties into `steven` object like we would in any other object literal. It is not ideal but, we will fix that in a minute. This is because we want a programmatic way of creating new object, instead of having to do it like this.
- But for now, we are just worried about the prototypes and the prototype chain.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;
```

- We should now be able to call the `calcAge()` method on `steven`.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();
```

- As you see, it worked just like before. So, we implemented prototypal inheritance, but in a completely different way.
- Now, just to make sure that we are all on the same page, let's make sure that we really understand this big difference.
- So, let's look at a diagram of what's really going on here.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/76cba196-5fab-42ab-9a93-572597a95eab)
- On the right side, we have the way it works where the constructor functions, just as we have been doing it up until this point.
- So, when we use the `new` operator in the constructor functions or classes, it automatically sets the prototype of the instances to the constructor's `prototype` property.
- This happens automatically.
- On the other hand, with `Object.create` we can set the prototype of objects manually to any object that we want.
- In our example, we manually set the prototype of `steven` object to the `PersonProto` object.
- That's it.
- Now the two objects are effectively linked through the proto property just like before.
- So now looking at properties or methods in a prototype chain works just like it worked in function constructors or classes.
- So the prototype chain, in fact, looks exactly the same here.
- The big difference is that we didn't need any constructor function, and no prototype property at all, to achieve the exact same thing.
- So, this is actually a bit more straightforward, and a bit more natural, and it might also be easier to understand.
- However, the reason that we are learning this `Object.create` technique right at the end is because, in practice i.e. in the real world, this is actually the least used way of implementing prototypal inheritance.
- However, it is still very important to know exactly how `Object.create` works, because you will still stumble upon this in the real world.
- More importantly, we will need `Object.create` to link prototypes in the next lesson, in order to implement inheritance between classes. With that, we will take OOP to a whole new level, and the `Object.create` function is going to be crucial in that, as we will see.
- Now that we know exactly what is going on here, let's quickly create another person.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);
```

- But now, in order to set properties on `sarah` object, let's do it in a better way than what we did with `steven` object.
- The way that we did with `steven` object is a little weird and it goes against the spirit of creating object programmatically.
- So, if we are serious about using `Object.create`, we should implement a function that basically does this work for us.
- So, let's create a new method and it can have any name but, we will call it `init()`. This method is going to be similar to the constructor that we have in classes.

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);
```

- So, as you see, the `init()` function looks a bit like the constructor function that we created earlier.
- However, this has actually nothing to do with any constructor function, because we are not using the `new operator to call it. We will simply call it using `sarah.init()`

```javascript
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
console.log(steven.__proto__);

steven.name = 'Steven';
steven.birthYear = 2002;

steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
```

- Here, the `this` keyword in the `init()` function will also point to the `sarah` object now, but it does so because we explicitly called `init()` on `sarah`.
- So again, this has nothing to do with constructor functions that we saw earlier, and it is also completely different from the constructor method that we have in ES6 classes.
- This is just a manual way of basically initializing the object.
- Essentially, this is how `Object.create` works.
- So, the big takeaway is that `Object.create` creates a new object, and the prototype of that object will be the object that we pass in.
- This is very important to understand because, in the future, when we will implement true class inheritance since we will need `Object.create` for that.

### Inheritance Between "Classes": Constructor Functions

- Over the last couple of lecutres, we explored how prototypal inheritance works in JavaScript.
- We did that using a couple of different techniques viz constructor functions, ES6 classes, and `Object.create()` function.
- All of these techniques basically allow objects to inherit methods from its prototype.
- But now it is time to turn our attention to more real inheritance i.e. in the way that we learned in the first lesson of this section.
- So what we are talking about is real inheritance between classes and not just prototypal inheritance between instances and a prototype property like we have been doing so far.

> [!NOTE]
>
> We are using class terminology here because it simply makes it easier to understand what we are going to do.
>
> Of course, you already know that real classes do not exist in JavaScript.

- Here is what we are going to do:
  - We will create a `Student` class and make it inherit from the `Person` class that we have been using so far.
  - So, `Person` will be the parent class and `Student` will be the child class.
  - This is because a student is basically a sub-type of a person i.e. student is also a person but, it is a more specific type of person. So, it is an ideal class.
  - This is really useful because with this inheritance set up, we can have specific methods for the student, but then, the student can also use generic `Person` methods, like the `calcAge()` method that we have been using.
  - That's basically the idea of inheritance that we are going to implement in this lesson.
- Just like before, we will start implementing this using constructor functions.
- So, in this lesson, we will inherit between classes using constructor functions, and this is going to be a bit of a work but, it will allow you to understand exactly how we set up a prototype chain in order to allow inheritance between the prototype properties of two different constructor functions.
- In the next lesson, we will do same thing using ES6 classes, which, as you expect, is a lot easier.
- Finally, we will go back to using `Object.create()` as well.
- Let's get started.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
```

- Here we have the `Person` function constructor that we have been working with in the beginning of the section and also the `calcAge()` method that we set up on the `prototype` property of `Person`.
- So, it is just a copy of what we already did.
- Now, let's continue building a constructor function for the `Student`.
- Usually we want a child class to have the same functionality as the parent calss, but with some additional functionality.
- So usually we pass in the same arguments, but then also some additional ones.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};
```

- So, you see that the `Student` class has the same kind of data that a `Person` class has but, it also has an additional property of `course`.
- Now let's create a new student.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
```

- Let's now add a method as well.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
```

- That works just fine.
- However, there is one thing that we can and should improve in our `Student` constructor function.
- Right now, the `firstName` and `birthYear` part of the constructor function is basically a simple copy of the `Person` constructor function.
- And as you know, having duplicate code is never a good idea.
  - First, because it violets the DRY principle.
  - Second because, imagine that the implementation of `Person` changes in the future, then that change will not be reflected in the `Student`.
- So, instead of having the duplicate code in `Student`, let's simply call the `Person()` function, like so:

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person(firstName, birthYear); // Error
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
```

- Do you think that this will work?
  - No, we get an TypeError.
- Why is that?
- The problem here is that we are calling the `Person()` constructor function as a regular function call.
- So, we are not using the `new` operator to call the `Person()` function constructor. Therefore it is just a regular function call.
- Remember that in a regular function call the `this` keyword is set to `undefined`.
- That's we get the error which states "Cannot set property 'firstName' of undefined".
- So, instead of calling the `Person()` function inside the `Student` constructor, we need to manually set the `this` keyword as well.
- To do that, we can simply use the `call()` method.
- The `call()` method will indeed call the `Person()` function, but we will be able to specify the `this` keyword as the first argument in the function.
- In our case, we want the `this` keyword in the `Person()` the same as the `this` keyword in the `Student` function. So, that is what we will pass in.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
```

- If we check it now, then it is back to working.
- So, this a much better and robust solution.
- So far, this is what we have built:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/cd3ee561-5bfa-4eae-b979-e365ed296944)
- It is simply the `Student` constructor function and its prototype property; and then the `mike` object linked to its prototype.
- The prototype is of course, the constructor function's prototype property.
- This link between instance and prototype has been made manually by creating the `mike` object with the `new` operator.
- So, all of this is what we have already learned so, this is nothing new at this point.
- Now, a student is also a person so we want `Student` and `Person` to be connected like this:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/05d530eb-df00-4f60-9fcf-ba579ac1aab1)
- So, we really want the `Student` class to be the child class and inherit from the `Person` class, which will then function as the parent class.
- This way, all instances of student could also get access to methods from the person's `prototype` property, like `calcAge()` method through the prototype chain.
- That's the whole idea of inheritance i.e. child classes can share behavior from their parent classes.
- So, looking at the diagram above, basically what we want to do is to make `Person.prototype`, the prototype of `Student.prototype`.
- In other words, we want to set the `__proto__` property of `Student.prototype` to `Person.prototype`.
- We are going to have to create this connection manually.
- To do that i.e. to link the two prototype objects, we are going to use `Object.create()` because, defining prototypes manually is exactly what `Object.create()` does.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/9659b7dd-4f41-49ec-9f61-b2485d76a7b5)
- So, let's do that.
- It is important that you do this at exactly this point of the code.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

// do it exactly at this point, we will learn why later
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();
```

- With this, the `Student.prototype` object is now an object that inherits from `Person.prototype`.
- We have to do this connection before we add any methods to the prototype object of student.
- This is because `Object.create()` will return an empty object.
- So, at that point `Student.prototype` is empty so then onto that empty object, we can add methods like the `introduce()` method.
- But if we used `Object.create()` after had already added `introduce()` then `Object.create()` would have overridden those methods that we had already added to the `prototype` object of `Student`.
- Now, you might be wondering why we even needed `Object.create()`? Why didn't we just do this: `Student.prototype = Person.prototype`?
- This might look like it is the logical way to do to but, in fact, this doesn't work at all.
- Let's understand why:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/9672559b-f4a0-4867-b720-bc01ba6bd50c)
- So, if we did `Student.prototype = Person.prototype` then we will not end up with a prototype chain that we need.
- Instead, we would end up with what we see in the image above - which is completely worng prototype chain.
- That's becase here we are actually saying that the `Student`'s prototype property and `Person`'s prototype property should be the exact same object.
- But in fact that's just not what we want.
- What we do want is the `Person`'s prototype object to be the prototype of `Student.prototype`.
- So, we want to inherit from it, but it should not be the exact same object.
- That's why we need `Object.create()`.
- With all this, we should now be able to use `calcAge()` on `mike`.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();

// this should work now
mike.calcAge();
```

- So, this works just fine so, let's actually analyze what happened here.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/2cb4d3a8-a7cf-433c-8734-77b5040d503b)
- We already know that this worked because of the prototype chain, but let's see exactly how.
- When we do `mike.calcAge()`, we are effectively doing a property or a method lookup.
- So, that is JS trying to find the requested property or method.
- In this case, as we know, the `calcAge()` method is of course not directly on the `mike` object.
- It is also not in `mike`'s prototype. That's where we defined the `introduce()` method but not `calcAge()`.
- So just like before, whenever we try to access a method, that's not on the object's prototype, then JavaScript will look up even further in the prototype chain and see if it can find a method i.e. in the parent prototype.
- That's exactly what happens here.
- JS will finally find the `calcAge()` in `Person.prototype`, which is exactly where we defined it.
- That's the whole reason why we set up the prototype chain like this so that the `mike` object can inherit whatever methods are in its parent class basically.
- So in summary, we are now able to call a method that is on a `Person`'s prototype property, on a student object, and it still works.
- That is the power of inheritance.
- Since we are already here, let's also quickly complete the prototype chain.
- Just like before, `Object.prototype` will sit on top of the prototype chain.
- So of course we could still call a method like `hasOwnProperty()` on `mike` object too.
- It doesn't matter how far away in the prototype chain a method is.
- With this, we now have a full picture of how inheritance between classes works with function constructors.
- Of course, with ES6 classes, it works exactly the same internally. All that changes is the syntax.
- So when we do the same thing in the next lesson using ES6 classes, then keep in mind that it is going to work just like what we describe here.
- Now to finish this lesson, let's quickly inspect all of this in the console.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();

// this should work now
mike.calcAge();

// inspecting everything in the console
console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor); // fix this
```

- We need to fix this:
- When we take a look at `console.dir(Student.prototype.constructor)` then ideally, it should point back to `Student`.
- But in the cosole, it apparently points back to `Person`.
- So, JS now thinks that the constructor of `Student.prototype` is `Person` and the reason for that is that we set the `prototype` property of the `Student` using `Object.create()`.
- So this makes it so that the constructor fo `Student.prototype` is still `Person`.
- So, we need to fix it because sometimes it is important to rely on the `constructor` property. So, if we want to rely on that, it should indeed be correct.
- But that is easy to fix.
- We can just say `Student.prototype.constructor = Student`.

```javascript
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // using call() to set `this` keyword
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.name} and I study ${this.course}`);
};

const mike = new Student('Mike', 1998, 'Computer Science');
console.log(mike);
mike.introduce();

// this should work now
mike.calcAge();

// inspecting everything in the console
console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student.prototype.constructor); // fix this

// this is true because Student is the constructor function of mike
console.log(mike instanceof Student);

/**
 * But if we try the same thing with Person, that should also be true.
 *
 * This is because we linked the prototypes together using
 * Object.create()
 */
console.log(mike instanceof Person);

// Of course mike is also an instance of Object because it is also in
// its prototype chain.
console.log(mike instanceof Object);

Student.prototype.constructor = Student; // fixed
```

- So here, we just proved that our prototype chain is in fact set up the way that we intended it to be.

### Inheritance Between "Classes": ES6 Classes

- Let's now go ahead and implement the exact same thing we did in the last lesson, but this time using ES6 classes instead of constructor functions.

```javascript
class PersonCl {
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
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👋`);
  }
}
```

- Here again we have the initial `Person` class that we built a bit earlier so that now we can inherit from it.
- Now, let's create the student class.

```javascript
class Student {}
```

- As we already know, the class syntax hides a lot of the details that are actually happening behind the scenes, because classes are really just a layer of abstraction over constructor functions.
- But that's no problem because we already learned how inheritance between classes actually work behind the scenes.
- That's what we did in the last lesson and the coding challenge. So, now that we know how it works, we are ready to implement the same thing using classes, even though that hides, how it actually works behind the scenes.
- To implement inheritance between ES6 classes, we only need two ingredients. We need the `extend` keyword and the `super` function.
- So, to make the `Student` class inherit from the `Person` class, all we need to do is to say is `class Student extends Person{}`

```javascript
class Student extends Person {}
```

- That's actually it.
- So this `extends` keyword alone will then link the prototypes behind the scenes without us even having to think about that.
- Then of course, we still need a constructor, and this one will, just link before, receive the same arguments as the parent class, but then some additional ones.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {}
}
```

- Now here we don't even need to use `call()` like we did before.
- What we do instead is to call the `super()` function.
- So, `super()` is basically the constructor function of the parent class.
- So, the idea is still similar to what we did in the constructor function, but here it all happens automatically.
- We don't need to specify the name of the parent class again because that is already mentioned along with the `extends` keyword.
- All we need to do is to pass in the arguments of the parent class into the `super()` class.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
  }
}
```

- Note that using the `super()` class and passing the parameters of the parent class in it always needs to happen first.
- This is because the call to the `super()` function is responsible for creating the `this` keyword in the subclass.
- Therefore, without using the `super()` function, we won't be able to do this: `this.course = course`.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
}
```

- So, always first call the `super()` i.e. the parent class constructor and from there, we will then be able to access the `this` keyword.
- Now of course we could actually have no other properties at all i.e. it is not necessary/mandatory.
- The same goes for the additional parameter in the constructor function.
- In that case, the new `Student` class would simply have new methods and share all the properties with the parent class.
- So what we are doing here is really just an example, but the possibilities are endless.
- And actually, if didn't have to do this: `this.course = course` then we wouldn't even need the constructor function at all.
- In that case, the super function would automatically be called with all the arguments that are passed into the constructor.
- It would work like this:

```javascript
class Student extends Person {
  // no constructor function
}

const martha = new Student('Martha Jones', 2012);
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012}
```

- So as you see, we would end up with a student with the full name and a birth year, just as specified.
- Anyway, this was just to demonstrate that if you don't need any new properties, then you don't even need to bother writing a constructor method in the child class.
- But now let's just go back to our original example.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }
}

const martha = new Student('Marth Jones', 2012, 'Computer Science');
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012, course: "Computer Science"}
```

- Now let's add the `introduce()` method to our `Student` class.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student('Marth Jones', 2012, 'Computer Science');
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012, course: "Computer Science"}

martha.introduce(); // My name is Martha Jones and I study Computer Science
```

- The same should work for the `calcAge()` method that is in the parent class.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student('Marth Jones', 2012, 'Computer Science');
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012, course: "Computer Science"}

martha.introduce(); // My name is Martha Jones and I study Computer Science

martha.calcAge(); // 25

console.dir(martha);
```

- Indeed, that works too.
- Just check the prototype chain on the developer console to confirm that it is the same as before when we manually created it.
- Finally, just like we did in our previous challege, let's override the `calcAge()` method.

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new Student('Marth Jones', 2012, 'Computer Science');
console.log(martha); // Student {_fullName: 'Martha Jones', birthYear: 2012, course: "Computer Science"}

martha.introduce(); // My name is Martha Jones and I study Computer Science

martha.calcAge(); // I'm 25 years old, but as a student I feel more like 35

console.dir(martha);
```

- Indeed, this new method overrode the one that was already there in the prototype chain.
- That's because this new `calcAge()` method appears first in the prototype chain.
- Therefore, it is essentially overriding the method coming from the parent class.
- We can also say that this new `calcAge()` method is shadowing the one that is in the parent class.
- That's it, that is all we had to learn about implementing classes using actual ES6 classes.
- Just to finish this part of inheritance between classes, just know this mechanism of inheritance that we explored can actually be very problematic and dangerous in real world when we are designing software.
- However, that's a topic for another day and we will talk about it a little bit when we talk about functional programming.

### Inheritance Between "Classes": Object.create

- Finally, let's now take a look at how we can use `Object.create()` in order to implement a complex prototype chain - similar to what we implemented before with classes and constructor functions.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto1);
```

- Here we have an object that we have already worked on before, and it will serve as a prototype to create a new person using `Object.create()`.
- So basically, it will be our parent class.
- We already know that `Object.create()` is a bit easier to use and to understand so it shouldn't be hard to implement a similar hierarchy between a person and student.
- So `PersonProto` object used to be the prototype of all the new `Person` objects.
- But now we basically want to add another prototype in the middle of the chain i.e. between `PersonProto` and the object.
- So, what we are going to do is to make `StudentProto` inherit directly from `PersonProto`.
- So, we are going to create an object that will be the prototype of students, and it will be an empty object for now - and its prototype will be `PersonProto`.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
```

- That's it. Now we can use the `StudentProto` to create new students. So, let's do that.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
const jay = Object.create(StudentProto1);
console.log(jay);
```

- So now the `StudentProto` object that we just created earlier, is now the prototype of the `jay` object.
- And the `PersonProto` object is in turn the prototype of `StudentProto`.
- Therefore, `PersonProto` is a parent prototype of `jay`, which means that it is in the prototype chain.
- That might sound confusing so, let's make sure that we understand it, using the diagram below:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/eabc5113-309c-487f-bfac-890ac0948ba1)
- It all starts with the `PersonProto` object, which used to be the prototype of all person objects.
- But now using `Object.create()`, we make it so that `PersonProto` will actually become the prototype of `StudentProto`.
- What this does does is that now, basically, student inherits from person.
- So with this, we already established the parent class relationship that we were looking for.
- Now to finish, all we have to do is to use `Object.create()` again, but this time to create a new actual student object.
- Of course we make the student, in our case `jay`, inherit from `StudentProto`.
- Like this, we created a nice and simple prototype chain.
- So, `jay` inherits from `StudentProto`, which in turn, inherits from `PersonProto`, and therefore the `jay` object will be able to use all the methods that are contained in `StudentProto` and `PersonProto`.
- Now with the scope chain correctly established, let's also add an init method to `StudentProto`, just like we did in `ParentProto`. This is so we don't have to manually specify the properties on any new student object.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {};

const jay = Object.create(StudentProto1);
console.log(jay);
```

- Now we can use the same trick that we used before, where we use the constructor functions.
- So, what I mean is to take advantage of the `init` method so that we don't have to write the same code again.
- Basically, the child prototype can re-use the `init` method inside `StudentProto` from the `PersonProto`.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {
  // we use call() because we will need to manually set the `this` keyword
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
```

- That works!
- Let's now add the `introduce()` method.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {
  // we use call() because we will need to manually set the `this` keyword
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto1.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
```

- That also works, and now, as you expect, we should also be able to call `jay.calcAge()` because that method is in the prototype chain.

```javascript
const PersonProto1 = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

steven = Object.create(PersonProto1);

const StudentProto1 = Object.create(PersonProto1);
StudentProto1.init = function (firstName, birthYear, course) {
  // we use call() because we will need to manually set the `this` keyword
  PersonProto1.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto1.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto1);
jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
```

- It works.
- Check the prototype chain using the console.
- Once you do that, you will see that it is exactly the prototype chain that we just saw earlier in the diagram.
- That's it.
- So, in this version, we don't even worry about constructor functions anymore, and also not about the prototype properties, and not about the `new` operator.
- So, it is really just objects linked to other objects, and it is all really simple and beautiful.
- In fact, some people think that this pattern is a lot better than basically trying to fake classes in JavaScript, because faking classes in a way that they exist in other languages like Java or C++ is exactly what we do by using constructor functions, and even ES6 classes.
- But here, in this technique that we just learned with `Object.create()`, we are, in fact, not faking classes.
- All we are doing is simply linking objects together, where some objects then serve as the prototypes of other objects.
- Anyway, it still super important and valuable that you learn all of these three techniques now, because you will see them all in the real-world still.
- This also allows you to think about this on your own and choose the style that you like the best.

> [!NOTE]
>
> In the real-world, and especially in modern JavaScript, you will mostly see ES6 classes being used now.
>
> So, since we are preparing for the real-world, we will start using classes from this point on.

### Another Class Example

- There are a few more things that we need to learn about classes.
- So, let's actually create a new class now and as an example, we are going to use the bank account that we implemented before, in the Bankist app.
- So, let's create the class and its constructor function.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}
```

- Now let's create a new account.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);
console.log(acc1);
```

- Now, what about the movements array and maybe also the locale?
- So, we want to start with an empty array for movements, always.
- As for locale, we want to get it from the `navigator.language`.
- So, how should we do that? Do we add another parameter in the constructor function and always pass in an empty array in all accounts that we create?

```javascript
class Account {
  constructor(owner, currency, pin, movements) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = movements;
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111, []);
console.log(acc1);
```

- That would work, however, it doesn't make sense to pass in an empty array as a parameter into all the new accounts that we want to create.
- Instead, we can simply do this:

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);
console.log(acc1);
```

- So, this is something that we didn't do before but ofcourse, we can create even more properties that are not based on any inputs.
- The same we can now do for the locale and set it to `navigator.language`.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);
console.log(acc1);
```

- In fact, we can even execute any code in the constructor that we want.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);
console.log(acc1);
```

- So when someone opens an account, they are greeted with the message that we are printing inside the constructor.
- But now, what about the deposits and withdrawals? Basically, what about the movements?
- We could simply push values into the movements array like so:

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

acc1.movements.push(250);
acc1.movements.push(-140);

console.log(acc1);
```

- If we take a look at our account now, of course we will see the new movements there.
- However, it is not a good idea to do this at all.
- Instead of interacting with properties like we did above, it is a lot better to create methods that interact with these properties.
- And that is especially true for important properties, such as the movements.
- This will, for sure, avoid bugs in the future, as your application grows.
- So, let's now create a deposit and a withdrawal method in the class.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface of our Objects
  deposit(val) {
    this.movements.push(val);
  }

  /**
   * We are calling deposit here because the withdraw method works in
   * the same way.
   *
   * Also, of course we can call other methods inside of a certain
   * method. But, we will still need to use the `this` keyword in order
   * to access the other method
   */
  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit = 250;
acc1.withdraw = 140;

console.log(acc1);
```

- Indeed, our movements array looks just the same as before, but now we are actually using the public interface that we built here.
- So, basically these methods of deposit and withdraw are interface to our objects, and we also call this API (we talked about it in the beginning of this section).
- So, this is a lot better than having to manipulate these properties outside of the object, as we did above.
- Also, the `withdraw()` method abstracts the fact that a withdrawal is basically a negative movement.
- Now, still there is nothing stopping someone on our team from interacting with movements array directly and potentially making mistakes and introducing bugs.
- So, simply the fact that we have these methods doesn't make it impossible to use `acc1.movements.push(250)`.
- The same goes, for example, for pin. So, of course we can access the pin from outside of the account. But it probably shouldn't be accessible from outside of the class.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface of our Objects
  deposit(val) {
    this.movements.push(val);
  }

  /**
   * We are calling deposit here because the withdraw method works in
   * the same way.
   *
   * Also, of course we can call other methods inside of a certain
   * method. But, we will still need to use the `this` keyword in order
   * to access the other method
   */
  withdraw(val) {
    this.deposit(-val);
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit = 250;
acc1.withdraw = 140;

console.log(acc1);

// pin accessible outside of the class
console.log(acc1.pin);
```

- This is actually a very real and very important concern. It is not just something theoretical.
- The same of course, goes for methods.
- Let's say we have a `requestLoan` method in our class.
- We could make the approval of the loan based on some condition, and that condition could come from some other method, let's say `approveLoan`.
  - It will simply return true, as this is just an example and we don't want to implement any complex logic right now.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface of our Objects
  deposit(val) {
    this.movements.push(val);
  }

  /**
   * We are calling deposit here because the withdraw method works in
   * the same way.
   *
   * Also, of course we can call other methods inside of a certain
   * method. But, we will still need to use the `this` keyword in order
   * to access the other method
   */
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

// acc1.movements.push(250);
// acc1.movements.push(-140);
acc1.deposit = 250;
acc1.withdraw = 140;

// pin accessible outside of the class - this shouldn't happen
console.log(acc1.pin);
acc1.requestLoan(1000);
acc1.approveLoan(1000); // this should not be accessible - but it is

console.log(acc1);
```

- Now in the public interface, we only want `requestLoan` available.
- We only want to be able to do this: `acc1.requestLoan(1000)`.
- Once we do that, we see that our loan was approved and it was pushed into the movements array.
- But of course, we are also able to do this: `acc1.approveLoan(1000)`. This method doesn't do anything but in the real world, we should not even be allowed to access this kind of method.
- It is kind of an internal method that only the `requestLoan` method should be able to use.
- The reason why we are learning all this is basically to justify that we really need data encapsulation and data privacy.
- So, in the next lesson, we will finally start implementing data privacy and data encapsulation.

### Encapsulation: Protected Properties and Methods

- In the last lesson we implemented a new class which showed us the need for encapsulation and data privacy.
- So, let's now tackle this very important principle of object oriented programming.
- First, remember that encapsulation basically means to keep some properties and methods private inside the class so that they are not accessible from outside of the class.
- Then the rest of the methods are basically exposed as a public interface, which we can also call API.
- So this is essential to do in anything more than a toy application.
- There are two big reasosns why we need encapsulation an data privacy.
  - First - it is to prevent code from outside of the class to accidentally manipulate the data inside the class.
  - The second reason is that when we expose only a small interface i.e. a small API consisting only of a few public methods then we can change all the other internal methods with more confidence.
    - Because in this case, we can be sure that external code does not rely on the private methods.
    - Therefore our code will not break when we do internal changes.
    - That's what encapsulation and data privacy are and the reasons for it. So, let's now implement it.
- However JavaScript classes actually do not yet support real data privacy and encapsulation.
- Now there is a proposal to add truly private class fields and methods to the language, but it is not completely ready yet.
- However, in the next lesson, we will still see it because it is really cool but, even when this feature ships in the browser, it will take some time until you can use it with confidence.
- So, in this lesson, we will basically fake encapsulation by simply using a convention.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.pin);

console.log(acc1);
```

- The first candidate to protect here is the `movements` array that we have been talking about.
- The movevments are mission critical data and here we will protect that data so that no one can accidentally manipulate it.
- For now, all we will do is to add the `_` in front of the property and that's it.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.pin);

console.log(acc1);
```

- Again, this does not actually make the property truly private because it is just a convention.
- So, it something that developers agree to use and then everyone does it this way.
- But since it is not truly private, we call it <ins>protected</ins>.
- Now if we wanted to get the movements outside of the class we could still do this: `console.log(acc1._movements)`
- So, that's what we were just trying to say - which is that the data is of course still accessible if we use the `_` outside as well. But atleast now everyone on your team (including yourself) will know that this property is not supposed to be touched outside of the class.
- So, you can still do it but at least you will know that it is wrong.
- Now, if we still wanted to give access to movements array from the outside then we would have to implement a public method for that. So, let's do that.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.pin);
console.log(acc1._movements); // still accessible if we use the underscore

// not this is the correct way of getting the movements:
console.log(acc1.getMovements());

console.log(acc1);
```

- Now everyone cans still access the movements but they cannot override them.
- So, they cannot set the movements unless of course they use the underscore with the convention but then they will at least know that it is wrong to access the property.
- Next we could also protect the pin - which is also something that doesn't make sense to be accessible from the outside.
- Like this, we can protect everthing in the constructor but, for now we are good to go - especially since this is just an example.
- To finish, let's also just protect the approved loan method.

```javascript
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // protected property
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Bhoami', 'INR', 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);

// console.log(acc1.pin);
console.log(acc1._movements); // still accessible if we use the underscore

// not this is the correct way of getting the movements:
console.log(acc1.getMovements());

console.log(acc1);
```

- This is how we protect fields from unwanted access.
- Now, as mentioned before, of course, developers need to know about this convention and need to follow it because otherwise everything will still be public.
- In the next lesson, we are actually going to talk about truly private fields and methods. So, with that, we will then fix this problem for good.

### Encapsulation: Private Class Fields and Methods

- Let's now implement truly private class fields and methods.
- Private class fields and methods are actually a part of a bigger proposal for improving and changing JavaScript classes which is simply called Class fields.
- Why is this called Class fields?
- In traditional OOP languages like Java and C++, properties are usually called fields.
- So what this means is that with this new proposal, JS is moving away from the idea that classes are just syntactic sugar over constructor function.
- Because with this new class features classes actually start to have abilities that we didn't previously have with constructor functions.
- Let's now start exploring them.
- So, in this proposal, there are actually 4 different kinds of fields and methods, and actually it's even 8.
- But in this lesson, we are just going to focus on 4 viz:
  - Public fields
  - Private fields
  - Public methods
  - Private methods
- So essentially, there is a public and a private version of both fields and methods.
- Let's now start with public fields.
- We can think of a field as a property that will be on all instances.
- That's why we can also call it a public instance field.
- Basically, in our example, the two fields could be the movements and the locale. Because these are basically two properties that are going to be on all the objects that we create with this class. Since we do not pass in values for them, the movements array and the locale will always be set for all the instances.
- So, let's now add them as public fields.
- That works like this:

```javascript
class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public fields
  locale = navigator.language;
  _movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);

console.log(acc3._movements);

console.log(acc3.getMovements());

console.log(acc3);
```

- When we re-load the page now, you will see that it works just like before.
- So, we still have the locale and the movements but, they are not public fields.
- But in our final object, that doesn't make any difference because again, these public fields are going to be present on all the instances that we are creating through the class.
- So, they are not on the prototype - this is important to understand.
- So, all the methods will always be added to the prototype but, the public fields are added to the instances.
- Again, having the public fields outside the constructor function (unlike the methods which are added to the prototype) is the same as them being written inside the constructor. Therefore, these public fields are also referenceable via the `this` keyword.
- So, that's public fields.
- Next up, let's talk about private fields.
- Private fields is the one that we have been waiting for.
- With private fields we can now make it so, that properties are truly not accessible from the outside.
- Let's start by now finally making the movements array private.
- To make it private, we will remove the underscore and replace it with `#` symbol. That is what makes it a private field.
- Now if we try to use this private field outside of the class, we will get a syntax error

```javascript
class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);
console.log(acc3._movements);
console.log(acc3.getMovements());
console.log(acc3);

// console.log(acc1.#movements); // error
```

- Basically, JS thinks that we are trying to implement the private class field outside of the class and that's the reason for the syntax error.
- But what matters is the fact that we cannot access it outside of the class.
- Ofcourse the `movements` property from before now no longer exist.
- Anyway, the movements are now truly private and are no longer accessible outside (atleast not by their property).
- The next candidate to make private is the pin. In the last lesson we protected it but now, just like movements, we want to convert it to a truly private field.
- However, this time the situation is a bit different. Because now we are actually setting the pin based on the input value to the constructor.
- However, we cannot define fields to the constructor. The fields really need to be outside of any method.
- To work around that, what we have to do is to create a private field with hash outside and don't set it to anything.
- It is essentially just like creating an empty variable.
- So in the beginning, it will be set to undefined and then we re-define it inside the constructor.

```javascript
class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin; // undefined

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // redefine
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);
console.log(acc3._movements);
console.log(acc3.getMovements());
console.log(acc3);

// console.log(acc1.#movements); // error
// console.log(acc1.#pin); // error
```

- So, one more time we can see that these class fields are really just like any other property. That's why after they are first defined, we can redefine them and set it to the value that we receive.
- Also, the pin is now a private field so if we try to access it outside of the class, we will get an error.
- So that is truly private class fields and again, they are going to be available on the instances themselves - not on the prototype.
- Next up we have public methods.
- But that is nothing new at this point.
- All the methods that we have been using in the class are indeed public methods.
- Therefore, let's move on to our final point - which is private methods.
- Private method, as already mentioned before, are very useful to hide the implementation details from the outside.
- That's why in the previous lessom, we already made the `approveLoan` method protected with underscore.
- But to make it private, the syntax is the same as private fields.

```javascript
class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin; // undefined

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // redefine
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);
console.log(acc3._movements);
console.log(acc3.getMovements());
console.log(acc3);

// console.log(acc1.#movements); // error
// console.log(acc1.#pin); // error
```

- Now if we look at the account in the console, we will see another property called private methods there, and in there you will find the `#approveLoan` method.
- So, we talked about the following 4 features:
  - Public field
  - Private field
  - Public methods
  - Private methods
- Now, besides these 4 there are also the static version of the same form.
- That's why in beginning, we mentioned that there are actually 8 new features.
- And actually, we already used the static public version before, which works by simply adding the `static` keyword in front of the method.
  - Usually we use `static` for helper functions because these static methods will not be available on all the instances but, on the class itself.

```javascript
class Account3 {
  /**
   * Here the semi-colon is necessary (even if you find it weird, it has
   * to be there)
   *
   * Also, it looks like a variable but, we don't have to declare it
   * using `const` or `let`.
   *
   * This is how we simply define a public field.
   *
   * NOTE that public fields are added to instances and not to prototypes
   */
  // 1) Public field
  locale = navigator.language;

  // 2) Private field
  #movements = [];
  #pin; // undefined

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin; // redefine
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // 4) Private Methods
  #approveLoan(val) {
    return true;
  }

  // 5) Static Public
  static helper() {
    console.log('Helper');
  }
}

const acc3 = new Account3('Bhoami', 'INR', 1111);

acc3.deposit(250);
acc3.withdraw(140);
acc3.requestLoan(1000);
console.log(acc3._movements);
console.log(acc3.getMovements());
console.log(acc3);

// console.log(acc1.#movements); // error
// console.log(acc1.#pin); // error

// calling static public method
Account3.helper();
```

- As mentioned before, there are also static version for public fields, private fields, and private methods but, we are not going to see them right now because they are really less important.
- But if you want, you can easily test them out by yourself.
- That's it, this is how we implement encapsulation and data privacy using the new class fields.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
