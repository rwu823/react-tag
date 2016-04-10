window.React = require('react')
const {render} = require('react-dom')
const Div = require('../src/index.jsx')

class App extends React.Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return (
      <div>
        <h1>show: true</h1>
        <Div show={true}>
          This is div
        </Div>

        <h1>show: false</h1>
        <Div show={false}>
          display: none
        </Div>

        <h1>style color: blue</h1>
        <Div style={{color: 'blue'}}>
          blue
        </Div>

        <h1>add css name</h1>
        <Div style={{color: 'blue'}} css={{a: true, b: false, c:true, '-on': true}}>
          blue
        </Div>

        <h1>hide</h1>
        <Div hide={true} className="xyz zz zy" style={{color: 'blue'}} css={{a: true, b: false, c:true, '-on': true}}>
          blue
        </Div>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
