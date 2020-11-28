/*  q1 */
var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var day = date.getDay();


if (hr < 12) {
    var amPm = "AM"
} else {
    var amPm = "PM"
}

var newHr = hr % 12;

if (newHr == 0) {
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

/* q2 */
var r = [];
for (i = 2014; i <= 2050; i++) {

    let d = new Date(i, 0, 1);
    if (d.getDay() === 0) {
        r.push(d.getFullYear());

    }

}
function alt() {
    document.getElementById('ans').innerHTML = r;
}

/* q3 */

function upperChk() {
    var data = document.getElementById("upperInp").value;
    if (data[0] == data[0].toUpperCase()) {
        alert("first letter of string " + " ' " + data + " ' " + " is upper case")
    }
    else {
        alert("first letter of string " + " ' " + data + " ' " + " is not upper case")
    }

}

/* URL */

function urlChk() {
    var s = "https://";

    var url = document.getElementById("urlInp").value;
    if (url.slice(0, 8) == s && url.includes(".")) {
        alert("its a valid url")
    }
    else {
        alert("not valid url")
    }
}

/* sample html*/

function js_style() {
    document.getElementById("main").className += 'container-fluid bg-dark text-white text-center'
    document.getElementById("jsstyle").className += 'text-light btn btn-danger font-weight-bold'
}

// drop down

function dwn1() {
    let elem = document.getElementById("dwn1");
    elem.remove();

}

function dwn2() {
    let elem = document.getElementById("dwn2");
    elem.remove();

}

function dwn3() {
    let elem = document.getElementById("dwn3");
    elem.remove();

}
document.getElementById("dwn1").addEventListener('click', function (event) {

    event.stopPropagation();
});

document.getElementById("dwn2").addEventListener('click', function (event) {

    event.stopPropagation();
});

document.getElementById("dwn3").addEventListener('click', function (event) {

    event.stopPropagation();
});

//q6


var bold_Items;
window.onload = getBold_items();


function getBold_items() {
    bold_Items = document.getElementsByTagName('b');
}

function high() {

    for (var i = 0; i < bold_Items.length; i++) {
        bold_Items[i].style.backgroundColor = "red";
        bold_Items[i].style.color = "white";
    }
}


function return_normal() {
    for (var i = 0; i < bold_Items.length; i++) {
        bold_Items[i].style.backgroundColor = "white";
        bold_Items[i].style.color = "black";
    }
}



// q8
var libData = [];
var q = [];
var s = [];
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


for (i = 0; i < library.length; i++) {

    libData.push("The book " + library[i].title + " by " + library[i].author);

    if (library[i].readingStatus == true) {

        s.push("is already read.");
    } else {
        s.push("is not yet read.");
    }

}
for (i = 0; i < libData.length; i++) {
    q.push( libData[i] + s[i] + "<br />")
}



function read() {
    document.getElementById("reading").innerHTML = q;
}



//q9

function crossChk() {
    var txt1 = document.getElementById("txt1").value;
    var txt2 = document.getElementById("txt2").value;

    if (txt1.toString() == txt2.toString()) {

        alert("both text are identical");
    } else {
        alert("both text are not identical");
    }

}

//q10




var avg = {
    "david": 80,
    "Vinoth": 77,
    "Divya": 88,
    "Ishitha": 95,
    "Thomas": 68
 }; 
 window.onload =tab();
 function tab() {
    document.getElementById("td").innerHTML="";
   
    var x = document.getElementById("KEY").value;
    var y = document.getElementById("VAL").value;
 
    if (x != "") {
        avg[x]=y;
        
    }
 
 
    var grade = "";
    for (const [key, value] of Object.entries(avg)) {
        switch (true) {
 
            case value <= 60:
                grade = "F";
                break;
            case value <= 70:
                grade = "D";
                break;
            case value <= 80:
                grade = "C";
                break;
            case value <= 90:
                grade = "B";
                break;
            case value <= 100:
                grade = "A";
                break;
 
        }
 
        document.getElementById("td").innerHTML += ("<tr>" + "<td>" + key + "<td>" + "<td>" + value + "<td>" + "<td>" + grade + "<td>" + "<tr>")
    }
 }




