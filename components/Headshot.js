import React from 'react';

export const Headshot = () => (
  <>
    <img src='/chris.jpg' />
    <style jsx>{`
      img {
        height: 16rem;
        width: 16rem;
        transition: height 1s ease, width 1s ease;
        border-radius: 50%;
      }
    `}</style>
  </>
);
