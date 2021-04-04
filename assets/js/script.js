
//Set the current Date at the top of the daily plannner
var today = moment();
$("#currentDay").text(today.format("MMM Do YY"));


// Grab the ID's for each hour of the day
var button9 = document.getElementById("9button")
var div9 = document.getElementById('9');








//use local storage to set the values of our divs 
div9.value = localStorage.getItem("9") || ''




function setTask(name,value){
    localStorage.setItem(name, value)
}



button9.addEventListener('click', function(){
    var text = div9.value
    setTask("9", text)
})




  

    // Add Tasks to the local storage


//Store task in the right timeslot
var getTask = function(){

}

//Create a task



//Click Handlers to initiate Save Process

// Save Tasks 
// $(".task").click(function();

// Retrieve tasks from localStorage