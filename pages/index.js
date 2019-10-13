// import Footer from 'components/Footer';
import { Headshot } from 'components/Headshot';
import { Logo } from 'components/Logo';
import Head from 'next/head';
import React from 'react';

export default () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Arclight Fabrication' />
      <meta name='theme-color' content='#4D77B3' />
      <link rel='manifest' href='/manifest.json' />
      <title>Arclight Fabrication</title>
    </Head>
    <span>We make things.</span>
    <Headshot />
    <Logo size={16} circle />
    <footer />
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
        font-family: Changa, Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-size: 3vmin;
        height: 100vh;
        min-height: 100vh;
        overflow-x: hidden;
        overscroll-behavior: contain;
        width: 100vw;
      }
      body {
        background-color: grey;
        background-size: cover;
        background: url('/background.jpg') no-repeat center center fixed;
      }
    `}</style>
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        flex: 1 0 auto;
        height: 100vh;
      }
    `}</style>
  </div>
);

// const SplashWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   flex: 1 0 auto;
//   height: 100vh;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     > ${Logo} {
//       height: 32rem;
//     }
//   }
// `;
// const Tagline = styled.a`
//   background: transparent;
//   color: ${props => props.theme.brandPrimary};
//   cursor: pointer;
//   font-weight: 800;
//   font-size: 3.2rem;
//   line-height: 1.2;
//   margin: 0 auto;
//   margin-top: auto;
//   outline: none;
//   padding: ${props => props.theme.defaultSpacing};
//   text-align: center;
//   text-decoration: none;
//   transition: font-size 1s ease;
//   @media (min-width: ${props => props.theme.breakpoints.tablet}) {
//     font-size: 7.2rem;
//     transition: font-size 1s ease;
//   }
// `;
