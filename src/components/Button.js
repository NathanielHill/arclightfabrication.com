import styled from 'styled-components'

const Button = styled(({
  children,
  pill,
  round,
  ...rest}) => (<button {...rest}>{children}</button>)
)`
    background-color: ${props => props.pill ? 'transparent' : props.theme.buttonBackground};
    border-radius: ${props => props.round ? '50%' : ''};
    border: ${props => props.pill ? `1px solid ${props.theme.buttonPillColor}` : 'none'};
    color: ${props => props.pill ? props.theme.buttonPillColor : props.theme.buttonColor};
    cursor: pointer;
    font-size: ${props => props.theme.baseFontSize};
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: ${props => props.marginBottom ? props.theme.defaultSpacing : '0'};
    outline: 0;
    padding: ${props => props.pill ? '.3rem .8rem' : props.theme.inputSpacing};
    text-transform: uppercase;
`
export default Button
