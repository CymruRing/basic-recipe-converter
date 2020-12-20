const express = require('express');
const bodyParser = require('body-parser');

let port = 3000;
const app = express();

app.use(express.static(`${__dirname}/../client`));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
