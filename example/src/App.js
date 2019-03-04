import React, { useContext, useRef, useEffect } from 'react'
// CSS
import classes from './App.module.css'
// JSX
import Button, { LogoButton, Context } from 'react-png-button'
import Tooltip from 'react-png-tooltip'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { obsidian, tomorrowNightEighties } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const app = () => {
  const context = useContext(Context)

  const buttonRef = useRef()
  const logoButtonRef = useRef()

  const onClick = () => {
    window.alert('Open your dev tools if you want to see the printed references!')
    console.log(buttonRef.current)
    console.log(logoButtonRef.current)
    context.setCustomClassname('primary', classes.Primary)
    context.setGlobalClassName(classes.Button)
  }

  useEffect(() => {
    context.setStyle({ width: '100%' })
    context.setCustomClassname('custom', classes.Custom)
  }, [])

  const buttonsArr = [
    [<Button reference={buttonRef}>Default</Button>, `<Button reference={buttonRef}>
  Default
</Button>`],
    [<Button disabled>Disabled</Button>, `<Button 
  disabled>
  Disabled
</Button>`],
    [<Button button='dark'>Dark</Button>, `<Button 
  button='dark'>
  Dark
</Button>`],
    [<Button disabled button='dark' onClick={onClick}>Disabled</Button>, `<Button disabled button='dark' onClick={onClick}>Disabled</Button>`],
    [<Button button='light'>Light</Button>, `<Button button='light'>Light</Button>`],
    [<Button disabled button='light'>Disabled</Button>, `<Button disabled button='light'>Disabled</Button>`],
    [<Button button='primary'>Primary</Button>, `<Button button='primary'>Primary</Button>`],
    [<Button disabled button='primary'>Disabled</Button>, `<Button disabled button='primary'>Disabled</Button>`],
    [<Button button='success'>Success</Button>, `<Button button='success'>Success</Button>`],
    [<Button disabled button='success'>Disabled</Button>, `<Button disabled button='success'>Disabled</Button>`],
    [<Button button='danger'>Danger</Button>, `<Button button='danger'>Danger</Button>`],
    [<Button disabled button='danger'>Disabled</Button>, `<Button disabled button='danger'>Disabled</Button>`],
    [<Button button='custom'>Custom</Button>, `<Button button='custom'>Custom</Button>`],
    [<Button disabled button='custom'>Disabled</Button>, `<Button disabled button='custom'>Disabled</Button>`]
  ]

  const blockButtonsArr = [
    [<Button blockButton>Block Button</Button>, `<Button 
  blockButton>
  Block Button
</Button>`],
    [<Button blockButton button='primary'>Primary</Button>, `<Button 
  blockButton 
  button='primary'>
  Primary
</Button>`],
    [<Button blockButton button='success'>Success</Button>, `<Button 
  blockButton 
  button='success'>
  Success
</Button>`],
    [<Button blockButton button='danger'>Danger</Button>, `<Button 
  blockButton 
  button='danger'>
  Danger
</Button>`],
    [<Button blockButton button='custom'>Custom</Button>, `<Button 
  blockButton 
  button='custom'>
  Custom
</Button>`]
  ]

  const logoButtonsArr = [
    [<LogoButton reference={logoButtonRef} button='facebook'>Sign up with Facebook</LogoButton>, `<LogoButton 
  reference={logoButtonRef} 
  button='facebook'>
  Sign up with Facebook
</LogoButton>`],
    [<LogoButton button='google'>Sign up with Google</LogoButton>, `<LogoButton button='google'>
  Sign up with Google
</LogoButton>`],
    [<LogoButton button='apple-store' />, `<LogoButton button='apple-store' />`],
    [<LogoButton button='google-playstore' />, `<LogoButton button='google-playstore' />`]
  ]

  return (
    <div className={classes.App}>
      <div className={classes.Description}>
        <h1>React Plug-N'-Go Button</h1>
        <div>
          The <code>react-png-button</code> component is a flexible preset collection of multiple buttons to quickly build applications. It's highly scalable due to usage of the new <code>useContext</code> hook API which allows the developer to modify all of the buttons CSS globally or specifically.
        </div>
        <br />
        <div>
          By clicking the button bellow, you'll notice that all of the buttons CSS styling will slightly change a bit (removing border-radius and more padding) by using the <code>setGlobalClassName</code> hook.
        </div>
        <br />
        <div>
          Here's an example showcasing the usage of the <code>setCustomClassname</code> and <code>setGlobalClassName</code> hooks:
        </div>
        <div>
          <SyntaxHighlighter style={obsidian}>
            {`const onClick = () => {
  window.alert('Open your dev tools if you want to see the printed references!')
  console.log(buttonRef.current)
  console.log(logoButtonRef.current)
  context.setCustomClassname('primary', classes.Primary)
  context.setGlobalClassName(classes.Button)
}`}
          </SyntaxHighlighter>
        </div>
        <br />
        <div>
          The <em>Custom</em> button will have its class added to the context by using the <code>setCustomClassname</code> hook, and the <em>Primary</em> button's CSS class will be modified by using the <code>setCustomClassname</code> hook again but matching one of the preset classes shown below.
        </div>
      </div>
      <div className={classes.BlockButtons}>
        <Button button='dark' onClick={onClick}>Click me!</Button>
      </div>
      <h1>Showcase</h1>
      <br />
      <div className={classes.ButtonsGrid}>
        {buttonsArr.map((button, key) => {
          return (
            <Tooltip className={classes.Tooltip} key={key} tooltip={button[0]}>
              <SyntaxHighlighter style={tomorrowNightEighties}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
      <br />
      <h1>Block Buttons</h1>
      <div className={classes.BlockButtons}>
        {blockButtonsArr.map((button, key) => {
          return (
            <Tooltip className={classes.Tooltip} key={key} tooltip={button[0]}>
              <SyntaxHighlighter style={tomorrowNightEighties}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
      <h1>Logo Buttons</h1>
      <div className={classes.LogoButtonsGrid}>
        {logoButtonsArr.map((button, key) => {
          return (
            <Tooltip className={classes.Tooltip} key={key} tooltip={button[0]}>
              <SyntaxHighlighter style={tomorrowNightEighties}>{button[1]}</SyntaxHighlighter>
            </Tooltip>
          )
        })}
      </div>
    </div>
  )
}

export default app
