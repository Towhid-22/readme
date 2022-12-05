for(var x=0; x<3; x++){
    document.querySelectorAll('.myButton')[x].addEventListener('click', function(){
        var text = this.innerHTML;
        console.log(text);

        switch(text){
            case 'Button 1':
                var audio = new Audio('../SOUNDS/Malik.mp3');
                audio.play();
                break;
        }
        switch(text){
            case 'Button 2':
                var audio = new Audio('../SOUNDS/Sunnat.mp3');
                audio.play();
                break;
        }
        switch(text){
            case 'Button 3':
                var audio = new Audio('../SOUNDS/Tomar Name.mp3');
                audio.play();
                break;
        }
    })
}
//
for(var x=0; x<3; x++){
    document.querySelectorAll('.myButton')[x].addEventListener('click', function(){
        var text = this.innerHTML;
        audioPlay(text);
        console.log(text);
    })
}
function audioPlay(text){
    switch(text){
        case 'Button 1':
            var audio = new Audio('../SOUNDS/Malik.mp3');
            audio.play();
            break;
    }
    switch(text){
        case 'Button 2':
            var audio = new Audio('../SOUNDS/Sunnat.mp3');
            audio.play();
            break;
    }
    switch(text){
        case 'Button 3':
            var audio = new Audio('../SOUNDS/Tomar Name.mp3');
            audio.play();
            break;
    }
}

//



for(var x=0; x<3; x++){
    document.querySelectorAll('.myButton')[x].addEventListener('click', function(){
        var text = this.innerHTML;
        audioPlay(text);
        playAnimation(text);
        // console.log(text);
    })
}
function audioPlay(text){
    switch(text){
        case 'Button1':
            var audio = new Audio('../SOUNDS/Malik.mp3');
            audio.play();
            break;

        case 'Button2':
            var audio = new Audio('../SOUNDS/Sunnat.mp3');
            audio.play();
            break;

        case 'Button3':
            var audio = new Audio('../SOUNDS/Tomar Name.mp3');
            audio.play();
    }
}

function playAnimation(text){
    var selectedButton = document.querySelector('.' + text);
    selectedButton.classList.add('anim');

    setTimeout(function(){
        selectedButton.classList.remove('anim');
    },1000);
}

