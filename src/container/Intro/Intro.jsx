import React, { useState, useRef, useEffect } from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { meal } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
   const vidRef = useRef(null);
   const containerRef = useRef(null);
   const [playVideo, setplayVideo] = useState(false);

   useEffect(() => {
      const ctx = gsap.context(() => {
         gsap.fromTo(containerRef.current, {
            scale: 0.92,
            borderRadius: '24px',
         }, {
            scale: 1,
            borderRadius: '0px',
            ease: 'none',
            scrollTrigger: {
               trigger: containerRef.current,
               start: 'top 85%',
               end: 'top 30%',
               scrub: 1,
            },
         });
      }, containerRef);

      return () => ctx.revert();
   }, []);

   const handleVideo = () => {
      setplayVideo((prevPlayVideo) => {
         const next = !prevPlayVideo;
         if (vidRef.current) {
            if (next) {
               vidRef.current.play();
            } else {
               vidRef.current.pause();
            }
         }
         return next;
      });
   };

   return (
      <div className='app__video' ref={containerRef}>
         <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} muted />
         <div className='app__video-overlay flex__center'>
            <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
               {playVideo
                  ? (<BsPauseFill color='#fff' fontSize={30} />)
                  : (<BsFillPlayFill color='#fff' fontSize={30} />)}
            </div>
         </div>
      </div>
   );
};

export default Intro;