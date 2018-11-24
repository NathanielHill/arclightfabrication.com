import styled from 'styled-components'
import { EmailInstagram } from 'lib/components'

const Copyright = styled(({ ...rest }) => (<span {...rest}>&#9400;</span>))`
  & {
    font-size: 0.8em;
  }
`
export default styled(({ splash, ...rest }) => (
  <footer {...rest}>
    {splash ? undefined : <EmailInstagram size={3} />}
    <Copyright /> 2018 Arclight Fabrication
  </footer>
))`
  & {
    background: ${props => props.theme.footerBackground};
    color: ${props => props.theme.footerColor};
    font-size: ${props => props.theme.footerFontSize};
    margin: 0 auto;
    margin-top: auto;
    outling: none;
    text-decoration: none;
    > ${EmailInstagram} {
      display: flex;
      justify-content: center;
      margin-bottom: 1em;
      margin-top: 0em;
    }
    @media(min-width: 768px) {
      margin: auto auto 0 ${props => props.theme.halfSpacing};
      > ${EmailInstagram} {
        display: none;
        margin: 0;
        padding: 0;
      }
    }
  }
`
