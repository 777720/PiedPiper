import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Header extends React.Component {

  onLogout = () => {
    axios.get('/api/logout').then((res) => {
      if (res.data.success) {
        window.location.href = "/writter"
      }
    })
  }
  render() {
    const { writterName } = this.props
    return (
      <div>
        当前用户：<span>{writterName}</span>
        <button
          className="btn btn-outline-info btn-sm"
          onClick={this.onLogout}
        >
          登出
        </button>
      </div>
    )
  }
}

Header.propTypes = {
  writterName: PropTypes.string,
}

export default Header