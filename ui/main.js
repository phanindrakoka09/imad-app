console.log('Loaded!');

//change the content of main-text

var element = document.getElementById("main-text"

);

element.innerHTML = 'hai this is done using the javascript';

//move the image code

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 5 ;
    img.style.marginLeft = marginLeft + 'px' ;
}
img.onclick = function (){
    var interval = setInterval(moveRight, 50);
};