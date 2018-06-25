import styled from 'styled-components'
import GraphImg from 'graphcms-image'

const ImageContainer = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  padding: ${props => props.theme.halfSpacing};
  > * {
    &:not(:first-child) {
      margin: 0.5rem;
    }
  }
`
const ImageWrapper = styled.div`
  width: 6rem;  
  height: 6rem;
`
const Item = styled.div`
  background: ${props => props.theme.itemBackground};
  border: 1px solid ${props => props.theme.itemBorder};
  margin-bottom: ${props => props.theme.defaultSpacing};
  padding: ${props => props.theme.defaultSpacing};
`
// const ProjectImg = styled.img`
//   width: 6rem;
//   height: 6rem;
//   margin: ${props => props.theme.halfSpacing};
// `
const Title = styled.h1`
  color: ${props => props.theme.itemTextColor};
  margin-bottom: 0;
`
const P = Title.withComponent('p')
// const transforms = [
//   'resize=width:250,height:250,fit:crop,align:center'
// ]
export default (props) => (
  <Item key={props.name}>
    <Title>{props.name}</Title>
    <P>{props.description}</P>
    <ImageContainer>
      {props.photos.map((p, i) => (
        <ImageWrapper key={i}>
          <GraphImg key={i} image={{ handle: p.handle, width: p.width, height: p.width }} fit='crop' maxWidth={800} />
        </ImageWrapper>
      ))}
    </ImageContainer>
  </Item>
)
