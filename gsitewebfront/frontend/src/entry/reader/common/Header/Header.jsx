import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoSpan = styled.span`
  color: #007fff;
`

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/"><LogoSpan>Geek720的博客</LogoSpan></a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/articles" className="nav-link">文章</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">归档</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">关于我</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header