const express = require('express');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "html")
nunjucks.configure(__dirname + "/views", {
    express:app
})

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/express', (request, response) => {
    let name = request.query.name;
    console.log(request.query);
    response.render("index.html", {
        user: name
    });
});

app.post('/express', (request, response) => {
    console.log(request.body)
    response.send("<h1>Post 방식의 요청입니다.</h1>");
});

app.listen(52275, () => {
    console.log('Server running at http://127.0.0.1:52275');
});

