import React, {PropTypes, createElement} from 'react'

Tag.propTypes = {
  css: PropTypes.object,
  style: PropTypes.object,
  show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  hide: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  className: PropTypes.string,
  tagName: PropTypes.string,
}

Tag.defaultProps = {
  css: {},
  style: {},
  show: true,
  hide: false,
  className: '',
  tagName: 'div'
}

function Tag(props) {
  const {css, show, style, hide, tagName, className} = props
  const classList = `${className.trim()} ${Object.keys(css).filter(name => css[name]).join(' ')}`.trim() || null
  const styleList = Object.assign({}, style, {
    display: show ? '' : 'none',
  })

  const extendProps = Object.assign({}, props, {style: styleList, className: classList})

  return (hide
      ? null
      : createElement(tagName, extendProps)
  )
}

module.exports = Tag
