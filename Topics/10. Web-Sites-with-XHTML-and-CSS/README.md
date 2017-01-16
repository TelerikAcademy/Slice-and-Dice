<!-- section start -->
<!-- attr: { id: 'title', class: 'slide-title', hasScriptWrapper: true } -->
# Web Sites with XHTML and CSS
## Slice and Dice: From PSD Image to XHTML+CSS

<div class="signature">
    <p class="signature-course">Slice and Dice</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
<!-- attr: { id:'table-of-contents' } -->
# Table of Contents
- From Image to XHTML+CSS: Step by Step
- Floating DIVs and DIVs Behaving Like Tables
- Vertical Alignment of DIVs
- Centering Site Contents
- Web Site with Frames
- Web Site with Tables
- Web Site with DIVs
- Slice and Dice: Showcases

<!-- section start -->
<!-- attr: {class: 'slide-section'} -->
# From Image to XHTML+CSS
## Creating Web Sites Step by Step

<!-- attr: { hasScriptWrapper:true } -->
# From Image to XHTML+CSS
- Steps for converting a Web site image to XHTML + CSS ( + JavaScript )
  - Decide on the layout type
    - Fixed width – what resolution (800, 1024, …)?
    - Fluid width – which parts will resize?
  - Identify site sections
    - Header, main, footer, columns, navigation, etc.
  - Decide on the layout model
    - DIVs vs. tables (any good reason to use tables?)

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # From Image to XHTML+CSS
- Steps for converting a Web site image to XHTML + CSS ( + JavaScript ) -->
  - Distinguish between content and style
    - Text vs. images – which belongs to the content and which is part of the styling?
  - Create the page layout
    - Create the layout DIVs and define their CSS
  - Create the contents of each section
  - Test the site in different Web browsers

<!-- attr: { hasScriptWrapper:true } -->
# Fixed vs. Fluid Layout
- Page layout can be fixed or fluid
- `Fixed width`
  - Typical Web users use at least 1024 x 768 resolution -> 900px-1000px page width is OK
  - Mobile devices have smaller screen
- `Fluid width`
  - Ensure the main page content resizes correctly
  - Beware of very large screens (e.g. 1920 x 1200)
  - Fix the `min-width` for the main `<div>`

<!-- attr: { hasScriptWrapper:true } -->
# Identifying Site Sections
- Typical Web sites consist of header, main section and footer
  - The main content usually has some main section, sidebars or navigation controls
  - The main section could be split in columns
<img src="imgs/table1.png">

<!-- attr: { hasScriptWrapper:true } -->
# Frames vs. Table vs. DIVs?
- Site layout with frames is old-fashioned
- Using tables for columned design is incorrect!
  - Tables are considered SEO unfriendly
- The other option is to use `<div>` tags
  - To place them in columns they must be `floating`
  - When they are floating, you can fix their width, but height is determined by their content (or is fixed)
  - When height is determined by content, background may not be applied properly
  - Footer must also be floating with `clear:left`

<!-- attr: { hasScriptWrapper:true } -->
# Floating DIVs
- Floating DIVs are not part of their parent DIV
  - Their height is the height of their content
  - The parent container's height can be less
<img src="imgs/image12.png">
<div class="balloon fragment" style="position:absolute;top:40%;left:6%">Floating left &lt;div&gt;</div>
<div class="balloon fragment" style="position:absolute;top:40%;left:60%">Floating right &lt;div&gt;</div>
<div class="balloon fragment" style="position:absolute;top:40%;left:32%">Non-floating &lt;div&gt;</div>
<div class="balloon fragment" style="position:absolute;top:70%;left:32%">The container &lt;div&gt; has height based on its non-floating content</div>

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Floating DIVs
## Live Demo -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true, style:"font-size:44px" }  -->
# DIVs Behaving Like Tables
- `display:table` makes DIVs behave like table:

```css
#div-table { display: table; }
#div-row { display: table-row; }
.div-cell { display: table-cell; }
```
```html
<div id="container">
  <div id="row">
    <div class="div-cell">Left Column</div>
    <div class="div-cell">Middle Column</div>
    <div class="div-cell">Right Column</div>
  </div>
</div>
```
- Supported in all W3C-compliant browsers
  - Internet Explorer supports this since IE8

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # DIVs Behaving Like Tables
## Live Demo -->

<!-- attr: { hasScriptWrapper:true } -->
# Vertical Alignment of DIV
- Aligning a DIV vertically is a complex task
  - You need three nested `<div>` elements:

```css
#container { display: table; height: 400px; }
#row { display: table-row; }
#cell { display: table-cell; vertical-align: middle; }
```
```html
<div id="container">
  <div id="row">
    <div id="cell">Vertically Centered</div>
  </div>
</div>
``` 
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0
Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/
xhtml1-transitional.dtd">
```
<div class="balloon fragment" style="position:absolute;top:75%;left:40%">XHTML DOCTYPE is required, especially for IE!</div>

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Vertical Alignment of DIVs
## Live Demo -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true } -->
# Distinguish between Content and Style
- Separating content from presentation
  - The `HTML content` is the essential information published in the Web page, e.g. text + images
  - The `presentation` is the layout and styles used to format the content or decorate it
- The content should live in the HTML
- The presentation should live in the CSS
- When the CSS is disabled, the site should look like an article with titles, lists and paragraphs

<!-- attr: { hasScriptWrapper:true } -->
# GIF, JPEG or PNG
- GIF, JPEG and PNG are the three most common image formats in the Web
  - JPEG is used for large images, e.g. photos
  - GIF and PNG support transparency
    - Used for bullets, icons and small images
    - Transparent PNG not supported by old browsers
    - PNG files are larger than GIF
    - GIF supports less colors than PNG
    - GIF supports animation

<!-- attr: { hasScriptWrapper:true } -->
# Centering a Fixed-Width Site
- Several ways to center the content of the site:
  - Placing it in `<center>` tag – deprecated
  - Using CSS `text-align:center`
    - Will affect all child nodes too
  - Using CSS `margin:0 auto`
    - The width of the content is fixed
    - The left and right margins are set to automatic

```css
width: 900px;
margin: 20px auto;
```

<!-- attr: { hasScriptWrapper:true } -->
# Centering Site Contents – Example
```html
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <style type="text/css">
    body { background-color: #CCCCCC; }
    #site-contents { 
      width: 940px; margin: 20px auto; }
  </style>
</head>
<body>
  <div id="site-contents">
    <h1>Welcome to our Web site!</h1>
    ...
  </div>
</body>
</html>
```

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Centered Site Contents
## Live Demo -->

<!-- section start -->
<!-- attr: { hasScriptWrapper:true } -->
# Web Site Based on Frames
- Web sites based on frames
  - Easy-to-develop
  - Works for small and simple Web sites
  - Considered old-fashioned, not recommended!

```html
<frameset rows="85,*" cols="*" frameborder="no" border="0"
    framespacing="0">
  <frame src="header.html" scrolling="no" noresize="yes" />
  <frameset cols="126,*" frameborder="no" border="0"
      framespacing="0">
    <frame src="left.html" name="leftFrame" scrolling="no"
      noresize="yes" />
    <frame src="welcome.html" name="mainFrame" />
  </frameset>
</frameset>
```

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Web Site with Frames
## Live Demo -->

<!-- attr: { hasScriptWrapper:true } -->
# Web Site Based on Tables
- Web sites based on tables
  - Easy to layout the page elements
  - Semantically incorrect, not recommended!

```html
<table class="siteTable">
  <tr class="headerRow">
    <td class="logoCell">Logo</td>
    <td class="headerCell">Header Text</td>
  </tr>
  <tr valign="top">
    <td class="menuCell">Menu</td>
    <td class="mainContentCell">Main Content</td>
  </tr>
  <tr class="footerRow"><td colspan="2">Footer</td></tr>
</table>
```

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Web Site with Tables
## Live Demo -->

<!-- attr: { hasScriptWrapper:true } -->
# Web Site Based on DIVs
- Web sites based on DIVs
  - The best, semantically correct approach
  - Sometimes is hard to implement

```html
<div id="header">
  <div id="headerLogo">Logo</div>
  <div id="headerText">Header</div>
</div>
<div id="container">
  <div id="leftSidebar">Menu</div>
  <div id="mainContent">Main Content</div>
</div>
<div id="footer">Footer</div>
```

<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Web Site with DIVs
## Live Demo -->

<!-- section start  -->
<!-- attr: {class:'slide-section'} -->
# Creating a Web Site
## Slice and Dice: Showcases

<!-- attr: { hasScriptWrapper:true } -->
# Slice and Dice Showcase
- We should convert the following image to XHTML+CSS:
<img src="imgs/image19.png">

<!-- attr: { hasScriptWrapper:true } -->
# Layout and Style
- Fixed width or fluid width?
  - Fixed width will work well
  - Need to center the content and use some background to fill the rest of the page
- Frames, tables or DIVs?
  - DIVs with table layout will work best

<!-- attr: { hasScriptWrapper:true } -->
# Step 1 – Determine the Pieces
- First step is to determine the parts of the design
<img src="imgs/image20.png">

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # Step 1 – Determine the Pieces
<img src="imgs/image20.png">
<div class="balloon" style="position:absolute;top:8%;left:0%;opacity:0.7">This is the logo -<br>should be img tag</div>
<div class="balloon" style="position:absolute;top:12%;left:30%;opacity:0.7">the site header - div</div>
<div class="balloon" style="position:absolute;top:12%;left:55%;opacity:0.7">this can be background image</div> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # Step 1 – Determine the Pieces
<img src="imgs/image20.png">
<div class="balloon" style="position:absolute;top:45%;left:0%;opacity:0.7">Menu cell</div>
<div class="balloon" style="position:absolute;top:45%;left:30%;opacity:0.7">Body cell</div>
<div class="balloon" style="position:absolute;top:45%;left:60%;opacity:0.7">Right cell</div>
<div class="balloon" style="position:absolute;top:20%;left:20%;opacity:0.7">3 columns design<br>
Best way is - tbale, one row, three cells</div> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # Step 1 – Determine the Pieces
<img src="imgs/image20.png">
<div class="balloon" style="position:absolute;top:72%;left:35%;opacity:0.7">Footer - div, center the text with CSS</div> -->

<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
<!-- # Step 1 – Determine the Pieces
<img src="imgs/image20.png">
<div class="balloon" style="position:absolute;top:25%;left:15%;opacity:0.7">DIV with links (A tags)</div>
<div class="balloon" style="position:absolute;top:35%;left:30%;opacity:0.7">Article headings<br>(H1 and H2 tags)</div>
<div class="balloon" style="position:absolute;top:50%;left:0%;opacity:0.7">Unordered lists,<br>strong tags, links</div>
<div class="balloon" style="position:absolute;top:60%;left:30%;opacity:0.7">Two separate lists in table or two floating divs</div> -->

<!-- attr: { hasScriptWrapper:true } -->
# Step 2 – Which Parts are Image and Which HTML?
- Use HTML when possible to avoid images
  - Images are slower to download and render
<img src="imgs/image19.png">
<div class="balloon" style="position:absolute;top:46%;left:55%;opacity:0.7">Browsers do no support such<br>font and effects, so we have to<br>place this text using image</div>
<div class="balloon" style="position:absolute;top:65%;left:10%;opacity:0.7">This bullets can be either CSS background<br>image or default list bullet</div>
<div class="balloon" style="position:absolute;top:80%;left:60%;opacity:0.7">All elements backgrounds<br>and borders are solid so we<br>can use css colors instead of images</div>

<!-- attr: { hasScriptWrapper:true } -->
# Step 3 – The Small Details
- Look for the small details and decide if they should be in CSS, HTML or image
<img src="imgs/image19.png">
<div class="balloon" style="position:absolute;top:50%;left:55%;opacity:0.7">Example: this images have<br>border that should be defined<br>in the CSS, not part of the image</div>

<!-- section start  -->
<!-- attr: { hasScriptWrapper:true } -->
# Case Study
- Example site design
<br>[http://pypt.org/]()
<img src="imgs/image21.png" style="float:right" width="50%">

<!-- attr: { hasScriptWrapper:true } -->
# Case Study: Text or Image
- Three ways to create the top part:
  - Use text over background image, absolute positioned DIVs 
  - Use table, slice the image to fit the needed rows and columns
  - Leave the text in the image
<img src="imgs/image22.png" width="90%">

<!-- attr: { hasScriptWrapper:true } -->
# Case Study: Two Backgrounds
- To achieve the underline and the leaf image we can use only CSS. We need two tags:
  - Outer tag has the leaf as background image, padding-left so the inner doesn’t cover it
  - Inner tag has the underline as background image, repeat-x, positioned in the bottom
  - Note: the underline background image is 1px wide to save bandwidth!
<img src="imgs/image23.png">

<!-- attr: { hasScriptWrapper:true } -->
# Case Study: Rounded Corners
- Rounded border corners are supported by CSS3
  - Not yet supported by most browsers
      - But soon will be
  - We can create them with multiple images in table
      - Too much code

<img src="imgs/image24.png" width="50%">

<!-- section start  -->
<!-- attr: { class:'slide-section', showInPresentation: true } -->
<!-- # Web Sites with XHTML and CSS
##  Questions -->
