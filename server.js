const express = require('express');
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const path = require('path')
const port = process.env.PORT || 5000;
const Image = require("./src/models/image.model.js");

app.use(express.static(path.join(__dirname, 'build')))

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };


// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./src/routes/image.routes.js")(app);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));


app.get('*', function(request, response){
    //console.log(request['socket']['remoteAddress']);
    //console.log("A user requested a BAD URL... " + request.url);
     response.redirect("/");
   });