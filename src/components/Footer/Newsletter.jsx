import React, { useEffect, useRef } from 'react';
import './Newsletter.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SubHeading from '../SubHeading/Subheading';

gsap.registerPlugin(ScrollTrigger);

const Newsletter = () => {
  const newsletterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(newsletterRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.96,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: newsletterRef.current,
          start: 'top 85%',
        },
      });
    }, newsletterRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='app__newsletter' ref={newsletterRef}>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe to our Newsletter</h1>
        <p className='p__opensans'>And never miss Latest Updates!</p>
      </div>

      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your e-mail address' />
        <button type="button" className='custom__button'>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;