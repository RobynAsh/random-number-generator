const TODO = {
  
    // TODO #1 - Add to existing text "Today's date is" using a new Date object and the .toLocaleDateString() method
}

const TODO2 = {
    // TODO #2 - Add a click event listener for the button 

    // First test that it's working with a console.log (check browser DevTools Console)
    // Set it to generate a random number (use Math object)

    // Will also need to make the div holding the number visible
}

const TODO3 = {
    // TODO #3 - Change the color of the number (currently defaulting to 0) to yellowgreen if even or coral if odd
    // BONUS: Also change the page background to match (use document.body)
}

const TODO4 = {
    // TODO #4 - If the random number is evenly divisible by 3, add the spinning class to the button; otherwise remove it
}

const TODO5 = {
    // TODO #5 - Trigger an alert (Google this!) if the number is evenly divisible by 5
    // NOTE: Use setTimeout() (again, be resourceful!) to deal with the race condition where the alert pops up before the new number re-renders on the page; 50ms should be plenty of time to delay
}

window.addEventListener("load", () => {

    /* CREATE OBJECTS */
  
  const todaysDate = document.getElementById("date");
  const button = document.getElementById("num-button");
  const numBox = document.getElementById("num-box");
  const randomNumber = document.getElementById("random-num");
 
  /* CODE TO RUN IMMEDIATELY */
  
    // Run any code needed to display things on page when it first loads
  console.log()
    // TODO #1 - Add to existing text "Today's date is" using a new Date object and the .toLocaleDateString() method
  "Todays date is"
  .toLocalDateString()
  
  
    /* EVENT LISTENERS */
  
    // TODO #2 - Add a click event listener for the button 

    // First test that it's working with a console.log (check browser DevTools Console) 
    // Set it to generate a random number (use Math object)

    // Will also need to make the div holding the number visible
  
    // TODO #3 - Change the color of the number (currently defaulting to 0) to yellowgreen if even or coral if odd
    // BONUS: Also change the page background to match (use document.body)
  
    // TODO #4 - If the random number is evenly divisible by 3, add the spinning class to the button; otherwise remove it
  
    // TODO #5 - Trigger an alert (Google this!) if the number is evenly divisible by 5
    // NOTE: Use setTimeout() (again, be resourceful!) to deal with the race condition where the alert pops up before the new number re-renders on the page; 50ms should be plenty of time to delay
  
  
    // As part of TODO #2: Take a look at the content of the different objects you created at the top using console.log and console.dir
    
  
});