# Section 05: Developer Skills & Editor Setup

**About:** In this section, you will learn how to learn to code, how to think as a developer, how to debug your code in case you run into problems, and also, how to set up a professional development environment on your own computer.

## Table of Contents

- [IDE Setup](#ide-setup)
- [How to Succeed at Learning How to Code](#how-to-succeed-at-learning-how-to-code)
- [How to think like a Developer: Solving Problems](#how-to-think-like-a-developer-solving-problems)
- [Lessons Learned](#lessons-learned)

## IDE Setup

- Configurations:

  - Change default formatter to Prettier
  - Creating "prettierrc" file for personalized syntax configurations
  - Creating code snippets

- VS Code Extensions:
  - Prettier
  - Live Server
  - Auto Close Tag
  - Auto Rename Tag
  - ESLint
  - Image Preview
  - Settings Sync
  - TODO Highlight

## How to Succeed at Learning How to Code

- **Have a clear Goal**
  - Set a <ins>specific</ins>, <ins>measurable</ins>, <ins>realistic</ins>, and <ins>time-based</ins> goal.
  - Know exactly <ins>why</ins> you are learning to code: Switching careers? Finding a better job?
  - <ins>Imaging a big project</ins> you want to be able to build!
  - Research technologies you need and then learn them.
- Don't just copy-paste code from somewhere, **understand what the code does**.
  - Understand the code that you're studying and typing.
  - <ins>Always type the code</ins>, don't copy-paste.
- Reinforce what you've learnt.
  - After you learn a new feature or concept, <ins>use it immediately</ins>
  - Take notes
  - <ins>Challenge yourself</ins> and practice with small coding exercises and challenges
  - Don't be in a hurry to complete the course fast!
- **Practice Coding** outside of the Course Environment
  - Practicing on your own is the most important thing to do.
  - <ins>This is NOT optional!</ins> Without <ins>practice outside of courses</ins>, you won't go anywhere!
  - Come up with your own project ideas or copy popular sites or applications, or just parts of them in the beginning.
  - Don't be stuck in "tutorial hell".
- **Do not get frustrated with the quality of your code**
  - <ins>Don't get stuck</ins> trying to write the perfect code!
  - Just write tons of code, <ins>no matter the quality!</ins>
  - Clean and efficient code will come with time
  - You can always refactor code later.
- **Don't lose motivation because you don't know everything**
  - It is a huge field and it is completely normal to not know everything.
  - Don't put too much weight on your shoulders, creating too many expectations.
  - Just focus on what you need to achieve i.e. your goal.
- **Don't Learn in Isolation**
  - Explain new concepts to other people. If you can explain it, you truly understand it.
  - Share your goals to make <ins>yourself accountable</ins>.
  - Share your learning progress with the web dev community (#100DayOfCode, #CodeNewbie, #webdev, etc - Twitter)
- Don't think that after finishing a couple of courses, you will now be a web developer and you can start applying to jobs.
  - This is the biggest misconception that people have that they can just take a couple of courses and they're done. Unfortunately, that is not how it works.
  - Courses are an amazing starting point but, they are only the beginning of the journey.

## How to think like a Developer: Solving Problems

- Solving problems is one of the most important things in programming.
- If your goal is to become a great programmer, you need to learn how to deal with problems effectively.
- Problem solving does not mean to fix coding mistakes or bugs.
- <ins>Stay calm and slow down</ins>, don't just jump at a problem without a plan.
- Take a very <ins>logical and rational approach</ins> (programming is just logic, in the end...)
- Use **4-step framework** to solve any problem:
  - Make sure that you 100% understand the problem. <ins>Ask the right questions</ins> to get a clear picture of the problem.
  - <ins>Divide and Conquer</ins>: Break a big problem into smaller sub-problems.
  - Don't be afraid to do as much <ins>research</ins> as you have to.
  - For bigger problems, <ins>write pseudo-code</ins> before writing the actual code.
    - A pseudo-code is simply an informal description of the actual code that we're going to write.
    - There are no real rules on how to write pseudo-code, you just write so that you understand it, yourself, and/or other people on your team.
- A general good word of advice: Develop a genuine curiosity and passion for understanding how things actually work, not only in programming but also, in the whole world around you.
- Use Google, StackOverflow, and MDN to research regarding your queries.
- Debugging
  - Software Bug: Defect or problem in a computer program. Basically, any unexpected or uninteded behaviour of a computer program is a software bug.
  - Bugs are completely normal in software development.
  - Debugging: Process of finding, fixing, and preventing bugs.
- Debugging Process
  - Step 1: Become aware that there is some kind of bug.
    - Discovering bugs usually happens during development using automated testing software or user reports during production and bugs that are identified during production are the worst bugs because it means that they went undiscovered during development and are now affecting real users of our application. That's why it is really important to discover bugs early.
    - While identifying bugs, sometimes, we also need to take into consideration the context in which the bug happened. e.g. certain bugs might only happen in a certain browser, or only for certain users, for some reason.
  - Step 2: Once we know there is a bug, we need to go into our code and find it.
    - We need to isolate where it is happening and we can do that using the developer console. However, that only works for small bugs and simple code where we have a good idea where the bug might be located.
    - If the code is complex and we have no idea where the bug might be, then we need to use a debugger software.
  - Step 3: Once we know where the bug is located, we can finally fix it.
    - Replace the wrong solution with the new, correct solution.
  - Step 4: Prevent the bug from ever hapening again in our code base.
    - Search for the same bug in similar code.
    - Write tests for it using testing softwares.

## Lessons Learned

- `concat()` - The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays but, returns a new array.
- `console.warn()` - The warn method writes a warning to the console.
- `console.error()` - The error method writes an error to the console.
- `console.table()` - The table method displays tabular data as a table. This function takes on mandatory argument `data`, which must be an array or an object, and one additional optional parameter `columns`.
- Using Chrome Dev Tools Sources tab and its Debugger.
- `debugger;` - The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect; i.e. JS has the `debugger` statement and when the browser sees this debugger, it will automatically open up the debugger tool.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
