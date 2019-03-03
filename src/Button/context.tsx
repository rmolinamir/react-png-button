import * as React from 'react'
const { useState } = React
// CSS
import classes from './Button.css'

interface IClassNamesByButton {
  Success: string,
  Danger: string,
  Primary: string,
  Dark: string,
  Light: string
}

const classNamesByButton: IClassNamesByButton = {
  Success: classes.Success,
  Danger: classes.Danger,
  Primary: classes.Primary,
  Dark: classes.Dark,
  Light: classes.Light
}

export interface IContextProps {
  className?: string,
  classNames: IClassNamesByButton
  setBaseClassname?: (className: string) => void,
  setCustomClassname?: (classNameKey:string, className: string) => void,
  style?: React.CSSProperties,
  setStyle?: (CSSstyles: React.CSSProperties) => void,
  children?: React.ReactNode
}

/**
 * Button functionality and context.
 */
const initialContext: IContextProps = {
  className: classes.Button,
  classNames: classNamesByButton,
  style: undefined,
}

export const Context: React.Context<IContextProps> = React.createContext(initialContext)

const provider = (props: IContextProps) => {
	const [className, setClassName] = useState(props.className || initialContext.className)
  const [style, setStyle] = useState(props.style || initialContext.style)

  const setCustomClassname = (key: string, className: string): void => {
    const classNameKey = capitalizeString(key)
    classNamesByButton[classNameKey] = className
  }

  // TODO add context classes for all type of buttons

  console.log('inside context.tsx')

	return (
    <Context.Provider value={{
      className: className,
      setBaseClassname: setClassName,
      setCustomClassname: setCustomClassname,
      classNames: classNamesByButton,
      style: style,
      setStyle: setStyle
    }}>
    {props.children}
  </Context.Provider>
	)
}

export const capitalizeString = (string: string): string => {
  if (!string) { return '' }
  return `${string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()}`
}

export default provider