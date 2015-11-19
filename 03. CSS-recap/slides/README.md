<!-- section start -->

<!-- attr: {id: 'title', class: 'slide-title', hasScriptWrapper: true} -->
# CSS Recap
## Positioning, Layout, Presentation

<div class="signature">
    <p class="signature-course">Slice and Dice</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

<!-- attr: { id:'table-of-contents' } -->
# Table of Contents

- Presentation styles
  - Fonts, backgrounds, gradients
- Positioning Styles
  - Fixed, relative
- Layout Styles
  - Displays: `block`, `inline-block`, `flexbox`, etc...
  - Floats: left, right, clears
  - Dimensions

<!-- section start -->

<!-- attr: { class:'slide-section', id:'', showInPresentation: true } -->
# Presentation Styles
## Fonts and backgrounds

<!-- attr: { hasScriptWrapper:true, style:'font-size:0.9em' } -->
# Presentation Styles

- `color` – specifies the color of the text
- `font-size` – size of font: `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`,`smaller`, `larger` or numeric value
- `font-family` – comma separated font names
  - *Example:* `verdana`, `sans-serif`, etc.
  - The browser loads the first one that is available
  - There should always be at least one generic font
- `font-weight` can be `normal`, `bold`, `bolder`, `lighter` or a number in range `[100 … 900]`

# Presentation Styles

- `font-style` – styles the font
  - Values: `normal`, `italic`, `oblique`
- `text-decoration` – decorates the text
  - Values: `none`, `underline`, `line-trough`, `overline`, `blink`
- `text-align` – defines the alignment of text or other content
  - Values: `left`, `right`, `center`, `justify`

# Presentation Styles: Example

- *Example:*

```css
font-style: italic;
font-variant: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
font-family: verdana;
```

- *Example:* Font with Shorthand property:
```css
font:italic normal bold 12px/16px verdana
```

<!-- attr: {class: 'slide-section'} -->
# Font Properties
##  Demo

# Background Properties

- `background-image`
  - URL of image to be used as background, e.g.:
- `background-color`
  - Using color and image and the same time
- `background-repeat`
  - `repeat-x`, `repeat-y`, `repeat`, `no-repeat`
- `background-attachment`
  - `fixed` / `scroll`

# Background Properties

- `background-position`: specifies vertical and horizontal position of the background image
  - Vertical position: `top`, `center`, `bottom`
  - Horizontal position: `left`, `center`, `right`
  - Both can be specified in percentage or other numerical values

# Background positions: Example

- *Example:*

```css
background-color: #FFF0C0;
background-image: url("back.gif");
background-repeat: no-repeat;
background-attachment: fixed;
background-position: top;
```

- Shorthand property for :

```css
background: #FFF0C0 url("back.gif") no-repeat fixed top;
```

<!-- attr: {class: 'slide-section'} -->
# Backgrounds
##  Demo

<!-- section start  -->

<!-- attr: { class: 'slide-section', hasScriptWrapper:true, style:'' } -->
# Positioning Styles
##  Fixed, absolute, relative

# Positioning Styles
- `position`: defines the positioning of the element in the page content flow
- The value is one of:
  - `static` (default)
  - `relative` – relative position according to where the element would appear with static position
  - `absolute` – relative to the first parent element that has a  position other than static
  - `fixed` – relative to the browser window, but ignores page scrolling

# Positioning Styles
- `top`, `left`, `bottom`, `right`: specify the offset of absolute/fixed/relative positioned element as numerical values
- `z-index` : specifies the stack level of positioned elements

<!-- attr: { class: 'slide-section', hasScriptWrapper:true, style:'' } -->
# Positioning Styles
##  [Demo](http://)

<!-- section start  -->

<!-- attr: {class: 'slide-section'} -->
# Layout Styles
##  display, float, etc...

<!-- attr: {style: 'font-size:40px'} -->
# Layout Styles: Width and Height

- `width` – defines numerical value for the width of element, e.g. `200px`
- `height` - defines numerical value for the height of element, e.g. `200px`
- Both are applied only on block elements
  - Their width is 100% by default
  - The width/height of inline elements is always the width of their content, by concept
- `min-width`/`min-height` - defines the minimal width/height
  - **Overrides** width/height if **min-* is lesser**
- `max-width`/`max-height` - defines the maximal width/height
  - **Overrides** width/height if **max-* is higher**

<!-- attr: {class: 'slide-section'} -->
# Height and Width
##  [Demo](http://)

<!-- attr: {style: 'font-size: 43px'} -->
# Display

- `display` controls the display of the element and the way it is rendered and if breaks should be placed before and after the element
- `display` values:
  - `inline`
    - no breaks are placed before or after (`<span>` is an inline element)
    - `height` and `width` depend on the content
  - `block`:  breaks are placed before AND after the element (`<div>` is a block element)
    - `height` and `width` may not depend on the size of the content

<!-- attr: {style: 'font-size: 43px'} -->
# Display

- `none`: element is hidden and its dimensions are not used to calculate the surrounding elements rendering
    - differs from `visibility: hidden`!
  - `inline-block`: no breaks are placed before and after (like inline)
    - `height` and `width` can be applied (like block)
- `table`, `table-row`, `table-cell`: the elements are arranged in a table-like layout
- `flexbox`

<!-- attr: {class: 'slide-section'} -->
# Display
##  [Demo](http://)


<!-- section start  -->

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # CSS Recap
##  Questions -->
