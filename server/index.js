const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory storage
let customers = [];

// GET /customers - Get all customers
app.get("/customers", (req, res) => {
  res.status(200).json(customers);
});

// POST /customers - Add a new customer
app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newCustomer = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// DELETE /customers/:id - Delete a customer
app.delete("/customers/:id", (req, res) => {
  const { id } = req.params;
  const index = customers.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Customer not found." });
  }

  customers.splice(index, 1);
  res.status(200).json({ message: "Customer deleted successfully." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
