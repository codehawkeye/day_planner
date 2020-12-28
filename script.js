// load up the HTML first!!!!!
$(document).ready(function () {
    // Get the date with moment
    console.log(moment().format("dddd, MMMM Do"))
    // Put date on page 
    $("#currentDay").text(moment().format("dddd, MMMM Do"))

    // get the current hour
    var currentHour = moment().hours();
    
    // make a forEach loop that goes over the hour blocks
    $(".time-block").each(function () {

        // get the value from the HTML for the current hour block    
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        //    check to see if currentHour is greater > or < blockHour
        if (blockHour < currentHour) {
            // add CSS classes according to time
            $(this).addClass("past");
            
        }
        else if (blockHour === currentHour) {
            // add CSS classes according to time
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            // add CSS classes according to time
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

}
    
    hourUpdater();

    // set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// load and saved data from localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

   

    
   
        
    

    
    
    

})