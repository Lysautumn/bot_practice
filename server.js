let express = require('express');
let app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//app.use()
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    console.log('Hit!');
    console.log(req.body);
    //res.sendStatus(200);
    let search = req.body.text;
    let searchCompany = search.replace(/\s/g, '%20');
    res.send('https://www.linkedin.com/school/prime-digital-academy/people/?keywords=' + searchCompany);
});

app.listen(PORT, function() {
    console.log('listening on port', PORT);
})