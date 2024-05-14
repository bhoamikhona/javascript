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
- They are instead just so-called <ins>synthetic sugar</ins> over constructor functions.
- This means that ES6 classes are basically just a layer of abstraction over constructor functions.
- So, it is really just a nicer syntax that makes it easier for newcomers to do OOP in JS.
- But, behind the scenes, ES6 classes are actually implemented with constructor functions.
- So, they also use prototypal inheritance just like we learned in the earlier.

##### Object.create()

- Finally, there is also the `Object.create()` function which is basically the easiest and the most straightforward way of linking an object to a prototype object.
- However, it is not as used as the other two methods as we will see over the next couple of lessons.
- Now, to finish, one more important thing to keep in mind is that the four principles of OOP that we learned in the last lesson viz abstraction, encapsulation, inheritance, and polymorphism are still valid and important with prototypal inheritance.
- Throughout this section, we will of course learn how to use and implement these principles.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
