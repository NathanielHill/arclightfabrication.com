import styled from 'styled-components'

const Headshot = styled.img`
  float: left;
  height: ${props => props.size + 'rem'};
  transition: height 1s ease, width 1s ease;
  border-radius: 50%;
  margin-right: ${props => props.theme.defaultSpacing};
  @media(min-width: 768px) {
    height: ${props => (props.size * 1.5) + 'rem'};
    transition: height 1s ease, width 1s ease;
  }
`
export default Headshot
