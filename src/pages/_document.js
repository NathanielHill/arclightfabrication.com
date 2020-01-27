import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// This custom <Document /> is only to set lang="en" on the <html> tag!

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
