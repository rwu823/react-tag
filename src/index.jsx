import React, {Component, PropTypes} from 'react'

const Div = (props) => {
  const {css, show, children, style, hide, className, type} = props
  const classList = `${className} ${Object.keys(css).filter(name => css[name]).join(' ')}`.trim() || null
  const styleList = Object.assign(style, {
    display: show ? '' : 'none',
  })

  const divProps = Object.assign({}, props, { className: classList, slyle: styleList })

  return (hide
      ? null
      : React.createElement(type, divProps)
  )
}

Div.propTypes = {
  css: PropTypes.object,
  style: PropTypes.object,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  hide: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  className: PropTypes.string
}

Div.defaultProps = {
  css: {},
  style: {},
  show: true,
  hide: false,
  type: 'div',
  className: ''
}

module.exports = Div
