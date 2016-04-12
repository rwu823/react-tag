import React, {Component, PropTypes, createElement} from 'react'

class Tag extends Component {
  static propTypes = {
    css: PropTypes.object,
    style: PropTypes.object,
    show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    hide: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    className: PropTypes.string,
    tagName: PropTypes.string,
  }

  static defaultProps = {
    css: {},
    style: {},
    show: true,
    hide: false,
    className: '',
    tagName: 'div'
  }

  render() {
    const {css, show, style, hide, tagName, className} = this.props

    const classList = `${className} ${Object.keys(css).filter(name => css[name]).join(' ')}`.trim() || null
    const styleList = Object.assign({}, style, {
      display: show ? '' : 'none',
    })

    const extendProps = Object.assign({}, this.props, {style: styleList, className: classList})

    return (hide
      ? null
      : createElement(tagName, extendProps)
    )
  }
}

module.exports = Tag