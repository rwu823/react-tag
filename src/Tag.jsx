import React, {Component, PropTypes, createElement} from 'react'
import compareObj from './compareObj'

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

  shouldComponentUpdate(newProps, newState) {
    return newProps.show !== this.props.show ||
           newProps.hide !== this.props.hide ||
           !compareObj(newProps.css, this.props.css)
  }

  render() {
    console.log('render Tag')
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
