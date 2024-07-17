# Section 17: Modern JavaScript Development: Modules, Tooling, and Functional

**About:** Up until this point the course, we have learned a lot of JavaScript features, and syntax, and also, how the language itself works behind the scenes. But now, it is time to take a step back, and talk about the whole process of actually building modern JavaScript applications in the real-world. So, this section is not really about the language itself, but more about the development process i.e. the modern build tool that every professional developer uses, and also the whole modern ecosystem that has been created around JavaScript.

## Table of Content

- [Section 17: Modern JavaScript Development: Modules, Tooling, and Functional](#section-17-modern-javascript-development-modules-tooling-and-functional)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [An Overview of Modern JavaScript Development](#an-overview-of-modern-javascript-development)
      - [Modern JavaScript Development](#modern-javascript-development)
    - [An Overview of Modules in JavaScript](#an-overview-of-modules-in-javascript)
    - [Native JavaScript (ES) Modules](#native-javascript-es-modules)
      - [How ES6 Modules are Imported](#how-es6-modules-are-imported)
    - [Exporting and Importing in ES6 Modules](#exporting-and-importing-in-es6-modules)
    - [Top-Level Await (ES 2022)](#top-level-await-es-2022)
    - [The Module Pattern](#the-module-pattern)
    - [CommonJS Modules](#commonjs-modules)
    - [A Brief Introduction to the Command Line](#a-brief-introduction-to-the-command-line)
    - [Introduction to NPM](#introduction-to-npm)
    - [Bundling With Parcel and NPM Scripts](#bundling-with-parcel-and-npm-scripts)
    - [Configuring Babel and Polyfilling](#configuring-babel-and-polyfilling)
    - [Review: Writing Clean and Modern JavaScript](#review-writing-clean-and-modern-javascript)
    - [Let's Fix Some Bad Code: Part 01](#lets-fix-some-bad-code-part-01)
    - [Declarative and Functional JavaScript Principles](#declarative-and-functional-javascript-principles)
    - [Let's Fix Some Bad Code: Part 02](#lets-fix-some-bad-code-part-02)
  - [Author](#author)

## Lessons Learned

### An Overview of Modern JavaScript Development

- Let's start the section with a general overview of Modern JavaScript development i.e. how we write JS today because, when we build applications, we don't just write all of our code into one big script and send that script as it is to the browser and call it a day.
- It used to be like that but, the way that we build JS applications today has changed tremendously over the last couple of years.

#### Modern JavaScript Development

- ![image](https://github.com/user-attachments/assets/3ad777cb-c856-4323-a0bf-2650e86ef172)
- Back in the day, we used to write all our code into one big script or maybe multiple scripts, but today, we divide our projects into multiple modules; and these modules can share data between them and make our code more organized and maintainable.
- One great thing about modules is that we can also include 3rd party modules into our own code; and there are 1000s of open source modules, which we also call packages, that developers share on [NPM repository](https://www.npmjs.com/).
- We can then use these packages for free in our own code.
- For example, the popular React framework or jQuery, or even the Leaflet library, that we used before in our Mapty project. All these packages are available through NPM.
- NPM stands for Node Package Manager because it was originally developed together with Node.js and 4Node.js
- However, NPM has established itself as the go-to repository for all kinds of packages in Modern JavaScript Development.
- In order to actually download/use/share packages, we use the NPM software installed on our computer. It is just a simple comman line interface that allows us to do all that.
- So, NPM is basically both, the repository in which packages live and a program that we use on our computer to install and manage these packages.
- Let's say that we are done writing our project code. So, we divide it into multiple modules and we included some 3rd party modules as well. So now, the development step is complete.
- However, usually that's not the end of the story. At least not when re-building a real world application.
- Instead, our project now needs to go through a build process, where one big final JS bundle is built, and that's the final file, which we will deploy to our web server for production.
- Basically, it is the JS file that will be sent to the browsers in production.
- Production simply means that the application is being used by real users in the real world.
- A build process can be something relaly complex, but we are going to keep it simple and only include two steps:
  - First Step:
    - We will bundle all our modules together into one big file.
    - This is a pretty complex process which can eliminate unused code and compress our code as well.
    - This step is super important for 2 big reasons:
      - First, older browsers don't support modules at all. So, code that's in a module could not be executed by any old browser.
      - Second, it is also better for performance to send less files to the browser, and it is also beneficial that the bundling step compresses our code.
  - Second Step:
    - In the second step, we do something called transpiling and polyfiling, which is basically to convert all modern JS syntax and features back to old ES5 syntax, so that even older browsers can understand our code without breaking.
    - This is usually done using a tool called Babel.
- These are the two steps of our build process, and after these two steps, we end up with the final JS bundle, ready to be deployed on a server for production.
- Of course, we don't perform these steps ourselves. Instead, we use a special tool to implement this build process for us.
- The most common build tools available, are probably webpack and Parcel.
- These are called JS bundlers, because as the name suggests, they take our raw code and transform it into a JS bundle.
- Webpack is the more popular one, but it can be really hard and confusing to set it up. That's because there is a lot of stuff that we need to configure manually, in order to make it work properly.
- Parcel, on the other hand is a 0 configuration bundler, which simply works out of the box.
- So, in this bundler, we don't have to write any set up code, which is really amazing. This is the JS bundler that we will use later in this section.
- These development tools are actually also available on NPM.
- So, just like packages that we include in our code, we will download and manage tools using NPM as well.
- These tools include the live-server that we have been using all along, the Parcel bundler that we just talked about or Babel to transpile code back to ES5.
- So, this is a high-level overview, of how we develop modern JS applications today.
- This is actually really exciting stuff because, this is how professional developers actually write JS today.
- So, in the rest of the section, you will take a big step in the direction of becoming a professional developer too.

### An Overview of Modules in JavaScript

- Modules are a super important part of software development so, in this lesson, we are going to talk about modules in more depth and learn how they work behind the scenes.
- ![image](https://github.com/user-attachments/assets/3b8d1106-78e5-438f-aac2-ef6697efed33)
- Essentially, a module is a re-usable piece of code that encapsulates implementation details of a certain part of our project.
- That sounds a bit like a function or even a class, but the difference is that a module is usually a stand alone file.
- That's not always the case but normally, when we think a module, we think of a separate file.
- So, of course a module always contains some code but it can also have imports and exports.
- With exports, as the name says, we can export values out of a module.
- For example, simple values or even entire functions.
- And whatever we export from a module is called a public API.
- So, this is just like classes where we can also expose a public API for other code to consume.
- In the case of modules, this public API is actually consumed by importing values into a module.
- So, just like we can export modules, we can usually also import values from other modules.
- These other modules from which we import are then called dependencies of the importing module because the code that is in the module that is importing cannot work without the code that is imported from the external module.
- This entire logic that we just described is true for all modules in all programming languages. This is not specific to only JS.
- In fact, modules are a pattern that developers have been using in all languages for decades.
- Of course we can write code without modules, and we have been doing that up until this point - but that's because our applications have been very simple.
- However, when a code base grows bigger and bigger, there start to be many advantages of using modules.
- The first one is that modules make it really easy to compose software.
- So, we can think of modules as small building blocks that we can then put together in order to build really complex applications.
- It might be helpful to look at a more real-world example to understand all the benefits of modules.
- Let's take this digital camera:
- ![image](https://github.com/user-attachments/assets/ee1ad3b8-7e26-4a03-a40e-92df58fad095)
- You can see that this specific camera is basically made up of all these modules that we can see in the image.
- This is exactly how we can compose software using modules as well.
- Another big advantage of these camera modules is that each of them can be developed in complete isolation.
- So, you can have one engineer working on the lens, another one on the screen and another one on the controller module.
- The best part of this is that each engineer can actually work on their own module without even understanding what the other engineers are doing; and also, without understanding how the entire final camera works itself.
- So, isolating components is another huge advantage of using modules.
- Again, isolating components essentially means that each module can be developed in isolation without the developer having to think about the entire code base.
- He doesn't even need to understand all of it, which makes it easy to collaborate on a larger team.
- Next up, modules make it very easy to abstract out code.
- And we already talked about what abstractionmeans, but basically, we can use modules to implement low-level code that other modules, which really don't care about these low-level details can import these abstractions and use them.
- Back to our camera, the screen module, for example, does not care about the low-level implementation details of the controller module.
- It can simply import the controller, but without knowing how it works; and use it to control other parts of the camera.
- So, that's essentially the power of abstraction.
- Modules also naturally lead to a more organized code base - because when we break up our code into separate isolated and abstracted modules, this will automatically organize our code and make it easier to understand.
- So, this alone, is a huge benefit of modules.
- Finally, modules allow us to easily re-use the same code in a project and even across multiple projects.
- For example, if we use the module to implement a couple of mathematical functions in a certain project, and if we then need the same functions in our next project, all we need to do is to copy that module.
- In our camera example, this company can now use the exact same lens or the exact same screen in different camera models, all because they nicely abstracted these components into self-contained re-usable modules.
- So, this is how modules work in software design in general.
- But now, let's take a look at modules specifically in JS.

### Native JavaScript (ES) Modules

- ![image](https://github.com/user-attachments/assets/39d60703-cf53-4ef8-86b3-bb266c4d6332)
- So, as of ES6, JavaScript has a native built-in module system.
- We did have modules before ES6 but, we had to implement them ourselves or use external libraries.
- So, ES6 modules are modules that are actually stored in files and each file is one module. So, there is exactly one module per file.
- But now you might be thinking, scripts are usually also files, right?
- That's of course true. So, let's now compare these two types of files in order to understand that there are actually huge differences between old school scripts and modern ES 6 modules.
- The first difference is that in modules, all top level variables are scoped to the module.
- So basically, variables are private to the module by default.
- The only way an outside module can access a value that's inside of a module is by exporting that value.
- Just as we learned a second ago.
- But if we don't export, then no one from the outside can see the variable.
- In scripts, on the other hand, all top-level variables are always global and we learned about this in the mapty project.
- This can lead to problems like global namespace pollution, where multiple scripts try to declare variables with the same name and then these variables collide.
- So, private variables are a solution to this problem and that's why ES6 modules implemented it like this.
- Next, ES modules are always executed in strict mode while scripts on the other hand are executed in sloppy mode by default.
- So, with modules, there is no more need to manually declare strict mode.
- Also, the `this` keyword is always `undefined` at the top level while in scripts, it points at the window object.
- Now, as we learned a couple of minutes ago, what's really special about modules is that we can export and import values between them using the ES6 import and export syntax.
- In regular scripts, importing and exporting values is just completely impossible.
- Now, there is something really important to note about imports and exports, which is the fact that it can only happen at the top-level i.e. outside of any function or if-block.
- We will see why in a second.
- Also, all imports are hoisted.
- So, no matter where in a code you are importing values, it is like the import statement will be moved to the top of the file.
- So, in practice, importing values is always the first thing that happens in a module.
- Now, in order to link a module to an HTML file, we need to use the `script` tag with the `type` attribute set to `module`, instead of just plain `script` tag.
- Finally, about downloading the module files themselves, this always automatically happens in an asynchronous way.
- This is true for a module loaded from HTML as well as for modules that are loaded by importing one module into another, using the `import` syntax.
- Now regular scripts on the other hand are downloaded by default in a blocking synchronous way, unless we use the `async` or `differ` attributes on the script tag.
- So, that's a great overview of the ES6 modules, but now, let's dig a little deeper and really understand how modules actually import other modules behind the scenes.

#### How ES6 Modules are Imported

- ![image](https://github.com/user-attachments/assets/e9a995eb-5830-4a02-bf3a-7c11ce653dd9)
- To do that, let's analyze what happens in this small code example:

```javascript
// index.js
import { rand } from './math.js';
import { showDice } from './dom.js';
const dice = rand(1, 6, 2);
showDice(dice);
```

- Here we are importing a value called `rand` from `math.js` module and `showDice` from `dom.js` module.
- As always, when a piece of code is executed, the first step is to parse that code.
- Remember that parsing basically means to just read the code, but without executing it.
- And this is the moment in which imports are hoisted.
- In fact, the whole process of importing modules happens before the code in the main module is actually executed.
- So in this example, the `index.js` module imports the `dom.js` and `math.js` modules in a synchronous way.
- What this means is that only after all imported modules have been downloaded and executed, the main `index.js` module will finally executed as well.
- This is only possible because of the top-level imports and exports that's because, if we only export and import values outside of any code that needs to be executed, then the engine can know all the imports and exports during the parsing phase i.e. while the code is still bein read - before being executed.
- Now, if we were allowed to import a module inside of a function, then that function would first have to be executed before the import code happened.
- So, in that case, modules cannot be imported in a synchronous way.
- So, the importing module would have to be executed first.
- But you might ask, why do we actually want modules to be loaded in a synchronous way>
- Isn't synchronous bad?
- The answer is that that is the easiest way in which we can do things like bundling and dead code elimination i.e. deleting code that's actually not even necessary.
- This is very important in large projects with hundreds of modules and that includes third party modules from which we usually only want a small piece and not the entire module.
- So, by knowing all the dependencies between modules before execution, bundlers like webpack and Parcel can then join multiple modules together and eliminate that code.
- So essentially, this is the reason why we can only import and export outside of any code that needs to be executed viz function or if-block.
- Moving on, after the parsing process has figured our which modules it needs to import, then these modules are actually downloaded from the server.
- Remember that downloading actually happens in an asynchronous way. It is only the importing operation itself that happens synchronously.
- Then after a module arrives, it is also parsed and the modules exports are linked to the imports in the index.js
- For example, the `math.js` module exports a function claled `rand` and this export is then connected to the `rand` import in the `index.js` module.
- This connection is actually a live connection. So, exported values are not copied to imports. Instead, the import is basically just a reference to the exported value - like a pointer.
- So, when the value changes int he exporting module, the same value also changes in the importing module.
- This is quite important to understand because it is unique to ES6 modules.
- Other module systems do not work like this, but JavaScript modules do. So, you need to keep that in mind.
- Anyway, next up, the code in the importing modules is executed. And with this, the processing of importing modules is finally finished.
- Now, let's move on to the next lesson and try all of this in actual code.

### Exporting and Importing in ES6 Modules

- Let's now use modules in practice, to make sure that we really understand how they work, and to import and export values between them.
- Let's start with the simplest scenario of all, which is to simply import a module, but without importing any value.
- That's also possible so, let's use that as a starting point here.
- As always, we start by creating with a script.js file, but, now as we want to create a new module, we simply have to create a new file.
- Here we are going to use the example of a shopping cart so, we are going to have a module called shoppingCart.js

> [!NOTE]
>
> In module names, it is also a convention to use camelCase names.

- script.js will be the importing module & shoppingCart.js will be the exporting module.
- To start, let's simply log to the console "Exporting Module" and "Importing Module" just so we can see that the module is actually being imported.

```javascript
// script.js
console.log('Importing Module');

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');
```

- Now, we also have to import the other module.

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');
```

> [!NOTE]
>
> ES modules actually also work without the file extension but for now, let's leave the extension there, just to make it a bit more clear.

- Let's start the live server and check the console.
- Right now we will see an error, so, at this point, our code won't be working.
- The error says "Cannot use import statement outside a module".
- Why is this happening?
- Remember from the last lesson, that when we want to connect a module to the HTML file, we actually need to specify the `type` attribute.
- So, in HTML, we need to specify that, like so:

```html
<!-- index.html -->
<script type="module" defer src="script.js"></script>
```

- Now the error will be gone, and our code should work.
- Now in the console, we see that the first log is actually "Exporting Module" and only then the "Importing Module" is logged to the console.
- So, this means that in fact, the shoppingCart.js is executed before script.js code i.e. the exporting module is executed before any importing module. Exactly what we learned in the last lesson.
- So, the code in the script.js file is parsed and before it is executed, all the code in the module that it imports is executed first.
- The same is true if we had the `console.log()` statement before importing the module, like so:

```javascript
// script.js
console.log('Importing Module');

// importing module
import './shoppingCart.js';

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');
```

- So remember that all the importing statements are basically hoisted to the top.
- Usually, we write all the importing statements to the top.

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');
```

- Also note that we didn't use strict mode here and that's because as we learned in the last lesson, all the modules are executed in the strict mode by default.
- But now let's go back to the the shoppingCart.js module and define some variables.

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const shippingCost = 10;
const cart = [];
```

- Now variables that are declared inside a module like `shippingcost` and `cart` are actually scoped to this module.
- Basically, inside a module, the module itself is like the top-level scope.
- By default, this means that all top-level variables are private inside of this variable.
- So, unline traditional scripts, which would put all of these variables in the global scope but again, not modules. So, that's why we cannot do this:

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];
```

- So the `shippingCost` and `cart` variables are scoped to the current module, basically. So, we can only use them in the shoppingCart.js
- If we wanted to use them in the script.js module, then we would have to use exports.
- In ES modules, there are two types of exports v.i.z. named export and default exports.
- Named exports is actually the simplest way of exporting something from a module, because all we have to do is to put `export` in front of anything, that we might want to export.
- So, let's say that we want to create a function called `addToCart()` and it should be a function that takes a product, and the quantity; and then it basically pushes the new object to the cart array, and logs something to the console.

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
```

- Right now, this function is private inside of the shoppingCart.js module, but if we wanted to now export it, so that we can import it some other module, all we have to do is to write `export` in front of it, like so:

```javascript
// script.js

// importing module
import './shoppingCart.js';

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
```

- This then creates a named export from this module.
- So now, we can import that function in the script.js - we just have to write it with the exact same name.

```javascript
// script.js

// importing module
// import './shoppingCart.js'; // simple import
import { addToCart } from './shoppingCart.js'; // named import

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
```

- So, this is quite easy to understand. It reads almost like a regular English sentence.
- "We want to import `addToCart` from `shoppingCart` module."
- Again, `addToCart` the variable name in the importing module has to be exactly the same as the exporting module.

> [!NOTE]
>
> When importing a named variable, we need to put inside a set of curly braces otherwise it will throw an error.
>
> So, with named imports, we have to give them the same name as the export variable and put them inside a set of curly braces.

- Now we will be able to call the `addToCart` function inside the script.js module, as if it was defined inside the script.js file.

```javascript
// script.js

// importing module
// import './shoppingCart.js'; // simple import
import { addToCart } from './shoppingCart.js'; // named import

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
```

- Indeed it works.
- Keep in mind that exports always need to happen in the top-level code. It wouldnt work if we put it inside an if-block or a function.

```javascript
// script.js

// importing module
// import './shoppingCart.js'; // simple import
import { addToCart } from './shoppingCart.js'; // named import

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

// This will not work.
// Exports always need to be on the top level code
if (true) {
  export const addToCart = function (product, quantity) {
    // SyntaxError: Unexpected token 'export'
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
}
```

- Of course, we can also export multiple things from a module using named exports; and actually, that is the main use case of named exports.
- One of the ways we can do it is like so:

```javascript
// script.js

// importing module
// import './shoppingCart.js'; // simple import
import { addToCart } from './shoppingCart.js'; // named import

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
```

- So, this is a little bit like exporting an object from the shippingCart.js module.
- Now, just like before, we can import these variables in script.js using the exact same name. Again, we need to put those inside the curly braces because they are named exports.
- Once imported, we can use thsoe variables in script.js module. In our case, we will simply log them to the console.

```javascript
// script.js

// importing module
// import './shoppingCart.js'; // simple import
import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js'; // named import

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);
console.log(totalPrice, totalQuantity);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
```

- Indeed, we get access to those values in script.js from shoppingCart.js
- We can also change the name of the imports as well using the `as` keyword.
- If we wanted to call `totalPrice` just `price` in script.js, then this is how we would do it:
  - After doing this, it will no longer be called `totalPrice` in script.js, it will be called `price`.
  - If we still use `totalPrice` after changing it to `price` it will throw an error.

```javascript
// script.js

// Simple module import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);
console.log(price, totalQuantity);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };
```

- We can also change the name in the exports i.e. using the `as` keyword, like so:

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing Module');

// console.log(x); // ERROR: x is not defined

addToCart('bread', 5);
console.log(price, tq);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
```

- After changing it at the exports, make sure to change the variable name to `tq` in script.js as well, because it will no longer be called `totalQuantity` in script.js - it will throw an error if we do that.
- So, this is all very flexible as you can see, and we can play around with it as we wish.
- And actually, we can take this importing even further, because we can also import all the exports of a module at the same time using `*`.
- We will have to use the `as` keyword with `*` so that we can reference it while using it. We usually name it with a capital camel case - it is a convention when we import everything into an object like this:

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
import * as ShoppingCart from './shoppingCart.js';

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
```

- Basically, `ShoppingCart` will create an object containing everything that is exported from the module that we will specify in the script.js
- So, it will create a namespace for all of the value exported from that module.

> [!NOTE]
>
> When using \* to import everything from a module, the file extension is important to mentioned when importing.
>
> Otherwise, it will throw an error.
>
> So, the extension is necessary, it is only not necessary in some other cases, that we will see later.

- Now whenever we want to use something that was exported, we will have to take it from the `ShoppingCart` object, like so:

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
```

- So, we got it to work.
- So, basically if we think about it, the shoppingCart.js module is now basically exporting a public API, just like a class.
- So, it is as if the `ShoppingCart` object was an object created from a class, which now has these methods, and also for example, these properties like `ShoppingCart.totalPrice`.
- Of course, we are not trying to replace classes with modules, we just want to turn your attention to the fact, that some things look pretty similar indeed.
- And actually, we can that the module export is kind of like public API, because everything else of course stays private inside of the module.
- Alright, that's basically how named imports and exports work; and also how we can export multiple values at once, and how we can change the name of the named exports, and also of the named import.
- Then we learned how we can import everything at the same time i.e. all the named imports at once using `*`.
- So, now it is time to think about default exports.
- So, as mentioned earlier, there are two types of exports v.i.z. named exports and default exports. So, let's now talk about default exports.
- Usually, we use default exports when we only want to export one thing per module, and so that's the reason why they are called default.
- It works pretty similar to named exports but, we have to write the keyword `default` along with `export` when we simply want to export a default value.
- For example, if we wanted to default export the `addToCart` function, we would simple export the value itself, not the variable, like so:

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- Here you see that no name is involved at all.
- We are simply exporting the function value.
- So then, when we import it, we can basically give it any name we want.

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);

// Importing default value from shoppingCart.js
import add from './shoppingCart.js';

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- This will then import the default export, no matter what it is called.
- Notice how we are importing the same module twice. That's not a problem, we can do it. However, usually we don't do that.
- We don't get any error but, it is not advisable to do so.
- So, let's comment out the previous part, and let's try to access the default value.

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing default value from shoppingCart.js
import add from './shoppingCart.js';

add('pizza', 2);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- We can also have a default import and named import mixed in one import statement, like so:

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing default value from shoppingCart.js
// import add from './shoppingCart.js';

// Mixed named and default imports
import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

add('pizza', 2);
console.log(price);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- However in practice, we usually never mix named and default exports in the same module.
- So, it is not really desirable. But, here we are doing it for learning purposes.
- So, the preferred style is actually to just use one default export per module and then import that, like we did previously.
- In fact, that is the reason why it is easier to import default exports. Since with default exports, we don't have to use the curly braces - and the designers of the specification did that on purpose.
- But of course, it is not a rigid rule so, we can dod whatever is best for any given situaton.
- However, what you probably should not do is to mix default and named exports, like we have in our example above (we are just doing it here for learning purposes).
- So, avoid that to reduce complexities.
- But, besides that, you can use named exports or default exports, whatever works best in your situations.
- Of course, we will use all of this in the real world, in our next big project. So by then, you will get a good feeling for how all of this works, a little bit better in the real world.
- But with this, you now already have a pretty good idea of how importing and exporting value between modules actually work.
- But before finishing this lesson, let's see the proof of the fact that imports are in fact, a live connection to exports. This is something that was mentioned by the end of last lesson and it is something that is really important to keep in mind, so let's take a look at it.
- To see it, we will first export the cart array from the shoppingCart.js module and import it in the script.js module.
- Then we will log it in the script.js module to see what it looks like.

```javascript
// script.js

// Simple Module Import
// import './shoppingCart.js';

// Named Import
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';

// Renaming an import using `as` keyword
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// console.log(x); // ERROR: x is not defined

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// Importing everything using *
// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// Importing default value from shoppingCart.js
// import add from './shoppingCart.js';

// Mixed named and default imports
import add, {
  addToCart,
  totalPrice as price,
  tq,
  cart,
} from './shoppingCart.js';

add('pizza', 2);
add('apples', 5);
console.log(price);
console.log(cart);

/************************************************************************/
// shoppingCart.js
console.log('Exporting Module');

const x = 0;
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- Right now it looks as if we are exporting an empty array since, `cart` is an empty array in the shoppingCart.js module.
- But when we log it to the console in script.js module, we see that there are items already in it.
- This is because we used the `add()` function to add items to it.
- This proves that the importing of the `cart` array is not simply a copy of that array that we exported from shoppingCart.js module.
- Because if it was just a copy, then in the script.js module, we would simply just get the empty array - since that is what the `cart` variable looked like when we exported it.
- But as mentioned in the previous lesson, it is not simply a copy, it is in fact a live connection, and as we call the `add()` function, we keep pushing objects to that array.
- So, we are mutating that array in the script.js module.
- So, as we log that cart in the console, we see that manipulated array.
- So, they are in fact, the same object behind the scenes, basically.
- Hence, imports are not copies of the exports.
- This means that the `cart` array in the importing and exporting modules, i.e. in both places, points to the same place in the memory.
- Keep this in mind when you write your own code, because it can lead to bugs if you don't know what you are doing or if you don't know how it works.
- With that, we finished this lesson, which is a pretty important one as it is the foundation of how we organize a modern JS code base.
- So, make sure to review this lesson thoroughly, and play around with it some more to get comfortable with it.

### Top-Level Await (ES 2022)

- Let's now shortly go back to asynchronous JavaScript, because there has been an important change in ES 2022 version.
- We can now use the `await` keyword outside of the `async` functions, at least in modules. So, that's why this is here in the module section.
- Again, as mentioned, because this is important, we can now basically use the `await` keyword outside of an async function, which we call <ins>top-level await</ins>.
- Just remember that this only works in modules.
- If we were going to try this in a normal script, like we have been using before this section, then top-level await would still fail.
- But in the last lesson, we added the `type` attribute to our script file with its value set to `module` and that is what is really required to make top-level `await` actually work.
- So, to see the top level `await`, let's simply do a simple `fetch()` request.

```html
<script type="module" defer src="script.js"></script>
```

```javascript
// script.js

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);
```

- Indeed, we get our data.
- We have an array of 100 posts here, where each of them is an object.
- So, that's how we use the top-level await. Indeed, the `await` keyword is now working outside of an `async` function.
- What's really, really important to understand here is that while this is all great and very useful, it actually blocks the execution of the entire module now; and as we learned in the previous section, that is sometimes not exactly what we want.
- We can see that it is indeed a synchronous code by logging something after the `fetch()` function.

```javascript
// script.js

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');
```

- To really see it, you can also maneuver the internet speed using the network tab in the chrome developer tools.
- In console, you will see that "Something" is only printed after the data from the API has arrived.
- So in fact, the `await` keyword - which is now outside of an async function, is blocking the entire execution of this module - which is something that we had never seen before.
- So, this really wasn't possible before we got top-level `await` in JS.
- Of course, this can be useful in some situations but, many times, it can also be harmful, and especially if it is a really long running task.
- Long story short, make sure you use this new superpower with great caution.
- This example illustrates exactly how the top-level `await` works, but it is a bit too simple. It is not really real-world enough.
- So, let's get more real.
- Many times, we have a situation where we do have an async function that want to return some data.

```javascript
// script.js

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');

/**
 * This function will basically do a fetch request to the same URL above,
 * but it will only return the very last post.
 */
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);
};

getLastPost();
```

- Now we want to return something from the `getLastPost()` function. So, we want to simply return an object which contains the title and body of the post.

```javascript
// script.js

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');

/**
 * This function will basically do a fetch request to the same URL above,
 * but it will only return the very last post.
 */
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
```

- Now if you have studied that last section, then you will remember that the returning value which is stored in `lastPost` is actually going to be a promise, and not the object that we were expecting.
- The reason for that is that calling an `async` function will always return the actual data itself, because by the time we are running this line of code: `const lastPost = getLastPost()`, the data has not arrived yet.
- So, we still have that pending promise.
- And again, if you don't really remember the specifics here, you can always go back to the last section.
- The workaround to get the actual data instead of promises is to simply use regular promises.
- So, we can simply take the promise that is stored in the variable `lastPost` and on that, we can use the `then()` method.
- In the `then()` method, we get access to the resolved value, which we can simply log to the console.

```javascript
// script.js

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');

/**
 * This function will basically do a fetch request to the same URL above,
 * but it will only return the very last post.
 */
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

lastPost.then(last => console.log(last));
```

- So, after some time, we get the object that we want.
- However, doing this is not very clean, so what we can do now is to use top-level await for it.

```javascript
// script.js

console.log('Start fetching');

const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
const data = await res.json();
console.log(data);

console.log('Something');

/**
 * This function will basically do a fetch request to the same URL above,
 * but it will only return the very last post.
 */
const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
```

- After some time, we get the result that we wanted.
- So, it is situations like this where top-level `await` can actually get quite useful.
- Now to finish, let's see one more important implication of using top-level `await` and that is the fact that if one module imports a module which has a top-level await, then the importing module will wait for the imported module to finish the blocking code.
- That may sound a bit complicated than it actually is. So, let's just demostrate it with an example.
- For demonstration, in the shoppingCart.js module, let's add some blocking code in the very beginning.

```javascript
// shoppingCart.js

console.log('Exporting Module');

// Adding a blocking code to see that the importing module will wait for
// this to finish
console.log('Start fetching users');
await fetch('https://jsonplaceholder.typicode.com/users');
console.log('Finish fetching users');

const x = 0;
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- Note that you can change the speed of the internet using the network tab in chrome developer tools to see it in action.
- Now if we go back to our script.js module, the first thing that is going to happen is that the shoppingCart.js is going to be imported.
- Then we immediately start fetching the users.
- Then, only after the fetch is completed, we get the second log of "Finish fetching users".
- And only after that we get the code executed in the importing module.
- So, the code in script.js actually has to wait for the code in shoppingCart.js to finish.
- So, the top-level `await` in the shoppingCart.js module is in fact not only blocking the code in its own module but also, in the module that is importing it.
- So, it is really important to remember that using the top-level `await` will block the entire module in a way that really could block code execution.
- So, this is not only a really helpful tool, but also one that we need to use with great care.
- So, let's comment out this code so it won't block when we build more in the same files, going into next lessons.

```javascript
// shoppingCart.js

console.log('Exporting Module');

// Adding a blocking code to see that the importing module will wait for
// this to finish
// console.log('Start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const x = 0;
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
```

- This is how top-level await works.
- So, let's now go straight to the next lesson.

### The Module Pattern

- Now that you know how ES6 modules work, let's quickly see the module pattern that we used to use before in order to implement modules in JS.
- It is important to understand this module pattern because you will still see it around, and it is also a very good application of many of the stuff that we have been learning throughout the course.
- of course, just like in regular modules that we just learned about, the main goal of the module pattern is to encapsulate functionality, to have private data, and to expose a public API.
- The best way of achieving all that is by simply using functions, because functions give us private data by default and allows us to return values, which can become our public API.
- So, let's see how the module pattern is implemented.
- We start by writing a function and usually we write an IIFE, and the reason for that is because this way we don't have to call it separately and we can also ensure that it is only called once.

```javascript
// script.js

(function () {})();
```

- So, it is very important that this function is only created once because the goal of this function i snot to re-use code by running it multiple times.
- The only purpose of this function is to create a new scope and return data just once.
- In this function, let's simply add the same variables that we had before in the shoppingCart.js module.

```javascript
// script.js

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };
})();
```

- Right now, of course, all of this data is private because it is inside of the scope of the function.
- So now, all we have to do is to return some of this stuff in order to basically return a public API.
- To do that, we simply return an object, which contains the stuff that we want to make public.

```javascript
// script.js

(function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
```

- We could have also defined all of these exports in an object as properties and methods but, it is little bit cleaner to define them outside and then to simply create an object which contains everything that we want to expose to the outside (like we did above).
- However, right now we are not storing this object anywhere.
- So, if we run this script right now, then this object kind of disappears into nothing.
- However, that is easy to fix because, we can simply assign the result of running this IIFE to a new variable.

```javascript
// script.js

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();
```

- Now, we can use the `ShoppingCart2` just like before.

```javascript
// script.js

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('bananas', 3);

console.log(ShoppingCart2.cart);
```

- Indeed, it works.

> [!NOTE]
>
> We cannot access the module variables in the chrome developer console because everything inside a module is private to the module.
>
> The chrome developer console is basically the global scope so, it only has access to the variables defined in global scope.

- On the other hand, the properties that we wanted to make private and not accessible. So, we cannot access `shippingCost` outside of the function.

```javascript
// script.js

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('bananas', 3);

console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.shippingCost); // undefined
```

- That's actually it.
- That's the implementation of the module pattern.
- Now, do you understand exactly how and why this works? Meaning, how do we, for example, have access to the `cart` variable outside the function and even able to manipulate it? How are we able to do that even if the IIFE has returned long ago?
- So, this IIFE function was only executed once in the beginning and all it did was to return an object and assigned it to the variable `ShoppingCart2`.
- But then we are able to use all of those variables and also manipulate the data that is inside of the IIFE function.
- The answer to how all of this works like this is one more time, closures.
- Remember that closures allow a function to have access to all the variables that were present at its birthplace.
- So, the `addToCart()` function was created in the IIFE function. So the IIFE function is the birthplace of the `addToCart()` function.
- Therefore, the `addToCart()` function never loses connection to its birthplace, which was the IIFE function.
- This birthplace also contains the `cart`.
- Therefore, `addToCart()` function outside of the IIFE, can still access the `cart` variable that was in the IIFE function.
- So, the reason why this works is not because the `cart` variable is also in the returning object - that's irrelevant, because we are not using `this.cart` in the `addToCart()` function. We are simply using `cart`.
- So, inside the `addToCart()` function, we could also log something that is private to the module i.e. IIFE function. So, something that will not be in the exported object.

```javascript
// script.js

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apples', 4);
ShoppingCart2.addToCart('bananas', 3);

console.log(ShoppingCart2.cart);
console.log(ShoppingCart2.shippingCost); // undefined
```

- So, in order to produce this string:

```javascript
console.log(
  `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
);
```

- The function will also have to use the `shippingCost` variable that was only present at its birthplace, but which no longer does exist besides that.
- Indeed, that still works, so the function is still able to access that value of 10.
- And for a deeper explanation of why this works, you can, of course, always go back and re-visit the lesson about closures.
- In essence, this is how the module pattern works and it works very well.
- It has been working for a long time for developers i.e. long before ES6 modules even existed in JS.
- Now, the problem is that if we wanted one module per file - like we have with ES6 modules, then we would have to create different scripts and link all of them in the HTML file.
- That then creates a couple of problems, like we have to be careful with the order in which we declare then in HTML, and we would have all of the variables living in the global scope, and finally, we also couldn't bundle them together using a module bundler.
- So, as you learned at the beginning of this section, using a module bundler is very important in modern JS.
- So the module pattern that we just learned about does indeed work quite good but, it has some limitations; and that's exactly the reason why native modules were added to the language in ES6.

### CommonJS Modules

- Besides native ES modules, and the module pattern, there are also other module systems that have been used by JS in the past.
- But again, they were not native JS. So, they relied on some external implementations.
- Two examples are:
  - AMD Modules
  - CommonJS Modules
- In fact, CommonJS modules are worth taking a look at. So, let's do that now.
- CommonJS modules are important for us, because they have been used in Node.js for almost all of its existence.
- So only very recently ES modules have actually been implemented in Node.js.
- Remember, Node.js is a way of running JS on a web server, outside of a browser.
- The big consequence of this is that almost all the modules in the npm repository (that we talked about in the beginning of this section) so, all these modules that we can use in our own code, still use the CommonJS module system.
- The reason for that is that npm was original only intended for node, which as mentioned before, uses commonJS.
- Only later npm became the standard repository, for the whole JS world.
- So now we are basically stuck with CommonJS.
- Therefore, you will probably see a lot of CommonJS still around.
- So, let's take a quick second to see what it looks like.
- Let's pretend that we want to export `addToCard()` from a module.
- So, just like ES6 modules, in CommonJS, one file is one module.
- We export something from a module using `export.nameOfTheExport`. So, if we wanted to export a variable called `cart` then it would be `export.cart`.

```javascript
// Export from shoppingCart.js
export.addToCart = function(product, quantity) {
  cart.push({product, quantity})
  console.log(`${quantity} ${product} added to cart`)
}
```

- Of course this would not work in the browser but, it would work in Node.js
- So, the `export` keyword here is basically an object that is not defined in our code, and also not in the browser.
- But in Node.js it is an important object that is used.
- Then, to import something, we would use `require()` function.

```javascript
// Import in script.js
const { addToCart } = require('./shoppingCart.js');
```

- `require()` is not defined in our browser enviornment but, it is defiend in Node.js because it is a part of the CommonJS specification.

> [!NOTE]
>
> This code won't work in regular JS, you will need Node.js to see it in action.

- The point of this lesson was just to let you know that there are different module systems, and that CommonJS is particularly important in the world of JS.
- In the long run, ES6 modules will hopefully and probably replace all of these different module systems but it is still going to be a long way until you are there.
- So, it is good that you atleast know what it is if you stumble upon it.
- Now let's move on to the rest of the section where we will lean how to use third party packages from npm, how to bundle all modules together, and also how to transpile our code back to ES5 for old browsers.

### A Brief Introduction to the Command Line

- Before we can use a tool like parcel, we first need to learn a little bit about the command line.
- All the build tools that are available on NPM only work in the command line.
- So, now comes that time where you finally have to learn a little bit about the basics of the command line.
- In this short lesson, we will get the foundation of the command line.
- We will learn things like moving around in the file system, creating files and folders, copying files, etc.
- This is because, as a web developer, it is really quite important that you know at least how do these basic things using a terminal or a command prompt.
- You can either use the terminal in your computer or you can use the integrated terminal in VS code. There is also a third party software called [Hyper](https://hyper.is/) if you prefer that.
- The first thing that you need to know about any command line is that you are always in a folder.
- From the current position in the file system, you can move up and down using commands.
- `ls` (on mac) and `dir` (on windows)
  - This command will show you the contents of the current folder.
- `cd`
  - This command stands for change directory.
  - With this, we can go up and down the file tree.
  - To go up, we simply use `..`
  - To go up two levels, use `../..`
- When typing something, if you use the `tab` key, it will auto complete the rest of it.
- `clear`
  - This clears the console
- `mkdir folderName`
  - This command will create a new folder in the current directory with the name provided next to `mkdir`.
- `touch fileName`
  - This creates a new file with the name provided next to `touch`.
  - We can create multiple files at once by using space.
  - Example: `touch script.js bankist.js shoppingCart.js` It will create the three files all at once.
- `rm fileName` (mac) or `del fileName` (windows)
  - Deletes the file in folder.
- To move a file, we can use `mv` command. After `mv` you need to mention which file to be moved, followed by the location to which it should be moved.
  - Example: `mv script.js ../` - This will move the script.js file from current directory to its parent directory.
- `rmdir folderName` - deletes a folder in the current directory.
  - NOTE that is command only works for empty directories.
- To delete a directory that is not empty, we use a flag `-R` which stands for recursive.
  - Example `rm -R folderName` - This command will recursively delete all files in the folder mentioned along with the directory itself.
- That's it for this lesson.

### Introduction to NPM

- Let's now finally use NPM for the first time, and remember that NPM stands for Node Package Manager, and it is both, a software on our computer and a package repository.
- Before we jump straight into NPM, let's start by understanding why we actually need something like NPM i.e. why do we need a way of managing packages or dependencies in our project?
- Back in the day, before we had NPM, we used to include external libraries right into our HTML using the `<script>` tag.
- This would then expose a global variable that we could use, and that's what we did in our Mapty project as well. We simply included the script file in the index.html file for the leaflet library - before our own script so that, our own script could use the global variable that was exposed by the leaflet library.
- This actually creates a couple of problems, at least in a big project.
- It might not be a problem for a small project like Mapty but, in a big team and big project, it is just not manageable.
- First, it doesn't make much sense having the HTML loading all of JavaScript, that is just really messy.
- Also, many times we would actually download a library file to our computer directly, for example, a jQuery JS file.
- But then, whenever a new version would come out, we would have to manually go to the site, download the new version, change the file in our file system manually and then include it again, maybe with some other name, with some other version number.
- That was just a huge pain.
- The third reason is that before NPM, there simply wasn't a single repository that contained all the packages that we might need.
- So, this made it even worse and more difficult to manually download libraries and manage them on our computers.
- In summary, this all used to be a huge pain and a huge mess.
- Anyway, all of this is just to say that we really need a way to manage our dependencies in a better and more modern way; and NPM is exactly how we do that.
- So, let's start by using the NPM software now.
- We can check if we have NPM installed on our computer using the terminal with this command: `npm -v`
  - This command will check for the version of the npm installed on your computer. If you get a verison above 6 then you are good to go, otherwise head over to the [Node.js Website](https://nodejs.org/en/download/package-manager/current) and download it from there.
- In each project in which we want to use NPM, we need to start by initializing it.
- Use the command `npm init` in the directory you want the project to be to initialize it - in terminal.
- Once you go through the questions that you see after entering the `npm init` command, you will end up with a special file called package.json.
- This file is created by NPM for our project.
- It is what stores the entire configuration of our project.
- To install any library using NPM, all you have to type in the terminal is this command: `npm install leaflet` (this will install the leaflet library) or `npm i leaflet` (for short).
- Generic syntax: `npm install packageName` or `npm i packageName`
- Once you hit enter, it will start downloading the package that you mentioned.
- After downloading the package, two things happen. First, in our package.json file, a new field is created called `dependencies`. The dependency that we have is leaflet since that is what we downloaded. More about why this is important, later.
- The second thing that happened is that a folder was created in our working directory and this folder is called node_modules.
- It is in this folder where all of our downloaded package files are stored. You can explore them as you please.
- Of course, the more packages that we install, they will all get stored into this node_modules folder.
- So, we installed the leaftlet library now but, if we wanted to use it, that wouldn't be easy without a module bundler. That's because this library actually uses the CommonJS module system.
- Therefore, we cannot directly import it onto our code. We could only do that if later we use a module bunlder, but for now, we are not doing that.
- So, let's just not use leaflet for now. It was just to show you how to install it.
- Instead, let's import one of the most popular JS libraries, which is [Lodash](https://lodash.com/).
- Lodash is essentially a collection of a ton of useful functions for arrays, objects, functions, dates, and more.
- So, it is a lot like functions that could or should be included in JS, but are not. So, people simply implemented them in Lodash and now we can use them.
- In their documentation, it says that to install lodash, we can use the command `npm i lodash`.
- However, that is just the normal version of Lodash and we are not looking for that because it also uses CommonJS.
- So, without CommonJS or module bundler, we won't be able to use it.
- The special version that we are looking for is called `lodash-es`. Here `es` stands for ES modules. To install that, we will simply enter the comman `npm i lodash-es`.
- Once it is downloaded, we will be able to see it in dependencies in package.json and also in the node_modules folder.
- If you explore this package, it is a considerably large one. It has one file for each of the methods available in Lodash.
- The one that we wanna look at is the one for cloning objects called `cloneDeep()`. You can get its code in the node_modules folder -> lodash-es folder -> cloneDeep.js file
- We can simply import it in our script file exactly like we used to do it with the `import` keyword.

```javascript
// script.js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
```

- Now, why did we include `cloneDeep` and not something else?
- It is because we already mentioned lodash before when we talked about copying objects.
- Remember that it is very hard to copy a nested object.
- So, let's quickly create one here because it is very interesting.

```javascript
// script.js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
```

- So, this is a deeply nested object. Now let's see what happens when we try to copy it using JS.
- Remember that we use `Objec.assing()` to create a copy of an object in pure JS.

```javascript
// script.js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateCopy = Object.assign({}, state);
console.log(stateClone);
```

- As of right now, the `stateClone` looks exactly the same as the original object.
- However, watch what happens when we change one of the nested objects in the original object.

```javascript
// script.js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateCopy = Object.assign({}, state);
console.log(stateClone);

state.user.loggedIn = false;
console.log(stateClone);
```

- In the clone object, the `loggedIn` is also false. That's for all the reasons that we have already learned before. That's when we mentioned that using lodash might be a better idea instead of using `Object.assign()`.
- Because if we wanted to manually create a deep copy or a deep clone, that would be a lot of work. So, instead we can simply use the `deepClone()` function that lodash provides us.
- This function has been implemented by some other people and it is also battle tested.

```javascript
// script.js
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateCopy = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
console.log('stateClone Before', stateClone);
console.log('stateDeepClone Before', stateDeepClone);

state.user.loggedIn = false;

console.log('stateClone After', stateClone);
console.log('stateDeepClone After', stateDeepClone);
```

- So the `loggedIn` in `stateDeepClone` is still set to true, even though we changed it in the original object.
- So, this is a good solution for a deep clone that we just got from NPM.
- So, we used a piece of an open source software to solve a problem that we have sometimes in JS, and that's just awesome!
- You are now one step closer to working like a real JS developer because, this is just what everyone does all the time.
- Of course you can have some fun and take a look at how people implemented the `deepClone()` function in the lodash library and you can get the access to that code from node_modules folder.
- Now let's go back to the package.json file because it is actually very important.
- Let's say that you want to move your project to another computer, or also share it with another developer or even check it into version control like Git.
- In all of these scenarios, you should never ever include the node_modules folder. This is because in a real-world project this folder will be really, really huge from downloading all the different packages.
- So, it doesn't make sense to pass around such large folder if they are all already available at NPM. You can always get those files back from there.
- But now you might ask, if you copy the project without the node_modules folder i.e. without the dependencies, will you have to install all of them one by one?
- What if you have 20 or 200 dependencies?
- That's where this important file package.json comes into play.
- In the case you don't have the node_modules folder and you can try deleting that folder to simulate this problem, there is fortunately a very easy way to get it all back.
- The solution is to simply run the command `npm i` in the terminal in the directory you have the package.json file in (so make sure you have that file in the folder where you want to install those dependencies).
- Then the NPM will go through the package.json file, read all the dependencies and install them back.
- With this, you now have a basic and good understanding of how to work with NPM packages, how to download and include them in your code.
- However, importing packages with the entire path like we did in our example above is not practical at all.
- So, in the next lesson, it is time to finally use Parcel to fix it.

### Bundling With Parcel and NPM Scripts

- Installing and Using Parcel
- Dev Dependencies and how to install them using `--save-dev`
- Locally and Globally installed packages
  - To install packages globally, all you have to do is to add `-g` flag when installing it.
- `npx` and NPM scripts

> [!WARN]
> Parcel does not work with top-level `await` yet, so might want to comment that code out.

> [!NOTE]
> Parcel converts the script files to regular scripts even if you mentioned `type="module"` in it.

- Hot module scripts:

```javascript
// Only parcel understands this code
if (module.hot) {
  module.hot.accept();
}
```

- This code means that whenever we change one of the modules, it will thn trigger a reubuild.
- But that new modified bundle will then automatically get injected into the browser without triggering a reload.
- With Parcel you can now import modules like this: `import cloneDeep from 'lodash-es';` instead of having to write the entire file path down. It figures out the path on its own.

> [!NOTE]
>
> Hot Modules maintain state of variables without reloading the page. So, the data is persisted.

### Configuring Babel and Polyfilling

- Babel
- Babel Plugins
- Babel Presets

> [!NOTE]
>
> Babel can only transplie ES6 syntax.
>
> Example: arrow functions, classes, `const`, or spread operator
>
> Basically things that have an equivalent way of writing them in ES5.
>
> If you try to transpile things like Promises, those won't be converted.

- For things such as Promises or newer array methods like `find()`, we can polyfill them.
- For polyfill, we use a library called `core-js` and in that library, we specifically use `core-js/stable`
- Polyfilling basically re-creates defined function and make it available in our bungle so that the code can use it.

> [!NOTE]
>
> Polyfilling is going to polyfill everything even if you are not using it. So, you can cherry pick what you need to polyfill.
>
> Cherry picking that is of course a lot of work but, it will also greatly reduce the size of your bundle therefore, it might be worth it.

- This how you can cherry pick:

```javascript
import 'core-js/stable/array/find;';
```

- Finally, there is still one feature that is not polyfilled by `core-js` so, we always need to install one more package for that. This package is called `regenerator-runtime`.

```javascript
// Polyfilling async functions
import 'regenerator-runtime/runtime';
```

### Review: Writing Clean and Modern JavaScript

- ![image](https://github.com/user-attachments/assets/1d193594-6a4a-4fb8-a4d3-6dfc764c7f0f)
- ![image](https://github.com/user-attachments/assets/9d6bce4d-f8e8-4dac-9617-6b538b58e72e)

### Let's Fix Some Bad Code: Part 01

- Using optional chaining with brackets notation

```javascript
// example
const limit = spendingLimits?.[user];
```

- Emojis count as 2 characters.

```javascript
const string = 'Pizza 🍕';
console.log(string.slice(-1)); // �
console.log(string.slice(-2)); // 🍕
```

### Declarative and Functional JavaScript Principles

- We just reviewed and also implemented some clean and modern JavaScript practices.
- However, there is currently a major trend and shift to something called declarative code and functional programming in JavaScript.
- So, let's now take some time to look at what declarative and functional programming actually are.
- ![image](https://github.com/user-attachments/assets/b635cc59-a9e5-4af3-ad0d-944bbd3f955d)
- There are two fundamentally different ways of writing code in programming, which we also call paradigms. These two paradigms are imperative code and declarative code.
- Whenever we write imperative code, we basically need to explain to the computer how to do certain things.
- Basically, we need to explain every single step that the computer needs to follow in order to achieve a certain result.
- This might sound abstract so, let's try a real world example.
- Let's say that we want someone to bake a cake for us.
- If we were to do that in an imperative way, we would tell the person exactly the step by step recipe that they would have to follow in order to bake that cake.
- It is basically telling every single step that the person has to follow in order to achieve a result.
- Bringing that back to code:

```javascript
const arr = [2, 4, 6, 8];
const doubled = [];

for (let i = 0; i < arr.length; i++) {
  doubled[i] = arr[i] * 2;
}
```

- In this code example, we are trying to double the `arr` array.
- So, the loop that we have here is a purely imperative way of writing that.
- Here, we are telling the computer step by step, to create an empty array to create a counter that starts at 0, then to increase that counter until we reach the length of the original array, and then how exactly to store the new result in each new position of the array.
- So, there are a lot of steps that we give the computer here, in order for us to achieve the result of doubling the `arr` array.
- That's imperative programming, but on the other hand, we also have declarative programming, where the programmer tells the computer only what to do.
- So, when we write declarative code, we simply describe the way that the computer should achieve a certain result. But the "how" it shoud do it i.e. the step by step instructions, those get abstracted away i.e. we don't care about them.
- Going back to the cake example, the declarative way of instructing someone to bake the cake would be to simply describe that cake to the person, and then the person would have to come up with the step by step recipe on their own.
- So, simply describing the task and the result that should be achieved is the declarative way of doing it.
- Now coming back to the code example of doubling the values in an array, this is how we do it in the declarative way:

```javascript
const arr = [2, 4, 6, 8];
const doubled = arr.map(n => n * 2);
```

- We have the `arr` array and then we simply tell JS to map the values in the `arr` array to a new array and each of these values should be multiplied by 2.
- If you compare the two code examples then you will see that in the declarative way, all we are doing is describing the way that the computer should achieve the result that we are looking for.
- We are simply telling it what to do, which in this case, is to simply map the original array onto a new array and doubling all the elements.
- But all of the super detailed steps that we have in the imperative way i.e. creating an empty array and initializing a counter, all of these steps have been abstracted away, because we don't really care about them.
- This is pretty important to understand because more and more, this is how modern JS code is actually written.
- So, the difference between imperative and declarative is not just some theoretical difference.
- The declarative paradigm is actually a really big and popular programming paradigm, which has given rise to a sub paradigm called, functional programming.
- ![image](https://github.com/user-attachments/assets/78dec660-7fbc-4ab1-b3f2-79670317a1b7)
- Functional programming is basically a declarative paradigm, which is based on the idea of writing software, simply by combining multiple so called <ins>pure functions</ins>, while avoiding side effects and mutating data.
- And actually, functional programming and writing declarative code, has now basically become the modern way of writing code in the JS world.
- So, you will declarative and functional code everywhere.
- In fact, we have even been using it all along, but without really knowing that this style was called declarative, and functional.
- But let's quickly go back to the definition of functional programming, and talk about what side effects and pure functions are.
- A side effect is basically simply a modification of any data that's outside of a function.
- For example, mutating any variable that is external to the function is causing a side effect. So, basically any variable that is outside of the scope of the function.
- Now, data does not only refer to variables, for example, logging stuff to the console, or also changing something in the DOM, is also causing side effects.
- Next up, a pure function is a function without causing side effects. Basically, a function that does not mutate any external variables,a nd that does also not depend on any external variables and that also does not depend on any external variables.
- So basically, if we give the same inputs to a pure function, it will always return the same output - that's because it does not depend on any external variables, and it also does not manipulate them.
- Finally, if we look again at our definition, we also see that functional programming is also about avoiding mutating data, and we do that by using something called <ins>immutability</ins>.
- So, in functional programming, state aka data is never modified.
- So, let's say that we have some application, and we have an object there to keep track of all the data that we need in an application (we usually call that state). So, in functional programming, that state is never modified.
- Instead, what we will do is to copy that object i.e. state and then it is that copy that is mutated and can be returned but, the original state is never touched.
- That's what it means for the state being immutable; and the big upside of immutability is that, it makes it so much easier to keep track of how the data flows through our entire application.
- So ultimately, that will allow us to write better code with less bugs, and code that is also more readable, which overall, is the entire goal of using functional programming in the first place.
- We are not learning this with the goal of turning you into a functional programming, because that would actually be a very hard task, because this is really just a very high level introduction to what functional programming is.
- But behind the scenes, functional programming is a huge paradigm, which is really difficult to implement in practice.
- But it is still very important that you know some of these principles, such as side effects, pure functions, and immutability, because many of the popular libraries such as React and Redux are actually built around all of these principles.
- For example, in React, the state is also completely immutable, so if you ever want to learn something like React, you will need to know about these concepts in order to use it properly.
- However, some principles such as pure functions or side effects can actually be a bit easier to implement into our own code.
- So, what we are trying to say that we can actually mix imperative and declarative programming in our own codes. We don't have to go 100% declarative.
- In other words, we don't have to go 100% in the direction of making our code completely functional.
- So again, we can already start using some of the functional programming techniques in our own code base.
- For example, you can try to avoid data mutations as often as possible.
- Of course, this will not always be possible, but it is also not really necessary.
- So, these are mainly just some suggestions that will still create more readable and overall better and cleaner code.
- Another thing that you can do is to always prefer built-in methods or functions that do not product side effects over the ones that do, and this is really important for data transformations.
- So, whenever you want to do that, you should use methods such as `map()`, `filter()`, and `reduce()`.
- So, this is the functional and modern way of doing data transformations, and many times, this is actually the first contact that many people have, with functional programming.
- So `map()`, `filter()`, and `reduce()` are actually present in all functional programming languages, and they are very important to implement a functional code into more declarative code in our code.
- Finally, you can also try to avoid side effects into functions that you write yourself.
- Of course, this is not always possible or necessary. We will never be able to avoid all side effects in applications because of course, at some point, the applications needs to do something that leads to side effects.
- But you can still try to think about this, and start trying to avoid side effects in your own code.
- To finish, let's come back to declarative syntax, because functional programming is only a part of using and writing declarative code.
- So, in order to write code that is more declarative, you should use array and object destructuring whenever that's possible.
- You should also use the spread operator, the ternary operator, and also template literals whenever possible.
- This is because, if you think about it, then all of these four ways of writing code actually makes the code more declarative.
- So, these operators are more about telling the code what to do and not exactly the steps that it should take.
- Let's now continue fixing some bad code in our clean.js file in the next lesson by implementing some of the things that we learned in this lesson.

### Let's Fix Some Bad Code: Part 02

- `Object.freeze()`
  - This static method freezes an object. Freezing an object prevents extensions and makes existing porperties non-writable and non-configurable.
  - A frozen object can no longer be changed:
    - New properties cannot be added
    - Existing properties cannot be removed
    - Their enimerability, configurability, writability, or value cannot be changed
    - Object's prototype cannot be re-assigned.
  - It returns the same object that was passed in.
  - Freezing an object is the highest integrity level that JS provides.
  - Syntax: `Object.freeze(obj)`

> [!NOTE]
>
> `Object.freeze()` only freezes the first level of the object. So, it is not a deep freeze.
>
> Therefore, you can still change objects inside of the object.
>
> There are third-party libraries that provide functions for deep-freeze, you can look it up online.

> [!TIP]
>
> `Object.freeze()` also works with arrays since array are a type of object in JS.

- A function that has or produces side-effects is called an <ins>impure function</ins>.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
