//counter code 
var button = document.getElementBtId('counter');
var counter = 0;
button.onclick = function (){
  
  //make a request to the counter end point
  
  //capture the response and stroe it in a variable
  
  //render the variable in the correct span
  counter = counter + 1;
  var span =  document.getElementBtId('count');
  span.innerHTML = counter .toString();
    
};
