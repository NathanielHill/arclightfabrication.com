import gql from 'graphql-tag'
import styled from 'styled-components'
import { Container, H1, H2, Headshot, Layout, Logo, P } from 'lib/components'
import pageWrapper from 'lib/pageWrapper'

export default pageWrapper(gql`
  query allOwners {
    allOwners {
      name,
      title,
      about,
      headshot {
        url
      }
    },
    allBusinesses {
      about
    }
  }
`, ({ data: { loading, error, allOwners, allBusinesses }, ...props }) => {
  // Can't destructure in function signature :( since may be undefined server-side
  if (allOwners) {
    var [{ name, title, about, headshot }] = allOwners
  }
  if (allBusinesses) {
    var [{ about: aboutBusiness }] = allBusinesses
  }
  return (
    <Layout title='Arclight Fabrication | About Us' {...props}>
      <AboutContainer vertical>
        <Container background padding>
          <Container>
            <Container>
              <div>
                <MediaContainer background padding>
                  <Headshot src={headshot && headshot.url} size='10' />
                  <TitleContainer vertical>
                    <H1>{name && name}</H1>
                    <H2>{title && title}</H2>
                  </TitleContainer>
                </MediaContainer>
                <AboutChris>{about && about}</AboutChris>
              </div>
            </Container>
          </Container>
        </Container>
        <Container background padding vertical>
          <div>
            <Logo float size='16' circle noCursor logoLink='' />
            <AboutArclight>{aboutBusiness && aboutBusiness}</AboutArclight>
          </div>
        </Container>
      </AboutContainer>
    </Layout>
  )
}
)

// const AboutContainer = styled(Container) `
//   @media (min-width: 768px) {
//     > * {
//       &:not(:first-child) {
//         margin-left: ${props => props.theme.defaultSpacing};
//         margin-top: 0;
//       }
//     }
//     flex-direction: row;
//   }
// `
const MediaContainer = styled(Container)`
  justify-content: center;
  align-items: center;
  h1 {
    font-size: ${props => props.theme.baseFontSize};
  }
  h2 {
    font-size: ${props => props.theme.smallFontSize};
  }
`
const TitleContainer = styled(Container)`

`
const AboutContainer = styled(Container)`

`
const AboutChris = styled(P)`
  line-height: 1.6;
  padding: 2rem;
  text-indent: 2rem;
`
const AboutArclight = styled(P)`
  line-height: 1.6;
  padding: 2rem;
  text-indent: 2rem;
`
