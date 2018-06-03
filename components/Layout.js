import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'
import * as gtag from '../lib/gtag'
import { Footer, Header } from './../lib/components'

Router.onRouteChangeComplete = url => {
  gtag.pageview(url)
}

export default ({ children, title = 'Arclight Fabrication', url, ...props }) => (
  <OuterWrapper>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Arclight Fabrication' />
      <meta name='theme-color' content='#4D77B3' />
      <link rel='manifest' href='/manifest.json' />
      <title>{title}</title>
    </Head>
    <Header url={url} />
    <StyledMain>
      {children}
    </StyledMain>
    <Footer />
  </OuterWrapper>
)

export const LandingLayout = ({ children, title = 'Arclight Fabrication | Home' }) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Arclight Fabrication' />
      <meta name='theme-color' content='#4D77B3' />
      <link rel='manifest' href='/manifest.json' />
      <title>{title}</title>
    </Head>
    <main>
      {children}
    </main>
  </div>
)

const StyledMain = styled.main`
  margin: 0 auto;
  max-width: ${props => props.theme.siteMaxWidth};
  padding: ${props => props.theme.defaultSpacing};
`
const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 1 0 auto;
  min-height: 100vh;
`
