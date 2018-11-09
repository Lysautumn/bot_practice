let express = require('express');
let app = express();
//const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000;

//app.use()

app.post('/', function(req, res) {
    console.log('Hit!');
    res.sendStatus(200);
});

app.listen(PORT, function() {
    console.log('listening on port', port);
})