# Section 06: HTML & CSS Crash Course

**About:** In order to follow the project in the next section and also the other projects in this course, it is going to be very helpful to be familiar with the basics of HTML and CSS. Hence, this section is all about a simple crash course on HTML and CSS.

**NOTE:** I have taken an entire course dedicated to these technologies, here is my [Github Repository](https://github.com/bhoamikhona/html-css-bootcamp).

## Table of Contents

- [Lessons Learned](#lessons-learned)
  - [HTML](#html)
  - [CSS](#css)
- [Screenshot](#screenshot)

## Lessons Learned

### HTML

- HTML stands for Hypertext Markup Language and we use it to describe the content of the web pages.
- An HTML element is made out of elements and we write elements using an opening and closing tag.
- `<html></html>` - The main element in all HTML documents is always the HTML element. Every HTML document always has to start with the HTML opening tag and close with the HTML closing tag.
- Inside the HTML element, we always have the head (`<head></head>`) and the body (`<body></body>`).
- Whatever we put inside the head tag, is like the settings of the page. So, it is like describing the page.
- `<title></title>` - The title element defines the document's title that is shown in the browser's title bar or a page's tab. It only contains text; tags within the element are ignored.
- Other things that we put in the head are CSS styles or Favicons, etc.
- Whatever we put into the body is what is actually visible on the page.
- `<h1></h1>` through `<h6></h6>` - The HTML section Heading elements. The h1 to h6 HTML element represent 6 levels of section headings. h1 is the highest section level and h6 is the lowest.
- Different types of elements have different purposes.
- `<p></p>` - The paragraph HTML element represents a paragraph.
- In HTML, some elements can have attributes and these attributes basically describe elements.
- Element Nesting
- `<a></a>` - The HTML anchor tag, with its `href` attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.
- Inline and Block Elements
- `<img src="#>` - The image HTML element embeds an image into the document.
- Self-closing elements
- Different elements have different attributes.
- There are two very important attributes that we can use on all elements and which we can use to identify them. These are classes and ids.
- We use classes and ids to essentially name eleemnts so that we can then select them in CSS in order to style them.
- We also use classes and ids to select elements in JS when we do DOM manipulation.
- So, classes and IDs are crucial to identifying elements and especially classes.
- The difference between classes and ids is the ids have to be unique. Each ID can only be used once on the page while classes can be used over and over again.
- In practice, we almost never use IDs to style elements or to select them from JS. It is just a better practice to use classes.
- `<div></div>` - The content division element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS.
- kebab-casing
- `<input></input>` - The input HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.
- `<button></button>`- The button HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.
- `<form></form>` - The form HTML element represents a document section containing interactive controls for submitting information.
- Semantic HTML - The div element is really just a generic box which has no meaning at all and so, that's usually not a good idea for many reasons for e.g. SEO, when Google searches your page, it is better if it knows exactly what each element means that just having generic boxes without any meaning at all. So, using the appropriate element, according to the content that's in it is the idea of semantic HTML.

### CSS

- We use CSS to style elements, and to create a layout for the overall page.
- Internal CSS
- External CSS
- CSS selectors
  - Element Selector - With the element selector, we can simply select all elements of a certain type.
  - Class Selectors
  - ID Selectors
  - List Selectors
  - Child Selectors
- CSS Declarations - Each CSS declaration has a property name, and then a value.
- CSS Properties:
  - `background-color`
  - `font-family`
  - `font-size`
  - `border`
  - `margin`
    - `margin-bottom`
    - `margin-top`
  - `padding`
  - `box-sizing`
  - `text-align`
  - `width`
- CSS properties Inheritance
- Short-hand properties
- CSS Box Model
  - The box model is one of the most fundamental parts of CSS. That's because it is the main factor that defines how elements are displayed on a webpage and also how they are sized.
  - According to the box-model, each and every element on a web-page can be seen as a rectangular box and each box can have a width, a height, padding, margins, and a border.
  - We can specify all these using CSS properties but, note, that they are optional i.e. there can be boxes with no margins or no paddings or no border at all.
    - **Content:** text, images, etc.
    - **Padding:** transparent area around the content, inside of a box.
    - **Border:** goes around the padding and the content.
    - **Margin:** space between boxes.
    - **Fill are:** area that gets filled with background color or background image.
- Global Reset
- Comments in CSS

## Screenshot

![image](https://github.com/bhoamikhona/javascript/assets/50435319/0561c464-d607-4167-aa10-7714d200f107)

## Author

- [@bhoamikhona](https://github.com/bhoamikhona)
