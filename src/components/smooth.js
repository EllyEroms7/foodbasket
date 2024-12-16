import { ReactLenis } from 'lenis/react'

function Smooth({ children }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
}

export default Smooth;