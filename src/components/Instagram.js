import styled, { keyframes } from 'styled-components'
import Router from 'next/router'
import ReactModal from 'react-modal'
import React from 'react'
import { InstagramCarousel } from './../lib/components'

const drawCircle = keyframes`
    from {stroke-dasharray: 0 250;}
    to {stroke-dasharray: 250 0;}
`
const drawOutline = keyframes`
    from {stroke-dasharray: 0 550;}
    to {stroke-dasharray: 550 0;}
`
const Vector = styled.svg`
    height: ${props => props.height};
    cursor: pointer;
    .outline {
    stroke-dasharray: 0 550;
    animation: ${drawOutline} 1s ease .1s 1;
    animation-fill-mode: forwards;
    stroke: ${props => props.theme.circleBackground};
    }
    .circle {
    stroke-dasharray: 0 250;
    animation: ${drawCircle} 1s ease .1s 1;
    animation-fill-mode: forwards;
    stroke: ${props => props.theme.brandOrange};
    }
    .flash {
    fill: ${props => props.theme.brandOrange};
    }
`

const InstagramModal = styled(({ className, modalClassName, ...props }) => (
  <ReactModal className={modalClassName} portalClassName={className} {...props} />
)).attrs({
  overlayClassName: 'BoxedViewModalOverlay',
  modalClassName: 'BoxedViewModal'
})`
        .BoxedViewModalOverlay {
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            height: 100vh;
            width: 100vw;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        }

        .BoxedViewModal {
            background-color: transparent;
            height: 25rem;
            width: 75rem;
            max-width: 80vw;

            @media (max-width: 700px) {
            width: 25rem;
            }
        }

        .slick-dots,
        .slick-next,
        .slick-prev {
            position: absolute;
            display: block;
            padding: 0;
        }
        .slick-dots li button:before,
        .slick-next:before,
        .slick-prev:before {
            font-family: slick;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .slick-next,
        .slick-prev {
            font-size: 0;
            line-height: 0;
            top: 50%;
            width: 20px;
            height: 20px;
            transform: translate(0,-50%);
            cursor: pointer;
            color: transparent;
            border: none;
            outline: 0;
            background: 0 0;
        }
        .slick-next:focus,
        .slick-next:hover,
        .slick-prev:focus,
        .slick-prev:hover {
            color: transparent;
            outline: 0;
            background: 0 0;
        }
        .slick-next:focus:before,
        .slick-next:hover:before,
        .slick-prev:focus:before,
        .slick-prev:hover:before {
            opacity: 1;
        }
        .slick-next.slick-disabled:before,
        .slick-prev.slick-disabled:before {
            opacity: 0.25;
        }
        .slick-next:before,
        .slick-prev:before {
            font-size: 5rem;
            @media (max-width: 700px) {
                font-size: 2rem;
            }
            line-height: 1;
            opacity: 0.75;
            color: ${props => props.theme.brandPrimary};
        }
        .slick-prev {
            left: -30px;
        }
        [dir=rtl] .slick-prev {
            right: -25px;
            left: auto;
        }
        .slick-prev:before {
            content: '<';
        }
        .slick-next:before,
        [dir=rtl] .slick-prev:before {
            content: '>';
        }
        .slick-next {
            right: -25px;
        }
        [dir=rtl] .slick-next {
            right: auto;
            left: -25px;
        }
        [dir=rtl] .slick-next:before {
            content: '>';
        }
        .slick-dotted.slick-slider {
            margin-bottom: 30px;
        }
        .slick-list,
        .slick-slider,
        .slick-track {
            position: relative;
            display: block;
        }
        .slick-loading .slick-slide,
        .slick-loading .slick-track {
            visibility: hidden;
        }
        .slick-slider {
            box-sizing: border-box;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-touch-callout: none;
            -khtml-user-select: none;
            -ms-touch-action: pan-y;
            touch-action: pan-y;
            -webkit-tap-highlight-color: transparent;
        }
        .slick-list {
            overflow: hidden;
            margin: 0;
            padding: 0;
        }
        .slick-list:focus {
            outline: 0;
        }
        .slick-list.dragging {
            cursor: pointer;
            cursor: hand;
        }
        .slick-slider .slick-list,
        .slick-slider .slick-track {
            transform: translate3d(0,0,0);
        }
        .slick-track {
            top: 0;
            left: 0;
        }
        .slick-track:after,
        .slick-track:before {
            display: table;
            content: '';
        }
        .slick-track:after {
            clear: both;
        }
        .slick-slide {
            display: none;
            float: left;
            height: 100%;
            min-height: 1px;
        }
        [dir=rtl] .slick-slide {
            float: right;
        }
        .slick-slide img {
            display: block;
        }
        .slick-slide.slick-loading img {
            display: none;
        }
        .slick-slide.dragging img {
            pointer-events: none;
        }
        .slick-initialized .slick-slide {
            display: block;
        }
        .slick-vertical .slick-slide {
            display: block;
            height: auto;
            border: 0px solid transparent;
        }
        .slick-arrow.slick-hidden {
            display: none;
        }
`
export default class Instagram extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false || props.isInstagram,
      error: '',
      instagramDown: false
    }
    this.handleModalClose = this.handleModalClose.bind(this)
    this.onAfterOpen = this.onAfterOpen.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  handleModalClose () {
    if (this.props.isInstagram) {
      Router.push('/', { shallow: true })
    }
    if (typeof window !== 'undefined') {
      this.setState({ isOpen: false, error: '' })
      window.history.back()
    }
  }
  onAfterOpen () {
    if (this.state.instagramDown) {
      this.handleModalClose()
    }
  }
  onClick (e) {
    e.preventDefault()
    if (this.props.url.pathname === '/') {
      Router.push('/instagram')
    } else {
      Router.push(`${this.props.url.pathname}?instagram=true`, '/instagram', { shallow: true })
      this.setState({ isOpen: true, error: '' })
    }
  }
  render () {
    const { size = 2, x = '0%', y = '0%' } = this.props
    let sizeREM = size + 'rem'
    return (
      <Vector xmlns='http://www.w3.org/2000/svg' height={sizeREM} x={x} y={y} viewBox='0 0 169.063 169.063'>
        <a onClick={this.onClick}>
          <g>
            <path className='circle' d='M120.41 84.532a35.88 35.88 0 0 1-35.88 35.88 35.88 35.88 0 0 1-35.88-35.88 35.88 35.88 0 0 1 35.88-35.88 35.88 35.88 0 0 1 35.88 35.88z' color='#000' overflow='visible' fill='none' stroke='#000' strokeWidth='15.364' strokeLinecap='round' strokeLinejoin='round' />
            <path className='outline' d='M46.852 7.424h75.359c21.843 0 39.428 17.78 39.428 39.866v74.483c0 22.086-17.585 39.866-39.428 39.866H46.852c-21.843 0-39.428-17.78-39.428-39.866V47.29c0-22.086 17.585-39.866 39.428-39.866z' color='#000' overflow='visible' fill='none' stroke='#000' strokeWidth='15.25' strokeLinecap='round' strokeLinejoin='round' />
            <path className='flash' d='M140.921 39.251a11 11 0 0 1-11 11 11 11 0 0 1-11-11 11 11 0 0 1 11-11 11 11 0 0 1 11 11z' color='#000' overflow='visible' />
            <path d='M46.852 7.424h75.359c21.843 0 39.428 17.78 39.428 39.866v74.483c0 22.086-17.585 39.866-39.428 39.866H46.852c-21.843 0-39.428-17.78-39.428-39.866V47.29c0-22.086 17.585-39.866 39.428-39.866z' fill='transparent' />
          </g>
        </a>
        <InstagramModal
          isOpen={this.state.isOpen}
          onAfterOpen={this.onAfterOpen}
          onRequestClose={this.handleModalClose}
        >
          <InstagramCarousel />
        </InstagramModal>
      </Vector>
    )
  }
}
