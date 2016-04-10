const {assert} = require('chai')
window.React = require('react')
const DivComponent = require('../src/index.jsx')
const {render} = require('react-dom')
const $ = require('cash-dom')

const app = document.createElement('div')
app.id = 'app'
document.body.appendChild(app)

describe('#test', ()=>{
  it('set css', ()=> {
    const css = {
      '-on': true,
      a: false,
      b: true,
    }
    render(<DivComponent id="div-test" css={css}/>, app)
    assert.equal($('#div-test').attr('class'), '-on b', 'has class name')
  })


  it('set css should extends with `className`', ()=> {
    const css = {
      '-on': true,
      a: false,
      b: true,
    }
    render(<DivComponent className="xyz abc" id="div-test" css={css}/>, app)
    assert.equal($('#div-test').attr('class'), 'xyz abc -on b')
  })

  it('test show={false} prop', ()=> {
    render(<DivComponent show={false} id="div-test" style={{color: 'red'}} />, app)

    assert.strictEqual($('#div-test').width(), 0)
    assert.strictEqual($('#div-test').height(), 0)
    assert.include($('#div-test').attr('style'), 'color: red')
  })

  it('test with children', ()=> {
    render(<DivComponent id="div-test">div component</DivComponent>, app)
    assert.equal($('#div-test').text(), 'div component')
  })

  it('test hide={true} prop, should be disappear', ()=> {
    render(<DivComponent hide={true} id="div-test">div test</DivComponent>, app)
    assert.strictEqual($('#div-test').length, 0)
  })
})
