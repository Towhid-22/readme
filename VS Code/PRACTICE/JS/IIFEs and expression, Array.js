/* <----- One Dimention -----> Class-29 */
//
function highestScore(scores){
    let max = scores[0];
    for(var x=1; x<scores.length; x++){
        if(max < scores[x]){
            max = scores[x]
        }
    }
    return max;
}
let scores = [21,28,1,88,50];
var maxScore =  highestScore(scores);
console.log(maxScore);
//


/* <----- IIFEs and Function Expression (Class-25) */
//IIFEs (Immediately Invokeable Function Expression)
(function towhid2(Bangladesh){
    console.log(Bangladesh);
    document.write(Bangladesh);
})("Dhaka is the capital city of bangladesh")

//Function Expression

const towhid1 = function addition(i, v){
    var sum = i + v;
    console.log(sum);
    document.write(sum + '</br>');
}
towhid1(70, 70);


//Array <----- Class-26 ----->


var names = new Array(10);
names[0] = 'Towhid';
names[1] = 'Riaz';
names[2] = 'Alam';
names[3] = 'Kafil';
names[4] = 'Safiulla';
names[5] = 'Amin';
names[6] = 'Saima';
names[7] = 'Abdullah';
names[8] = 'Al amin';
names[9] = 'Asad';
console.log(names);
document.write(names[9]);
console.log(names.length);


var names = [' Towhid', ' Alam', ' Riaz', ' Kafil', ' Alim', ' Asad'];
names.push('Tawhid'); //For insert
names.pop(); //For remove
console.log(names);
console.log(names.length);
document.write(names.length);
document.write(names);

var country1 = ['Bangladesh', 'Nepal', 'India'];
var country2 = ['Srilanka', 'Pakistan', 'Afganistan'];

var country = country1.concat(country2); // For add variable or let
console.log(country);
document.write(country);
document.write(country.length);

/* <----- Array Loop -----> (class- 27) */

var num = [10, 20, 30, 40, 50];
var sum = 0;
for(var i = 0; i < 5; i++){
    console.log(num[i]);
    sum = sum + num[i];

}
console.log('Sum = ' + sum);
document.write('Sum = ' + sum);

//


var num = new Array();
for(var x = 0; x < 5; x = x + 1){
    num[x] = parseInt(prompt('Enter Your Number'));
}
var sum = 0;
for(var x = 0; x < 5; x = x + 1){
    console.log(num[x]);
    sum = sum + num[x];
}
console.log('Sum = ' + sum);
document.write(sum);

/* <----- Array Methods -----> (Class - 28) */

//using splice for element remove and add

//Number sort

var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a,b){
    return a-b;
});
console.log(numbers);
var numbers = [20, 5, 25, 45, 1];
numbers.sort(function(a,b){
    return b-a;
});
console.log(numbers);

//Alphabet sort

var names = ['a', 'c', 'd', 'x', 'z'];
var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);
console.log(names);

//
var names = ['Towhid', 'Riaz', ' Kafil', 'Halim', 'Towhid2', 'Riaz2', ' Kafil2', 'Halim2'];
var newArray = names.slice(2, 5);
console.log(newArray);
console.log(names);

//
var names = ['Towhid', 'Riaz', ' Kafil', 'Halim', 'Towhid', 'Riaz', ' Kafil', 'Halim'];
names.splice(0, 5);
console.log(names);

//
var names = ['Towhid', 'Riaz', ' Kafil', 'Halim', 'Towhid', 'Riaz', ' Kafil', 'Halim'];
names.splice(7, 0, ' Asdf', 'Jklk'); // for add and remove(to last) element in the middle of the line
console.log(names);



//
var names = ['Towhid', 'Riaz', ' Kafil', 'Halim'];
names.push('Alam'); // for add last
console.log(names);
names.unshift('Asad'); // for add first
console.log(names);
names.pop(); // for remove to last
console.log(names);
names.shift(); // for remove to first
console.log(names);