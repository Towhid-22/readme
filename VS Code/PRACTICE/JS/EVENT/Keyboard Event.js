// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. Keypress (may not supported by some browsers)
// 3. Keyup
// 4. Some properties - key, keyCode, code, shiftKey, ctKey, repeat

// const textarea = document.querySelector('textarea');
//keydown and repeat
textarea.addEventListener('keydown', function(e){
    // console.log('keydown');
    if(e.repeat){
        console.log('do not repeat');
        alert('do not repeat')
    }
});
//keypress
textarea.addEventListener('keypress', function(){
    console.log('keypress');
});

//keyCode
textarea.addEventListener('keyup', function(e){
    console.log(e.keyCode);
});
//Code
textarea.addEventListener('keyup', function(e){
    console.log(e.code);
});
//shiftKey
textarea.addEventListener('keyup', function(e){
    // console.log(e.shiftKey);
    if(e.shiftKey){
        console.log('Shift + ' + e.key);
    }
});