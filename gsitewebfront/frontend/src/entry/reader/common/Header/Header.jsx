import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoSpan = styled.span`
  color: #007fff;
`

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapse: true,
    }
  }
  handleCollapse = () => {
    const { collapse } = this.state
    this.setState({ collapse: !collapse })
  }
  render() {
    const { collapse } = this.state
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/"><LogoSpan>Geek720的博客</LogoSpan></a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              onClick={this.handleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${collapse ? '' : 'show'} `}>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a href="/articles" className="nav-link">文章</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">归档</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/aboutme">关于我</a>
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