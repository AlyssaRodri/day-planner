var dayDisplayEl = $("#currentDay")
var nineBlockEl = $(" .nineBlockDiv")
// get the current time when the page loads
//as you loop through the time blocks in the calendar, compare that time with the current time.
//That will tell you how to color code each of the blocks.

// moment.js Query - is before, is same, is after

//create a function to display the current time as the page loads
function displayDay (){
    // utilize moment.js to display time
    var currentTime = moment().format("MMMM Do YYYY");
    dayDisplayEl.text(currentTime)
}

//create a function to determine if the time is in the past. We can do this by adding classes .past .present .future
// function tenseTime(
    //for loop that will loop through all of the blocks of time on our planner
    // if statements if( current time === current time )
        //add .present to our class list.
// )
//create a function that when the save button is hit, the text is saved in the corresponding box
// it will need to be saved to Local Storage. When I refresh the page, the saved text needs to stay where it is.

//call the display time function
displayDay()

//name the object variables that we will be working with
