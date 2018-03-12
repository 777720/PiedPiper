import React from 'react'
import axios from 'axios'
import { GoujilaEditor } from '../../common/components/GoujilaEditor/src/'

class AboutMeArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      isEnd: false,
      endtime: '',
      startTime: '',
      exTitle: '',
    }
  }
  onChangeIsEnd= (e) => {
    this.setState({
      isEnd: e.target.checked,
    })
  }
  onChange= (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }
  onMDValueChange = (value) => {
    this.setState({
      value: value,
    })
  }
  onPostNewWorking = () => {
    const { startTime, endTime, value, exTitle } = this.state
    const we = {
      userName: 'xws',
      startTime: startTime,
      endTime: endTime,
      content: value,
      exTitle: exTitle,
    }
    axios.post('/api/writter/workexperience', we).then((res) => {
      console.log(res.data.success);
    })
  }
  renderEndTime = () => {
    const { endtime } = this.state
    return (
      <div>
        <span>结束时间</span>
        <input id="endTime" className="form-control" type="date" value={endtime} onChange={this.onChange} />
      </div>
    )
  }
  render() {
    const { value, startTime, isEnd, exTitle } = this.state
    return (
      <div>
        <input className="form-control" id="exTitle" placeholder="经历名称" value={exTitle} onChange={this.onChange}/>
        <GoujilaEditor
          value={value}
          tab="edit"
          onValueChange={this.onMDValueChange}
          minHeight={400}
        />
        <span>开始时间</span>
        <input id="startTime" className="form-control" type="date" value={startTime} onChange={this.onChange} />
        <div>是否结束？<input className="form-check-input" type="checkbox" onChange={this.onChangeIsEnd} /></div>
        
        {
          isEnd ? this.renderEndTime() : ''
        }
        <button type="button" className="btn btn-info" onClick={this.onPostNewWorking}>+ 发布新的工作经历</button>
      </div>
    )
  }
}

export default  AboutMeArea