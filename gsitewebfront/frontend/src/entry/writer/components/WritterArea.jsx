import React from 'react'
import { GoujilaEditor } from '../../common/components/GoujilaEditor/src/'
import WritterApp from '../apps/WritterApp';

class WritterArea extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }
  onMDValueChange = (value) => {
    this.setState({
      value,
    })
  }
  render() {
    const { value } = this.state
    return (
      <div>
        <GoujilaEditor 
          value={value}
          tab="edit"
          onValueChange={this.onMDValueChange}
          minHeight={400}
        />
      </div>
    )
  }
}
export default WritterArea