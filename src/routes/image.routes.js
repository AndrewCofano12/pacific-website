module.exports = app => {
    const images = require("../controllers/image.controller.js");
  
    // // Create a new Customer
    // app.post("/customers", customers.create);
  
    // Retrieve all Images
    // app.get("/", images.findAll);
  
    // Retrieve a single Image with imageId
    app.get("/images/:imageId", images.findOne);
  
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
  
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
  
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
  };