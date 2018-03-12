import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Tag } from '../../common/components/svg/SvgIcon'


const Dt = styled.dt`
  font-size: 1.8rem;
  color: #fff;
  line-height: 2rem;
  margin-bottom: .8rem;
`
const DD = styled.dd`
  font-size: 1.3rem;
  line-height: 1.7rem;
`
const Li = styled.li`
  margin-top: 2rem;
  margin-bottom: 2rem;
  list-style-type:none
`

const ContactView  = (props) => {
  return (
    <Li>
      <Dt><Tag size="24" />Contact. 联系方式</Dt>
      <DD>电话:&nbsp;17682342720</DD>
      <DD>邮箱:&nbsp;627078086@qq.com</DD>
      <DD>微信:&nbsp;qq627078086</DD>
      <DD>QQ&nbsp;&nbsp;:&nbsp;627078086</DD>
    </Li>
  )
}

ContactView.propTypes = {
  
}
export default ContactView