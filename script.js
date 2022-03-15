var dayDisplayEl = $("#currentDay")
var currentTime = ("");
var workHours = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

// get the current time when the page loads
//as you loop through the time blocks in the calendar, compare that time with the current time.
//That will tell you how to color code each of the blocks.

// moment.js Query - is before, is same, is after

//create a function to display the current time as the page loads
function displayDay() {
    // utilize moment.js to display time
    var currentDay = moment().format("MMMM Do YYYY");
    dayDisplayEl.text(currentDay)
    //I also used this function to set the variable of current time
}


//create a function to set the if statements for off work hours
function offWork(){ 
    // set the empty variable equal to the current hour
    currentTime = moment().format("H HH")
    console.log(currentTime)

    //set the variables for out of work hours
    beforeTime = moment("08:59:00", "hour minute")
    afterTime = moment("17:01:00", "hour minute")
    console.log(beforeTime)
    console.log(afterTime)
    
    //if we are after work and before the next day
    if (moment().isBetween(afterTime, beforeTime)){
        //then the whole calendar is in the past
        $("textarea").addClass('past');
        //but if we are in the middle of the work day
    } else if (moment().isBetween(beforeTime, afterTime)){
        //run a new function to determine what to do
        atWork();
    }
}

// NEED HELP FROM TUTOR ABOUT LOOPS 
function atWork(){
    //Thanks to the last function we know that we are in the hours between 9 and 5.
    //create a for loop for our work hours array
    for (i = 0; i <= myFormat; i++){
        console.log("is running")
    }
    // for ( i = 0; i <= workHours.length; i++){
    //     // if the current moment is before a our looped work hours
    //     if (moment().isBefore(workHours[i])){
    //         $("textarea").addClass('future')
    //         //take each of the corresponding div tags and set them to .before
    //     } else if (moment().isSame(workHours[i])){
    //         $("textarea").addClass("present")
    //     }
    // }
}

function saveText(){
    localStorage.setItem
}

//First thing to do is to set the variable of current time. We can do this using moment.js


//create a function to determine if the time is in the past. We can do this by adding classes .past .present .future

//for loop that will loop through all of the blocks of time on our planner
// if statements if( current time === current time )
//add .present to our class list.
// )
//create a function that when the save button is hit, the text is saved in the corresponding box
// it will need to be saved to Local Storage. When I refresh the page, the saved text needs to stay where it is.

//call the display time function
displayDay();
offWork();
atWork();

//name the object variables that we will be working with

var myFormat = [
    {
        nineBlockdiv: {
            hour: moment("09:00:00", "hour minute"),
            textarea:"",
            saveBtn9: false,
        }
    },
    {
        tenBlockdiv: {
            hour: moment("10:00:00", "hour minute"),
            textarea:"",
            saveBtn9: false,
        }
    },
    {
        elevenBlockdiv: {
            hour: moment("11:00:00", "hour minute"),
            textarea:"",
            saveBtn9: false,
        }
    },
]