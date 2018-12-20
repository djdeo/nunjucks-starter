const express =  require('express');
const nunjucks =  require('nunjucks');
const app =  express();

const PATH_TO_TEMPLATES = '.';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
});

app.get('/', function (req, res) {
    var data = {
        firstName: 'John',
        lastName: 'Doe'
    };
    return res.render('index.html', data);
});
app.listen(3000);