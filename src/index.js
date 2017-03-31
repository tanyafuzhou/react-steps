import { PropTypes } from 'react'
import LineWithIcon from './LineWithIcon'
import Title from './Title'

import './index.less'

function Steps (props) {
  const { data } = props
  const current = Number(props.current)
  function handleStatus (index) {
    console.log('handleStatus', current, index)
    if (current === index) {
      return 1  // happening
    }
    if (current >= index + 1) {
      return 2  // has happened
    }
    return 0    // did not happen
  }
  const width = `${100 / data.length}%`
  console.log('bar', data, data.length)
  console.log('bar current', current)
  return (
    <div className="bar" style={{transform: `translateX(${100 / data.length / 2}%)`, ...props.style}}>
      <div>
        {data.map((d, index) => (
          <Title key={index} title={d} width={width} status={handleStatus(index + 1)}/>
        ))}
      </div>
      <div>
        {data.map((d, index) => (
          <LineWithIcon key={index} width={width} status={handleStatus(index + 1)}/>
        ))}
      </div>
    </div>
  )
}
Steps.propTypes = {
  current: PropTypes.string,
  data: PropTypes.array
}
Steps.defaultProps = {
  current: 1,
  data: []
}
module.exports = Steps
