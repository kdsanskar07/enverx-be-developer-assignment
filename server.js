const express = require("express");
const config = require("./config/config");

// adding routes
const routes = require('./src/routes/blogRoute')

// initiallizing DB
const db = require("./config/db");

const app = express();
app.use(express.json());

// added routes
app.use(routes);

// if (config.node_env === "development") {
//   app.get("/", (req, res) => {
//     res.send("API running");
//   });
// }

app.listen(config[config.node_env].port, () => {
  console.log("Server is up and running at Port", config[config.node_env].port);
});
