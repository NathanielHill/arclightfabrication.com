export const Headshot = () => (
  <>
    <img src='/chris.jpg' />
    <style jsx>{`
      img {
        float: left;
        height: 10rem;
        transition: height 1s ease, width 1s ease;
        border-radius: 50%;
      }
      @media (min-width: 768px) {
        height: 16rem;
      }
    `}</style>
  </>
);
