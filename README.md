## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
6) Think about how to validate each of your steps

## plan
1) HTML skeleton & CSS
    - three pokemon (radios), 1 button
    - each pokemon has "encounters" and "captures" stats
2) utils.js function to get three random unique elements of an array 
    - pass in array and number of elements to get (default value of 3)
    - optional parameter of array of pokemon not to select
3) app.js to keep track of state
    - keep track of current session
        - array of objects containing ids, encounters, and captures 
    - keep track of all time sessions
4) catch button handler
    - add one to capture for selected mon
    - refreshes to three new pokemon (add 1 to encounters for all of them) 
5) results button handler & results page
    - takes to results page
        - percent of mons encounterd, percent of mons captured 
        - list of mons with session stats and all time stats 
    - results page has a "new session" button