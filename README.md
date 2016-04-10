[![codeship](https://img.shields.io/codeship/81f99f30-e154-0133-bdc7-0625a2f269b3/master.svg)](https://codeship.com/projects/145321)[![codecov](https://img.shields.io/codecov/c/github/rwu823/react-div/master.svg)](https://codecov.io/github/rwu823/react-div)

# React Div

Like the normal HTML `<div/>` but better.

## Why?

When you want to show or hide a div, you probably do this everytime:

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

And we always dynamically `add` or `remove` classes inconvenient.

or using the [JedWatson/classnames](https://github.com/JedWatson/classnames)

```js
const classNames = require('classnames')
render() {
  const css = {
	foo: true,
	bar: false    
  }
  return (
    <div className={`a b c ${classNames(css)`} />
  )
}
```

Today you can stop doing that. `React Div` is your new friend.

## Default Props

```js
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
```

## Examples
### show: dynamically show the div

```js
const Div = require('react-div')
render() {
  return <Div show={false} style={{color: 'red'}}>This is Dev Component</Div>
}
```

output:

```html
<div style="display: none; color: red;">This is Dev Component</div>
```

### css: dynamically toggle css classes

```js
const Div = require('react-div')
const css = {
    foo: true,
    bar: false
}
render() {
  return <Div className="a b" css={css} />
}
```

output:

```html
<div class="a b foo"></div>
```

### hide: dynamically hide the div

Sometime we don't want to render DOM, you can hide it by passing a `hide` props:

```js
const Div = require('react-div')
render() {
  return <Div hide={true} />
}
```

output nothing:

```html

```
