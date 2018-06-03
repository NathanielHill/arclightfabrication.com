import NextLink from 'next/link'
import styled from 'styled-components'

const Center = styled.div`
  align-self: center;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const H1 = styled.h1`
  font-weight: 300;
`
const H2 = styled.h2`
  font-size: ${props => props.theme.largeFontSize};
`
const Input = styled.input`
  border: 1px solid ${props => props.theme.inputBorder};
  font-family: inherit;
  font-size: ${props => props.theme.baseFontSize};
  margin-bottom: ${props => props.theme.defaultSpacing};
  padding: ${props => props.theme.inputSpacing};
`
const Link = styled(({ children, className, ...rest }) => (<NextLink {...rest}>{children}</NextLink>))`
 cursor: pointer;
`
const P = styled.p`
`
const Select = styled.select`
  background-color: white;
  border: 1px solid ${props => props.theme.inputBorder};
  font-family: inherit;
  font-size: inherit;
  font-size: ${props => props.theme.baseFontSize};
  margin-bottom: ${props => props.theme.defaultSpacing};
  padding: ${props => props.theme.inputSpacing};
`
const TextArea = Select.withComponent('textarea')

export { Center, Form, H1, H2, Input, Link, P, Select, TextArea }
