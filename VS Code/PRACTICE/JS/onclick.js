//image slider
/*     <button onclick="preve()">previous</button>
    <img src="../MEDIA/Doler 1.jpg" alt="" height="300" width="300">
    <button onclick="next()">next</button>
 */
var photo = ['../MEDIA/Computer 1.jpg', '../MEDIA/Computer 2.png', '../MEDIA/Computer 3.png', '../MEDIA/Computer 4.png', '../MEDIA/Computer.jpg'];
var findImage = document.querySelector('img');
var count = 0;

function next(){
    count++;
    if(count>=photo.length){
        count = 0;
        findImage.src = photo[count];
    }
    else{
        findImage.src = photo[count];
    }
}

function preve(){
    count--;
    if(count<0){
        count = photo.length-1;
        findImage.src = photo[count];
    }
    else{
        findImage.src = photo[count];
    }
}

//image
var myVar = document.querySelector('#myImageId');
function myPicture1(){
    myVar.src = '../MEDIA/Computer 1.jpg';
    
}

function myPicture2(){
    myVar.src = '../MEDIA/Computer 2.png';
}

//
var myVar = document.querySelector('#para');
function myMessage1(){
    myVar.innerHTML = '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolores nesciunt, laboriosam, voluptate doloribus blanditiis harum aspernatur eveniet aperiam cupiditate architecto fugit non deleniti reprehenderit beatae! At fugit eius eligendi!';
}

function myMessage2(){
    myVar.innerHTML = '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum culpa corporis soluta deserunt exercitationem. Quod delectus magnam est ab fugiat, illum tenetur voluptates illo debitis laudantium commodi dolorum laborum, repudiandae rem. Enim cum molestiae consequuntur accusantium atque porro tempore dolores provident eum facilis mollitia tenetur, incidunt velit rerum in.';
}

//
function myMessage1(){
    var myVar = document.querySelector('#para');
    myVar.innerHTML = '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolores nesciunt, laboriosam, voluptate doloribus blanditiis harum aspernatur eveniet aperiam cupiditate architecto fugit non deleniti reprehenderit beatae! At fugit eius eligendi!';
}

function myMessage2(){
    var myVar2 = document.querySelector('#para');
    myVar2.innerHTML = '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum culpa corporis soluta deserunt exercitationem. Quod delectus magnam est ab fugiat, illum tenetur voluptates illo debitis laudantium commodi dolorum laborum, repudiandae rem. Enim cum molestiae consequuntur accusantium atque porro tempore dolores provident eum facilis mollitia tenetur, incidunt velit rerum in.';
}
