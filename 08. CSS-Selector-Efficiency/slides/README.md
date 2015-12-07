<!-- section start -->
<!-- attr: { class:'slide-title', showInPresentation:true, hasScriptWrapper:true, style:'' } -->
# CSS Selector Efficiency
## Making the optimal selectors
<div class="signature">
    <p class="signature-course">Slice and Dice</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href = "http://academy.telerik.com " class="signature-link">http://academy.telerik.com </a>
</div>


<!-- section start -->

<!-- attr: { showInPresentation:true, style:'' } -->
# Table of Contents

- Types of CSS Rules
  - ID rules
  - Class rules
  - Tag rules
  - Universal rules
- How are styles matched?
- Guidelines for efficient CSS

<!-- section start -->

# Types of Selectors

# Types of Selectors

- CSS supports **4 primary** types of selectors:
  - ID rules:

  ```css
  #selector { ... }
  ```

  - Class rules:

  ```css
  .selector { ...}
  ```

  - Tag rules:

  ```css
  button { ... }
  ```

  - Universal rules:

  ```css
  [hidden="true"] { ... }
  [type="text"] { ... }
  ```

  - And they can be nested:

  ```css
  #header nav { ... }
  .tabs-control .tab { ... }
  ```

<!-- section start -->

# How are styles matched?
##  i.e. how the browsers search for the correct elements to style

# How are styles matched?

- The style system of every browser matches selectors from right-to-left
  - i.e.  the rightmost rule is matched first
  - Then the second rightmost is matched
  - etc...
- This can be a big hit on performance
  - Uselessly long selectors need more checking from the style system
  - **The fewer rules** required to check for a given element, the **faster style resolution** will be

<!-- section start -->

# Guidelines for efficient CSS
##  Good practices

# Guidelines for efficient CSS

- **Avoid universal rules**
  - Universal rules are checked on each element from the HTML
    - This is too slow
- **Don't create ID rules along with tag rules and/or class rules**
  - i.e. `#main-menu.menu { ... }`
    - This selector will check the elements for the class `.main-menu` and then filter those that have an ID `main-menu`
  - `#main-menu` is enough, IDs are unique on an HTML page
- **Don't mix class rules with tag rules**
  - i.e. `td.grid-cell { ... }`
  - Same as the previous, find all `td` tags, then filter only those that have the class `grid-cell`

- **Use the most specific category possible**
  - i.e. use `.tree-cell-mailfolder`, instead of `.tree-item[mailfolder="true"] > .tree-row > .tree-cell`

# CSS Selector Efficiency
##  Questions
