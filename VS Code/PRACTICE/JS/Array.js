//One dimentional array

function highestScore(scores){
    let max = [0];
    for(var x=1; x<scores.length; x++){
        if(max < scores[x]){
            max = scores[x];
        }
    }
    return max;
}
let scores = [80, 90, 70, 40, 30, 35];
var maxScore = highestScore(scores);
console.log(maxScore);


//number sorting method
var numbers =[50,80,60,70,10,90,85];
console.log(numbers);
numbers.sort(function(a,b){
    return a+b;
});
console.log(numbers);
var numbers =[50,80,60,70,10,90,85];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);

//reverse method
var names =['anis','towhid','kafil','reaz','sakib','rakib'];
console.log(names);
var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);

//sort method
var names =['towhid','kafil','reaz','sakib','rakib'];
console.log(names);
var sortedNames = names.sort();
console.log(sortedNames);

//slice method
var names =['towhid','kafil','reaz','sakib','rakib'];
console.log(names);
var newArray = names.slice(1,4);
console.log(newArray);
console.log(names);

//Arry loop from user input
var num = new Array();
var sum = 0;
for(var x = 0; x <6; x++){
    num[x] = parseInt(prompt('Enter Your Number'));
    console.log(num[x]);
    sum = sum + num[x];
}
console.log('Result = ' + sum);

//Array Loop
var num = [40,50,60,70,80,90];
var sum = 0;
for(var x = 0; x <6; x++){

    console.log(num[x]);
    sum = sum + num[x];
}
console.log('Result = ' + sum);

//Concat
var names = ['Towhid', 'Kafil', 'Sha Alam', 'Reaz', 'Roich'];
var names2 = ['Towhid2', 'Kafil2', 'Sha Alam3', 'Reaz4', 'Roich5'];
var name1 = names.concat(names2);
console.log(name1);

//
var names = ['Towhid', 'Kafil', 'Sha Alam', 'Reaz', 'Roich', 10+20];
names.push('Sakib');
names.pop();
console.log(names);

//
var names = ['Towhid', 'Kafil', 'Sha Alam', 'Reaz', 'Roich', 10+20];
console.log(names[5]);

//
var names = ['Towhid', 'Kafil', 'Sha Alam', 'Reaz', 'Roich'];
console.log(names);

//
var names = new Array();
names[0] = 'Towhid';
names[1] = 'Kafil';
names[2] = 'Sha Alam';
names[3] = 'Reaz';
names[4] = 'Roich';
console.log(names.length);

//
var names = new Array(5);
names[0] = 'Towhid';
names[1] = 'Kafil';
names[2] = 'Sha Alam';
names[3] = 'Reaz';
names[4] = 'Roich';
console.log(names);

//
var names = new Array(5);
names[0] = 'Towhid';
names[1] = 'Kafil';
names[2] = 'Sha Alam';
names[3] = 'Reaz';
names[4] = 'Roich';
console.log(names[0]);

/* 
names.splice(2,0,'30','40'); for value add or remove
names.splice(2,3); for value remove
names.push('Sakib'); // শেষের দিক থেকে Value Add করার জন্য Push ব্যবহার করা হয়।
names.unshift('20'); প্রথম দিক থেকে Value Add করার জন্য।
names.pop(); // Value Remove করার জন্য pop ব্যবহার করা হয়। 
names.shift(); প্রথম দিক থেকে Value Remove করেG
var name1 = names.concat(names2); একটি Arry এর সাথে অন্য আরেকটি Arry যুক্ত করার জন্য concat ব্যবহার করা হয়।

*/