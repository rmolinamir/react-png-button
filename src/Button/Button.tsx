import * as React from 'react'
import { IButtonData } from './buttonData'

interface IAppProps {
  children?: React.ReactNode,
  data: IButtonData
}

const button = (props: IAppProps) => {
  return (
      <button {...props.data}>{props.children}</button>
  )
}

export default button