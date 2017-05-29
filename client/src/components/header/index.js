
const React = require('react');

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <header>
          <div className="logo">
            <h1><a href="/">Verti</a></h1>
            <span>by HTML5 UP</span>
          </div>

          <nav>
            <ul>
              <li className="current"><a href="index.html">Welcome</a></li>
              <li>
                <a href="#">Dropdown</a>
                <ul>
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Magna phasellus</a></li>
                  <li>
                    <a href="#">Phasellus consequat</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Phasellus consequat</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Veroeros feugiat</a></li>
                </ul>
              </li>
              <li><a href="left-sidebar.html">Left Sidebar</a></li>
              <li><a href="right-sidebar.html">Right Sidebar</a></li>
              <li><a href="no-sidebar.html">No Sidebar</a></li>
            </ul>
          </nav>
        </header>
    );
  }
} // end class

module.exports = Header;
