import styled from 'styled-components'
import { EmailInstagram, Link, DesktopLogo } from './../lib/components'

const Wrapper = styled.header`
  align-items: center;
  background: ${props => props.theme.headerBackground};
  color: ${props => props.theme.headerColor};
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: ${props => props.theme.halfSpacing} 0;
`
const Buttons = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  max-width: ${props => props.theme.siteMaxWidth};
`
const Nav = styled(({
  alt,
  children,
  className,
  pill,
  round,
  title,
  url,
  ...rest}) => (<Link prefetch passHref {...rest}><a className={className} title={title} alt={alt}>{children}</a></Link>)
)`
  background-color: ${props => props.pill ? 'transparent' : props.theme.buttonBackground};

  background: ${props => props.disabled ? props.theme.darkGrey : 'transparent'};
  background-color: ${props => props.href === props.url.pathname ? props.theme.lightGrey : undefined};

  border-radius: ${props => props.round ? '50%' : ''};
  border: ${props => props.pill ? `1px solid ${props.theme.buttonPillColor}` : 'none'};
  color: ${props => props.pill ? props.theme.buttonPillColor : props.theme.buttonColor};
  cursor: pointer;
  font-size: ${props => props.theme.baseFontSize};
  font-weight: 500;
  line-height: 1.2;
  margin: 0 1rem;
  outline: 0;
  padding: ${props => props.pill ? '.3rem .8rem' : props.theme.inputSpacing};
  text-decoration: none;
  text-transform: uppercase;


  &:hover {
    background-color: ${props => !(props.href === props.url.pathname) && props.theme.darkGrey};
  }
`
const DesktopIcons = styled.div`
  align-items: center;
  display: flex;
  margin: 0 .8rem;

  @media (max-width: 768px) {
    display: none;
  }
`
// const DesktopLogo = styled(Logo)`
//   @media (max-width: 768px) {
//     display: none;
//   }
// `
// Warning: Prop `className` did not match. Server: "Logo-ag5qh9-0 fLXRag" Client: "Logo___default-ag5qh9-0 dIWTSO"
// My media queries are applying to both Logo instances :/

// Pull link title text from CMS

export default (props) => (
  <Wrapper>
    <DesktopLogo logoLink='/' size={5} />
    <Buttons>
      <Nav pill url={props.url} title='About Us' href='/about'>About</Nav>
      <Nav pill url={props.url} title='Photo Gallery' href='/gallery'>Gallery</Nav>
      <Nav pill url={props.url} title='Our Materials' href='/materials'>Materials</Nav>
    </Buttons>

    <DesktopIcons>
      <EmailInstagram url={props.url} size={3} />
    </DesktopIcons>
  </Wrapper>
)
