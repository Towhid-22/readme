// BOM (Browser Object Model)
// window object
// location object

var locationDiv = document.querySelector('.location-div');
// console.log(locationDiv);

//href
console.log(location.href);
var p1 = locationDiv.children[0];
p1.textContent = location.href;

//pathname
console.log(location.pathname);
var p2 = locationDiv.children[1];
p2.textContent = location.pathname;

//protocol
console.log(location.protocol);
var p3 = locationDiv.children[2];
p3.textContent = location.protocol;

//hostname
console.log(location.hostname);
var p4 = locationDiv.children[3];
p4.textContent = location.hostname;

//port
console.log(location.port);
var p5 = locationDiv.children[4];
p5.textContent = location.port;

//
const visitButton = document.getElementById('visit');
visitButton.addEventListener('click', function(){
    location.assign('https://translate.google.com/');
});