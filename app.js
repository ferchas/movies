const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const serverApp = require('./server/app-server');
const clientApp = require('./client/render');
const https = require('./services/https/server');

const app = express();
const port = config.get('app.port');
const portS = config.get('app.portS');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res) => {
    //res.setHeader('Content-Encoding', 'gzip');
  },
}));

// Include server routes as a middleware
app.use(serverApp);

// Anything else gets passed to the client app's server rendering
app.get('/', clientApp);

// start server on https
https.start(app, portS);

app.listen(port, () => {
  console.log(`aplication started on : ${port}`);
});
