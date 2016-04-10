const React = require('react')
class Div extends React.Component {
  static propTypes = {
    css: React.PropTypes.object,
    style: React.PropTypes.object,
    show: React.PropTypes.bool,
    hide: React.PropTypes.bool,
    className: React.PropTypes.string,
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
