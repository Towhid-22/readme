//<---------- do while loop ---------->
var x = 1;
var sum = 0;
do{
    if(x%5==0 && x%10==0){
        document.write(' ' + x);
        sum = sum + x;
    }
    // document.write(' ' + x);
    x++;
} while(x <= 100);
document.write(' Result = ' + sum);



// <---------- While loop ---------->

var x = 1;
var sum = 0;
while(x <= 100){
    if(x%10==0 && x%20==0){
        document.write(' ' + x);
        sum = sum + x;
    }
    if(x%4==0 && x%8==0){
        document.write(' ' + x);
        sum = sum + x;
    }
    x = x + 1;
}
document.write(' Result = ' + sum)
//

var num1 = parseFloat(prompt('Enter 1st Number : '));
var num2 = parseFloat(prompt('Enter 2nd Number : '));
var sum = 0;
var x = num1;
while(x <= num2){
    sum = sum + x;
    x = x + 1;
}
document.write(sum);


var f = 1;
var sum = 0;
while(f <= 100){
    sum = sum + f;
    f = f + 1;
}
document.write('Result = ' + sum);

// Even
var n = 2;
while(n <= 100){
    document.write(' ' + n);
    n = n + 2;
}

// Odd
var m = 1;
while(m <= 100){
    document.write(' ' + m);
    m = m + 2;
}

var i = 100;
while(i >= 1){
    document.write(' ' + i);
    i = i - 1;
}

var x = 1;
while(x <= 100){
    document.write(' ' + x);
    x = x + 1;
}

/* <---------- for loop ----------> */

for(var x = 1; x <= 5; x++){
    var num1 = parseFloat(prompt('Enter First Number'));
    var num2 = parseFloat(prompt('Enter Second Number'));
    var sum = num1 + num2;
    console.log(sum);
}


var num1 = parseFloat(prompt('Enter First Number : '));
var num2 = parseFloat(prompt('Enter Second Number : '));
var sum = 0;
for(var x = num1; x <= num2; x = x + 1){
    sum = sum + x;
}
document.write('Result ' + sum);

for(var x = 1; x <= 100; x = x + 2){
    document.write(' ' + x);
}

for(var x = 2; x <= 100; x = x + 2){
    document.write(' ' + x);
}

for(var x = 10; x >= 1; x = x - 1){
    document.write(' ' + x);
}

for(var x = 1; x <= 10; x = x + 1){
    document.write(' ' + x);
}

var m = parseInt(prompt('Enter First Number : '));
var n = parseInt(prompt('Enter Last Number : '));
var sum = 0;

for(var x = m; x <= n; x++){
    sum = sum + x;
}
document.write(sum);

for(var x = 1; x <= 5; x = x + 1){
    var num1 = parseFloat(prompt('Enter First Number : '));
    var num2 = parseFloat(prompt('Enter Second Number : '));
    var sum = num1 + num2;
    console.log('Result = ' + sum);
}