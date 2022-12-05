// BOM
// popup boxes - alert, confirm, prompt

function deleteSomething(){
    let value = confirm('Are you sure delete?');
    if(value){
        console.log('Deleted');
    }
    else{
        console.log('Not deleted');
    }
};

deleteSomething();

////
function welcomeMessage(){
    var h1 = document.createElement('h1');
    let text;

    var name = prompt('Enter Your Name:');
    if(name == null || name == ''){
        text = 'no name found';
    }
    else{
        text = 'Name';
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
};
welcomeMessage();

/* 
   <h1>BOM</h1>
   <div class="location-div">
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
   </div>

   <button id="visit">Visit My Website</button>
*/