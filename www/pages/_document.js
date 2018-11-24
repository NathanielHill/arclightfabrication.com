import { ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'
import getConfig from 'next/config'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    const { ANALYTICS_TOKEN } = getConfig().publicRuntimeConfig
    return (
      <html lang='en'>
        <Head>
          {this.props.styleTags}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_TOKEN}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_TOKEN}');
          ` }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
