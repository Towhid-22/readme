//Guessing Game
var numofWon = 0;
var numofLost = 0;

for(var x=1; x<=5; x++){
    var guessNumber = parseInt(prompt('Enter a number from 1 to 5 : '));
    var randomNumber = Math.floor(Math.random()*5) + 1;
    if(guessNumber==randomNumber){
        console.log('You Have Won. Random number was ' + randomNumber);
        numofWon++;
    }
    else{
        console.log('You Have Lost. Random number was ' + randomNumber);
        numofLost++;
    }
}
document.write('Number of Won = ' + numofWon + '</br>');
document.write('Number of Lost = ' + numofLost + '</br>');

//Adding function inside a constructor
function Student(name,age,cgpa,lang,insti,session){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.insti = insti;
    this.session = session;

    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
        console.log(this.insti);
        console.log(this.session);
    }
}

var student1 = new Student('Md. Towhidul Islam',28,3.40,['English','Bengali','Hindi'],'Dhaka Collage','2008-2010');
var student2 = new Student('Md. Reazul Haque',30,3.50,['English','Bengali','Urdu'],'Titumir Collage','2006-2008');
var student3 = new Student('Md. Roich Uddin',22,3.70,['English','Bengali','Chinese'],'Bangla Collage','2010-2012');
var student4 = new Student('Md. Aminul Islam',20,3.80,['English','Bengali','Spanish'],'Tongi Collage','2012-2014');

student1.display();
student2.display();
student3.display();
student4.display();

//Constructor
function Student(name,age,cgpa,lang,insti,session){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;
    this.insti = insti;
    this.session = session;
}

var student1 = new Student('Md. Towhidul Islam',30,3.40,['English','Bengali','Hindi'],'Dhaka Collage',2010-2012);

console.log(student1.name);

//Simple Object
var student1 = {
    name : 'Md. Towhidul Islam',
    age : 30,
    cgpa : 4.00,
    lang : ['English','Bengali','Hindi'],
    insti : 'Dhaka Collage'
}

console.log(student1.name);
