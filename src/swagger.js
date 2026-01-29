const swaggerJSDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Polling API",
      version: "1.0.0",
      description: "Backend Task 4 - Simple Polling API Documentation"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis: ["./src/routes/*.js"] // routes se comments read karega
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;