// import { ReactLenis } from "lenis";

// function SmoothScrolling({ children }) {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
//       {children}
//     </ReactLenis>
//   );
// }

// export default SmoothScrolling;

import { ReactLenis, useLenis } from 'lenis/react'

function Smooth( {children} ) {
  const lenis = useLenis

  return (
    <ReactLenis root>
      { children }
    </ReactLenis>
  )
}

export default Smooth;