const Image = require("../models/image.model.js");

// Create and Save a new Customer
exports.create = (req, res) => {
  
};

// Retrieve all Images from the database.
exports.findAll = (req, res) => {
    console.log("hitting...")
    Image.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving images."
        });
      else res.send(data);
    });
  };

// Find a single Image with a customerId
exports.findOne = (req, res) => {
    Image.findById(req.params.imageId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.imageId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.imageId
          });
        }
      } else {
        res.send(data);}
    });
  };


// Update a Customer identified by the customerId in the request
exports.update = (req, res) => {
  
};

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  
};

// Delete all Customers from the database.
exports.deleteAll = (req, res) => {
  
};