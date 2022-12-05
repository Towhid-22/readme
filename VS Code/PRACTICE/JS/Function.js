//<---Function Expression--->

const display2 = function displayMessage(msg){
  console.log(msg);
}
display2('English is an international language');


//

const display3 = function displayMessage(){
  console.log('English is an international language');
}
display3();

//

//<-----Immediately Function----->

(function display(message){
  console.log(message);
})('Hello World');

//

function display(){
  console.log('Hello')
}
display();

//

//<----------Function---------->
for(var x = 1; x <=3; x++){
  var num1 = parseFloat(prompt('Enter a Number: '));
  var num2 = parseFloat(prompt('Enter a Number: '));
  function add(num1, num2) {
      return num1 + num2;
  }
  function sub(num1, num2) {
      return num1 - num2;
  }
  function mul(num1, num2) {
      return num1 * num2;
  }
  function div(num1, num2) {
      return num1 / num2;
  }

  console.log(add(num1,num2));
  console.log(sub(num1,num2));
  console.log(mul(num1,num2));
  console.log(div(num1,num2));
}
document.write(x);
//

// creating a simple calculator that will add, sub, mul, div
// Thanks for trying hard
var num1 = parseFloat(prompt('Enter a Number: '));
var num2 = parseFloat(prompt('Enter a Number: '));
function add(num1, num2) {
    return num1 + num2;
  }
  function sub(num1, num2) {
    return num1 - num2;
  }
  function mul(num1, num2) {
    return num1 * num2;
  }
  function div(num1, num2) {
    return num1 / num2;
  }
  // var num1 = parseFloat(prompt('Enter a Number: '));
  // var num2 = parseFloat(prompt('Enter a Number: '));
  console.log(add(25, 20));
  console.log(sub(25, 20));
  console.log(mul(25, 20));
  console.log(div(25, 20));

//
function addition(num, num1){
    var result = num + num1;
    document.write(num + ' + ' + num1 + ' = ' + result + '</br>');
}
addition(8549,85694);

function substruction(num, num1){
    var result = num - num1;
    document.write(num + ' - '+ num1 + ' = ' + result + '</br>');
}
substruction(951756,78945);

function multiplication(num, num1){
    var result = num * num1;
    document.write(num + ' * ' + num1 + ' = ' + result + '</br>' );
}
multiplication(852,896);

function divided(num, num1){
    var result = num / num1;
    document.write(num + ' / ' + num1 + ' = ' + result + '</br>' );
}
divided(900,10);

function reminder(num, num1){
    var result = num % num1;
    document.write(num + ' % ' + num1 + ' = ' + result + '</br>' );
}
reminder(9582,50);


//
function java(num, num2, num3){
    var result = (num * num2) + num3;
    return result;
}
// var x = java(88,45, 44);
document.write(java(90,90,90))
// document.write(x);

//

function java(num){
    var num = 10;
    var result = num * num;
    document.write('Result = ' + result + '</br>');
}
java();
java();
java();
