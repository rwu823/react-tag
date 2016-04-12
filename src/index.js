import {createElement, Component} from 'react'
import tags from './tags'
import Tag from './Tag.jsx'

const tag = Object.create(null)
const createTag = (tagname) => {
  return (Compo) => class extends Component {
    render() {
      return <Compo {...this.props} {...this.state} tagName={tagname}/>
    }
  }
}

tags.forEach((tagname)=> {
  tag[tagname.charAt(0).toUpperCase() + tagname.slice(1)] = createTag(tagname)(Tag)
})

module.exports = tag
