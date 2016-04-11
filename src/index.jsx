import React, {Component, PropTypes} from 'react'

class Div extends Component {
  static propTypes = {
    css: PropTypes.object,
    style: PropTypes.object,
    show: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    hide: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    className: PropTypes.string,
  }

  static defaultProps = {
    css: {},
    style: {},
    show: true,
    hide: false,
    className: ''
  }

  render() {
    const {css, show, children, style, hide, className} = this.props
    const classList = `${className} ${Object.keys(css).filter(name => css[name]).join(' ')}`.trim() || null
    const styleList = Object.assign(style, {
      display: show ? '' : 'none',
    })

    return (hide
        ? null
        : <div {...this.props} className={classList} style={styleList} >
            {children}
          </div>
    )
  }
}

module.exports = Div
