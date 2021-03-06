var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title: "PRACTISING THE P4" ,
    heading: "PHANINDRA KOKA | AVIT COLLEGE" ,
    date:"Aug 12 , 2017",
    content:
    ` <p>
                    Enjoyed a lot at the vgp universal kingdom and that was another best day of my life and i would expect more of such days ahead.
                </p>
                <p>
                    this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.
                </p>
                <p>
                    this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.this is my first practical.
                </p>`
    },
    'article-two' :{ 
    title: "PRACTISING THE ARTICLE TWO" ,
    heading: "PHANINDRA KOKA | AVIT COLLEGE" ,
    date:"Aug 4 , 2017",
    content:
    ` <p>
      Enjoyed a lot at KINGS COLLEGE !
      </p>`
                  },
    'article-three':{ 
    title: "PRACTISING THE ARTICLE THREE" ,
    heading: "PHANINDRA KOKA | AVIT COLLEGE" ,
    date:"Jul19 , 2017",
    content:
    ` <p>
         cried a lot on the first day of my college cuz of my bae !
      </p>`
    }
    
};

function createTemplate (data) {
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate =
    `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
             <link href="/ui/style.css" rel="stylesheet" />
           
        </head>
        <body>
            <div class="container">
                <div>
                    <a href='/'>Home</a>
                </div>
                <hr/>
                <div>
                <h5>
                   ${heading}
                </h5>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                   ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1 ;
    res.send(counter . toString());
});
var names=[];
app.get('/submit-name',function (req, res) {
    //get the name frome the request 
    var name = req.query.name;
    
    names.push(name);
    //JSON: javascript object notation
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/maain.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'maain.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
