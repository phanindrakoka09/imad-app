//counter code 
var button = document.getElementById('counter');

button.onclick = function (){
  //make a request to the counter end point
   var request = new XMLHttpRequest();
  
  
  //capture the response and stroe it in a variable
  request.onreadystatechange = function (){
      if(request.readystate === XMLHttpRequest.DONE){
          //take some action
          if (request.status === 200) {
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
// capture the name 

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the counter end point
   var request = new XMLHttpRequest();
  
  
  //capture the response and stroe it in a variable
  request.onreadystatechange = function (){
      if(request.readystate === XMLHttpRequest.DONE){
          //take some action
          if (request.status === 200) {
              //capture a list of names 
    var names = request.responseText;
    name = JSON.parse(names);
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>' ;
        }
        var ul =document.getElementById('namelist');
        ul.innerHTML=list;
          }
      }
      // not done yet 
  };
  
  //make the request 
  request.open('GET', 'http://phanindrakoka.imad.hasura-app.io/submit-name?name=' +name,true);
  request.send(null);
  var nameInput = document.getElementById('name');  
  var name = nameInput.value;
    
    //capture a list of names 
    var names = ['name1','name2','name3','name 4'];
    var list = '';
    for (var i=0; i< names.length; i++) {
        list += '<li>' + names[i] + '</li>' ;
        }
        var ul =document.getElementById('namelist');
        ul.innerHTML=list;
};