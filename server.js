let express = require('express');
let app = express();
//const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//app.use()

app.post('/:company', function(req, res) {
    console.log('Hit!');
    console.log(req.params.company);
    let searchCompany = req.params.company;
    res.send('https://www.linkedin.com/school/prime-digital-academy/people/?keywords=' + searchCompany);
});

app.listen(PORT, function() {
    console.log('listening on port', PORT);
})