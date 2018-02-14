import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Goujila</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">文章</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">关于</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header