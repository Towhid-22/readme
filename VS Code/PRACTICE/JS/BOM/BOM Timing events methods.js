// BOM
// JS Timing events methods
// setTimeOut(), setInterval()

setTimeout(() => {
    console.log('hi');
}, 2000);

//setTimeout() method
setTimeout(display, 2000);
function display(){
    console.log('display function');
}

const saveButton1 = document.querySelector('.save-btn');
const message1 = document.querySelector('.message');

saveButton1.addEventListener('click', saveUser);

function saveUser(){
    message1.textContent = 'User registration successful';
    setTimeout(()=>{
        message1.textContent = '';
    }, 5000);
}

//setInterval() method
const saveButton = document.querySelector('.save-btn');
const message = document.querySelector('.message');

saveButton.addEventListener('click', displayCount);
function displayCount(){
    let count = 0;
    message.textContent = count;

    setInterval(()=>{
        count++;
        message.textContent = count;
    }, 1000);
}

////
const saveButton2 = document.querySelector('.save-btn');
const message2 = document.querySelector('.message');

saveButton2.addEventListener('click', startClock);

function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let second = date.getSeconds();

    minutes = formatTime(minutes);
    second = formatTime(second);

    let time = hours + ':' + minutes + ':' + second;

    message.textContent = time;

    setInterval(startClock, 1000);

}

function formatTime(value){
    if(value <10){
        value = '0' + value;
    }
    return value;
}

/*
<button class="save-btn">Save</button>
    <p class="message"></p>
*/