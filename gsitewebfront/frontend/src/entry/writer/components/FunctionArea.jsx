import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerDiv = styled.div`
  margin: 10px 10px 10px 10px;
`
const Button = styled.button`
  margin-right: 5px;
`


export default class FunctionArea extends React.Component {

  onPostIssure = () => {
    axios.put("/api/writter/postissure").then((res) => {
      console.log(res.data);
    })
  }
  onUpdateIssure = () => {
    axios.get("/api/writter/updateissure").then((res) => {
      if (res.data.success) {
        console.log(res.data);
      }
    })
  }
  render() {
    return (
      <ContainerDiv>
        <Button type="button" className="btn btn-primary btn-lg" onClick={this.onPostIssure}>导入github issue</Button>
        <Button type="button" className="btn btn-primary btn-lg" onClick={this.onUpdateIssure}>更新Issure上的文章</Button>
      </ContainerDiv>
    )
  }
}