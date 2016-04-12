[![codeship](https://img.shields.io/codeship/81f99f30-e154-0133-bdc7-0625a2f269b3/master.svg)](https://codeship.com/projects/145321)[![codecov](https://img.shields.io/codecov/c/github/rwu823/react-tag/master.svg)](https://codecov.io/github/rwu823/react-tag)

# React Tag

React Tag component, universal `tag` render, like the normal HTML `<tag>` but useful.

## Why?

When you want to `show` or `hide` a div, you probably do this everytime:

```js
render() {
  const style = {
    display: show ? '' : 'none'
  }
  return (
    <div style={style} />
  )
}
```

Dnd we always dynamically `add` or `remove` classes inconvenient.

or using the [JedWatson/classnames](https://github.com/JedWatson/classnames)

```js
const classNames = require('classnames')
render() {
  const css = {
	foo: true,
	bar: false    
  }
  return (
    <div className={`a b c ${classNames(css)}`} />
  )
}
```

Today you can stop doing that. `React Tag` is your new friend.

## Examples
In `React Tag` each normal HTML tag will becomes **uppercase of first letter**, you can import for need:
```js
import {Div, Img, P, H1, Button} form 'react-tag'
render() {
  return (
    <Div>
      <P />
      <H1 />
    </Div>
  )
}
```

output:
```html
<div>
  <p></p>
  <h1></h1>
</div>
```

### show
Dynamically show the div
```js
import {Div} from 'react-tag'
render() {
  return <Div show={false} style={{color: 'red'}}>This is Dev Component</Div>
}
```

output:
```html
<div style="color: red; display: none;">This is Dev Component</div>
```

### css

Dynamically toggle css classes
```js
import {Div} from 'react-tag'

render() {
  const css = {
    foo: true,
    bar: false
  }
  return <Div className="a b" css={css} />
}
```

output:
```html
<div class="a b foo"></div>
```

### hide

Dynamically hide the div.

Sometime we don't want to render DOM, you can hide it by passing a `hide` props:

```js
import {Div} from 'react-tag'
render() {
  return <Div hide={true} />
}
```

output nothing:

```html

```
