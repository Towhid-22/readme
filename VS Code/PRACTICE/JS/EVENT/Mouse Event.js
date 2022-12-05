//MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

console.clear();
const div = document.querySelector('div');
div.addEventListener('click', function(e){
    console.log('this is click');
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.class);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
    console.log(e.target.textContent);
});

div.addEventListener('dblclick', function(){
    console.log('this is dblclick');
});

div.addEventListener('mousedown', function(){
    console.log('this is mousedown');
});
div.addEventListener('mouseup', function(){
    console.log('this is mouseup');
});
div.addEventListener('mouseenter', function(){
    console.log('this is mouseenter');
});
div.addEventListener('mouseleave', function(){
    console.log('this is mouseleave');
});
div.addEventListener('mousemove', function(e){
    // console.log('this is mousemove');
    // console.log('clienX = '+ e.clientX + ', clientY = ' + e.clientY);
    console.log('offsetX = '+ e.offsetX + ', offsetY = ' + e.offsetY); //for div
});
div.addEventListener('mouseover', function(){
    console.log('this is mouseover');
});

const button = document.querySelectorAll('.btn');

Array.from(button).map((button) => {
    button.addEventListener('click', function(e){
        // console.log('clicked');
        console.log(e.target.innerText);
    });
});

/*
    <div id="my-div" class="my-class">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

    <button class="btn">Button1</button>
    <button class="btn">Button2</button>
    <button class="btn">Button3</button>
    </div>

*/