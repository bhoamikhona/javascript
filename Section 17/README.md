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

- HTML `<script>` tag, `type` attribute

```html
<script type="module" defer src="./script.js"></script>
```

- The `type` attribute indicates the type of script represented. The value of this attribute will be one of the following:
  - default is an empty string or JS MIME type
  - `importmap`
  - `module`
    - This value causes the code to be treated as JS module. the processing of the script contents is deferred. The `charset` and `defer` attributes have no effect. For information on using `module`, see [JavaScript modules guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). Unline classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
  - `speculationrules`
  - Any other value
- `import`
  - The static `import` declaration is used to import read-only live bindings which are exported by another module.
  - The imported bindings are called live bindings because they are updated by the module that exported the binding, but cannot be re-assigned by the importing module.
  - In order to use the `import` declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding `type="module"` to the `<script>` tag.
  - Modules are automatically interpreted in strict mode.
  - There is also a function-like dynamic `import()`, which does not require scripts of `type="module"`.
  - You can rename an export when importing it using the `as` keyword, in the current scope.
    - Example: `import totalPrice as price from '.shoppingCart.js';
- In ES Modules, there are two types of exports:
  - Named exports
    - Names exports is actually the simplest way of exporting something from a module, because all we have to do is to put `export` in front of anything that we might want to export.
    - Of course, we can also export multiple things from a module using named exports. This is actually the main use case of the named exports.
    - Note that when we are importing named exports, we wanna surround them with curly braces. Otherwise it will throw an error.
    - You can re-name a name ot something that's not a valid identifier by using a string literal, when exporting something.
      - Example: `export {totalQuantity as tq}`
    - So, all of this is very flexible as you can see, and we can play around with it as we wish.
  - Default exports
    - Usually, we use default exports when we only want to export one thing per module, and so that's the reason why they are called default.
    - To make a default export, we need to use the `default` keyword.
- Keep in mind that exports need to happen always in the top-level code. If they were inside an if-block or a function, it wouldn't work.
- We can import everything at once from a module using `*`.
- As a rule of thumb, do not mix default exports and named exports. It is just a convention, not a rule.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
