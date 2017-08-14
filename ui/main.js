console.log('Loaded!');

//change the content of main-text

var element = document.getElementById("main-text"

);

element.innerHTML = 'hai this is done using the javascript';

var img = document.getElementById('madi');
function moveRight () {
    marginLeft = mariginLeft + 10;
    img.style.marginLeft=marginLeft + px ;
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
 
};