<!-- section start -->
<!-- attr: { class:'slide-title', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Responsive Design
##  The optimal web awesomeness
<div class="signature">
    <p class="signature-course">Web front-end development</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href = "https://academy.telerik.com " class="signature-link">https://academy.telerik.com </a>
</div>


<!-- section start -->

<!-- attr: { showInPresentation:true, style:'' } -->
# Table of Contents
* Responsive Design
* Creating Responsive Design
  * Fluid Layout
  * Flexible Images and types
  * Media Queries
* Media Queries Everywhere
* Constructing Responsive Design

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->

# Responsive Design
##  Creating modern web applications

<!-- attr: { showInPresentation:true, style:'' } -->

# Responsive Design

* Responsive design is an approach to optimize the viewing experience on range of devices
  * Better user experience on mobile, desktop, TV
  * The UI depends on the device and device specifics
    * Resolution, DPI, color range, etc…

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
<!-- # Responsive Design -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Creating Responsive Design
##  Ways to implement nice UI

<!-- attr: { showInPresentation:true, style:'' } -->
# Creating Responsive Design
* Responsive design can be accomplished by using one or more of the following:
  * **Fluid layout**
    * Use proportional values for width, margin, etc…
  * **Flexible types**
    * All types are based on the root
  * **Flexible images**
    * Images cannot go beyond their container
  * **Media queries**
    * Apply styles based on the client

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Fluid Layout
##  Make elements flow on the screen

<!-- attr: { showInPresentation:true, style:'' } -->
# Fluid Layout
* Fluid layout uses proportional sizes
  - Pros:
    - UI responds better to the client resolution
    - Spares code on media queries
  - Cons:
    - More whitespace on large screens (TV)

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
<!-- # Fluid Layout -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Flexible Images
##  Automatically resizable

<!-- attr: { showInPresentation:true, style:'' } -->
# Flexible Images
* Using fluid design and everything is just nice
  * But fluid design is broken when it comes to using elements with fixed size
  * By concept images are always with fixed size

<!-- attr: { showInPresentation:true, style:'' } -->
# Flexible Images - Example
* Example:
  * Resolution: `1024px`, container with width: 60% ( = `60% x` `1024` = `614.4px`) and an image with width: `500px`
    * Seems OK
  * When the resolution becomes `780px`, the container's width is still `60%` (= `468px`), and the images width is still `500px`
    * The image overflows its container

<!-- attr: { showInPresentation:true, style:'' } -->
# Making Images Flexible
* The fix to the image overflow is simple
  * Just a reset in the top of the CSS
  * `max-width` overrides the `width` property
    * If the image size is larger than the container's size, the image get all the width

```css
img {
  max-width:100%
}
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
<!-- # Flexible Images -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Flexible Type

<!-- attr: { showInPresentation:true, style:'' } -->
# Flexible Type
* Flexible type means proportional font size `based on the context `(parent)
  * Instead of pixels use `proportional values` (em)
* Make all the font sizes based on the context
  * To change the `font-size` of all elements just change the `context's font-size`

<!-- attr: { showInPresentation:true, style:'font-size:0.95em' } -->
# Flexible Type (2)
* Making fonts "responsive" needs a little math
  * `ems = target / root`
  * `1.4375em = 23px / 16px`

```css
body{
  font-size:16px;
}
  body header{
    font-size:23px; // 23 / 16 = 1.4375
  }
```

```css
body{
  font-size:16px;
}
  body header{
    font-size:1.4375em;
  }
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
<!-- # Flexible Type -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Media Queries
##  The easiest way to create responsive design

<!-- attr: { showInPresentation:true, style:'' } -->
# Media Queries

* Media queries are part of CSS 3
  * Supported in all major browsers
* A media query consists of a media type and at least one expression
  * By using media features like **width**, **height** and **color**
* Media queries change the presentation of the content
  * Not the content itself

<!-- attr: { showInPresentation:true, style:'' } -->
# Media Queries
* Media queries consist of a **media type** and **expressions** evaluated to `TRUE` or `FALSE`
  * If the evaluated result is `TRUE`, the styles in the query are applied:

```css
.box {width: 250px; height: 250px; display: inline-block}
```

```css
@media only screen and (max-width: 1024px) {
  .box {width: 300px; height: 300px; }
}
```

```css
@media only screen and (max-width: 960px) {
  .box {width: 310px; height: 310px;}
}
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
<!-- # Media Queries -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# Media Queries Everywhere
##  Leverage the support of Media Queries on most browsers

<!-- attr: { showInPresentation:true, style:'' } -->
# Polyfills

* Polyfills are **scripts that leverage support** for some functionality
  * **HTML 5** tags, **CSS 3** properties, **JS APIs**, etc…
* Polyfills are just a bunch of JavaScript that fills a specific hole in functionality
  * Media queries
  * Gradients
  * JavaScript canvas
  * And more...

<!-- attr: { showInPresentation:true, style:'' } -->
# Media Queries Everywhere
* Media queries are part of CSS 3
  * i.e. their support is limited to newer browsers
* Media queries can be made to work in all browsers using a polyfill
  * Many MQ polyfills exists and their usage is similar
  * Just include the polyfill js file into the HTML
    * You have media queries on IE7

<!-- attr: { class:'slide-section demo', showInPresentation:true, style:'' } -->
<!-- # Media Queries Everywhere -->
##  [Demo]()

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, style:'' } -->
# Constructing Responsive Design
##  All of the above in one place

<!-- attr: { showInPresentation:true, style:'' } -->
# Constructing a Responsive Design
* The construction of responsive design combines all of the above
  * Fluid layout
  * Flexible images
  * Media queries
* Actually this all can be done only with media queries
  * The code becomes too much and very hard to maintain

<!-- section start -->
<!-- attr: {id: 'questions', class: 'slide-section', hasScriptWrapper:true} -->
# Questions


<!-- attr: { showInPresentation: true, hasScriptWrapper: true} -->
# Free Training @ Telerik Academy

- Web front-end development Course
  - [Web front-end development](http://telerikacademy.com/Courses/Courses/Details/414)
- Telerik Software Academy
  - [telerikacademy.com](https://telerikacademy.com)
- Telerik Academy @ Facebook
  - [facebook.com/TelerikAcademy](https://facebook.com/TelerikAcademy)
- Telerik Academy Learning System
  - [telerikacademy.com](https://telerikacademy.com)
