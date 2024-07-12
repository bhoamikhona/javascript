# Section 17: Modern JavaScript Development: Modules, Tooling, and Functional

**About:** Up until this point the course, we have learned a lot of JavaScript features, and syntax, and also, how the language itself works behind the scenes. But now, it is time to take a step back, and talk about the whole process of actually building modern JavaScript applications in the real-world. So, this section is not really about the language itself, but more about the development process i.e. the modern build tool that every professional developer uses, and also the whole modern ecosystem that has been created around JavaScript.

## Table of Content

- [Section 17: Modern JavaScript Development: Modules, Tooling, and Functional](#section-17-modern-javascript-development-modules-tooling-and-functional)
  - [Table of Content](#table-of-content)
  - [Lessons Learned](#lessons-learned)
    - [An Overview of Modern JavaScript Development](#an-overview-of-modern-javascript-development)
      - [Modern JavaScript Development](#modern-javascript-development)
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

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
