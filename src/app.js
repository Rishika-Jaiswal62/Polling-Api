const express = require("express");
const pollRoutes = require("./routes/pollRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Polling API is running successfully");
});

app.use("/polls", pollRoutes);

// swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;