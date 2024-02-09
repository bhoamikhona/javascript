# Section 08: How JavaScript Works Behind the Scenes

**About:** In this section, we will take a look behind the scenes of JavaScript and learn how the language actually works. Throughout this section, we will take your basic knowledge of JavaScript and elevate it to a completely new level where you will then understand exactly how everything that you learned before actually works under the hood. This is extremely important because this knowledge will empower you to write better code and to understand other developer's code. So, in the end, it will make you a better, more confident, and more successful developer.

## Table of Contents

- [Section 08: How JavaScript Works Behind the Scenes](#section-08-how-javascript-works-behind-the-scenes)
  - [Table of Contents](#table-of-contents)
  - [Lessons Learned](#lessons-learned)
    - [A High-Level Overview of JavaScript](#a-high-level-overview-of-javascript)
      - [High-Level](#high-level)
      - [Garbage-Collected](#garbage-collected)
      - [Interpreted or Just-in-Time Compiled](#interpreted-or-just-in-time-compiled)
      - [Multi-Paradigm](#multi-paradigm)
      - [Prototype-Based Object-Oriented](#prototype-based-object-oriented)
      - [First-Class Functions](#first-class-functions)
      - [Dynamic](#dynamic)
      - [Single-Threaded and Non-Blocking Event Loop](#single-threaded-and-non-blocking-event-loop)
    - [The JavaScript Engine and Runtime](#the-javascript-engine-and-runtime)
      - [What is a JavaScript Engine?](#what-is-a-javascript-engine)
      - [Computer Science Sidenote: Compilation vs. Interpretation](#computer-science-sidenote-compilation-vs-interpretation)
        - [Compilation](#compilation)
        - [Interpretation](#interpretation)
        - [Just-in-Time Compilation](#just-in-time-compilation)
      - [Modern Just-in-Time Compilation of JavaScript](#modern-just-in-time-compilation-of-javascript)
      - [The Bigger Picture: JavaScript Runtime](#the-bigger-picture-javascript-runtime)
    - [Execution Contexts and The Call Stack](#execution-contexts-and-the-call-stack)
      - [What is an Execution Context?](#what-is-an-execution-context)
      - [Execution Context in Detail](#execution-context-in-detail)
      - [The Call Stack](#the-call-stack)
    - [Scope and The Scope Chain](#scope-and-the-scope-chain)
      - [The 3 Types of Scope](#the-3-types-of-scope)
        - [Global Scope](#global-scope)
        - [Function Scope](#function-scope)
        - [Block Scope (ES6)](#block-scope-es6)
      - [The Scope Chain](#the-scope-chain)
      - [Scope Chain vs. Call Stack](#scope-chain-vs-call-stack)
      - [Summary](#summary)
    - [Variable Environment: Hoisting and The TDZ](#variable-environment-hoisting-and-the-tdz)
      - [Hoisting in JavaScript](#hoisting-in-javascript)
        - [Hoisting: Function Declarations](#hoisting-function-declarations)
        - [Hoisting: var](#hoisting-var)
        - [Hoisting: let and const](#hoisting-let-and-const)
        - [Hoisting: Function Declarations and Arrow Functions](#hoisting-function-declarations-and-arrow-functions)
      - [Temporal Dead Zone, Let and Const](#temporal-dead-zone-let-and-const)
    - [Hoisting and TDZ in Practice](#hoisting-and-tdz-in-practice)
    - [The this Keyword](#the-this-keyword)
      - [How the this Keyword Works](#how-the-this-keyword-works)
        - [Calling A Function As A Method](#calling-a-function-as-a-method)
        - [Simple Function Calls](#simple-function-calls)
        - [Arrow Functions](#arrow-functions)
        - [Event Listener Function Call](#event-listener-function-call)
    - [The this Keyword in Practice](#the-this-keyword-in-practice)
    - [Regular Functions vs. Arrow Functions](#regular-functions-vs-arrow-functions)
  - [Author](#author)

## Lessons Learned

### A High-Level Overview of JavaScript

- JavaScript is a <ins>High-Level</ins>, <ins>Prototype-Based Object-Oriented</ins>, <ins>Multi-Paradigm</ins>, <ins>Interpreted</ins> or <ins>Just-in-Time Compiled</ins>, <ins>Dynamic</ins>, <ins>Single-Threaded</ins>, <ins>Garbage-Collected</ins> programming language with <ins>First-Class Functions</ins> and a <ins>Non-Blocking Event Loop Concurrency Model</ins>.

#### High-Level

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/70fd55c5-0ffa-4b6f-8ea8-0a8e95b99ef4)
- Any program that runs on your computer needs some hardware resources, such as memory and the CPU to do its work.
- There are low-level languages, such as C, where you have to manually manage these resources.
- For example, asking the computer for memory to create a new variable.
- On the other side, you have high-level languages such as JavaScript and Python, where we do not have to manage resources at all because these languages have so-called <ins>abstractions</ins> that take all of that work away from us.
- This makes the language easier to learn and to use, but the downside is that programs will never be as fast or optimized as for example, C programs.

#### Garbage-Collected

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/5daaeb42-de60-4a87-b81c-699ffe8e5009)
- One of the powerful tools that takes memory management away from us, developers is garbage-collection.
- Garbage-collection is basically an algorithm inside the JavaScript engine which automatically removes old, unused objects from the computer memory in order to not clog it up with unnecessary things.
- It is a little bit like JavaScript has a cleaning guy who cleans our memory from time-to-time so that we don't have to do it manually in our code.

#### Interpreted or Just-in-Time Compiled

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/27131a12-c905-4bac-9b75-5b30c5bb53dd)
- JavaScript is an interpreted or just-in-time compiled language.
- We will learn more about it later in this section.
- For now, all you need to know is that the computer's processor only understands 0s and 1s.
- Therefore, ultimately every single program needs to be written in 0s and 1s, which is also called <ins>machine code</ins>.
- Since it is not practical for us, developers to write machine code, we simply write human-readable JavaScript code, which is an abstraction over machine code.
- But, the human-readable JavaScript code has to eventually be translated to machine code and that step could either be compiling or interpreting.
- In the case of JavaScript, this happens inside the JavaScript engine

#### Multi-Paradigm

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/7394b55c-1d20-4e1e-942c-837f9d65e637)
- One of the things that makes JavaScript so popular is the fact that it is a multi-paradigm language.
- In programming, a paradigm is an approach and an overall mindset of structuring our code, which will ultimately direct the coding style and technique in a project that uses a certain paradigm.
- This definition might sound a bit abstract but, it will become more clear as we move on.
- Three popular paradigms are:
  - Prcedural Programming
    - Procedural programming is what we've been doing so far, which is basically just organizing the code in a very linear way, and then with some function in between.
  - Object-Oriented Programming (OOP)
  - Functional Programming (FP)
- We can also classify paradigms as imperatives or as declarative (more on this later).
- Many languages are only procedural, or only object-oriented, or only functional but, JavaScript does all of it therefore, it is very flexible and versatile.

#### Prototype-Based Object-Oriented

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b4336a30-5c0b-4208-8c59-9ca41934ab48)
- JavaScript is a prototype-based, object-oriented approach.
- This means that almost everything in JavaScript is an object except for primitive values such as numbers, strings, etc.
- But arrays, for example, are just objects.
- If you ever wonder why we can create an array and then use the `push()` method on it (for example) then it is because of prototypal inheritance.
- Basically, we create arrays from an array blueprint, which is like a template and this is called a prototype.
- This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays.
- This explanation is a huge simplification of what it actually is but, we will learn more about it in [Section 14](../Section%2014).

#### First-Class Functions

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/59af7d86-09ba-4045-944d-20454b37cf6c)
- JavaScript is a language with first-class functions. This simply means that functions are treated just as regular variables.
- So, we can pass functions into other functions and we can even return functions from functions.
- This is extremely powerful as it allows us to use a lot of powerful techniques and also allows for functional programming.
- In fact, we have already used the power of first-class function in our [Modal Window Project](../Section%2007/Modal%20Window) where we passed in another function as an argument within the `addEventListener()` function.
- Not all languages have first-class functions but, JavaScript has, and it is amazing.

#### Dynamic

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/42a39712-7fb9-44d6-b98d-5f4e22a65f30)
- JavaScript is a dynamic language. Dynamic means dynamically typed.
- As we've already seen, in JavaScript, we don't assign data types to variables.
- Instead, they only become known when the JavaScript engine executes our code.
- Also, the type of variables can be changed as we re-assign variables. This is what dynamically-typed means.
- There is a lot of controversy if this is good or bad but, this is just how it works in JavaScript.
- The same is not true for most other programming languages.
- In other programming languages such as C, Java, and Ruby, you have to manually assign types to variables.
- This then usually prevents bugs from happening, which is the reason why many people say that JavaScript should be a strongly-typed language as well.
- If you want to use JavaScript with types, you can always look into TypeScript.

#### Single-Threaded and Non-Blocking Event Loop

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/9376b5ec-a2e2-458f-849d-126c05ad94ec)
- Let's not talk about the single-thread and the non-blocking event loop concurrency model.
- This is a very complex topic and probably the most complex one of the whole course, which is why it is kind of at the end of the course.
- Therefore, we are not going to get into specifics just yet but, we will just define some things here.
- What is a concurrency model?
  - It is just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time.
- Why do we need it?
  - We need it because JavaScript runs in one single thread. This means that it can only do one thing at a time and therefore, we need a way of handling multiple things happening at the same time.

> [!NOTE]
> In computing, a thread is like a set of instructions that is executed in the computer's CPU.
> Basically, the thread is where our code is actually executed in the machine's processor.

- What if there is a long-running task, such as fetching data from a remote server? It sounds like that would block the single thread where the code is running, and of course we don't want that. What we want is a so-called <ins>non-blocking</ins> behavior. How do we achieve that?
  - We achieve that by so-called <ins>event loop</ins>.
  - The event loop takes long-running tasks, executes them in the background and then puts them back in the main thread once they are finished.
  - This, in a nutshell, is JavaScript's non-blocking event loop concurrency model with a single thread.
  - We will talk more about it in detail in a later lesson, in this section.

### The JavaScript Engine and Runtime

- We talked about the JavaScript engine in the last lesson but, what is that engine actually? What is JavaScript runtime? Also, how is JavaScript code translated to a machine code? These are some of the topics we will covered in the last lesson. Now, let's talk about how they work in this lesson.

#### What is a JavaScript Engine?

- A JavaScript engine is simply a computer program that executes JavaScript code.
- There are a lot of steps involved in doing that, but essentially executing JavaScript code is what an engine does.
- Every browser has its own JavaScript engine but probably the most well known engine is Google's V8.
- The V8 engine powers Google Chrome but also, Node.js which is a JavaScript runtime that we can use to build server side applications with JavaScript (outside of any browser).
- All the other browsers have their own JavaScript engines which you can look up online if you are interested in it.
- It is quite easy to understand what an engine is but what's most important is to actually understand its components and how it works.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/a583ddf9-e11d-4152-9a5b-afe9a312c8e7)
- Any JavaScript engine always contains a call stack and a heap.
- The call stack is where our code is actually executed using something called execution contexts.
- The heap is an unstructured memory pool which stores all the objects that our application needs.
- With this look at the engine, we have answered where our code is executed.
- Now the question is how the code is compiled to machine code so that it can actually be executed afterwards.

#### Computer Science Sidenote: Compilation vs. Interpretation

- In the last lesson, we learned that the computer's processor only understands 0s and 1s. Therefore, every single computer program ultimately needs to be converted into machine code.
- This can happen using compilation or interpretation.

##### Compilation

- In compilation, the entire source code is converted into machine code at once.
- This machine code is then written into a portable file that can be executed on any computer.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/8568d871-1ab8-4506-a9f5-cca4cb5e4877)
- So, we have two different steps here.
- First, the machine code is built and then it is executed in the CPU, in the processor.
- The execution can happen way after the compilation.
- For example, any application that you are using on your computer right now has been compiled before and you are now executing it way after it's compilation.

##### Interpretation

- On the other hand, in interpretation, there is an interpreter which runs through the source code and executes it line-by-line.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c7dd9862-5a9d-4058-945d-efea419a9636)
- Here we do not have the same two steps as before.
- Instead, the code is read and executed all at the same time.
- Of course the source code still needs to be converted into machine code, but it simply happens right before it is executed and not ahead of time.
- JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages.
- This used to be okay for JavaScript, but now with modern JavaScript and fully-fledged web-applications that we build and use today, low performance is no longer acceptable.
- Just imagine that you were using Google maps in your browser and you were dragging the map and each time you dragged, it would take one second for it to move.
- That would be completely unacceptable.
- Many people still think that JavaScript is an interpreted language but, that is not really true anymore.
- Instead of simple interpretation, modern JavaScript engine now uses a mix between compilation and interpretation which is called <ins>just-in-time</ins> compilation.

##### Just-in-Time Compilation

- Just-in-Time compilation basically compiles the entire code into machine code at once and then executes it right away.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b04fd669-1ee0-43a5-bbb6-7ab3e72425ed)
- So, we still have the two steps of regular ahead of time compilation but there is no portable file to execute; and the execution happens immediately after a compilation.
- This is perfect for JavaScript as it is a lot faster than just executing code line-by-line.
- We skimmed over a lot of details here but, this is all we need to know to understand how it works.
- Let's now understand how it works in the particular case of JavaScript.

#### Modern Just-in-Time Compilation of JavaScript

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/fe62150d-7e51-41d4-b1b8-343c5bf25e34)
- As a piece of JavaScript code enters the engine, the first step is to parse the code - which essentially means to read the code.
- During the parsing process, the code is parsed into a data structure called the <ins>Abstract Syntax Tree (AST)</ins>.
- This works by first splitting up each line of code into pieces that are meaningful to the language like the `const` or `function` keywords, and then saving all these pieces into the tree in a structured way.
- This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.
- Let's say we have a very simple program, all it does is to declare a variable `const x = 23;` just like the one in the image above.
- For the one line of code, we can see what the AST would look like in that image. Just imagine what it would look like for a large application.
- You don't need to know what AST looks like. This is just for curiosity.
- Does AST have anything to do with the DOM tree?
  - The answer is a very clear no.
  - AST has absolutely nothing to do with the DOM. They are not related in any way.
  - AST is just a representation of our entire code inside the engine.
- The next step is compilation which takes the generated AST and compiles it into machine code just as we learned in [Just-in-Time Compilation](#just-in-time-compilation).
- This machine code then gets executed right away since modern JavaScript uses Just-in-Time compilation.
- The execution happens in the JavaScript engine's call stack - we will dig deeper into this in the next lesson.
- Now that we have our code running, we can finish here, right? Not so fast, because modern JavaScript engines actually have some pretty clever optimization strategies.
- What they do is to create a very unoptimized version of machine code in the beginning just so it can start executing as fast as possible.
- Then in the background, this code is being optimized and recompiled during the already running program execution.
- ![code-optimization](https://github.com/bhoamikhona/javascript/assets/50435319/18d957bc-1c94-4615-93d9-0ea0188aee15)
- This can be done multiple times and after each optimization the unoptimized code is simply swapped with the new, more optimized code without ever stopping execution.
- This process is what makes modern engines such as V8 so fast.
- All the parsing, compilation, and optimization happens in some special thread inside the engine that we cannot access from our code - completely separate from the main thread that is basically running into call stack executing our own code.
- Different engines implement this in a slightly different way but, in a nutshell, this is what modern just-in-time compilation looks like for JavaScript.

#### The Bigger Picture: JavaScript Runtime

- We looked at the JavaScript engine and how it works behind the scenes in quite some detail.
- Now to round off this lesson, let's take a look at what a JavaScript runtime is - in particular, the most common one, which is the browser.
- By doing this, we can get the bigger picture of how all the pieces fit together when we use JavaScript. So, this is an important topic.
- We can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript, in this case, in the browser.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/e8542db7-9268-44b7-8152-c0a48929a5af)
- The heart of any JavaScript runtime is always a JavaScript engine.
- However, the engine alone is not enough. In order to work properly, we also need access to the web APIs.
- Web APIs are everything related to the DOM, or timers, or even `console.log()` that we use all time.
- Essentially, web APIs are functionalities provided to the engine, but they are not a part of JavaScript language itself.
- JavaScript simply gets access to these APIs through the global window object.
- It still makes sense to include the web APIs as a part of JavaScript runtime because a runtime is like a box that contains all the JavaScript related things that we need.
- Next, a typical JavaScript runtime also includes a so-called <ins>callback queue</ins>.
- The callback queue is a data structure that contains all the callback functions that are ready to be executed.
- For example, we attach event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called callback functions. So, as the event happens, for example a click, the callback function will be called. Here is how that works behind the scenes:
- ![execution-of-callback-functions-in-javascript-runtime](https://github.com/bhoamikhona/javascript/assets/50435319/31490394-cdb6-4baf-b027-4c20834e0b1f)
- The first thing that happens after the event is that the callback function is put in the callback queue.
- Then when the call stack is empty, the callback function is passed to the stack so that it can be executed. This happens by something called the event loop.
- Basically, the event loop taks callback functions from the callback queue and puts them in the call stack so that they can be executed.
- In the last lesson we mentioned that the event loop is how JavaScript's non-blocking concurrency model is implemented - here is an overview of how that works.
- We will go over why this makes JavaScript non-blockig in a special lesson about event loop later in the course, because this is really a fundamental piece of JavaScript development that every developer needs to understand deeply.
- As mentioned before, the focus in this course is on JavaScript in the browser and that's why we analyzed the browser JavaScript runtime.
- However, it is also important to remember that JavaScript can exist outside of browsers, for example, in Node.js.
- Here is what the NodeJS JavaScript runtime looks like:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/ac840efd-f0a6-4348-b437-9b5ee2dd4432)
- It is pretty similar but, since we do not have a browser, we cannot have Web APIs because it is the browser who provides those.
- Instead, we have multiple C++ bindings and a so-called <ins>thread pool</ins>.
- Details don't matter here, it is just important to know that different JavaScript runtimes do exist.
- That is all we needed to know about JavaScript engines and runtimes.
- In the next lesson, we will learn how JavaScript is executed in the call stack.

### Execution Contexts and The Call Stack

- In this lesson, let's answer the question: How is JavaScript code executed?
- We already know that it happens in a call stack in the engine, but let's dig a bit deeper now.

#### What is an Execution Context?

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c7cea1a4-4109-47c9-8458-aa8544eb31e1)
- Let's start by supposing that our code was just finished compiling.
- The code is now ready to be executed.
- What happens then, is that a so-called <ins>global execution context</ins> is created for the top-level code.
- Top-level code is basically code that is not inside any function.
- In the beginning only the code that is outside of functions will be executed.
- This makes sense because functions should only be executed when they are called.
- We saw this happening in our [Pig Game](../Section%2007/The%20Pig%20Game) project where we had an init() function which initialized our entire project but, in order to actually initialize the game the first time that the page loaded, we needed to call that function immediately in our top-level code.
- We can also see what a top-level code is in the example in the image above.
- In the example, the 'name' variable decalration is clearly a top-level code.
- Therefore, it will be executed in the global execution context.
- Next, we have two functions - one expression and one declaration.
- These functions will also be declared so that they can be called later.
- But the code inside the functions will only be executed when the functions are called.
- So, we know that a global execution context is created for top-level code but, what exactly is an execution context?
- An execution context is an abstract concept but, we can define it as an environment in which a piece of JavaScript is executed.
- It is like a box that stores all the necessary information (such as local variables or arguments passed into a function) for some code to be executed.
- JavaScript code always runs inside an execution context.
- In any JavaScript project, no matter how large it is, there is only ever one global execution context, and it is where the top-level code will execute.
- Now that we have an environment where the top-level code can be executed, it finally is exected.
- There is not a lot to say about the execution itself, it is just the computer CPU processing the machine code that it received.
- Once the top-level code is finished executing, functions finally start to execute as well. Here is how that works:
  - For each and every function call, a new execution context will be created containing all the information that is necessary to run exactly that function.
  - The same goes for methods as well since they are just functions that are attached to an object.
  - All these execution contexts together, make up the call stack in the JavaScript engine.
  - When all the functions are done executing, the engine will basically keep waiting for more callback functions to arrive so that it can execute those. For example, a callback function associated with a click event (Remember that it is the event loop who provides these new callback functions).
- We know now what an execution context is but, we don't really know what it is made of just yet.
- So, what is inside of an execution context?

#### Execution Context in Detail

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/83c3d2da-989f-4701-b3f0-a14ce01a2687)
- The first thing that is inside of any execution context is a so-called <ins>variable environment</ins>.
- In this variable environment, all our variables and function declarations are stored and there is also a special `arguments` object.
- This `arguments` object contains, as the name suggests, all the arguments that were passed into the functions that the current execution context belongs to.
  - Remember that each function gets its own execution context as soon as the function is called.
- Basically, all the variables that are somehow declared inside a function, will end up in it variable environment.
- However, a function can also access variables outside of the function.
  - We have already seen it in action throughout this course, especially in the project of the [previous section](../Section%2007).
- This works because of something called the scope chain.
- We will learn all about scoping and the scope chain later in this section.
- For now, all you need to know is that the scope chain basically consists of references to variables that are located outside of the current function.
- To keep track of the scope chain, it is stored in each execution context.
- Finally, each execution context also gets access to a special variable called the `this` keyword.
  - There is a special lesson, just about the `this` keyword - later in this section.
- The content of the execution context viz variable environment, scope chain, and `this` keyword is generated in a so-called <ins>creation phase</ins> which happens right before execution.
- One final but very important detail that we need to keep in mid is that execution contexts belonging to arrow functions do not get their own `arguments` object and nor do they get their own `this` keyword.
- Basically, arrow functions do not have the `arguments` object and the `this` keyword.
- Instead, they can use the `arguments` object and the `this` keyword from their closest regular function parent.
- This is an extremely important detail to remember about arrow functions and we will come back to it later.
- These are the things that are necessary to run each function as well as the code in the top-level.
- Behind the scenes, it is actually even more complex but, we are fine like this.
- Now let's try to simulate the creation phase for the code example in the image above:
  - We will get one global execution context and one for each function - one for the first() function and another one for the second() function.
  - In the global context, we have the 'name' variable declaration, the first() and the second() function declarations, as well as the 'x' variable declaration.
    - The value of 'x' is marked unknown here because the value of 'x' is the result of the first() function that we didn't run yet.
    - We will simulate it soon.
  - For the functions, the variable environmnet will literally contain all the code of a particular function.
  - Technically, non of the values actually become known during the creation phase, but only in the execution phase.
  - So, this is not 100% accurate but, it is just to illustrate how these execution contexts work.
  - In the first() function, we have 'a' variable set to 1 and the 'b' variable requires a function call in order to become known.
  - The second() function contains the variable 'c' set to 2 and since it is a regular function (i.e. not an arrow function), it also has the `arguments` object.
    - This `arguments` object is an array, which contains all the arguments that were passed into the function when it was called.
  - In this example, this might seem simple but, imagine if there are 100s of execution contexts for 100s of functions. How will the engine keep track of the order in which functions were called? and how will it know where it currently is in the execution?
  - That's where the call stack finally comes in.

#### The Call Stack

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/c6351a00-c7b8-493d-9297-36669250ac6b)
- Remember that the call stack together with the memory heap, makes up the JavaScript engine itself.
- What is call stack?
  - It is basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the program's execution.
  - The execution context that is at the top of the stack is the one that is currently running.
  - Once it is finished running, it will be removed from the stack and the execution context will go to the one that was below it (now at the top of the stack).
- Let's now walk through the example code in the image above to understand how the class stack works.
  - ![the-call-stack-and-execution-context](https://github.com/bhoamikhona/javascript/assets/50435319/aa1fee38-d785-4650-b28b-5392def6101d)
  - Once the code is compiled, top-level code will start execution, and a global execution context will be created for the top-level code.
  - This global execution context will be then put in the callstack and it is now at the top of the call stack. Since this context is at the top of the stack, it is the one that is currently being executed.
  - At the top level code, we first have 'name' variable declaration and then the first() and second() functions are declared.
  - But then, in the last line is where things start to get interesting. We declared the 'x' variable with the value that is going to be returned from calling the first() function. So, let's actually call that function.
  - What happens immediately when a function is called? It get it's own execution context so that it can run the code that is inside its body.
  - What happens to the context? It is put in the call stack, on the top of the current context. So, the execution context of the first() function will be at the top of the stack.
  - Inside the first() function execution context, we have yet another simple variable declaration of 'a'. This variable 'a' will be defined in the current execution context, not in the gloabl execution context.
  - In the next line, we have yet another function call to second() function.
  - We will call that function and move there. Once the function is called, a new execution context will be created for second() function and that execution context will be placed on the top of the stack, making it the new, current execution context.
  - It is important to note here that the execution of the first() function has been paused.
  - We are running the second() function now and in the meantime, no other function is being executed.
  - The first() function stopped at the point where the second() function was called and it will only continue as soon as the second() function returns.
  - It has to work this way because JavaScript has only one thread of exection. So, it can only do one thing at a time.
  - Moving to the `return` statement in the second() function, the function will finish its execution. So, what does that mean for the call stack?
  - It basically means that the function's execution context will be popped off the stack and disappear from the computer's memory.
  - At least that's what you need to know for now because, actually the popped off execution context might keep living in the memory (more on this later).
  - What happens next, is that the previous execution context will now be back to being the active exection context again.
  - So, in the code, we will be back to where the second() was called from inside the first() function.
  - Hope that by now you start to see how the call stack really keeps track of the order of execution.
  - Without the call stack, how would the engine know which function was being executed before? It wouldn't know where to go back to.
  - That's the beauty of the call stack. It makes this process almost effortless.
  - You can think of the callstack being like a map for the JavaScritp engine because, the call stack ensures that the order of execution never gets lost.
  - So, we returned from the second() function, back to the first() function. Then we have a calculation with variable 'a' and then it returns the variable 'a'.
  - Here, the same thing happens as before. The current execution context gets popped off the stack, and the previous context is now the current context where the code is executed.
  - In this case, we are back to the global execution context and the line of code where the first function was first called.
  - Here the returned value is finally assigned to variable 'x' and the execution is finished.
  - Now the program will stay in this state forever until it is eventually actually finished, and that happens when we close the browser tab or the browser window.
  - Only when the program is really finished like this, is when the global execution context is also popped off the stack.
  - This is, in a nutshell hwo the call stack works.
- Hopefully, it makes sense now that we say that JavaScript runs inside the call stack. In fact, it is more accurate to say that code runs inside of execution contexts that are in the stack.
- Next up, we will learn more about the variable environment and how variables are created.

### Scope and The Scope Chain

- In the last lesson, we learned that each execution context has a variable environment, a scope chain and, a `this` keyword.
- In this lesson, let's learn what scope and a scope chain are, why they are so important and how they work.
- Let's start by understanding what scoping actually means, and learn about some related concepts as well.
- <ins>Scoping:</ins>
  - Scoping controls how our program's variables are organized and accessed by the JavaScript engine.
  - Basically, scoping asks the question: <i>"Where do variables live?"</i> OR <i>"Where can we access a certain variable, and where not?"</i>.
  - In JavaScript, we have something called **lexical scoping**.
- <ins>Lexical Scoping:</ins>
  - Lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the program's code.
  - For example, a function that is written inside another function has access to the variables of the parent function.
  - Lexical scoping is influenced by where exactly we write our functions and code blocks.
- <ins>Scope:<ins>
  - Scope is the space or environment in which certain variable is declared.
  - In the case of function, that's essentially the variable environment which is stored in the function's execution context.
  - If you are asking yourself, what is the difference between scope and variable environment?
    - The answer is that, for the case of functions, it is basically the same.
  - In JavaScript, we have **global scope**, **function scope**, and **block scope**. We will talk about theses in a second but, first, let's also define what the scope of a variable is.
- <ins>Scope of a Variable:</ins>
  - The scope of a variable is basically the entire region of our code, where a certain variable can be accessed.
- Some people use the word 'scope' for all of it but, there are subtle differences between them, so it is better to define them precisely.
- For example, if you take a close look at it, 'scope' is not the same as 'scope of a variable'. So, you should know about the subtle differences.

#### The 3 Types of Scope

- Remember that scope is the place in our code where variables are declared.
- When we say variables, the exact same thing is true for functions as well. This is because, at the end of the data, functions are just values that are stored in variables (in JavaScript).

##### Global Scope

- The global scope is for top-level code.
- It is for variables that are declared outside of any function or code block.
- These variables will be accessible everywhere in our program, in all functions and all blocks, so really, everywhere.

```javascript
// Example of Global Scope
const me = 'Bhoami';
const job = 'Web Developer';
const year = 1995;
```

##### Function Scope

- Each and every function creates a scope.
- The variables declared inside that function scope are only accessible inside that function. This is also called <ins>local scope</ins>, opposed to the global scope.
- So, local variables live in the function, so to say. These local variables are not accessible outside of that function.
- This is technically the same as the function's variable environment, but we still need to give it the name of scope in this context, because blocks also creates scopes.

```javascript
// Example of Function Scope
function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}

console.log(now); // ReferenceError
```

- In the example above, the 'now' variable is 2037 inside the calcAge() function. Therefore, we can use it in the function to do calculations.
- But outside of the function, as we try to log it ot the console, we get a reference error.
- So, JavaScript is trying to find the 'now' variable in the global scope (outside of the function), and it cannot find it. Hence, the error.
- Also, it doesn't matter what kind of function we are using; function declarations, function expressions, and arrow functions - all create their own scope.

##### Block Scope (ES6)

- Traditionally, only functions used to create scopes in JavaScript but, starting in ES6, blocks also create scopes now.
- With blocks, we mean everything that is between curly braces, such as the block of an if-statement or a for-loop.
- Just like with functions, variables declared inside a block are only accessible inside that block and not outside of it.
- The big difference is that block scopes only apply to variables declared with `let` or `const`.
- Again, only `let` and `const` variables are restricted to the blcok in which they were created.
- That's why we say that `let` and `const` variables are **block-scoped**.
- So, if we declare a variable using `var` inside a block, then that variable would still be accessible outside of the block, and it would be scoped to the current function or to the global scope.
- Therefore we say that `var` is **function-scoped**.
- In ES5 and before, we only had global scope and function scope. That's why ES5 variables declared with `var`, only care about functions, but not about blocks. They simply ignore them.
- Finally, also starting in ES6, all functions are now also block scoped, at least in strict mode, which you should always be using anyway.
- Just like with `let` and `const` variables, this means that functions declared inside a block are only accessible inside that block.

```javascript
// Example of Block Scope
if (year >= 1981 && year <= 1996) {
  const millenial = true;
  const food 'Avocado Toast';
}

console.log(millenial); // ReferenceError
```

#### The Scope Chain

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/50a2d535-8028-4640-b354-19861a861bfe)

```javascript
// Scope Chain Example
const myName = 'Jonas';

function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  function second() {
    const job = 'teacher';
    console.log(`${myName} is a ${age}-old ${job}`); // Jonas is a 30-old teacher
  }

  second();
}

first();
```

- To understand the scope and scope chain better, let's look at a more real and detailed example and also learn about the scope chain.
- In the example above, we have some code with different functions and blocks, and we are going to take a look at the scopes that are in the code as well as build the scope chain.
- Of course, we start with the global scope.
- As you can see, the 'myName' variable is the only variable declaration that we have in the global scope.
- Technically, the first() function also counts as a variable that is present in the global scope, but let's keep it simple and only consider variable declarations, and no functions.
- Just keep in mind that everything that we discuss here also applies to functions.
- Inside the global scope, we have a scope for the first() function because each function creates its own scope.
- What is in the scope?
  - It is the 'age' variable that is declared right at the top of the function.
- Next inside the first() scope, let's now consider the second function, which will also create its own scope containing the 'job' variable set to "teacher".
- As you see, we have a nested structure of scopes with one scope inside the other.
- But now comes the interesting part because in the second() function, we have a line of code where we need the 'myName' variable and the 'age' variable, which were both not declared inside the current scope.
- But we really need those variables because, otherwise, we won't be able to create the string there.
- So, how can this be fixed? How will JavaScript engine know the values of these variables?
- The secret is that every scope always has access to all the variables from all its outer scopes i.e. its parents' scopes.
- In our example, this means that the second scope can access the age variable from the scope of the first() function.
- This also means that the first() scope can access variables that are in the global scope, because that is its parent scope.
- As a consequence, the second() scope will also be able to access the 'myName' variable from the global scope, because it has access to the variables from the first() scope.
- All this also applies to function arguments but, in our example, we just don't have any.
- This is essentially how the scope chain works.
- In other words, if one scope needs to use a certain variable, but cannot find it in the current scope, it will look up in the scope chain and see if it can find a variable in one of the parent scopes.
- If it can, it will then use that variable. If it can't, then there will be an error.
- This process is called <ins>variable lookup</ins>.
- It is important to note that these variables are not copied from one scope to another.
- Instead, scopes simply look up in the scope chain until they find a variable that they need and then they use it.
- What is also extremely important to note is that this does not work the other way around.
- A certain scope will never, ever have access to the variables of an inner scope.
- In our example, the first() scope will never get access to the 'job' variable in the second scope.
- Again, one scope can only look up the chain but, it cannot look down.
- Only parent scopes can be used, but no child scopes.
- With all of this in place, the string in the second() function can now be printed to the console even though 'myName' and 'age' variables were not defined in the current scope.
- All the engine did was to get them from the scope chain.
- We still have one more scope left here, and that's the one created by the `if` block.
- Starting with ES6, not only functions create scopes, but also blocks.
- However, these scopes only work for the ES6 variable types i.e. for `let` and `const` variables.
- That's why the only variable in this block scope is the 'decade' variable.
- The 'millennial' variable is not declared with `const` or `let`, and therefore it is not scoped to just the `if` block. Instead, the 'millenial' variable is actually part of the first() function scope.
- Again, for a variable declared with `var` - block scopes don't apply at all. They are function scoped, not block scoped.
- `let` and `const` on the other hand are in-fact block scoped.
- This is one of the fundamental things that you need to keep in mind about `let`, `const`, and `var`, and about scoping in general.
- About the scope chain, if the 'millenial' variable is in the first() function scope, then of course the second() function scope also has access to it, even if it doesn't really need that variable.
- Also, the scope chain does apply to block scopes as well. Therefore, in our `if` block scope, we get access to all the variables from all its outer scopes viz from the first() function scope and of course the global scope.
- That's why we say that variables in the global scope are accessible from everywhere.
- They are because they are always at the top of the scope chain.
- In fact, we call variables in the global scope, <ins>global variables</ins>; and we use this term a lot in JavaScript.
- It is important to understand that our `if` block scope does not get access to any variables from the second() function scope. The same true the other way around.
- This is because of <ins>lexical scoping</ins> i.e. the way that we can access variables depends on where the scope is placed, so where it is written in the code.
- In this case, none of these two scopes (the `if` block scope and the second() function scope) are written inside of one another. They are both child scopes of the first() function. We could even say that they are sibling scopes.
- By the rules of lexical scoping, they cannot have access to each other's variables, simply because one is not written inside of the other.
- We can also say that the scope chain only works upwards, not sideways.

#### Scope Chain vs. Call Stack

- There is one more thing that we need to talk about in this lesson, which is the difference between the scope chain and the call stack.
- We will talk about how the call stack, execution context, variable environments, and scope are related to one another.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/eac9212c-d8d4-4ad9-aabd-91f1d06c73a9)

```javascript
const a = 'Jonas';
first();

function first() {
  const b = 'Hello';
  second();

  function second() {
    const c = 'Hi!';
    third();
  }
}

function third() {
  const d = 'Hey!';
  console.log(d + c + b + a); // ReferenceError
}
```

- Here we have three functions called first(), second(), and third().
- We start by calling the first() function, which then calls the second() function, which in turn calls the third() function.
- From what we learned before, the call stack for the example above will look like this:
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/14fa2989-256d-403f-be8e-0d949ba7f0e1)
- One execution context for each function in the exact order in which they were called.
- It also includes the variable environmnet of each execution context.
- For now, all of it has nothing to do with the scopes or the scope chain.
- All we are doing is creating one exection context for each function call and filling it with the variables of that function.
- Now that we have all these variable envrionments in place, we can actually start building the scope chain.
- As always, we will start with the global scope and the variables available in the global scope are exactly the ones stored in the variable environment of the global execution context.
- Note that in this example, we are including functions in each scope unline we did in the previous example.
- In the global scope, we also call the first() function, which is the reason why we have an execution context for it in the call stack.
- This function of course, also gets its own scope, which contains all the variables that are decalred inside of the function.
- This is exactly the same as the variable environment of the functions execution context.
- However, this is not all because we already know about the scope chain.
- The first() scope also gets access to all the variables from its parent scope, thanks to the scope chain.
- As we already know, the scope chain is all about the order in which functions are written in the code but what is important to note here is that the scope chain has nothing to do with the order in which functions were called.
- In other words, the scope chain has nothing to do with the order of the execution contexts in the call stack.
- The scope chain does get the variable environmnets from the execution context as shown in the image above but that's it.
- The order of function calls is not relevant to the scope chain at all.
- Moving on to the second() function, its scope is equal to its variable environment.
- Also, it is lexically written within the first() function so, of course it will have access to all its parent scopes as well.
- So, we can say that the scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.
- This is how the scope, and the scope chain are built in the JavaScript engine behind the scenes.
- In the second() function, we try to call the third() function. Why does that work?
- It works because the third() function is in the scope chain of the second() function scope as we can see in the scope chain diagram in the image above.
- It is a function in the global scope or a global function, and therefore, it is accessible everywhere.
- Of course, this will create a new scope along with the scope chain as we already know.
- What happens in the third() function?
  - We are trying to access the variables 'a', 'b', 'c', and 'd' here.
  - 'd' is not a problem because it is right there in the third() function scope.
  - The variable 'c' is not in the local scope so JS needs to do a variable lookup in the scope chain.
  - So, it looks up in the scope chain, looking for variable 'c' but, it is not there.
  - Of course variable 'c' is not there because it is defined in second() function and there is no way in which the third() function can access variables defined in the second() function.
  - This is true, even though it was the second() function who called the third().
  - This is a proof that the order in which functions are called does not affect the scope chain at all.
  - As a result, we get a ReferenceError because both 'b' and 'c' cannot be found in the third() scope nor in the scope chain.
- With this lesson, it should be crystal clear that execution context, variable environments, the call stack, and the scope chain are all different but still very related concepts.

#### Summary

- Scoping asks the question <i>"Where do variables live?"</i> or <i>"Where can we access a certain variable, and where not?"</i>.
- There are 3 types of scope in JavaScript:
  - The global scope
  - The function scope
  - The block scope (starting in ES6)
- Only `let` and `const` variables are block scoped. Variables declared with `var` end up in the closest function scope.
- In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written.
- Every scope always have access to all the variables from all its outer scopes. This is the scope chain!
- When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it is looking for. This is called variable lookup.
- The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope.
- The scope chain in a certain scope is equal to adding together all the variable environments of all the parent scopes.
- The scope chain has nothing to do with the order in which function were called. It does not affect the scope chain at all.

### Variable Environment: Hoisting and The TDZ

- The next topic that we need to talk about is a very misunderstood concept in JavaScript and that is hoisting.

#### Hoisting in JavaScript

- We learned that an execution context always contains 3 parts:
  - A variable environment
  - The scope chain
  - The `this` keyword.
- We already learned about the scope chain so now, it is time to take a closer look at the variable environment and in particular at how variables are actually created in JavaScript.
- In JavaScript, we have a mechanism called <ins>hoisting</ins>.
- Hoisting basically makes some type of variables accessible or let's say usable in the code before they are actually declared in the code.
- Many people say that the variables are magically lifted or moved to the top of their scope, for example, to the top of a function; and that actually is what hoisting looks like on the surface.
- But, behind the scenes, that is in fact not what happens.
- Instead, behind the scenes, the code is basically scanned for variable declarations before it is executed.
- This happens during the so-called <ins>creation phase</ins> of the execution context that we talked about before.
- Then, for each variable that is found in the code, a new property is created in a variable environment object. That's how hoisting really works.
- Now, hoisting does not work the same for all variable types.
- So, let's analyze the way hoisting works for function declarations, variables defined with `var`, variables defined with `let`, or `const`, function expressions and arrow functions.
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b73ab724-5d57-4e96-a331-d7c295b1cf8b)

##### Hoisting: Function Declarations

- Function Declarations are actually hoisted and the initial values in the variable environment is set the actual functions.
- In practice, this means that we can use function declarations before they are actually declared in the code, again, because they are stored in the variable environment object, even before the code starts executing.
- It was mentioned before, in the course, that function declarations work this way but, now you know why - it is because of hoisting.

##### Hoisting: var

- Next, variables declared with `var` are also hoisted, but hoisting works in a different way here.
- Unlike functions, when we try to access a `var` variable before it is declared in a code, we don't get the declared value but, we get `undefined`.
- This is a really weird behavior for beginners.
- You might expect that you'd simply get an error when using a variable before declaring it OR to get the actual value but, not `undefined`; because getting `undefined` is really just weird and it is not very helpful either.
- Also, this behavior is a common source of bugs in JavaScript. So, this is one of the main reasons why in modern JavaScript, we almost never use `var`.

##### Hoisting: let and const

- On the other hand, `let` and `const` variables are not hoisted. They technically are hoisted but their value is basically set to `uninitialized`.
- So, there is no value to work with at all. Therefore, in practice, it is as if there was no hoisting happening at all.
- Instead, we say that these variables are placed in a so-called <ins>Temporal Dead Zone (TDZ)</ins> which makes it so that we cannot acess the variables between the beginning of the scope to the place where the variables are declared.
- As a consequence, if we attempted to use a `let` or a `const` variable, before it is declared, we get an error.
- Also, keep in mind that `let` and `const` are block scoped. So, they exist only in the block in which they were created.
- All of these factors together are the reason why `let` and `const` were first introduced to the language, and also why we use them now instead of `var` in modern JavaScript.

##### Hoisting: Function Declarations and Arrow Functions

- What about Function expressions and arrow functions? How does hoisting work for them?
- It depends if they were created using `var` or `const` or `let`. Because, keep in mind that these functions are simply variables. So, they behave the exact same way as variables in regard to hoisting.
- This means that a function expression or an arrow function created with `var` is hoisted to `undefined`. But, if they are created with `let` or `const`, it is not usable before it is declared in the code because of TDZ - Just like normal variables.
- This is the reason why we cannot use function expressions and arrow functions before we write them in the code, unline function declarations.

#### Temporal Dead Zone, Let and Const

- Let's take a detailed look at the Temporal Dead Zone (TDZ).
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/fff737e0-8653-4297-979e-23280c03ff5f)
- In the example above (in the image), we are going to look at the 'job' variable.
- It is a `const` variable so, it is scope only to the `if` block and it is going to be accessible starting from the line where it is defined.
- Why? Because there is the Temporal Dead Zone for the 'job' variable.
- It is basically the region of the scope in which is the variable is defined, but can't be used in any way.
- So, it is as if the variable didn't even exist.
- If we still tried to access the variable while in the TDZ like we actually do in the first the line of the `if` block, then we get a reference error which says that we cannot access 'job' before initialization - exactly as we learned in the last slide.
- However, if we tried to access a variable that was actually never even created, like in the last line of the `if` block, where we are trying to print the value of 'x' - then we get a different error which says that 'x' is not defined at all.
- This means that the 'job' is in fact in TDZ where it is un-initialized but the engine knows that it will eventually be initialized because it already read the code before and se teh 'job' variable in the variable environment un-initialized.
- Then when the execution reached the line where the variable is declared, it is removed from the TDZ and it is then safe to use.
- RECAP:
  - Each and every `let` and `const` variable get their own TDZ that starts at the beginning of the scope until the line where it is defined.
  - The variable is only safe to use after the TDZ.
- What is the need for JS to have a TDZ?
  - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/0c19bafc-8e2b-425f-8038-f53230307fb5)
  - The main reason that the TDZ was introduced in ES6 is that the behavior that we learned about earlier, and TDZ makes it way easier to avoid and catch errors.
  - Using a variable that is set to `undefined` before it is actually declared can cause serious bugs which might be hard to find.
  - Access variables before declaration is bad practice and should be avoided.
  - The best way to avoid it is by simply getting an error when we attempt to do so - that's exactly what a TDZ does.
  - A second and smaller reason why the TDZ exist is to make `const` variables actually work the way that they are supposed to.
  - As you know, we cannot re-assign `const` variables. So, it will not be possible to set them to `undefined` first and then assign their real value later.
  - `const` should never be re-assigned so, it is only assigned when execution actually reaches the declaration.
  - This makes it impossible to use the `const` variable before.
- If hoisting creates so many problems, why does it exist in the first place?
  - ![image](https://github.com/bhoamikhona/javascript/assets/50435319/561445ee-e84c-4940-96ff-e15d8663788c)
  - The creator of JS basically implemented hoisting so that we can use function declarations before we declare them.
  - Because this is important for some programming techniques, such as mutual recursion.
  - Some people also thing that it makes code a lot more readable.
  - Now, the fact that it also works for `var` declarations is because that was the only way hoisting could be implemented at the time.
  - So, the hoising of `var` variables is basically just a byproduct of hoisting functions.
  - It probably seemed like a good idea to simply set variables to `undefined`, which in hindsight is really not that great.
  - But we need to remember that JS was never intended to become the huge programming language that it is today.
  - Also, we cnanot remove that feature from the language now.
  - So, we just use `let` and `const` to work around it.

### Hoisting and TDZ in Practice

- what are these best practices? What is the conclusion of all this?
  - First, don't use `var` variables. Use `const` most of the time to declare variables and `let` if you really need to change the variable later.
  - Also, to write clean code, you should delcare your variables at the top of each scope. That will just make your code at least look a little bit better.
  - Finally, always declare all your functions first and use them only after the declaration. This applies to all types of functions, even function declarations, which are hoisted.
- Another peculiar thing (difference) between `var`, `let`, and `const:

```javascript
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(x === window.y); // false
console.log(x === window.z); // false
```

- After typing the above example in the script file, now if you look at the window object in the chrome developer tools, you will find a property of x which is set to 1 in it.
- However, you won't find y or z there - that's because they were declared with let or const
- So variables created by using let or const, do not create properties on the window object

### The this Keyword

- The `this` keyword is an extremely important concept to understand in JavaScript; and many beginners find it especially difficult. However, it is not that hard if you know how the `this` keyword actually works.

#### How the this Keyword Works

- The `this` keyword or `this` variable is basically a special variable that is created for every execution context and therefore any function.
- In fact, we learned before that it is one of the 3 components of any execution context, along with the variable environment and scope chain that we already learned about before.
- In general terms, the `this` keyword, will always take the value of the owner of the function in which, the `this` keyword is used.
- We also say that it points to the owner of that function. This might seem very abstract but, we will see what that means in a second.
- For now, what is really important to understand is that the value of the `this` keyword is not static. So, it is not always the same. It depends on how the function is actually called; and its value is only assigned when the function is actually called.
- So, it is very different from a normal value, in this regard.
- If we set, for example, 'x' to 5 then 'x' will always be 5 but, the `this` keyword depends on the way in which a function is called.
- But, what does that actually mean?
- Let'a analyze the 4 different ways in which a function can be called:

##### Calling A Function As A Method

- The first way to call a function is as a method. So, a function attached to an object.
- When we call a method, the `this` keyword inside that method will simply point to the object on which the method is called, or in other words, it points to the object that is calling the method.
- Let's illustrate this with a simple example:

```javascript
const bhoami = {
  name: 'Bhoami',
  year: 1995,
  calcAge: function () {
    return 2037 - this.year;
  },
};

bhoami.calcAge(); // 42
```

- According to what we just learned, the value of the `this` keyword should be 'Bhoami' because that is the object that is calling the method in the last line of the code.
- So then, on 'bhoami', we can access all the properties that it has has. So, `this.year` will become 1995, because that's the value of `bhoami.year`.
- So, in this case, writing `bhoami.year` will have the exact same effect as writing `this.year`.
- But, using the `this` keyword is a way better solution, for many reasons that we will get into throughout the course.
- We will play around with this example a bit more in the next lesson - where we will see the `this` keyword in practice.

##### Simple Function Calls

- Another way we call functions is by simply calling them as normal functions i.e. not as method (not attached to any object).
- In this case, the `this` keyword will simply be `undefined`. However, that is only valid for strict mode.
- If you are not in strict mode, this will actually point to the global object, which in case of the browser is the window object. This can be very problematic so, this is yet another very good reason to always use the strict mode.

##### Arrow Functions

- While arrow functions are not exactly a way of calling functions, it is an important kind of function that we need to consider, because, remember that arrow functions do not get their own `this` keyword. Instead, if you use the `this` keyword in an arrow function, it will simply be the `this` keyword of its parent function and in technical terms, this is called the <ins>lexical `this` keyword</ins> because it simply gets picked up from the outer lexical scope of the arrow function.
  - Never, ever forget this very important property of arrow functions - it is one of the common causes of bugs.

##### Event Listener Function Call

- If the function is called as an event listener, then the `this` keyword will always point to the DOM element that the handler function is attached to.
- The `this` keyword is usually a big source of confusion for beginners but, if you know these rules, then it shall become a lot simpler.
- To make it even simpler, it is also important to know what the `this` keyword is not.
- `this` will never point to the function in which we are using it.
- Also, the `this` keyword will never point to the variable environment of the function.
- These are two pretty common misconceptions and so that's why they needed to be addressed here.
- The rules that we learned in this lesson are all we need to know.
- There are other ways in which we can call a function, for example, using the `new` keyword or the `call()`, `apply()`, or `bind()` methods but, we don't know what any of those are so, we will talk about `this` keyword regarding them when we learn about them.

### The this Keyword in Practice

- Method Borrowing (Look at the [script](./script.js) file for more info)

### Regular Functions vs. Arrow Functions

- Read more about this in the [script](./script.js) file.
- You should never, ever use an arrow function as a method. This is true even when you are not even using `this` keywrod. This is because, if you have the rule of never using an arrow function as a method, then you never have to think about which type of function you should use.
- You will always just use a normal function expression, and that way, you will then prevent the kind of errors we talked about in the [script](./script.js) file.
- In a regular function call, the `this` keyword is set to `undefined`, even if the function is nested inside of a method.
- There are two solutions to this problem.
  - Pre-ES6 Solution: The first solution is to use an extra variable that we usually call "self", we declare it outside the function and set its value to `this`.
  - ES-6 Solution: Use an arrow function as it uses the `this` keyword of its parent's scope.
- `arguments` keyword
  - Just like the `this` keyword, the `arguments` keyword is only available in regular functions.
  - Look at the [script](./script.js) file to know more about it.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
