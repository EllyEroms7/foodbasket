// hooks/useGSAP.js
import { useEffect,useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSlideLeft = (ref, show) => {
  useEffect(() => {
    if (show) {
      gsap.from(ref.current, { 
        duration: 0.5,
        xPercent:50,
    });
    gsap.to(ref.current,{
        duration: 0.5,
        xPercent:0,
    })
    } else {
      gsap.to(ref.current, { duration: .5, xPercent:50 });
    }

    return () =>{
        gsap.killTweensOf(ref.current);
    }
  }, [show, ref]);
};

export const useRotate = (ref,show) => {
    useEffect(() => {
        if(show){
        gsap.to(ref.current, { 
            rotation: 360, 
            duration: .5 
        });
    }else{
        gsap.to(ref.current, { rotation: 0, duration: 0.5 });
    }
        return () => {
           gsap.killTweensOf(ref.current) 
        };
    }, [ref,show]);
}

// export const useScrollTrigger = (timelineProps, scrollTriggerProps) =>{
//   const timeline = useRef(null)
//   const scrollTrigger = useRef(null)
//   useEffect(() => {
//     if (timeline.current){
//       //clean previous timeline
//       gsap.killTweensOf(timeline.current)
//       //create new timeline
//       timeline.current = gsap.timeline(timelineProps)
//       //create scroll trigger
//       scrollTrigger.current = ScrollTrigger.create({
//         ...scrollTriggerProps,
//         animation: timeline.current
//       })
//     }
//   },[timelineProps, scrollTriggerProps])

//   return { timeline: timeline.current, scrollTrigger: scrollTrigger.current }
// }
