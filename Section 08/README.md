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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
