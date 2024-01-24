# Section 08: How JavaScript Works Behind the Scenes

**About:** In this section, we will take a look behind the scenes of JavaScript and learn how the language actually works. Throughout this section, we will take your basic knowledge of JavaScript and elevate it to a completely new level where you will then understand exactly how everything that you learned before actually works under the hood. This is extremely important because this knowledge will empower you to write better code and to understand other developer's code. So, in the end, it will make you a better, more confident, and more successful developer.

## Table of Contents

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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
