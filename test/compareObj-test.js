import {assert} from 'chai'
import compareObj from '../src/compareObj'

describe('#test compareObj', ()=> {
  let o1, o2, o3, o4
  beforeEach(()=> {
    o1 = {
      display: '',
      color: 'red'
    }

    o2 = {
      display: 'none',
      color: '#ff0'
    }

    o3 = {
      color: 'red',
      display: '',
    }

    o4 = {
      display: '',
      color: 'red',
      background: 'red'
    }
  })
  it('Two objects should be equal', ()=> {
    assert.strictEqual(compareObj(o1, o3), true)
  })

  it('Two objects should be not equal', ()=> {
    assert.strictEqual(compareObj(o1, o2), false)
  })

  it('Two objects should be not equal', ()=> {
    assert.strictEqual(compareObj(o1, o4), false)
  })
})
