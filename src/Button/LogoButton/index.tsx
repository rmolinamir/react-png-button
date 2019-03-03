import * as React from 'react'
import { IAppProps } from '..'
import { IButtonData, ButtonData } from '../buttonData'
// CSS
import classes from '../Button.css'
// JSX
import { Icon } from 'react-svg-library'
import Button from '../Button'

export const LogoButton = (props: IAppProps) => {
  let logo: React.ReactNode = null

  let children: React.ReactNode = props.children

  const buttonClasses: (string | undefined)[] = [props.className]
  buttonClasses.push(classes.Button)

  switch (props.button) {
    case 'facebook':
      logo = <span className={classes.Logo}><Icon size='1.5em' icon='facebook-no-bg'/></span>
      buttonClasses.push(classes.Facebook)
      break
    case 'google':
      logo = <span style={{ backgroundColor: '#FFF', padding: '2px', borderRadius: '50%' }} className={classes.Logo}><Icon size='1.5em' icon='google'/></span>
      buttonClasses.push(classes.Google)
      break
    case 'apple-store':
      logo = <span className={classes.AppLogo}><Icon size='2em' icon='apple'/></span>
      buttonClasses.push(classes.Applestore)
      children = (
        <div className={classes.Appstore}>
          <div className={classes.Download}>Download on the</div>
          <div className={classes.Store}>App Store</div>
        </div>
      )
      break
    case 'google-playstore':
      logo = <span className={classes.AppLogo}><Icon size='2em' icon='google-playstore'/></span>
      buttonClasses.push(classes.Playstore)
      children = (
        <div className={classes.Appstore}>
          <div className={classes.Download}>Get it on</div>
          <div className={classes.Store}>Google Play</div>
        </div>
      )
      break
    default:
      logo = null
      children = null
      console.error('No button that match your query was found.')
  }

  /**
   * If blockButton is true, then apply the BlockButton class.
   */
  if (props.blockButton) {
    buttonClasses.push(classes.BlockButton)
  }

  /**
   * Build the button data object that will be passed down to the Button component.
   */
  const buttonData: IButtonData = ButtonData.setData( {...props}, buttonClasses)
  const content: React.ReactNode = <React.Fragment>{logo}{children}</ React.Fragment>

  return (
    <Button data={buttonData}>
      {content}
    </Button>
  )
}
