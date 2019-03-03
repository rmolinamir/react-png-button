import * as React from 'react'
const useContext = React.useContext
import { Context, capitalizeString } from './context'
import { IButtonData, ButtonData } from './buttonData'
// CSS
import classes from './Button.css'
// JSX
import Button from './Button'

export interface IAppProps extends IButtonData {
  button: string,
  reference?: React.RefObject<HTMLButtonElement>
  children?: React.ReactNode
  blockButton?: boolean
}

const button = (props: IAppProps) => {
  const context = useContext(Context)
  const { className, classNames } = context

  const buttonClasses: (string | undefined)[] = [className]

  const button: string | undefined = props.button ? capitalizeString(props.button) : undefined

  /**
   * Boolean to keep track of matched CSS classes.
   */
  let bIsMatch = false

  /**
   * Selecs a className from the imported context.
   * Can also be passed CSS classes set by the programmer.
   */
  if (button) {
    if (classNames[button]) {
      bIsMatch = true
      buttonClasses.push(classNames[button])
    }
  }

  /**
   * In case there were no matches, then set the button class equal to the Default class.
   */
  if (!bIsMatch) {
    buttonClasses.push(classes.Default)
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
  const buttonData: IButtonData = ButtonData.setData( { ...props }, buttonClasses)

  /**
   * CSS Properties.
   */
  buttonData.style = context.style || props.style

  return (
    <Button reference={props.reference} data={buttonData}>
      {props.children}
    </Button>
  )
}

export default button
