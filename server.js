const express = require("express"),
      bodyParser = require("body-parser"),
      cors = require("cors"),
      fs = require('file-system');
require("dotenv").config();

const app = express();
// Bodyparser middleware
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })    
);
app.use(bodyParser.json());

app.get('/read', function(request, res) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    else if (data) {
      return res.json({ msg: "!empty", status: 200, data: JSON.parse(data) });
    } else {
      return res.json({ msg: "empty", status: 201, data: {} });
    }
  });
})

app.post('/save', function(req, res) {
  var temp = {};
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    temp = JSON.parse(data);
    if (temp) {
      temp.tableData.push(req.body);
      fs.writeFile ("data.json", JSON.stringify(temp), function(err) {
            if (err) throw err;
              return res.json({ msg: "successfully!", status: 200 });
      });
    }
  });
});

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));