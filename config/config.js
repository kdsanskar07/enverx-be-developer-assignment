const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  node_env: process.env.NODE_ENV,
  development: {
    port: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
  },
};
