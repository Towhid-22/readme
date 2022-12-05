//if, else if, else, for, while, do while
var i = 10;
do{
    document.write(' ' + i);
    i--;
}while(i >= 1);
//
var i = 1;
do{
    document.write(' ' + i);
    i++;
}while(i <= 10);
//
var i = 1;
var sum = 0;
while(i <= 100){
    if(i%3 == 0 && i%5 == 0){
        document.write(' ' + i + ' ');
        sum = sum + i;
    }
    i = i + 1;
}
document.write(sum + ' ');
//
var i = 2;
var sum = 0;
while(i <=10){
    sum = sum + i;
    i = i + 1;
}
document.write(sum);
//
var i = 2;
while(i <= 20){
    document.write(' ' + i);
    i = i + 2;
}
//
var sum = 0;
for(var x = 2; x <= 5; x = x + 1)
{
    sum = sum + x;
}
document.write('Sum = ' + sum + ' ');
//
for(var x = 10; x >= 1; x = x - 1)
{
    document.write('( ' + x + ' )');
}
//
for(var x = 1; x <= 100; x = x + 1)
{
    document.write(' ' + x);
}
document.write('End');

//Vowel and consonant

var letter = prompt('Letter ');
letter = letter.toLowerCase();
switch(letter){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('vowel');
        break;
    default:
        console.log('consonant');
}

var letter2 = prompt('Enter letter : ');

letter2 = letter2.toLowerCase();

if(letter2 == 'a' || letter2 == 'e' || letter2 == 'i' || letter2 == 'o' || letter2 == 'u')
    console.log('Vowel');
else
    console.log('Consonant');

//Marks distribution

var marks = prompt('Enter your marks');

if(marks >= 100 || marks <= 0)
    console.log('Invalid marks');

else if(marks >= 80 && marks <= 100)
    console.log('A+');
else if(marks >= 70 && marks <= 79)
    console.log('A');
else if(marks >= 60 && marks <= 69)
    console.log('A-');
else if(marks >= 50 && marks <= 59)
    console.log('B');
else if(marks >= 40 && marks <= 49)
    console.log('C');
else if(marks >= 33 && marks <= 39)
    console.log('D');
else
    console.log('Fail');