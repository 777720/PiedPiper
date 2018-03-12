import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import axios from 'axios'
import _ from 'lodash'
import ContactView from '../components/ContactView'
import { GoujilaMarked } from '../../common/components/GoujilaEditor/src'


const ContainerDiv = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-left: 6rem;
  margin-right: 6rem;
  @media(max-device-width: 900px) {
    margin: 0;
  };
`
const LeftSider = styled.div`
  padding: .6rem;
  color: white;
  display: flex;
  flex: 2;
  flex-direction: column;
  background: #00b5fa;
`
const AvatarImg = styled.img`
  width: 80%;
  margin: 0 auto;
`
const RightSider = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  background: #EEEEEE;
`
const H1 = styled.h1`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: .8rem;
  font-size: 3rem;
`
const Ul = styled.ul`
  list-style: none;
  >li {
    list-style: none;
    padding-top: .2rem;
  };
  >li dt {
    font-size: 2rem;
    color: #00A1D6;
    line-height: 3rem;
    border-bottom: 1px solid #00A1D6;
    margin: 0 0 15px -5px
  };
  >li dd {
    font-size: 1rem;
    line-height: 1.3rem;
    color: #616161;
  };
`




export default class AboutMeApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      workExperience: '',
    }
  }
  componentDidMount() {
    axios.get('/api/reader/workexperience/xws').then((res) => {
      if(res.data.success) {
        this.setState({
          workExperience: res.data.data,
        })
      }
    })
  }

  renderWorkExperience = () => {

  }
  render() {
    const { workExperience: { content } } = this.state
    const htmlValue = _.isEmpty(content) ? ' ' : content
    return (
      <ContainerDiv>
        <LeftSider>
          <AvatarImg src="http://www.whitemagician.club/nonePic.png" alt="..." />
          <H1>徐吴双</H1>
          <div style={{ fontSize: '1.7rem' }}>
            伪全栈工程师；主要写前端，偶尔摸一下后端^_^
            <p>前端： js、react精通</p>
            <p>后端： java、node精通</p>
            <p>不会设计！！！！美感极差！！</p>
          </div>
          <ContactView />
        </LeftSider>
        <RightSider>
          <Ul>
            <li>
              <dt>Basic Info. 基本信息</dt>
              <dd>个人信息：徐吴双/男</dd>
              <dd>工作年限: 自2017年11月起已经--{moment("20161111", "YYYYMMDD").fromNow()}</dd>
              <dd>毕业院校：大连科技学院</dd>
              <dd>Github: https://github.com/777720</dd>
            </li>
            <li>
              <dt>Experience. 项目与工作经验</dt>
              <dd>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: GoujilaMarked(htmlValue) }} />
              </dd>
            </li>
          </Ul>
        </RightSider>


      </ContainerDiv>
    )
  }
}

AboutMeApp.defaultPropTypes = {
  isWorking: false,
}
AboutMeApp.propTypes = {
  isWorking: PropTypes.bool,
}

