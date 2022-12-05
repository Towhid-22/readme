//Event Listeners with multiple elements
document.querySelectorAll('.myButton')[0].addEventListener('click', function (){
    var text = this.innerHTML;
    document.querySelector('h1').innerHTML = text + 'is clicked';
});

//with for loop
for(var i = 0; i < 3; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function (){
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + 'is clicked';
    })
    
};

//
var len = document.querySelectorAll('.myButton').length;
for(var i = 0; i < len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function (){
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + 'is clicked';
    })
    
};

//
var len = document.querySelectorAll('.myButton').length;
for(var i = 0; i < len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('mouseover', function (){
        var text = this.innerHTML;
        document.querySelector('h1').innerHTML = text + 'is clicked';
        document.classList.add('para-style');
    })  
};



//<------Event Listener 'mouseover and mouseout'------>
var towhid = document.querySelector('h1');
towhid.addEventListener('mouseover', function(){
    towhid.classList.add('para-style');

})
towhid.addEventListener('mouseout', function(){
    towhid.classList.remove('para-style');

})

//<------Event Listener 'click'------>
document.querySelector('button').addEventListener("click", myFunction);
function myFunction(){
    alert('hello')
}

//
document.querySelector('button').addEventListener('click', function myFunction(){
    alert('hello');
})


//This is anonymous function
document.querySelector('button').addEventListener('click', function (){
    alert('hello');
})

//<------style remove or add method------>
//remove style
/*

    <p id="paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ut quae aliquid obcaecati quibusdam illo?</p>
    <button onclick="addStyle()">Add Style</button>
    <button onclick="removeStyle()">Remove Style</button>

//this is css style
.para-style{
    color: red;
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
}
*/

function removestyle(){
    var myVar = document.querySelector('#para');
    myVar.classList.remove('para-style');
}

//add style
/*
//this is css style
.para-style{
    color: red;
    font-size: 3rem;
    font-weight: bold;
    font-style: italic;
    text-align: center;
}
*/

function addstyle(){
    var myVar = document.querySelector('#para');
    myVar.classList.add('para-style');
}


//
function addstyle(){
    var myVar = document.querySelector('#para');
    myVar.style.color = 'red';
    myVar.style.fontSize = '3rem';
    myVar.style.fontWeight = 'bold';
    myVar.style.fontStyle = 'italic';
}