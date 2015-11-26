<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->
# CSS Preprocessors
##  SASS, LESS, Stylus

<div class="signature">
    <p class="signature-course">Slice and Dice</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

<!-- attr: { id:'table-of-contents' } -->
# Table of Contents

- Preprocessors Overivew
  - What is a preprocessor?
  - Why we need preprocessors?
- LESS, SASS and Stylus
  - Installation, setup and tools
- LESS, SASS and Stylus Features
  - Selector nesting
  - Mixins and selector inheritance
  - Operations
  - Color functions


<!-- section start -->

<!-- attr: { class:'slide-section', showInPresentation: true } -->
# Preprocessors Overview
##  For CSS

<!-- attr: {style: 'font-size: 42px'} -->
# Preprocessors Overview

- A preprocessor is a program that processes its input data to produce output that is used as input to another program
  - Sass, Less, Stylus are preprocessors for CSS
  - CoffeeScript, TypeScript are preprocessors for JavaScript
  - Jade, Ejs are preprocessors for HTML
- CSS preprocessors maim to extend the static reality of CSS
  - Can abstract common styles (mixins, inheritance)
  - Can make more dynamic styles (variables, functions, operations)

<!-- section start  -->

<!-- attr: {class: "slide-section", id: 'stylus-installation'}  -->
# CSS Preprocesors Setup

<!-- attr: {style: 'font-size: 37px'}  -->
# CSS Preprocesors Setup

- Each preprocessor needs something to make it work
  - Thankfully, all work through **Node.js**

  ```bash
  npm install -g sass stylus less
  ```

  - Less:

  ```bash
  lessc FILE_NAME.LESS > FILE_NAME.css
  ```

  - Stylus:

  ```bash
  stylus FILE_NAME.styl
  ```

  - SASS:

  ```bash
  sass FILE_NAME.scss > FILE_NAME.css
  ```

<!-- attr: {class: 'slide-section'} -->
# Installation and Setup
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Selector Nesting
##  In LESS, SASS and Stylus

<!-- attr: {style: 'font-size: 42px'} -->
# Selector Nesting

- Selector nesting allows easier building of complex selectors:

```css
.nav { list-style-type; none; }
.nav .nav-item { float: left; }
.nav .nav-item:hover { background: skyblue; }
```

  - Can be done easier with LESS, SASS or Stylus:

```css
.nav {
  list-style-type: none;
  .nav-item {
    float: left;
    &:hover {
      background: skyblue
} } }
```

  - Stylus can omit the curly brackets and colons

<!-- attr: {class: 'slide-section'} -->
# Selector Nesting
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Mixins
##  Reusing CSS Code

<!-- attr: {style: 'font-size: 40px'} -->
# Mixins

- Mixins allow to create code that can be reused
  - They are like function to generate CSS

- _Sample mixin (in Stylus):_

```css
stripe(even = #fff, odd = #eee)
   tr
     background-color odd
     &.even, &:nth-child(even)
       background-color even
```

- _Usage:_

```css
.grid .row { stripe(); }

.list .item { stripe (pink, blue) }
```

<!-- attr: {class: 'slide-section'} -->
# Mixins
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Selector Inheritance

<!-- attr: {style: 'font-size: 40px'}  -->
# Selector Inheritance

- Inheritance reduces the copy-pasting of properties and/or use multiple classes on an HTML element:

- _Example (in SASS):_

```css
.btn {
  display: inline-block;
  padding: 5px 15px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #ccc;
  text-align: center;
}

.btn-success {
  @extend .btn;
  background-color: green;
}
```

<!-- attr: {class: 'slide-section'} -->
# Selector Inheritance
##  [Demo](http://)

<!-- section start -->

<!-- attr: { class:'slide-questions', showInPresentation: true } -->
<!-- # CSS Preprocessors -->
##  Questions
