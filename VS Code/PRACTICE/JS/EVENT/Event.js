

/* Change event type */

const input = document.querySelector('input[c=search]');
input.addEventListener('change',changeHandler);

function changeHandler(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.value);
}


const programs = document.querySelectorAll('input[name=program]');
console.log(programs);

Array.from(programs).map((program)=>{
    program.addEventListener('change', programHandler)
})

function programHandler(e){
    if(e.target.checked){
        // console.log('checked')
        console.log(e.target.value)
        console.log(e.target.name)
    }
}

const department = document.querySelector('#department');

department.addEventListener('change', handleDepartment);

function handleDepartment(e){
    console.log(e.target.name)
    console.log(e.target.value)
    console.log(e.target.id)
}



//
var textarea = document.querySelector('textarea');
// console.log(textarea);

textarea.addEventListener('change', textareaHandler);

function textareaHandler(e){
    console.log(e.target.id);
}

/* Submit event type */
//finding the elements class--48


/*
    <form action="">
       <div>
        <label for="name">Name : 
            <input type="text" id="name" name="name" size="30" required autofocus>
        </label>
       </div>
       <div>
        <label for="email">Email : 
            <input type="email" id="email" name="email" size="30" required>
        </label>
       </div>
        <div>
            <label for="password">Password : 
                <input type="password" id="password" name="password" required minlength="8" maxlength="12">
            </label>
        </div>
        <div>
            <input type="submit" value="singup">
        </div>
    </form>

*/

const form = document.querySelector('form')
const name = document.querySelector('div #name')
const email = document.querySelector('div #email')
const password = document.querySelector('div #password')

form.addEventListener('submit', formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    console.log(userInfo);

    //for empty

    name.value = '';
    email.value = '';
    password.value = '';
}



/*
Class--49
// audio / video events
//canplay, play, playing, pause, progress, ended, volumechange, waiting

    <video width="400px" controls muted>
        <source src="../VIDEO/Download Microsoft Edge Web Browser.mp4">
    </video>
    <br>
    Your browser does not support html5 video element.

 */

    var video = document.querySelector('video');
    video.addEventListener('canplay', function(){
        console.log('canplay');
    });
    video.addEventListener('pause', function(){
        console.log('pause');
    });
    video.addEventListener('play', function(){
        console.log('play');
    });
    video.addEventListener('playing', function(){
        console.log('playing');
    });
    video.addEventListener('volumechange', function(){
        console.log('volumechange');
    });
    video.addEventListener('ended', function(){
        console.log('Thanks for watching');
    });

//class--50

//load, unload
window.addEventListener('load', function(){
    console.log('load')
});
window.addEventListener('unload', function(){
    console.log('unload')
});
//scroll
window.addEventListener('scroll', function(){
    console.log('scroll');
});
//resize
window.addEventListener('resize', function(){
    // console.log('resize');
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;
    console.log('height: ${height}, width: ${width}');
});
//toggle (work with details)
/*
<details>
        <summary>Towhid</summary>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, alias.</p>
    </details>
 */

const details = document.querySelector('details');
details.addEventListener('toggle', function(e){
    console.log(e.target.open);
    // console.log('thank you for oppening');
});
