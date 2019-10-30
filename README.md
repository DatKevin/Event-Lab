![GA Cog](https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67)
# DOM Events
Type: Lab<br>
Created by: WDI Instructional staff<br>
Class: wdi-cc<br>
Updated by: Reuben Ayres, Jim Haff, Daniel Scott and Tyler Lane<br>
Competencies: JavaScript event fundamentals, DOM

---

In the following exercises you will use five of the most common DOM `events`: 
  - `ready`
  - `submit`
  - `change`
  - `click`
  - `keypress`

You can find a full list of DOM events [here](https://developer.mozilla.org/en-US/docs/Web/Events).

## Exercises

### Instructions:
  - Clone this repository
  - For each exercise, start by reading the entire question carefully, then open the `index.html` file for that challenge in your browser.
  - To solve the challenge, you'll need to change each `base.js` file.

---

### 1. `change`
- **Challenge**: Some simple addition! Can you get the total to update whenever you update the numbers?
- Bonus: Add a "reset" button that clears all the inputs.

---

### 2. `click`
- **Challenge**: Create a list of all the phrases that you click.
- Stretch: In addition to listing the phrase clicked, can you include a timestamp?
---

### 3. `keypress`
#### Important Note for #5: Read all of this before starting the question. 
In this `base.js` file, you'll see that you're prompted to optionally write your code inside of something like this:
```javascript
document.addEventListener("DOMContentLoaded", ()=>{
  console.log("The DOM is finished loading!")
})
```
#### Some Thoughts on `DOMContentLoaded`
  - This was typically done in jQuery syntax as `$(document).ready(()=>{})`. Most of the time you'll encounter this event, it will be written in the "jQuery" way.
  - There are a few obscure cases where using this event is necessary, but avoid it otherwise. Just put your `<script>` tag that links to your `app.js` (or whatever) at the bottom of your HTML document, after the HTML elements it refers to and right before the closing `</body>` tag.

####  Answer these questions:
  - When/why _would_ you use the `DOMContentLoaded` event?
  - When/why would you NOT use it?

#### And finally the actual question for number 5: 
- **Challenge**: Stop watch. When the user hits spacebar, record their "start" time. When they  hit it again, record their "end" time. Then, calculate the total time, and put it on the page.

---

### 4. `ready`

- **Challenge**: Now that you know about the `ready` event, without touching the `index.html` file, make the page say "Go!" (where it currently says "Ready?")

---

### 5. `submit`
  - Spend 2 minutes talking to the person sitting next to you about the difference between an "event handler" and an "event listener."

- **Challenge**: Stop the forms from submitting...
    + Ask the question to Google: "How do I stop a form from submitting?"
    + You will have to use the `e` (or `event`) object that is passed to your event handler (the parameter in the callback).
    + Why does one button reload the same page and the other redirect?
    + What is the "?" doing in the URL? Try removing it.

- Bonus: Instead of redirecting to youtube, let's embed the video in our page instead!
    - When the user clicks "submit", dynamically insert the embed code into the page (on YouTube click "Share" under the video, then click "Embed" and copy the HTML). HINT: The embed code belongs in your JavaScript, not your HTML!

---
### Wrap it up
- Recommended: Can you link all the pages together? Create a navbar at the top of every page, with links to all the other pages.
