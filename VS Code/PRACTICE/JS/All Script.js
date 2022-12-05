//creating html element claess - 37

var heading3 = document.createElement('h1');
var text = document.createTextNode('This is heading3');
heading3.appendChild(text);
var myDiv = document.getElementById('my-div');
myDiv.appendChild(heading3);

//remove element
var heading2 = document.getElementsByTagName("h1")[0];
var myDiv = document.getElementById('my-div');
myDiv.removeChild(heading2);


//insert before
var heading0 = document.createElement('h1');
var text0 = document.createTextNode('This is heading0');
heading0.appendChild(text0);
var myDiv = document.getElementById('my-div');
var heading1 = document.getElementsByTagName("h1")[0];
myDiv.insertBefore(heading0, heading1);

//Onclick Method
var image = document.querySelector('#img');
function myPicture1(){
    image.src = '../Project/Logo.png';
}

function myPicture2(){
    image.src = '../Project/newyork.png';
}

//
function myPicture1(){
    var para = document.querySelector('#img1');
    para.src = '../Project/logo.png';
}

function myPicture2(){
    var para = document.querySelector('#img2');
    para.src = '../Project/newyork.png';
}

//
//Id Select in querySelector
document.querySelector('#para').innerHTML = 'Bangladesh';
//Class Select in querySelector
document.querySelector('.heading').innerHTML = 'Dhaka is the capital city of Bangladesh';
//Tag Select in querySelector
document.querySelector('h2').innerHTML = 'Towhid';


document.getElementsByTagName('h1')[0].innerHTML = 'Hello brother';

document.getElementsByClassName('para1')[0].innerHTML = 'Hello';

document.getElementById('heading1').innerHTML = 'Hello';
document.getElementById('para').innerHTML = 'This is paragraph tag';
document.getElementById('heading2').innerHTML = 'Goodbye goodbye';




//Date Call Method
var date = new Date();
console.log(date);
var year = date.getFullYear();
console.log(year);
var day = date.getDate();
console.log(day);
var month = date.getMonth();
console.log(month);
var hours = date.getHours();
console.log(hours);
var minutes = date.getMinutes();
console.log(minutes);
