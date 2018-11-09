let express = require('express');
let app = express();
//const bodyParser = require('body-parser');

const port = 5000 || process.env.PORT;

//app.use()

app.post('/', function(req, res) {
    console.log('Hit!');
    res.sendStatus(200);
});

app.listen(port, function() {
    console.log('listening on port', port);
})