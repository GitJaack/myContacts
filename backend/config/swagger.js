const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "MyContacts API",
      version: "1.0.0",
      description: "API documentation for MyContacts application",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
    servers: [
      {
        url: ["http://localhost:3001", "https://mycontacts-9gnn.onrender.com"],
      },
    ],
  },
  apis: [__dirname + "/../routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use(
    "/api",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      persistAuthorization: true,
    })
  );
};
