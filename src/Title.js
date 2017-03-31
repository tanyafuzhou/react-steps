import { PropTypes } from 'react'
import classNames from 'classnames'

function Title (props) {
  const className = classNames('title', {active: props.status === 1})
  return (
    <span style={{width: props.width, ...props.style}} className={className}>{props.title}</span>
  )
}
Title.propTypes = {
  status: PropTypes.number,
  title: PropTypes.string,
  width: PropTypes.string
}
Title.defaultProps = {
  status: 0,
  title: '',
  width: 0
}
module.exports = Title
