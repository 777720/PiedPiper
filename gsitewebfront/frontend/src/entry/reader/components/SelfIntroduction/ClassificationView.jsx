import React from 'react'
import axios from 'axios'
import _ from 'lodash'
import styled from 'styled-components'

const ContainerDiv = styled.div`
  padding: 25px 25px;
`

class ClassificationView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortList: [],
    }
  }
  componentDidMount() {
    axios.get("/api/reader/articlecollections").then((res) => {
      if (res.data.success) {
        this.setState({
          sortList: res.data.data,
        })
      }
    })
  }
  renderList = () => {
    const { sortList } = this.state
    return sortList.map((item, index) => {
      return (
        <div key={index}>{item.name}</div>
      )
    })
  }
  render() {
    const { sortList } = this.state
    return (
      <ContainerDiv>
        { _.isEmpty(sortList) ? "暂时没有...." : this.renderList() }
      </ContainerDiv>
    )
  }
}

export default ClassificationView