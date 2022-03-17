var dayDisplayEl = $("#currentDay");
workHours = [ '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00' ]

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


//create a function to determine if the time is in the past. We can do this by adding classes .past .present .future

//for the children of .container class
$('.container').children().each((i, e) => {
    //we set the variable for currentTime = just the hour
    var currentTime = moment().format('H');
    //create if statements for the hours and append the tense
  if ((i+9) < currentTime){
    $(e).addClass("past")
  } else if ((i+9) > currentTime) {
    $(e).addClass("future")
  } else if ((i+9) == currentTime)
    $(e).addClass("present")
})

  //when the button is clicked on
$('saveBtn').on("click", saveText)

   //create a function to save the text to local storage
function saveText(){
    var hourlyTask = $('decription').value; 
    //save the text in text area to local storage
    for (i = 0; i <= workHours; i++);
    localStorage.setItem( workHours[i], hourlyTask)

    //display the value
    localStorage.getItem("hour")
  }
// it will need to be saved to Local Storage. When I refresh the page, the saved text needs to stay where it is.

//call the display time function
displayDay();


//name the object variables that we will be working with

