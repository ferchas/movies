const fs = require('fs');
const https = require('https');
const path = require('path');

const sHttps = {
  start: (app, port) => {
    const key = path.join(__dirname, '/certificates/server.key');
    const cert = path.join(__dirname, '/certificates/server.crt');
    const options = {
      key: fs.readFileSync(key),
      cert: fs.readFileSync(cert),
    };
    https.createServer(options, app).listen(port, () => {
      console.log('Https Started! on:', port);
    });
  },
};

module.exports = sHttps;
