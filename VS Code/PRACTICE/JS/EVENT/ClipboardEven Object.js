// ClipboardEvent Object
// oncopy
// oncut
// onpaste

const input = document.querySelector('input');
const p = document.querySelector('p');
input.addEventListener('copy', function(){
    p.innerHTML = 'copy is occured';
    // console.log('copy is occured');
});
input.addEventListener('cut', function(){
    p.innerText = 'cut is occured';
    // console.log('cut is occured');
});
input.addEventListener('paste', function(){
    p.innerText = 'paste is occured';
    console.log('paste is occured');
});

//<input type="text" name="" id="">
//<p></p>
