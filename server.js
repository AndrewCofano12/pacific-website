const express = require('express');
const bodyParser = require("body-parser");
// const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const Image = require("./src/models/image.model.js");

// var corsOptions = {
//     origin: "http://localhost:8081"
//   };


// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("./src/models");
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

app.get('/', (req, res) => {
    // console.log("hitting...")
    // Image.getAll((err, data) => {
    //   if (err)
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while retrieving images."
    //     });
    //   else res.send(data);
    // });
    console.log("helloooooo")
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
//require("./src/routes/image.routes.js")(app);
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/', (req, res) => {
//     // console.log("hitting...")
//     // Image.getAll((err, data) => {
//     //   if (err)
//     //     res.status(500).send({
//     //       message:
//     //         err.message || "Some error occurred while retrieving images."
//     //     });
//     //   else res.send(data);
//     // });
//     res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });