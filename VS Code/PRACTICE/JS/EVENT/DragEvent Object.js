// DragEvent Object
// 1. ondragstart
// 2. ondrag
// 3. ondragend
// 4. ondragenter
// 5. ondragleave
// 6. ondragover
// 7. ondrop

const div = document.querySelector('div');
const p = document.querySelector('p');
p.addEventListener('dragstart', function(e){
    // console.log('dragstart');
    e.dataTransfer.setData('Text', e.target.id);
});

div.addEventListener('dragover', function(e){
    e.preventDefault();
});

div.addEventListener('drop', function(e){
    var data = e.dataTransfer.getData('Text');
    console.log(data);
    div.appendChild(document.getElementById(data));
    e.preventDefault();
});


//    <div id="div1"></div>
/* <p id="drag1" draggable="true">Lorem ipsum dolor sit amet.</p> */