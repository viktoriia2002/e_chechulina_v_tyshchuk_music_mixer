
const list_icons = document.querySelectorAll('.icon');
const dropZones = document.querySelectorAll('.dropZone');

let draggedIcon = null;

for (let i = 0; i < list_icons.length; i++) {
const icon = list_icons[i];

icon.addEventListener('dragstart', function () {
draggedIcon = icon;

icon.style.display = 'block';	
});

icon.addEventListener('dragend', function () {

draggedIcon.style.position = 'absolute';
draggedIcon = null;
})

for (let j = 0; j < dropZones.length; j++ ) {
const dropZone = dropZones[j];

dropZone.addEventListener('dragover', function (e) {
e.preventDefault();
console.log("drag over me!")
});

dropZone.addEventListener('dragenter', function (e) {
e.preventDefault();
});

dropZone.addEventListener('dragleave', function (e) {
});

dropZone.addEventListener('drop', function (e) {
console.log('drop');
this.append(draggedIcon);


});
}
}
// audio starts here

var button1 = document.getElementById ('button1');
var turnOn = false;
button1.loop = true;
function buttonOne(){
  if(turnOn){
    button1.pause()
  }
  else{
    button1.play();
  }
};

button1.onplaying = function (){
  turnOn = true;
};

button1.onpause = function (){
  turnOn = false;
};



var button2 = document.getElementById ('button2');
var turnOn2 = false;
button2.loop = true;
function buttonTwo(){
  if(turnOn2){
    button2.pause()
  }
  else{
    button2.play();
  }
};

button2.onplaying = function (){
  turnOn2 = true;
};

button2.onpause = function (){
turnOn2 = false;
};



var button3 = document.getElementById ('button3');
var turnOn3 = false;
button3.loop = true;
function buttonThree(){
  if(turnOn3){
    button3.pause()
  }
  else{
    button3.play();
  }
};

button3.onplaying = function (){
  turnOn3 = true;
};

button3.onpause = function (){
  turnOn3 = false;
};




var button4 = document.getElementById ('button4');
var turnOn4 = false;
button4.loop = true;
function buttonFour(){
  if(turnOn4){
    button4.pause()
  }
  else{
    button4.play();
  }
};

button4.onplaying = function (){
  turnOn4 = true;
};

button4.onpause = function (){
  turnOn4 = false;
};





var button5 = document.getElementById ('button5');
var turnOn5 = false;
button5.loop = true;
function buttonFive(){
  if(turnOn5){
    button5.pause()
  }
  else{
    button5.play();
  }
};

button5.onplaying = function (){
  turnOn5 = true;
};

button5.onpause = function (){
  turnOn5 = false;
};



var button6 = document.getElementById ('button6');
var turnOn6 = false;
button6.loop = true;
function buttonSix(){
  if(turnOn6){
    button6.pause()
  }
  else{
    button6.play();
  }
};

button6.onplaying = function (){
  turnOn6 = true;
};

button6.onpause = function (){
  turnOn6 = false;
};



var button7 = document.getElementById ('button7');
var turnOn7 = false;
button7.loop = true;
function buttonSeven(){
  if(turnOn7){
    button7.pause()
  }
  else{
    button7.play();
  }
};

button7.onplaying = function (){
  turnOn7 = true;
};

button7.onpause = function (){
  turnOn7 = false;
};




var button8 = document.getElementById ('button8');
var turnOn8 = false;
button8.loop = true;
function buttonEight(){
  if(turnOn8){
    button8.pause()
  }
  else{
    button8.play();
  }
};

button8.onplaying = function (){
  turnOn8 = true;
};

button8.onpause = function (){
  turnOn8 = false;
};
