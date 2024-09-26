// hooks/useGSAP.js
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSlide = (ref, show) => {
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

export const useBackInUp = (refs) =>{
  useEffect(()=>{
    const ref = `.${refs.current.className.split(' ')[0]}`;
    const tl1 = gsap.timeline({
        scrollTrigger:{
          trigger:ref,
          start:'top center',
          end:'top center',
          toggleActions:' play reverse',
          markers:true
        }
    })

   tl1.to(ref,{
    yPercent:150,
    opacity:0,
    scale:.7,
   })

   tl1.to(ref,{
    yPercent:0,
    opacity:.5,
    duration:.5,
    ease:'power2',
    stagger:{
      amount:.35,
      from:'start',
    }
  })

  tl1.to(ref,{
    scale:1,
    duration:.5,
    opacity:1,
    ease:'power2',
    stagger:{
      amount:.35,
      from:'start',
    }
});
  return ()=>{
    gsap.killTweensOf(ref.current);
  }

  },[refs])
}

export const useSlideLeft = (ref)=>{

  // useEffect(()=>{
  //   const refs = ref.current;

  //   const tl1 = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:refs,
  //       start:'top center',
  //       end:'top center',
  //       toggleActions:' play reverse play reverse',
  //       markers:true,
  //     }
  // })

  // tl1.from(refs,{
  //   xPercent:-200,
  //   opacity:0
  // })

  // tl1.to(refs,{
  //   xPercent:0,
  //   opacity:1,
  //   duration:.4,
  //   ease:"back"
  // })
  // },[ref])
}
