const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: "Contacts API",
      description: "Contacts API"
    },
    host: "project1-cj64.onrender.com",
    schemes: ["http", "https"]
  };

  const outputFile = "./swagger.json";
  const endpointFiles = ["./routes/index.js"];

  swaggerAutogen(outputFile, endpointFiles, doc);