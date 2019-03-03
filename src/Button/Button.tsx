import * as React from 'react'
import { IButtonData } from './buttonData'

interface IButtonProps {
  reference?: React.RefObject<HTMLButtonElement>
  children?: React.ReactNode
  data: IButtonData
}

// ADD Reference & Label props

const button = (props: IButtonProps) => {
  return (
      <button ref={props.reference} {...props.data}>{props.children}</button>
  )
}

export default button