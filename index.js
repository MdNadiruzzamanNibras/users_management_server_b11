const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
  },
  {
    id: 4,
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    email: "sophia.martinez@example.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("data asbe post method");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
