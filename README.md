# React Plug-N'-Go Button

> `react-png-button` is a highly customizable & scalable React Component that renders a collection a preset of production ready buttons. This component makes use of the `useContext` hook API to let the programmer add his or her own desired classes, on top of being able to globally modify all buttons in the application to suit your needs.

[![NPM](https://img.shields.io/npm/v/react-png-button.svg)](https://www.npmjs.com/package/react-png-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-png-button
```

## [Showcase](https://www.robertmolina.dev/codelab/react-svg-library)

![Showcase](https://i.imgur.com/mT5pahw.png "Showcase")

![Block Buttons](https://i.imgur.com/EFOT5iZ.png "Block Buttons")

![Logo Buttons](https://i.imgur.com/l9DCeXf.png "Logo Buttons")

## Features

1. A highly customizable, scalable, and production ready component.
2. Usage of the `useContext` hook API to offer maximum flexibility.

## Context API

By using a **`Provider`**, the developer will gain access to extra functionalities, such as more options to globally or specifically customize each button. After setting up the **`Provider`**, the developer will have access to the **`context`** by accesing it with the **`useContext`** API. Below is a table of all the context methods:

Method                |       Arguments    | Functionality
-------------         |      ------------- | -------------
`setGlobalClassName`  |       `(className: string)`    | **`setGlobalClassName`** will set the global button className that serves as the basis of all the buttons from this package, **excluding the LogoButtons**. [Here is the preset global class](#global-button-css-class).
`setCustomClassname`  |       `(classNameKey: string, className: string)`    | **`setCustomClassname`** provides the developer with a way to introduce his or her own buttons carrying their respective CSS. Directly below is an example of how to do this, and how to access the custom buttons anywhere in the application.
`setStyle`            |       `(style: React.CSSProperties)`    | **`setStyle`** works very similar to **`setGlobalClassName`**, by using it the developer may globally set the buton CSS style properties. It's often used when the developer may only want to make small changes to the default class (e.g. changing only the **`border-radius`** CSS property).

Below is a code snippet that:

1. Applies the **`Provider`** component to the application.
2. Makes use of **`useContext`** to access the context object.
3. Usage of **`setGlobalClassName`**.
4. Usage of **`setCustomClassname`**.
5. Usage of **`setStyle`**.

***index.js***

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-png-button'

import './index.css'
import App from './App'

ReactDOM.render(<Provider><App /></Provider>, document.getElementById('root'))
```

***App.js***

```jsx
import React, { useContext, useEffect } from 'react'
// CSS
import classes from './App.module.css'
// JSX
import Button, { Context } from 'react-png-button'

const app = () => {
  const context = useContext(Context)

  const onClick = () => {
    context.setGlobalClassName(classes.Button)
  }

  useEffect(() => {
    context.setStyle({ width: '100%' })
    context.setCustomClassname('custom', classes.Custom)
  }, [])

  return (
    <Button button='primary' onClick={onClick}>Click me!</Button>
    <Button button='custom'>A custom button.</Button>
  )
}

export default app
```

## Props

Props               |       Functionality
-------------       |       -------------
`button`            |       String type property to 
`blockButton`       |       Boolean type prop that applies a width of 100% to the button CSS properties.
`reference`         |       React reference RefObject.
`onClick`           |       Function type property for the respective event handler.
`onMouseEnter`      |       Function type property for the respective event handler.
`onMouseLeave`      |       Function type property for the respective event handler.
`disabled`          |       Boolean type prop that will disable the button functionality and set a *disabled* CSS class.
`HTML Properties`   |       HTML button properties such as type, name, value, form, formAction, etc. [For more information, check the MDN docs about buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button), `react-png-button` includes support for all properties.

## Basic Usage (Requires React.js v^16.8.0)

[![Edit React Plug-N'-Go Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/181ykv0zz4)

```jsx
import React, { Component } from 'react'
import Button, { LogoButton } from 'react-png-button'

const component = () => {
    return (
    <Button button='primary'>
      React Plug-N'-Go Button
    </Button>
    <LogoButton button='facebook'>
      Sign up with Facebook type button
    </LogoButton>
  )
}
```

## Global Button CSS Class

```css
.Button {
  position: relative;
  outline: none;
  cursor: pointer;
  font: inherit;
  width: fit-content;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  line-height: 1.5;
  font-weight: 600;
  padding: 10px 16px;
  box-shadow: none;
  transition: background-color .1s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out, opacity ease 0.15s, transform ease 0.15s;
}

.Button:active {
  transform: scale(0.95);
}
```

## License

MIT © [rmolinamir](https://github.com/rmolinamir)
