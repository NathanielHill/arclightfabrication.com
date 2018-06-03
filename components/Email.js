import Router from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import styled, { keyframes } from 'styled-components'
import { Center, Container, Modal, QuoteForm } from './../lib/components'

const drawFlap = keyframes`
  from {stroke-dasharray: 0 224;}
  to {stroke-dasharray: 224 0;}
`
const drawOutline = keyframes`
  from {stroke-dasharray: 0 724;}
  to {stroke-dasharray: 724 0;}
`
const Vector = styled.svg`
  height: ${props => props.height};
  cursor: pointer;
  .outline {
    stroke-dasharray: 0 724;
    animation: ${drawOutline} 1s ease .1s 1;
    animation-fill-mode: forwards;
    stroke: ${props => props.theme.circleBackground};
  }
  .flap {
    stroke-dasharray: 0 224;
    animation: ${drawFlap} 1s ease .1s 1;
    animation-fill-mode: forwards;
    stroke: ${props => props.theme.brandOrange};
  }
`
export default class Email extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false || props.isContact,
      error: '',
      // email: 'mailto:' + Meteor.settings.public.email,
      isVerified: false
    }
    this.handleModalClose = this.handleModalClose.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  handleModalClose () {
    if (this.props.isContact) {
      Router.push('/', { shallow: true })
    }
    if (typeof window !== 'undefined') {
      this.setState({ isOpen: false, error: '' })
      window.history.back()
    }
  }
  onClick (e) {
    e.preventDefault()
    if (this.props.url.pathname === '/') {
      Router.push('/contact')
    } else {
      Router.push(`${this.props.url.pathname}?contact=true`, '/contact', { shallow: true })
      this.setState({ isOpen: true, error: '' })
    }
  }
  render () {
    const { size = 2, x = '0%', y = '0%' } = this.props
    let sizeREM = size + 'rem'
    return (
      <Vector xmlns='http://www.w3.org/2000/svg' height={sizeREM} x={x} y={y} viewBox='0 0 244.945 168.298'>
        <a onClick={this.onClick} alt='Contact Us'>
          <g>
            <path className='flap' d='M38.427 38.635l84.009 73.826 83.899-73.883' color='#000' overflow='visible' fill='none' stroke='#000' strokeWidth='16.392' strokeLinecap='round' strokeLinejoin='round' />
            <path className='outline' d='M27.53 8.678h189.885c10.444 0 18.852 8.536 18.852 19.14V140.48c0 10.603-8.408 19.14-18.852 19.14H27.53c-10.444 0-18.852-8.537-18.852-19.14V27.818c0-10.604 8.408-19.14 18.852-19.14z' color='#000' overflow='visible' fill='none' stroke='#000' strokeWidth='17.356' strokeLinecap='round' strokeLinejoin='round' />
            <path d='M27.53 8.678h189.885c10.444 0 18.852 8.536 18.852 19.14V140.48c0 10.603-8.408 19.14-18.852 19.14H27.53c-10.444 0-18.852-8.537-18.852-19.14V27.818c0-10.604 8.408-19.14 18.852-19.14z' fill='transparent' />
          </g>
        </a>
        <Modal
          isOpen={this.state.isOpen}
          onAfterOpen={this.onAfterOpen}
          onRequestClose={this.handleModalClose}
        >
          <Container background vertical>
            <QuoteForm isVerified={this.state.isVerified} onAfterSubmit={this.handleModalClose} />
            <Center>
              <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_TOKEN}
                onChange={this.captchaVerifyCallback}
              />
            </Center>
          </Container>
        </Modal>
      </Vector>
    )
  }
}
