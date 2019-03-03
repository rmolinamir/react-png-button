import React, { useContext, useRef, useEffect } from 'react'
// CSS
import classes from './App.module.css'
// JSX
import Button, { LogoButton, Context } from 'react-png-button'

const app = () => {
  const context = useContext(Context)

  const buttonRef = useRef()
  const logoButtonRef = useRef()

  const onClick = () => {
    context.setCustomClassname('primary', classes.Primary)
    context.setCustomClassname('custom', classes.Custom)
    context.setBaseClassname(classes.Button)
  }

  useEffect(() => {
    console.log(buttonRef)
    console.log(logoButtonRef)
  }, [])

  return (
    <div className={classes.App}>
      <Button>Default</Button>
      <Button reference={buttonRef} button='dark' onClick={onClick}>Dark</Button>
      <Button button='light'>Light</Button>
      <Button button='primary'>Primary</Button>
      <Button button='success'>Success</Button>
      <Button button='danger'>Danger</Button>
      <Button button='custom'>Custom</Button>
      <Button disabled button='danger'>Disabled</Button>
      <LogoButton reference={logoButtonRef} button='facebook'>Sign up with Facebook</LogoButton>
      <LogoButton button='google'>Sign up with Google</LogoButton>
      <LogoButton button='apple-store' />
      <LogoButton button='google-playstore' />
    </div>
  )
}

export default app
