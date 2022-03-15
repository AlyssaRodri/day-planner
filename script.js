var timeDisplayEl = $("#currentDay")

// get the current time when the page loads
//as you loop through the time blocks in the calendar, compare that time with the current time.
//That will tell you how to color code each of the blocks.

// moment.js Query - is before, is same, is after

//create a function to display the current time as the page loads
function displayTime (){
    // utilize moment.js to display time
    var curretTime = moment().format("MMMM Do YYYY");
    timeDisplayEl.text(curretTime)
}

//call the display time function and set seconds in milliseconds
setInterval(displayTime(), 1000)