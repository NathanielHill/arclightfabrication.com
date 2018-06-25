import styled from 'styled-components'
import Slider from 'react-slick'
import React from 'react'
import fetch from 'isomorphic-unfetch'

const StyledSlider = styled(Slider)`
`
const SliderImage = styled.img`
  height: 25rem;
  width: 25rem;
`

export default class InstagramCarousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      instagramData: []
    }
  }
  componentDidMount () {
    fetch(process.env.INSTAGRAM_URL + process.env.INSTAGRAM_TOKEN)
      .then(r => r.json())
      .then(r => {
        this.setState({ ...this.state, instagramData: r.data })
      })
  }
  render () {
    const settings = {
      // adaptiveHeight: true,
      centerMode: false,
      dots: false,
      infinite: true,
      initialSlide: 0,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    }
    return (
      <div>
        <StyledSlider autoFocus {...settings}>
          {this.state.instagramData
            .filter((slide) => {
              // Way easier to style/layout when all square images
              return slide.images.low_resolution.width === slide.images.low_resolution.height
            })
            .map((slide, index) => {
              return (
                <div key={index}>
                  <a href={slide.link} target='_blank'>
                    <SliderImage src={slide.images.low_resolution.url} />
                  </a>
                </div>
              )
            })}
        </StyledSlider>
      </div>
    )
  }
}
