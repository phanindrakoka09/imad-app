//counter code 
var button = document.getElementById('counter');
button.onclick = function (){
  
  //make a request to the counter end point
  var request = new XMLHttpRequest();
  
  
  //capture the response and stroe it in a variable
  request.onreadystatechange = function (){
      if(request.readystate === XMLHttpRequest.DONE){
          //take some action
          if (request.data === 200) {
              var counter = request.responseText;
              var span =  document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      }
      // not done yet 
  };
  
  //make the request 
  request.open('GET', 'http://phanindrakoka.imad.hasura-app.io/counter',true);
  request.send(null);
};