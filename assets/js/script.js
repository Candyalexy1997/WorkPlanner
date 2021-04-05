
//Set the current Date at the top of the daily plannner
var today = moment();
$("#currentDay").text(today.format("MMM Do YY"));


// Grab the ID's for each hour of the day
var button9 = document.getElementById("9button")
var div9 = document.getElementById('9');

var button10 = document.getElementById("10button")
var div10 = document.getElementById('10');

var button11 = document.getElementById("11button")
var div11 = document.getElementById('11');

var button12 = document.getElementById("12button")
var div12 = document.getElementById('12');

var button13 = document.getElementById("13button")
var div13 = document.getElementById('13');

var button14 = document.getElementById("14button")
var div14 = document.getElementById('14');

var button15 = document.getElementById("15button")
var div15 = document.getElementById('15');

var button16 = document.getElementById("16button")
var div16 = document.getElementById('16');

var button17 = document.getElementById("17button")
var div17 = document.getElementById('17');


//use local storage to set the values of our divs 
div9.value = localStorage.getItem("9") || ''
div10.value = localStorage.getItem("10") || ''
div11.value = localStorage.getItem("11") || ''
div12.value = localStorage.getItem("12") || ''
div13.value = localStorage.getItem("13") || ''
div14.value = localStorage.getItem("14") || ''
div15.value = localStorage.getItem("15") || ''
div16.value = localStorage.getItem("16") || ''
div17.value = localStorage.getItem("17") || ''



//Add and retrieve Tasks from local storage 
function setTask(name,value){
    localStorage.setItem(name, value)
}

//Add event Listener to save task on button click

button9.addEventListener('click', function(){
    var text = div9.value
    setTask("9", text)
})

button10.addEventListener('click', function(){
    var text = div10.value
    setTask("10", text)
})

button11.addEventListener('click', function(){
    var text = div11.value
    setTask("11", text)
})

button12.addEventListener('click', function(){
    var text = div12.value
    setTask("12", text)
})

button13.addEventListener('click', function(){
    var text = div13.value
    setTask("13", text)
})

button14.addEventListener('click', function(){
    var text = div14.value
    setTask("14", text)
})

button15.addEventListener('click', function(){
    var text = div15.value
    setTask("15", text)
})

button16.addEventListener('click', function(){
    var text = div16.value
    setTask("16", text)
})

button17.addEventListener('click', function(){
    var text = div17.value
    setTask("17", text)
})

// update the background based on the time of day


  




