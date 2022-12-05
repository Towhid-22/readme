//Date: 04/04/2022

/* <----- Function -----> (Class-24)*/

function towhid1(){
    var num7 = 8;
    var result0 = num7 * num7;
    document.write('Result0 : ' + result0 + '</br>');
}
towhid1();
//
function towhid(num1, num2){
    var result = num1 + num2;
    document.write('Result : ' + result + '</br>');
}
towhid(1000, 5000);
//
function dhaka(num3, num4){
    var result2 = num3 - num4;
    document.write('Result2 : ' + result2 + '</br>');
}
dhaka(5000, 3000);
//
function towhid2(num1, num2){
    var result3 = num1 * num2;
    document.write('Result3 : ' + result3 + '</br>');
}
towhid2(450, 38);
towhid2(4, 40);
//
function towhid3(num8, num9){
    var result4 = num8 % num9;
    document.write('Result4 : ' + result4);
}
towhid(1000, 10);


/* <----- ternary operator -----> (Class-23)*/
var num1 = Number(prompt('Enter a Number : '));
var num2 = Number(prompt('Enter a Number : '));
var num3 = Number(prompt('Enter a Number : '));

var result = num1>num2 && num1>num3 ? 'num1': num2>num1 && num2>num3 ?'num2':'num3';
console.log(result);
//
var number = Number(prompt('Enter your number'));
var result = number>0 ? 'Positive' : number<0 ? 'Negative' : 'zero';
console.log(result);
//
var result = number > 0 ? console.log('Positive') : console.log('Negative');
//
var result = number > 0 ? 'Positive' : 'Negative'
console.log(result);

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