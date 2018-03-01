import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import timeFormat from 'timeFormat'
import { EventBlack } from 'SvgIcon'

const VertialSpan = styled.span`
  vertical-align: 6px;
  font-size: 14px;
  font-weight: 200;
  color: #6E7173;
  margin-left: ${props => props.distance ? props.distance : 0}px;
`

const FootFontDiv = styled.div`
`

const TagBar = (props) => {
  if (props.onlyShowUt) {
    return (
      <VertialSpan>{`最近更新：${timeFormat(props.updateTime, "YYYY年MM月DD日 HH:mm")}`}</VertialSpan>
    )
  } else {
    return (
      <FootFontDiv>
        <EventBlack size="24" />
        <VertialSpan>{`${timeFormat(props.createTime, "YYYY年MM月DD日 HH:mm")}`}</VertialSpan>
      </FootFontDiv>
    )
  }
}
TagBar.defaulrPropTypes = {
  createTime: 11111,
  updateTime: 11111,
  onlyShowUt: false,
}
TagBar.propTypes = {
  createTime: PropTypes.number,
  updateTime: PropTypes.number,
  onlyShowUt: PropTypes.bool,
}


export default TagBar