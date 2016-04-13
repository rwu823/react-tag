import React from 'react'
import tags from './tags'
import Tag from './Tag.jsx'

const tag = Object.create(null)
const createTag = tagname => Compo => props => {
  return <Compo {...props} tagName={tagname} />
}

tags.forEach((tagname)=> {
  tag[tagname.charAt(0).toUpperCase() + tagname.slice(1)] = createTag(tagname)(Tag)
})

module.exports = tag
