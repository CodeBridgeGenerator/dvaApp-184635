
const clients = require("./clients/clients.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    
  app.configure(clients);
    // ~cb-add-configure-service-name~
};
