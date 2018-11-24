import { Link } from 'lib/components'
import styled, { keyframes } from 'styled-components'

const flameTop = keyframes`
  0% {fill: #f76d06;}
  50% {fill: #b40000;}
  100% {fill: #f76d06;}
`
const flameBottom = keyframes`
  0% {fill: #2f4f4f;}
  50% {fill: #8c9cb1;}
  100% {fill: #2f4f4f;}
`
export default styled(
  ({
    animate = false,
    circle = false,
    email = false,
    background = '#93aca7',
    logoLink = 'about',
    noCursor = false,
    float = false,
    ...rest
  }) => (
    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' viewBox='0 0 176.069 176.07' {...rest}>
      <defs>
        <linearGradient x1='37.841' y1='88.056' gradientTransform='translate(21.335 24.98)' x2='95.327' gradientUnits='userSpaceOnUse' y2='41.934' id='c'>
          <stop offset='0' stopColor='#310000' />
          <stop offset='1' stopColor='#c00000' />
        </linearGradient>
        <linearGradient x1='183.37' y1='-15.18' gradientTransform='translate(-123.93 83.89)' x2='247.18' gradientUnits='userSpaceOnUse' y2='18.948' id='b'>
          <stop offset='0' stopColor='#ff8a32' />
          <stop offset='1' stopColor='#5c2802' />
        </linearGradient>
        <linearGradient x1='208.38' y1='-38.47' gradientTransform='translate(-123.93 83.89)' x2='212.8' gradientUnits='userSpaceOnUse' y2='12.358' id='a'>
          <stop offset='0' stopColor='#362e2b' />
          <stop offset='1' stopColor='#7f6c65' />
        </linearGradient>
        <linearGradient y2='12.358' x2='212.8' y1='-38.47' x1='208.38' gradientTransform='translate(-123.93 83.89)' gradientUnits='userSpaceOnUse' id='d' xlinkHref='#a' />
        <linearGradient y2='18.948' x2='247.18' y1='-15.18' x1='183.37' gradientTransform='translate(-123.93 83.89)' gradientUnits='userSpaceOnUse' id='e' xlinkHref='#b' />
        <linearGradient y2='41.934' x2='95.327' y1='88.056' x1='37.841' gradientTransform='translate(21.335 24.98)' gradientUnits='userSpaceOnUse' id='f' xlinkHref='#c' />
      </defs>
      {circle ? <circle r='88.035' cx='88.034' cy='88.035' fill='lightgrey' /> : undefined}
      <Link prefetch passHref href={logoLink}>
        <a title='Arclight Fabrication'>
          <g fillRule='evenodd'>
            <path className='path-left' d='M83.71 24.98L27.485 126.32l6.03 10.443 50.938-91.34 25.02 50.691 14.488 8.115L83.71 24.975z' fill='url(#e)' transform='translate(-.001 .005)' />
            <path className='path-right' d='M123.26 102.84L83.714 24.975h10.815l54.057 102.41L88.87 96.254l-29.692 16.781 9.539-16.997L88.87 84.579z' fill='url(#f)' transform='translate(-.001 .005)' />
            <path className='path-bottom' d='M84.455 45.42l-50.941 91.34 55.353-27.623 54.301 27.623 5.416-9.38-59.717-31.132-29.691 16.781 31.203-55.604z' fill='url(#d)' transform='translate(-.001 .005)' />
          </g>
        </a>
      </Link>
    </svg>
  )
)`
  > svg {
    height: ${props => props.size ? props.size + 'rem' : '32rem'};
  }
  background-color: transparent;
  height: ${props => props.size + 'rem'};
  height: ${props => props.size ? props.size + 'rem' : '32rem'};

  transition: height 1s ease, width 1s ease;

  float: ${props => props.float ? 'left' : 'initial'};

  ${props => props.animate && `
    .path-bottom {
    animation: ${flameBottom} 10s ease infinite;}
    .path-left {
    animation: ${flameTop} 3s ease infinite;}
    .path-right {
    animation: ${flameTop} 4s ease infinite;}
  `}

  > a {
    ${props => props.noCursor ? undefined : 'cursor: pointer'};
  }
  > circle {
    fill: ${props => props.theme.circleBackground};
    transition: fill 1s ease;
  }
  @media(min-width: 768px) {
    height: ${props => (props.size * 1.5) + 'rem'};
    height: ${props => props.size ? (props.size * 1.5) + 'rem' : (32 * 1.5) + 'rem'};

    transition: height 1s ease, width 1s ease;
    > circle {
      fill: ${props => props.theme.circleBackground};
      transition: fill 1s ease;
    }
  }
`
