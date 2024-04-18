# Phase-1-Project

## (Your Favourite Cart)
# Live Link
--- https://yuriamani25.github.io/phase-1-project/ ---

## Project Requirements
Your app must be a HTML/CSS/JS frontend that accesses data from a public API or from a db.json file using json-server. Your API or db.json should return a collection of at least 5 objects with each object having at least 3 attributes. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs 


Links to an external site.. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!


Your entire app must run on a single page. There should be NO redirects or reloads. In other words, your project will contain a single HTML file.

Use at least 3 distinct event listeners


   Links to an external site. (3 events of different types) that enable interactivity. What this means is that, if you had 3 click events, that would only count as 1 distinct event and you would need to add at least 2 more. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should also have its own unique callback function. These must be added using JavaScript's .addEventListener() method. Events embedded into HTML elements and CSS will not count toward the total. Please ask your instructor if you have questions regarding this requirement.


   Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.


Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.


## Procedures

### Choose an API or create a db.json file:
You can either find a public API that fits your project requirements (preferably one that doesn't require an API key) or create a db.json file with sample data.

### Set up your project structure:
Create an HTML file (index.html), CSS file (styles.css), and JavaScript file (script.js). Make sure they're all in the same directory.

### HTML structure:
Design the structure of your single-page HTML file. Include placeholders for where the data will be displayed and any interactive elements you plan to include.

### CSS styling: 
Style your HTML elements using CSS to make your app visually appealing.

### JavaScript functionality:
Use fetch() to asynchronously retrieve data from the API or db.json.
Implement event listeners using addEventListener() for interactivity. Make sure to use at least 3 distinct event types.
Manipulate the retrieved data as needed using array iteration methods like map, forEach, or filter.
Keep your code DRY by abstracting repetitive code into functions.

### Testing:
Test your app thoroughly to ensure that it works as expected. Make sure to handle errors gracefully, especially when dealing with asynchronous operations.