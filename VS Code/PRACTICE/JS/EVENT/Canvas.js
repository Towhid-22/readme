var c = document.getElementById("myCanvas");

var x = c.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 380, 280);


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = canvas.width;
ctx.transform(1, 0, 0, -1, 0, canvas.height)

const xArray = [50,60,70,80,90,100,110,120,130,140];
const yArray = [7,8,8,9,9,9,10,11,14,14];

ctx.fillStyle = "green";
for (let i = 0; i < xArray.length -1; i++) {
  let x = xArray[i]*400/150;
  let y = yArray[i]*400/15;
  ctx.beginPath();
  ctx.ellipse(x, y, 3, 3, 0, 0, Math.PI * 2);
  ctx.fill();
}





/*
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = 'black';
ctx.strokeRect(10,10,380,280);


ctx.fillStyle = 'green';
ctx.fillRect(12,12,376,276);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,50,0,2*Math.PI,false);
ctx.fillStyle = 'red';
ctx.stroke();
ctx.fill();
*/