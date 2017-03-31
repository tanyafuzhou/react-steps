import React, {Component} from 'react'
import Step from '_/index'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'
import 'codemirror/lib/codemirror.css'
class Steps extends Component {
  constructor () {
    super()
    this.state = {
      current: 2,
      data: ['1.step one', '2.step two', '3.step three', '4.step four'],
      code: "<Step current={2} data={['1.step one', '2.step two', '3.step three', '4.step four']}/>"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (newCode) {
    const props = /current=\{(\d)*.*data=\{(.*)\}/g.exec(newCode)
    this.setState(Object.assign({
      data: eval(props[2]),
      code: newCode
    }, props[1] && {current: props[1]}))
  }
  render () {
    return (
      <div>
        <h4>Code</h4>
        <CodeMirror
          options={{
            mode: 'jsx',
            lineNumbers: true
          }}
          value={this.state.code} onChange={this.handleChange}
        />
        <h4>Demo</h4>
        <Step current={this.state.current} data={this.state.data}/>
      </div>
    )
  }
}

export default Steps
