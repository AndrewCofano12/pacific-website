const sql = require("./db.js");

// constructor
const Image = function(image) {
  this.name = image.name;
  this.path = image.path;
//   this.active = customer.active;
};

// Customer.create = (newCustomer, result) => {
//   sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created customer: ", { id: res.insertId, ...newCustomer });
//     result(null, { id: res.insertId, ...newCustomer });
//   });
// };

Image.findById = (imageId, result) => {
  sql.query(`SELECT * FROM images WHERE id = ${imageId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found image: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Image with the id
    result({ kind: "not_found" }, null);
  });
};

Image.getAll = result => {
  sql.query("SELECT * FROM images", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("images: ", res);
    result(null, res);
  });
};

// Customer.updateById = (id, customer, result) => {
//   sql.query(
//     "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
//     [customer.email, customer.name, customer.active, id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated customer: ", { id: id, ...customer });
//       result(null, { id: id, ...customer });
//     }
//   );
// };

// Customer.remove = (id, result) => {
//   sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found Customer with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted customer with id: ", id);
//     result(null, res);
//   });
// };

// Customer.removeAll = result => {
//   sql.query("DELETE FROM customers", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} customers`);
//     result(null, res);
//   });
// };

module.exports = Image;