# Section 02: JavaScript Fundamentals - Part 01

**About:** In this section, you will start learning the very basics of JavaScript (JS) language. So, things like variables, data types, operators, if/else statements, and more.

## Table of Contents

- [Lessons Learned](#lessons-learned)
  - [Hello, World!](#hello-world)
  - [A brief introduction to JavaScript](#a-brief-introduction-to-javascript)
  - [Linking a JavaScript File](#linking-a-javascript-file)
  - [Values and Variables](#values-and-variables)
  - [Data Types](#data-types)
  - [let, const, and var](#let-const-and-var)
  - [Basic Operators](#basic-operators)
  - [Operator Precedence](#operator-precedence)
  - [Strings and Template Literals](#strings-and-template-literals)
  - [Taking Decisions: if/else Statements](#taking-decisions-ifelse-statements)
  - [Type Conversion and Coercion](#type-conversion-and-coercion)
    - [Type Conversion](#type-conversion)
    - [Type Coercion](#type-coercion)
  - [Truthy and Falsy Values](#truthy-and-falsy-values)
  - [Equality Operators == vs. ===](#equality-operators--vs)
  - [Boolean Logic](#boolean-logic)
  - [Logical Operators](#logical-operators)
  - [The Switch Statement](#the-switch-statement)
  - [Statements and Expressions](#statements-and-expressions)
  - [The Conditional (Ternary) Operator](#the-conditional-ternary-operator)
  - [JavaScript Releases: ES5, ES6+, and ESNext](#javascript-releases-es5-es6-and-esnext)
    - [History of JavaScript](#history-of-javascript)
    - [Backwards Compatibility](#backwards-compatibility)
    - [Forwards Compatibility](#forwards-compatibility)
    - [How to use modern JavaScript today?](#how-to-use-modern-javascript-today)
- [Author](#author)

## Lessons Learned

### Hello, World!

- Using Chrome Developer Tools
- `alert()`

### A brief introduction to JavaScript

- What is the role of JS in web development
- JavaScript Releases

### Linking a JavaScript File

- Internal JavaScript
- External JavaScript
  - Linking a JS file to HTML file
- `console.log()`
- Separation of Concerns

### Values and Variables

- Declaring a variable
- Conventions and Rules for naming variables
  - Camel Case (Standard for JavaScript)
  - Kebab Case
  - Snake Case
  - Cannot start with a number
  - Can only contain numbers, letters, underscores, or the dollar sign
  - Cannot use Reserved JS keyword
  - Should not start a variable name with capital letter
  - Variables written in all caps are reserved for constants that we know will never change, for e.g., the number PI which is approximately equal to 3.14
  - Make sure variable names are descriptive

### Data Types

- Every value is either an object or a primitive value
- Primitive Data Types:
  - Number (always floating point numbers)
  - String
  - Boolean
  - undefined - value taken by a variable that is not yet defined
  - null - similar to undefined but, used in different circumstances
  - Symbol - defines a value that is unique and cannot be changed
  - BigInt - holds larger numbers that Number type cannot hold
- JS has dynamic typing. We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.
- Comments - single line comment and multi-line comment
- `typeof` operator
- Whenever we declare an empty variable i.e. a variable which is declared but not assigned a value - its value and its type both will be `undefined`
- Error in `typeof` operator
  - JS says that the `typeof null` is an object - this is an error
  - `null` is similar to `undefined` so it should behave like `undefined` but, it does not. This error hasn't been fixed due to legacy reasons.- `null` is not an object

### let, const, and var

- `let` and `const` were introduced in JavaScript in ES6 so, they are modern JavaScript.
- `var` is the old way of declaring variables.
- We use `let` keyword to declare variables that can change later (during execution of our program).
- We use the `const` keyword to declare variables that are not supposed to change at any point in the future.
  - We cannot declare empty `const` variables.
- It is recommended to use `const` by default and use `let` only when you are absolutely sure that the variable needs to change at some point in the code.
  - The reason for this is that it is a good practice to have as little variable mutations or variable changes as possible because changing variables introduces a potential to create bugs.
- There is also a third way in JS of declaring variables, which is the `var` keyword but, this one should be completely avoided.
  - At first sight, `var` looks pretty similar to `let` but, below the surface, they are actually pretty different. We will learn about these differences in [Section 08](../Section%2008)

### Basic Operators

- Arithmetic Operators
  - `+`
  - `-`
  - `*`
  - `/`
  - `**`
- String Concatenation using `+`
- Assignment Operators
  - `=`
  - `+=`
  - `-=`
  - `*=`
  - `/=`
  - `++`
  - `--`
- Comparison Operators
  - `>`
  - `<`
  - `>=`
  - `<=`

### Operator Precedence

- JavaScript has a well-defined order of operator precedence i.e. order in which operators are executed.
- To see the precedence of all the different operators, you can check out the very handy [precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence) on MDN Docs.

### Strings and Template Literals

- Concatenating strings using `+` operator can be a bit of a pain. So, to remedy that, starting in ES6, we have something called template literals.
- With template literals, we can write a string in a more normal way, and then basically insert the variables directly into the string.
- Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.
- Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). However, a tagged template literal may not result in a string; it can be used with a custom tag function to perform whatever operations you want on the different parts of the template literal.
- Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: `${expression}`.
- You can use backticks for a regular string.
- You can write multi-line string with template literal and this can be very useful as they can be used to create HTML elements and insert them dynamically on a page.

### Taking Decisions: if/else Statements

- The `if...else`statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
- The `else` block is optional.
- The `if() {} else {}` is called a control structure because it allows us to have more control over the way our code is executed.

### Type Conversion and Coercion

- In JavaScript, there is <ins>Type Conversion</ins> and <ins>Type Coercion</ins>. They sound very similar but, are very different.

#### Type Conversion

- Type Conversion is when we manually convert a value from one type to another.
- On the other hand, type coercion is when JavaScript automatically converts types behind the scenes for us (which might be necessary in some situations but, it happens implicitly, completely hidden from us).
- `Number()` - This function will convert any data type to a number data type. It will not convert the original value. It will return a new value which is converted into number data type.
- If we try to convert something to a number using `Number()` which cannot really be converted (e.g. trying to convert string "Hello" to a number data type), it will return `NaN`.
- `NaN` stands for "Not a Number".
- So, JavaScript gives us `NaN` value whenever an operation that involves numbers fails to produce a new number.
- Basically, `NaN` means invalid number.
- Also, the `typeof NaN` is number. So, it is an invalid number but, it is still a number somehow.
- To convert any data type to string data type, we use `String()` function.
- To convert something to a boolean, we use `Boolean()`.
- These are the only 3 types JS can convert a value to. We cannot, for example, convert to `undefined` or `null`.

#### Type Coercion

- Type coercion happens whenever an operator is dealing with two values that have different types.
- In that case, JS will then, behind the scenes, convert one of the values to match the other value so, in the end, the operation can be executed.
- We already saw that happening in string concatenation and template literals.
- In JS, the `+` operator triggers the coercion to strings if one of the operand is a string.
- Not all the operators do type coercion to strings.
  - The `-`, `/`, `*` operators trigger type coercion to numbers.

> [!NOTE]
>
> Only when the operator is `+` and one of the operands is a string will the `+` trigger the type coercion to string.
> This happens because `+` operator is also used for string concatenation and string cocatenation takes precedence over type coercion to numbers.
> All the other math operators trigger the type coercion to number type.

- This is an important distiction to keep in mind as it is cause of confusion in many beginners.
- Many people actually don't like type coercion and think that it is a bad practice to rely on type coercion.
- One reason for that is that type coercion can, in fact, introduce many unexpected bugs into our program.
- However, this only happens when we don't really know what we're doing.
- But, in my opinion coercion is actually a great mechanism that is going to allow us to write a lot less code and also write more readable code.
- So, make sure to take some time to understand how type coercion works and and then just embrace it in your code.

### Truthy and Falsy Values

- Falsy values are values that are not exactly false but, will become false when we try to convert them into a boolean.
- In JavaScript, there are only 5 falsy values:
  - `""` - empty string
  - `0` - the number zero
  - `undefined`
  - `null`
  - `NaN`
- `false` itself is already false so, we don't need to include that in the list of falsy values.
- Everything else are so-called truthy values.
- `Boolean()` - This function allows us to convert a value to a boolean data type.
  - In practice, we don't use `Boolean()` instead, the conversion to a boolean is always implicit in practice.
  - In other words, it is always type coercion that JS does automatically behind the scenes.
  - But, when exactly does JS do type coercion to booleans?
    - First, when using logical operators
    - Second, in logical context, for examaple, in the condition of an if/else statement

### Equality Operators == vs. ====

- If we want to check whether two values are equal to each other, we use `==` or `===`.
- `===` is called the strict equality operator. It is strict because it does not perform type coercion. So, it will only return true when both the operands are exactly the same.
- On the other hand, `==` is called the lose equality operator. The lose equality operator actually does perform type coercion.
- The loose equality operator is full of weird rules and weird behaviors. This means that if we use `==`, it can introduce many hard to find bugs in our code.
- As a general rule of clean code, avoid the loose equality operator as much as you can.
- When comparing values, always use the strict equality operator.
- If we need type conversion, it is better to convert it manually using `Number()` or `String()` functions rather than relying on type coercion of loose equality operator.
- This is advised by msot JS developers so, it is a good rule to practice.
- Always rely on `===` and pretend that `==` doesn't even exist.
- `prompt()` - This function instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
- `if/else-if/else`
- `!=` and `!==`
- `!=` is loose inequality and `!==` is strict inequality operator.
- The inequality operators check whether its two operands are not equal, returning a boolean result.
- The loose inequality operator performs type coercion while the strict inequality operator does not perform type coercion.
- Just like equality operators, always prefer to use strict inequality operator.

### Boolean Logic

- Truth tables
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/e53ea05e-d076-448f-b4c5-ff400a23bc25)
- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/5af870a0-1a9d-4866-b905-9d34347c86f7)

### Logical Operators

- `&&` - AND Operator
- `||` - OR Operator
- `!` - NOT Operator

### The Switch Statement

- The switch statement is an alternative way of writing a complicated if/else statement when all we want to do is to compare one value to multiple different options.
- It checks the value with options in a strict equality way so, it does not perform type coercion.
- `break` statement

### Statements and Expressions

- Essentially, an expression is a piece of code that produces a value.
- On the other hand, a statement is like a bigger piece of code that is executed and which does not produce a value on its own.
- A statement is like a complete sentence and expressions are like the words that make up the sentences.
- We write our whole programs as a sequence of actions, and these actions are statements.
- This difference between statements and expressions are important to know because JS expects statements and expressions them in different places.
- For example, in a template literal, we can only insert expressions, but not statements.

### The Conditional (Ternary) Operator

- The conditional operator allows us to write something like if/else statement but, all in one line.
- The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.
- This operator is frequently used as an alternative to an if...else statement.
- Note that the conditional operator is in-fact an operator (as the name suggests).
- Remember that an operator always produces a value.
- In other words, an operator is an expression.
- This means that if we have a value, we can assign that value to a variable.
- So, with this, we can make the ternary operator very useful to basically, conditionally declare variables.
- Also, since a ternary operator is an expression, we can use it in a template literal, unlike a regular if/else statement.
- NOTE: The ternary operator is not thought of as a replacement for if/else statement. We still need if/else statement, for example, when we have bigger blocks of code that we need to execute based on a condition - in this case the ternary operator won't work. But, the ternary operator is great when we just need to take a quick decision. This is especially true in places where JS expects an expression (like in template literals).

### JavaScript Releases: ES5, ES6+, and ESNext

#### History of JavaScript

- ![image](https://github.com/bhoamikhona/javascript/assets/50435319/b95192e2-7b5b-4641-bcd2-fd85322987a6)

#### Backwards Compatibility

- There is one particularity about JS releases, which is pretty unique for any programming language and that's backwards compatibility all the way to ES1.
- This means that if you were to take some JS code written in 1997 and put it in a modern browser with a modern JS engine today, it would still work just the same.
- So, the JS engine that's in our browser today is able to understand old code written 25 years ago, without having to rely on version numbers or anything like that.
- It works this way because of the fundamental principle that's baked into the JS language and its development, which is to not break the web.
- This means that there is almost never anything removed from the language, but only added in new versions.
- We cannot really even call them new version because, they do not contain breaking changes like when other languages move to a new version.
- Instead, new versions in JS are always just incremental updates which add ned concepts in the language. So, people prefer to call them releases and not versions.
- The ECMAScript community that works on updating the language, does all this so that old websites basically keep working forever.
  - Just imagine that they removed some important feature that made a website from 2008, work just fine. If you then want to visit that page, it will be broken.
  - That's why, fortunately, we have the "Don't break the web" principle.
- Of course, this comes with problems because, there are a ton of old bugs and weird things in the language.
- Remember that Brendan Eich made the very first version of JS in just 10 days and back then, no could've even imagined what JS would be used for one day.
- The initial goal of JS was just to add some simple dynamics to web pages, not to write whole web applications in a browser like we do today.
- These bugs and weird quirks in the language have been giving the language a bad reputation among many programmers who can't take JS seriously because of it.
- But, we can easily go around many of these weird quirks by simply learning the modern JS that matters today and just ignore most of the old weird concepts.

#### Forwards Compatibility

- What would happen if we took a code from the future, say 2089 and try to run it in today's browser?
- It would not work at all and there would errors left and right.
- That's why we say that JS is not forwards compatible basically because, current browsers do not understand code from the future.

#### How to use modern JavaScript today?

- How can we use modern JS today because browsers that users are using might be old and there is no forwards compatibility?
- To answer this question, we need to consider two distinct scenarios.
  - Scenario 01: Development Phase
    - Development phase is simply when you are building the site or application on your computer.
    - To ensure that you are using the lastest JS features in this phase, all you have to do is use the most up-to-date version of Google Chrome Browser.
  - Scenario 02: Production Phase
    - The production phase is when your web application is finished, you deploy it on the internet and it's then running in your user's browser.
    - This is where problems might appear, because this is the part that we actually cannot control.
    - We cannot control which browser the users use and we also cannot assume that all our users always use the latest browser.
    - The solution to this problem is to basically convert these modern JS versions back to ES5 using a process called <ins>transpiling</ins> and also <ins>polyfilling</ins>.
    - We will use a tool called <ins>Babel</ins> to transpile our code but, for now, during the course, we won't need that because throughout the course we will be using the most up-to-date browser.
    - Transpiling the code is only necessary after your app is developed and you want to ship it to your users.
- How can we use different JS releases today?
  - ES5 is of course fully supported in all browsers today, all the way down to internet explorer 9 from 2011.
  - So, we can assume that ES5 is safe to be used at this point, which is the reason why we use it as a target for transpiling.
  - The newer releases, ES6, ES7, etc., are quite well supported already in all modern browsers.
  - We usually call all the current versions together ES6+ (or modern JS).
  - In ES6+ is where transpiling comes in because it is not safe to assume that all our users are using modern browsers and we don't want to break our website.
  - There are also future releases of the language like ES2025, ES2026,... and these future releases together are called ESNext.

> [!NOTE]
>
> If you want to stay up-to-date with what features are currently supported in which browser, you can check the [ES6 compatibility table](https://compat-table.github.io/compat-table/es6/).

- Why is ESNext relevant?
  - This is because most browsers actually start implementing new features even before they enter the official ECMAScript specification.
  - That's possible because as new features are proposed, they have to go through 4 stages.
  - Starting with stage 01, where they are first admitted all the way to stage 04, at which point they enter the language officially.
  - But when a feature is at stage 03, browsers can be pretty sure that it will eventually pass to stage 04.
  - So, they're going to start implementing that feature while still in stage 03.
  - There is a lot more to be said about this and you can find more info about it online. For this lesson however, we are going to stop here.

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
