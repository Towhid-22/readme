/*
// hoisting & strict mode - 29
// default parameter - 45
// rest parameter - 55
// spread operator - 62
// object literals - 94
// for...of and for...in - 127
// for vs foreach - 147
// foreach, map, filter - 193
// arrow function - 214
// array destructure - 288
// swap variables - 297
// object destructure - 306
// nested object destructure - 324
// destructuring function parameters - 343
// find (callback, value) return the value of the first element that pass certain condition - 361
// findIndex (callback, value) return the index of the first element that pass certain condition - 362
// string methods - 416
// export - 428
// import - 436
// class - 445
// synchronous programming - 471
// Asynchronous programming - 495
// callback and higher order function - 526
// promise
*/

//variable in ES6
let x = 10;
let y = 20;

let sum = x+y;
console.log(`sum is ${sum}. the end`);

let name = "Towhidul Islam";
let message = `I'm ${name}. I'm learning javascript`;
console.log(message);

// function add(x,y){
//           var sum = x+y;
//           console.log(sum);
// }
// add(20,30);

//function declare in ES6
const add = (x, y) => {
          let sum = x+y;
          console.log(sum);
}
add(30,60);

//hoisting & strict mode

a=20;
if(true){
          b=10;
          console.log(`b = ${b}`)
          var b;
}
console.log(`a = ${a}`)
var a;

"use strict"
c=20;
console.log(`c = ${c}`)
var c;

//default parameter
"use strict"
function message(text = 'Hello this is default parameter'){
          console.log(`${text}`)
}
message("I love js ES");
message();

//rest parameter
"use strict"
function sum(x,y, ...z){
          console.log(`x = ${x}, y = ${y} z = ${z}`)
}
sum(10,40,50,30,60);

//spread operator
function addNumbers(x,y,z){
          return x + y + z;
}

let numbers1 = [1,2,3]
// console.log(addNumbers(...numbers));
// console.log(addNumbers(numbers[0], numbers[1], numbers[2]));

// let numbers1 = [5, ...numbers, 6]
// console.log(numbers1)

let numbers2 = [7,8,9]
let numbers = [...numbers1, numbers2];
// let numbers = numbers1.concat(numbers2);
console.log(numbers);

//
let p1 = {
          name : "Towhidul Islam",
          age : 30
}

let p2 = {
          nationality : "Bangladeshi",
          occupation : "teacher"
}

let p = {...p1, ...p2}
console.log(p);

//object literals

function studentInfo1(name, age){
          return{
                    name,
                    age
          }
}
console.log(studentInfo1("Rakib", 50));

//
let message = {
          body(){
                    return `Hi, I am object function`
          }
}
console.log(message.body());
let message = {
          body : function(){
                    return `Hi, I am object function`
          }
}
console.log(message.body());

//
let messages = {
          'body name'(){
                    return `Hi, I am object function`
          }
}
console.log(messages['body name']());

// for...of and for...in

const names =['s1', 's2', 's3']
for(let name of names){
          console.log(name)
}

let studentss = {
          name : "Towhidul Islam",
          id : 101,
          cgpa : 3.91
}
for(let x in studentss){
          // console.log(x)
          // console.log(students[x]);
          console.log(`${x} : ${students[x]}`);
}


// for vs foreach

var numbers = [10,20,30,40];
for(var x=0; x <numbers.length; x++){
          console.log(numbers[x]);
}

//
var numbers = [10,20,30,40];
numbers.forEach(myFunction)
function myFunction(x){
          console.log(x);
}

//
var numbers = [10,20,30,40];
numbers.forEach(function(x){
          console.log(x);
})

//
var numbers = [10,20,30,40];
var squareNumbers = [];
numbers.forEach(function(x){
          squareNumbers.push(x*x);
})
console.log(squareNumbers);

//
var numbers = [5,15,25,35];
console.log(numbers);
numbers.forEach(function(x,index,arr){
          arr[index] = x+5;
})
console.log(numbers);

// foreach, map, filter

var num = [8,16,24,32]
var sqrn = []
num.forEach(function(x){
          sqrn.push(x*x);
})
console.log(sqrn);

// map
var numbers = [2,3,4,5]
var squareNumbers = numbers.map(function(x){
          return (x*x)
})
console.log(squareNumbers)
console.log(numbers);

// filter
var number = [22,31,4,3,2,40,15]
var newNumbers = number.filter(function(x){
          return x>10;
})
console.log(newNumbers);






/* <--- arrow function */

function display(){
          console.log("I am display1")
}
display();

//
const display2 = () => {console.log("I am display2")}
const display3 = () => console.log("I am display3")

display2();
display3();

//
function message1(){
          return "Hi I am message1"
}
console.log(message1());

// return in arrow function
const message2 = () => {return "Hi I am message2"}
const message3 = () => "Hi I am message3"
console.log(message2());
console.log(message3());

// parameter in arrow function
function add1(num1, num2){
          return num1 + num2;
}
console.log(add1(30,40));


// return for arrow function
const add2 = (num1,num2) => num1 + num2;
console.log(add2(50,30));

//
var students = [
          {
                    id : 101,
                    name : "Towhidul Islam",
                    gpa : 2.65
          },
          {
                    id : 102,
                    name : "Abdul Halim",
                    gpa : 3.65
          },
          {
                    id : 103,
                    name : "Anamul",
                    gpa : 3.03
          }
]

// for traditional function
function studentsName(){
          return students.filter(function(x){
                    return x.gpa > 3
          }).map(function(y){
                    return y.name;
          })
}
console.log(studentsName());

// return for arrow function
const students2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);
console.log(students2());



/* array destructure */

let numberss = [10,20,30,40,50]
// let [num1, num2, num3, num4, num5] = numberss
let [num1, ...z] = numberss
console.log(z);


/* swap variables */

let a = 10, b = 20;
[a,b] = [b,a]
console.log(a)
console.log(b)


/* object destructure */

const studentInfo = {
          id : 101,
          fullName : "Towhidul Islam",
          gpa : 3.50,
          college : "Dhaka College",
          subject : "Sociology"
}

const {id, fullName, gpa, college, subject} = studentInfo

console.log(id, subject, college)
console.log(fullName)
console.log(gpa)



/* nested object destructure */

const studentInfo1 = {
          id : 101,
          fullName1 : "Towhidul Islam",
          gpa : 3.50,
          college : "Dhaka College",
          subject : "Sociology",
          language : {
                    native : 'Bangla',
                    beginer : 'English'
          }
}

const {fullName1, language} = studentInfo1
console.log(language.native);


/* destructuring function parameters */

// const studentInfo2 = (student) => {
const studentInfo2 = ({id, fullName}) => {
          // console.log(`${student.id}, ${student.fullName}`)
          console.log(`${id}, ${fullName}`)
          // console.log(student.id, student.fullName)
}
const student = {
          id : 101,
          fullName : "Towhid"
}
studentInfo2(student);


// find (callback, value) return the value of the first element that pass certain condition
// findIndex (callback, value) return the index of the first element that pass certain condition
let numb = [5,55,14,5,78];
const evenNumber = (value) => {
          if(value%2===0)
          return value
}
let firstEvenNumber = numb.find(evenNumber);
let firstEvenNumberIndex = numb.findIndex(evenNumber);
console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)
// let numb = [5,55,14,5,78];
// let firstEvenNumber = numb.find(x => x%2===0);
// console.log(firstEvenNumber)


const studentses = [
          {
          id : 201,
          Fullname : "Md. Towhidul Islam",
          CGPA : 3.50,
          College : "Dhaka College",
          Subject : "Sociology",
          Languages : {
                    Native : "Bangla",
                    Others : "Englis"
          }
          },
          {
          id : 202,
          Fullname : "Md. Anisul Islam",
          CGPA : 3.40,
          College : "Dhaka College",
          Subject : "Sociology",
          Languages : {
                    Native : "Bangla",
                    Others : "Englis"
          }
          },
          {
          id : 203,
          Fullname : "Md. Rafiqul Islam",
          CGPA : 2.90,
          College : "Dhaka College",
          Subject : "Sociology",
          Languages : {
                    Native : "Bangla",
                    Others : "Englis"
          }
          }
]

console.log(studentses.find(x => x.CGPA>3));

// string methods
// startsWith (searchString, position) -> check a string starts with another string
const messagees = "Today is friday";
console.log(messagees.startsWith('Today',0));
// endsWith (searchString, length) -> check a string ends with another string
const messages1 = "Today is friday";
console.log(messages1.endsWith('friday'));
// includes (searchString, position) -> check if a string contains another string
const messages2 = "Today is friday";
console.log(messages2.includes('Today'));
// all these methods are case sensitive

// export (another file)
export let text = "Welcome to module";

export function setText(txt){
          text = txt;
}

// import
import {text, setText} from './myModule.js'
console.log(text);
setText("Goodbye from ES6")
console.log(text);


//class
class Students {
          constructor(id, name){
                    this.id = id;
                    this.name = name;
          }
          set StudentsName(name){
                    this.name = name;
          }
          get StudentssInfo(){
                    return this.id + " " + this.name;
          }


}

let t1 = new Students(101, "Towhidul");
console.log(t1);

t1.StudentsName = "Towhid";
console.log(t1.name);

console.log(t1.StudentssInfo);

// synchronous programming

const taskOne = () =>{
          console.log("Task1");
}
const taskTwo = () =>{
          console.log("Task2. Data Loading");
}
const taskThree = () =>{
          console.log("Task3");
}
const taskFour = () =>{
          console.log("Task4");
}
const taskFive = () =>{
          console.log("Task5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

// Asynchronous programming

const taskOne = () =>{
          console.log("Task1");
}

const dataLoading = () => {
          console.log("Task2. Data Loading")
}

const taskTwo = () =>{
          setTimeout(dataLoading, 1000)
}
const taskThree = () =>{
          console.log("Task3");
}
const taskFour = () =>{
          console.log("Task4");
}
const taskFive = () =>{
          console.log("Task5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();


// callback and higher order function

const taskOne = (callback) =>{
          console.log("Task1");
          callback();
}


const taskTwo = (callback) =>{
          setTimeout(() => {
                    console.log("Task2. Data Loading")
                    callback();
          }, 3000)
}
const taskThree = (callback) =>{
          console.log("Task3")
          callback();
}
const taskFour = (callback) =>{
          console.log("Task4");
          callback()
}
const taskFive = () =>{
          console.log("Task5");
}

taskOne(() =>{
          taskTwo(() =>{
                    taskThree(() =>{
                              taskFour(() =>{
                                        taskFive();
                              })
                    });
          });
});

console.log('hi')
document.querySelector("button").addEventListener('click', () =>{
          console.log("Button is clicked")
})
console.log('bye')



/*
function squares(x){
          console.log(`squares of ${x}: ${x*x}`);
}
squares(10);

// const y = squares;
// y(5);

function higherOrderFunction(num, callback){
          callback(num)
}
higherOrderFunction(5, squares)
*/


// how to create promise

const promise1 = new Promise((resolve, reject) =>{
          let completedPromise = true;
          if(completedPromise){
                    resolve('completed promise 1');
          }else{
                    reject('not completed promise 1');
          }
});

promise1
          .then((res) => {
                    console.log(res);
          })
          .catch((err) => {
                    console.log(err);
          });

// Promise chaining
const taskOne = () => {
          return new Promise((resolve, reject) =>{
                    setTimeout(() => {
                              reject("task 1 is not completed")
                    },3000);
          })
}
const taskTwo = () => {
          return new Promise((resolve, reject) =>{
                    resolve("task 2 is completed")
          })
}
const taskThree = () => {
          return new Promise((resolve, reject) =>{
                    resolve("task 3 is completed")
          })
}
const taskFour = () => {
          return new Promise((resolve, reject) =>{
                    setTimeout(() => {
                              resolve("task 4 is completed")
                    },2000);
          })
}

taskOne()
          .then((res) => console.log(res))
          .then(taskTwo)
          .then((res) => console.log(res))
          .then(taskThree)
          .then((res) => console.log(res))
          .then(taskFour)
          .then((res) => console.log(res))
          .catch(err => console.log(err))

console.log("bye")