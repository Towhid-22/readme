/*
// best practice for javascript codding

// Best Practices
// use camelCase for naming
    //for example
    let firstName, fullName, userInfo, userEmail;
    
// variable declaration on top and initialize
// avoid unncecessary variables
// switch, case, default
// object and array with const
// == vas ====
// acess dom less
*/


/*
&& = Logical And যদি সকল বা উভয় কন্ডিসন যদি সত্যি হয় তাহলে return করবে true।
|| = Logical Or যে কোন একটি কন্ডিসন সত্যি হলে true return করবে।
! = Logical Not এর কাজ হচ্ছে true কে false করে দেয়া, আর false কে true করে দেয়া।
== for value check
=== for value and data type check
 */

//Date: 04/04/2022
/* <----- Continue and break -----> (Class-22)*/
for(var x = 1; x <= 100; x++){
    if(x == 20){
        break;
    }
    document.write(' ' + x)
}
//
for(var y = 1; y <= 100; y = y + 1){
    if(y == 10){
        continue;
    }
    document.write(' ' + y);
}
//Date: 02/04/2022
/* <----- While loop -----> (class-20)*/
//do-while loop
var i =1;
do {
    document.write(" " + i);
    i++;
}while(i <=10);

//
var x = 1;

while(x <= 10){
    document.write(' ' + x);
    x = x + 1;
}

//
var i = 1;
var sum = 0;

while(i <= 50){
    
    if(i % 3 == 0 && i % 5 == 0){
        document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write(sum);

/* <-----for loop -----> (class-18, 19) */
//for(starting; condition; update)

for(var x = 1; x <= 5; x = x + 1){
    var num1 = parseInt(prompt("Enter Your First Number : "));
    var num2 = parseInt(prompt("Enter Your Second Number : "));
    var sum = num1 + num2;
    console.log("Result = " + sum);
}
document.write('Result = ' + sum);

//
var m = parseInt(prompt("Enter your first number : "));
var n = parseInt(prompt("Enter your last number : "));
var sum = 0;

for(var x = m; x <= n; x = x + 1){
    sum = sum + x;
}
document.write(sum);


//
var sum = 0;

for(var x = 1; x <= 10; x = x + 1){
    document.write( ' Bangladesh ' + x + ' ');
    sum = sum + x;
}
document.write(sum);


//Date: 01/04/2022
/* <----- Switch (Spell) -----> (Class-17)*/
//Switch=====case, break, default

var digit = prompt('Enter any digit : ');

switch(digit){
    case '0':
        console.log('Zero');
        break;
    case '1':
        console.log('One');
        break;
    case '2':
        console.log('Two');
        break;
    case '3':
        console.log('Three');
        break;
    case '4':
        console.log('Four');
        break;
    case '5':
        console.log('Five');
        break;
    case '6':
        console.log('Six');
        break;
    case '7':
        console.log('Seven');
        break;
    case '8':
        console.log('Eight');
        break;
    case '9':
        console.log('Nine');
        break;
    default:
        console.log('Not a digit');
}

//Switch for letter

var letter = prompt('Enter a letter : ');

letter = letter.toLowerCase();

switch(letter){
    case 'a':
        console.log('Vowel');
        break;
    case 'e':
        console.log('Vowel');
        break;
    case 'i':
        console.log('Vowel');
        break;
    case 'o':
        console.log('Vowel');
        break;
    case 'u':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}

//Multiple switch
var letter = prompt('Enter a letter : ');

letter = letter.toLowerCase();

switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vowel');
        break;
    default:
        console.log('Consonant');
}

//if, else if, else


if(digit == 0)
    console.log('Zero');

else if(digit == 1)
    console.log('One');

else if(digit == 2)
    console.log('Two');

else if(digit == 3)
    console.log('Three');

else if(digit == 4)
    console.log('Four');

else if(digit == 5)
    console.log('Five');

else if(digit == 6)
    console.log('Six');

else if(digit == 7)
    console.log('Seven');

else if(digit == 8)
    console.log('Eight');

else if(digit == 9)
    console.log('Nine');

else
    console.log('Not a digit');



/*<----- Programs Using Logical Operators -----> (Class-16)*/
var marks = prompt("Enter Your Marks : ");

if(marks > 100 || marks < 0)
    console.log("Invalid Marks");

else if (marks >= 80 && marks <= 100)
    console.log("A+");

else if (marks >= 70 && marks <= 70)
    console.log("A");

else if (marks >= 60 && marks <= 69)
    console.log("A-");

else if (marks >= 50 && marks <= 59)
    console.log("B");

else if (marks >= 40 && marks <= 49)
    console.log("C");

else if (marks >= 33 && marks <= 39)
    console.log("D");

else
    console.log("Fail");

//How to use large number?
//Answer below:
var num1 = prompt("Enter Number1 : ");
var num2 = prompt("Enter Number2 : ");
var num3 = prompt("Enter Number3 : ");

if (num1>num2 && num1<num3)
    console.log("Large Number1 " + num1);

else if (num2>num1 && num2<num3)
    console.log("Large Number2 " + num2);

else
    console.log("Large Number3 " + num3);

//Vowel and consonant

var letter = prompt('Enter a letter : ');

letter = letter.toLowerCase();

if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')
    console.log('Vowel');

else
    console.log('Consonant');

/*Use of : (if, else if, else) and (Letter grade) ----->(Class-14 and 15)*/
var num = 21;

if(num%4==0)
console.log("Even");

if(num%4!=0)
console.log("Odd");

var num = prompt('Enter Your Marks : ');

if (num>= 80)
    console.log("A+");

else if (num>= 70)
    console.log("A");

else if (num>= 60)
    console.log("A-");

else if (num>= 50)
    console.log("B");

else if (num>= 40)
    console.log("C");

else if (num>= 33)
    console.log("D");

else
    console.log("Fail");

//Relational Operator ----> >, =>, <, <=, ==, ===, !=, !== (Class-13)
//Logical Operator -----> &&, ||, !

/*<----- Temperature Converter----->12*/
//Fahrenheit to Celcius
// Fahrenheit Formul (°F − 32) × 5/9 = °C
var fahrn = parseFloat(prompt('Enter Fahrenheit'));

var cels = (fahrn - 32) * 5/9;
document.write('Celsius = ' + cels);

// Celsius Formul (°C × 9/5) + 32 = °F
var cels = parseFloat(prompt('Enter Celsius'));

var fahrn = (cels * 9/5) + 32;
document.write('Fahrenheit = ' + fahrn);

//11 Tutorial not work

/* <-----Make your own calculator----->10*/

//
var num1 = 20;
var num2 = 10;

var sum, sub;

sum = num1 + num2;
document.write('addition = ' + sum + '</br>')

sub = num1 - num2;
document.write('subtraction = ' + sub)


//
var num1 = prompt('Enter First Number : ')
var num2 = prompt('Enter First Number : ')

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var  sum, sub;

sum = num1 + num2;
document.write('Addition = ' + sum + '</br>');

sub = num1 - num2;
document.write('Subtraction = ' + sub);

//
var towhid1 = prompt('Enter Your Number');
var towhid2 = prompt('Enter Your Number');

towhid1 = parseInt(towhid1, 10);
towhid2 = parseInt(towhid2, 10);

var sum, sub, mul, div, rem;
var result; //defaul

sum = towhid1 + towhid2;
document.write('Addition = ' + sum + '</br>');
document.write(towhid1 + ' + ' + towhid2 + ' = ' + sum + '</br>');

sub = towhid1 - towhid2;
document.write('Subtraction = ' + sub + '</br>');
document.write(towhid1 + ' - ' + towhid2 + ' = ' + sub + '</br>');

mul = towhid1 * towhid2;
document.write('Multiplication = ' + mul + '</br>');
document.write(towhid1 + ' * ' + towhid2 + ' = ' + mul +'</br>');

div = towhid1 / towhid2;
document.write('Division = ' + div + '</br>');
document.write(towhid1 + ' / ' + towhid2 + ' = ' + div + '</br>');

rem = towhid1 % towhid2;
document.write('Reminder = ' + rem + '</br>');
document.write(towhid1 + ' % ' + towhid2 + ' = ' + rem + '</br>');


/*<-----Arithmetic and assignment operator----->9*/

//Arithmatic Operator = +, -, *, /, **(Exponent), ++({Pre or Post} Increment), --({Pre or Post} Decrement), %(Modulus)

var name = 5**5;
var towhid = 25%5;
let a = 6;
let b = 7;
--b; //Output = 6
++b; //Output = 7
console.log(b);
console.log(towhid);

//Assignment Operator -> =, +=, -=, *=, /=, %=, **=

var x = 9;
x *= 8; // x = x * 8 (9 * 8 = 72)
x -= 6;
x += 10;
x /=10;
x %=2;
x **= 5;
console.log(x);

/*<-----Library functions for string----->8*/

var text1 = prompt('What is your name? ');
var text = 'Bangladesh is a small country. ';
var tow = 'Bangladesh is a beautiful country';


document.write('Number of Character for text ' + text.length + ' ' + text.toUpperCase() + text.toLowerCase() + 'My name is ' + text1 + text.charAt(10) + tow.slice(2, 5));
document.write(text.concat(tow));

var towhid = 'Dhaka';

document.write(towhid.charAt(1));

/*

//Functions

variable/let name.toUpperCase()
variable/let name.length
variable/let name.toLowerCase()
variable/let name.charAt(10)
variable/let name.concat(tow)
variable/let name.slice(2, 5)
*/

//-----String Concatenate
var firstName = 'Md. Towhidul';
var lastName = ' Islam <br/>';
var fullName = firstName + lastName;

document.write('My Name is ' + firstName + 'Islam <br/>');

document.write('Md. Towhidul ' + 'Islam. <br/>' + ' I am 24. <br/>' + 'I live in Dhaka.')

// -----Number and Converter-----

console.log(Number(false)); // 'false' for 0
console.log(Number(true)); //'true' for 1
console.log(typeof(Number('Towhid')));
console.log(typeof(String('123456789')));

var number = 2.115174;

console.log(number.toFixed(3)); //toFixed count after decimal (.)
console.log(number.toPrecision(1)); //toPrecision count total character

// -----Converter-----

var num = '100';
 
num = toString(num);
num = parseInt(num);
num = parseFloat(num);

console.log(typeof(num));



let firstName, lastName, age, house, phone, email, gender;
firstName = 'Md. Towhidul ';
lastName = 'Islam <br/>';
age = '24 <br/>';
house = 'Jhalokati <br/>';
phone = '01741559629 <br/>';
email = 'towhid212037@gmail.com <br/>';
gender = 'male <br/>';

document.write(firstName, lastName, age, house, phone, email, gender);

 

console.log('I love Bangladesh');
document.write(' ' + '<h1> Name : Md. Towhidul Islam</h1>');
document.write('<h2> Phone : 01741559629</h2> </br>');
document.write('<h2> Division : Barisal</h2> </br>');
document.write('<h3> Zilla : Jhalokati </h3>');

alert(1);
alert('Bangladesh');
