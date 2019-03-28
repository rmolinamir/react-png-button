import { IButtonProps } from '.'

export interface IButtonData {
  // React Reference
  reference?: React.RefObject<HTMLButtonElement>
  // HTML Props
  type?: "button" | "submit" | "reset"
  name?: string
  value?: string | number | string[] | undefined
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  onMouseEnter?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  onMouseLeave?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  tabIndex?: number | undefined
  disabled?: boolean
  // HTML 5 Props
  autoFocus?: boolean
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  // CSS
  style?: React.CSSProperties
  className?: string
}

export namespace ButtonData {
  export const setData = (props: IButtonProps, buttonClasses: (string | undefined)[]): IButtonData => {
    const buttonData: IButtonData = {
      ...props,
      className: buttonClasses.join(' '),
      type: props.type || 'button'
    }
    return buttonData
  }
}