import { StyledButton } from './button.style'

function Button(props: any) {
  return <StyledButton>{props.children}</StyledButton>
}

Button.displayName = 'Button'

export default Button
