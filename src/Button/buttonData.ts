import { IAppProps } from '.'

export interface IButtonData {
  // HTML Props
  type?: string,
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined,
  tabIndex?: number | undefined,
  disabled?: boolean,
  // CSS
  blockButton?: boolean,
  className: string,
  setClassName?: React.Dispatch<React.SetStateAction<string>>,
  style?: React.CSSProperties
  setStyle?: React.Dispatch<React.SetStateAction<React.CSSProperties | undefined>>,
}

export namespace ButtonData {
  export const setData = (props: IAppProps, buttonClasses: (string | undefined)[]): IButtonData => {
    const buttonData: IButtonData = {
      className: buttonClasses.join(' '),
      style: props.style,
      tabIndex: props.tabIndex,
      type: props.type || 'button',
      disabled: props.disabled,
      onClick: props.onClick
    }
    return buttonData
  }
}