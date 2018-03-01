import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Banner from '../common/Banner/Banner'
import { GoujilaEditor } from '../../common/components/GoujilaEditor/src'
import { GithubSvg, CapSlock } from 'SvgIcon'

const AjaxSpan = styled.span`
  color: ${props => props.error ? 'red' : 'white'}
`
const Aaa = styled.a`
  color:#eeeeee;
  :hover {
    text-decoration: none;
  }
` 
const LeaveMessageDiv = styled.div`
  
  text-align: center;
  display: flex;
  >h6 {
    flex: 1;
    margin-top: 8px;
  };
  >button {
    flex: 2;
  };
  >input {
    flex: 4;
    margin-right: 10px;
    margin-left: 10px;
  };
  margin-bottom: 5px;
`

const StartLeaveMessageDiv = styled.div`
  margin-top: 35px;
  cursor: pointer;
  background: rgba(154,154,154,.5);
  padding: 10px;
  line-height: 24px;
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 18px;
  transition: background .3s;
  :hover{
    background: rgba(228,228,228,.7);
    color: #9c9c9c;
  };
`

const HomeDiv = styled.div`
  background: rgba(97,97,97,.3);
  padding: 20px;
  border-radius: 12px;
  color: #eee;
  font-family: Georgia,serif;
  width: 500px;
  height: auto;
  >h2{
    color: #eee;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
  };

`
const ContainerDiv = styled.div`
  margin: 50px 50px 50px 50px;
  display: flex;
  justify-content: center;
`
const GithubDiv = styled.div`
  width: 90px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
`
const WeiboDiv = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
`
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
}
`


class WelcomeView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leaveMessage: '',
      contact: '',
      startLeave: false,
      postOk: 0, //-1 失败 0：初始 1，2，3...是多次.aaa
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  onMDValueChange = (value) => {
    this.setState({
      leaveMessage: value,
    })
  }
  onChangeStartLeaveMes = () => {
    const { startLeave } = this.state
    this.setState({
      startLeave: !startLeave
    })
  }
  onPostLeaveMessage = () => {
    const { postOk, contact, leaveMessage } = this.state
    const postMes = {
      contact,
      content: leaveMessage,
    }
    axios.post("/api/reader/leavemessage", postMes).then((res) => {
      if (res.data.success) {
        this.setState({
          postOk: postOk+1,
        })
      } else {
        this.setState({
          postOk: postOk-1,
        })
      }
    })
  }
  renderPostOk = () => {
   const { postOk } = this.state
    if (postOk < 0) {
      return (<AjaxSpan error>(上传失败)</AjaxSpan>)
    }
    if (postOk > 0) {
      return (<AjaxSpan>(上传成功+{postOk})</AjaxSpan>)
    }
    return (<AjaxSpan />)
  }

  renderLeaveMessage = () => {
    const { leaveMessage, contact, postOk } = this.state
    return (
      <div style={{ marginTop: 35 }}>
        <LeaveMessageDiv>
          <div onClick={this.onChangeStartLeaveMes} style={{ cursor: 'pointer' }}>
            <CapSlock size={36} color="rgba(154,154,154,.5)" />
          </div>
          <h6>留言</h6>
          <input 
            id="contact"
            onChange={this.onChange}
            className="form-control"
            placeholder="写下你的姓名或者联系方式...."
            value={contact}
          />
          <button 
            type="button" 
            className="btn btn-success btn-sm" 
            onClick={this.onPostLeaveMessage}>
              提交{this.renderPostOk()}
          </button>
        </LeaveMessageDiv>
        <div>
          <GoujilaEditor
            value={leaveMessage}
            tab="edit"
            onValueChange={this.onMDValueChange}
            minHeight={120}
          />
          <span>——采用Goujila编辑器强力驱动！</span>
        </div>
      </div>
    )
  }

  renderStartLeaveMesDiv = () => (
    <StartLeaveMessageDiv onClick={this.onChangeStartLeaveMes}>
      >>&nbsp;&nbsp;&nbsp;&nbsp;给我留言&nbsp;&nbsp;({parseInt(Math.random() * (500 - 200 + 1) + 200, 10)}条)
    </StartLeaveMessageDiv>
  )

  

  render() {
    const { startLeave } = this.state
    return (
      <ContainerDiv>
        <HomeDiv>
          <h2>雨夜浪子的个人网站</h2>
          <ImgDiv>
            <WeiboDiv>
              <img src={require('../common/pic/erweima.png')} alt="..." />
              <div>
                <Aaa href="https://m.weibo.cn/p/1005052663790222?from=qrcode&frwbqr=53&jumpfrom=weibocom">新浪微博</Aaa>
              </div>
            </WeiboDiv>
            <GithubDiv>
              <GithubSvg />
              <Aaa href="https://github.com/777720">Github:777720</Aaa>
            </GithubDiv>
          </ImgDiv> 
            {
              startLeave ? this.renderLeaveMessage() : this.renderStartLeaveMesDiv()
            //this.renderLeaveMessage()
            }
        </HomeDiv>
      </ContainerDiv>
    )
  }
}

export default WelcomeView