import React from  'react';
const Header = require('../header/index');


class MainComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
} //End class

module.exports = MainComp;
