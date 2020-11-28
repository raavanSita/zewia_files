
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var day = date.getDay();


if (hr > 12) {
    var amPm ="AM"
} else {
    var amPm = "PM"
} 

var newHr = hr % 12;

if (newHr==0) {
    newHr = 12
}


switch (day) {
    case 0:
        d = "sunday";
        break;
    case 1:
        d = "monday";
        break;
    case 2:
        d = "tuesday";
        break;
    case 3:
        d = "wednesday";
        break;
    case 4:
        d = "thrusday";
        break;
    case 5:
        d = "friday";
        break;
    case 6:
        d = "saturday";
        break;
}




document.getElementById("day").innerHTML = d.toUpperCase();
document.getElementById("hr").innerHTML = newHr;
document.getElementById("min").innerHTML = min + " " + amPm;