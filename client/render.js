const path = require('path');

const serverRender = (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/dist/index.html`));
};

module.exports = serverRender;
