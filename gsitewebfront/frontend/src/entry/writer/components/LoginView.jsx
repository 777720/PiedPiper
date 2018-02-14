import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import styled from 'styled-components'

const ItemDiv = styled.div`
  margin: 5px 5px 5px 5px;
`
const BackDiv = styled.div`
  padding: 10px; 10px; 10px; 10px;
  text-align: center;
  background: #f8f8f8;
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
`
const Button = styled.button`
  margin-left: 5px;
`

class LoginView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: '',
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  onRest = () => {
    const { username, password } = this.state
    this.setState({
      username: '',
      password: '',
      error: '',
    })
  }
  onLogin = () => {
    const { username, password } = this.state
    const data = {
      params: {
        username,
        password
      }
    }
    axios.post('/api/login', null, data).then((res) => {
      if(res.data.success) {
        window.location.href = "/writter"
      } else {
        this.setState({
          error: '账号或者密码错误',
        })
      }
    })
  }
  renderErrorView = () => {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>登录失败！</strong> 账号或者密码错误！。
      </div>
    )
  }
  render() {
    const { error, username, password } = this.state
    return (
      <div className="container">
        {
          _.isEmpty(error) ? '' : this.renderErrorView()
        }
        <BackDiv>
          <ItemDiv>
            <span>用户名：</span>
            <input
              id="username"
              className="from-control"
              type="text"
              onChange={this.onChange}
              value={username}

            />
          </ItemDiv>
          <ItemDiv>
            <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
            <input
              id="password"
              className="from-control"
              type="password"
              onChange={this.onChange}
              value={password}
            />
          </ItemDiv>
          <div>
            <Button type="button" className="btn btn-primary" onClick={this.onLogin}>登录</Button>
            <Button type="button" className="btn btn-primary" onClick={this.onRest}>重置</Button>
          </div>
        </BackDiv>
      </div>
    )
  }
}

export default LoginView