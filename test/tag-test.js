const {assert} = require('chai')
window.React = require('react')
const {Div, Img, P, H1} = require('../src')
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
    render(<Div id="div-test" css={css}/>, app)
    assert.equal($('#div-test').attr('class'), '-on b', 'has class name')
  })


  it('set css should extends with `className`', ()=> {
    const css = {
      '-on': true,
      a: false,
      b: true,
    }
    render(<Div className="xyz abc" id="div-test" css={css}/>, app)
    assert.equal($('#div-test').attr('class'), 'xyz abc -on b')
  })

  it('test show={false} prop', ()=> {
    render(<Div show={false} id="div-test" style={{color: 'red'}} />, app)

    assert.strictEqual($('#div-test').width(), 0)
    assert.strictEqual($('#div-test').height(), 0)
    assert.include($('#div-test').attr('style'), 'color: red')
  })

  it('test with children', ()=> {
    render(<Div id="div-test">div component</Div>, app)
    assert.equal($('#div-test').text(), 'div component')
  })

  it('test hide={true} prop, should be disappear', ()=> {
    render(<Div hide={true} id="div-test">div test</Div>, app)
    assert.strictEqual($('#div-test').length, 0)
  })

  it('should be render as other tag', ()=> {
    render(<H1 id="h1-test">div test</H1>, app)
    assert.strictEqual($('#h1-test')[0].tagName, 'H1')

    render(<P id="p-test">div test</P>, app)
    assert.strictEqual($('#p-test')[0].tagName, 'P')

    render(<Img id="img-test" />, app)
    assert.strictEqual($('#img-test')[0].tagName, 'IMG')
  })
})
