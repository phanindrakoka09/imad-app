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
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
};
var names = ['name1','name2','name3'];
var list = '';
for (var i=0; i< names.length; i++){
    list+='<li>' + names[li] + '</li>' ;
    }
    var ul =document.getElementById('namelist');
    ul.innerHTML=list;
};