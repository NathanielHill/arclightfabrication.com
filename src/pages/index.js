// import Footer from 'components/Footer';
import { Headshot } from 'components/Headshot';
import { Footer } from 'components/Footer';
import Head from 'next/head';
import React from 'react';

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Arclight Fabrication' />
      <meta name='theme-color' content='#4D77B3' />
      <meta name='google-site-verification' content='c7TCrdnHKhLvJeMOFrw5UGQoxn4jsaZ0T8O6XD0tQxs' />
      <link rel='manifest' href='/manifest.json' />
      <title>Arclight Fabrication</title>
    </Head>
    <Headshot />
    <span>We make things.</span>
    <Footer />
    <style jsx global>{`
      * {
        margin: 0;
        padding: 0;
      }
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      @font-face {
        font-family: 'Changa';
        font-style: normal;
        font-weight: 400;
        src: local('Changa'), local('Changa-Regular'), url('/fonts/changa-v4-latin-800.woff') format('woff'),
          url('/fonts/changa-v4-latin-800.woff2') format('woff2');
      }
      @font-face {
        font-family: 'Changa';
        font-style: normal;
        font-weight: 800;
        src: local('Changa ExtraBold'), local('Changa-ExtraBold'),
          url('/fonts/changa-v4-latin-regular.woff') format('woff'),
          url('/fonts/changa-v4-latin-regular.woff2') format('woff');
      }
      html,
      body {
        background: linear-gradient(#e66465, #9198e5);
        font-family: Changa, Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-size: 3vmin;
        height: 100vh;
        min-height: 100vh;
        width: 100vw;
      }
    `}</style>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1 0 auto;
        height: 100vh;
      }
      span {
        background: transparent;
        color: black;
        font-weight: 800;
        font-size: 3.2rem;
      }
      @media (min-width: 768px) {
        span {
          font-size: 4rem;
        }
      }
    `}</style>
  </div>
);
