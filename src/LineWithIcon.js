import { PropTypes } from 'react'
import classNames from 'classnames'

function LineWithIcon (props) {
  console.log('status', props.status)
  const className = classNames('line', {ing: props.status === 1, finish: props.status === 2 })
  return (
    <span style={{width: props.width, ...props.style}} className={className} />
  )
}
LineWithIcon.propTypes = {
  status: PropTypes.number,
  width: PropTypes.string
}
LineWithIcon.defaultProps = {
  status: 0,
  width: 0
}
module.exports = LineWithIcon
