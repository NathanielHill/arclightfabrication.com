import styled from 'styled-components'
import { Container, Email, Instagram } from 'lib/components'

export default styled(
  ({
    children,
    marginTop = 0,
    size = 5,
    url,
    isContact,
    isInstagram,
    ...rest
  }) => (
    <Container {...rest}>
      <Email isContact={isContact} url={url} size={size} />
      <Instagram isInstagram={isInstagram} url={url} size={6 / 5 * size} />
    </Container>
  )
)`
  align-items: center;
  margin-top: ${props => props.marginTop + 'rem'};
  > * {
    &:not(:first-child) {
      margin-right: 0rem;

      margin-left: ${props => props.theme.doubleSpacing};
    }
  }
`
