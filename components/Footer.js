import { Logo } from 'components/Logo';
import React from 'react';

const Copyright = () => (
  <span>
    &#9400;
    <style jsx>{`
      span {
        position: relative;
        bottom: 0.1rem;
        margin-right: 0.2rem;
      }
    `}</style>
  </span>
);

export const Footer = () => (
  <footer>
    <Copyright /> 2019 <Logo /> Arclight Fabrication
    <style jsx>{`
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        margin: auto 0;

        color: grey;
        font-size: 2rem;
        bottom: 0;
        position: fixed;
        outline: none;
        text-decoration: none;
      }
      @media (min-width: 768px) {
        footer {
          font-size: 1rem;
        }
      }
    `}</style>
  </footer>
);
