import styled from 'styled-components'

const Container = styled(({
  background,
  children,
  padding,
  spaceAround,
  spaceBetween,
  vertical,
  ...rest }) => (<div {...rest}>{children}</div>)
)`
    display: flex;
    ${props => props.background && `background: ${props.theme.itemBackground};`}
    ${props => props.vertical && 'flex-direction: column;'}
    ${props => props.spaceBetween && 'justify-content: space-between;'}
    ${props => props.spaceAround && 'justify-content: space-around;'}
    ${props => props.padding && `padding: ${props.theme.defaultSpacing};`}


    > * {
      &:not(:first-child) {
        ${props => props.vertical ? 'margin-top' : 'margin-left'}:
          ${props => props.theme.defaultSpacing};
      }
    }
    
    > #FlipMove > * {
      &:not(:first-child) {
        ${props => props.vertical ? 'margin-top' : 'margin-left'}:
          ${props => props.theme.defaultSpacing};
      }
    }
`
// Above selector would be better if wrapped! Only a work-around for FlipMove

export default Container
