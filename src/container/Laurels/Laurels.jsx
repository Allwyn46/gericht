import React, { useEffect, useRef } from 'react';
import './Laurels.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
   <div className='app__laurels_awards-card'>
      <img src={imgUrl} alt="award" style={{ marginBottom: '1rem' }} />
      <div className='app__laurels_awards-card_content'>
         <p className='p__cormorant' style={{ color: '#dcca87', marginBottom: '0.5rem' }}>{title}</p>
         <p className='p__cormorant'>{subtitle}</p>
      </div>
   </div>
);

const Laurels = () => {
   const laurelsRef = useRef(null);

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Header reveal
         gsap.from(['.laurels__subheading', '.laurels__heading'], {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
               trigger: laurelsRef.current,
               start: 'top 80%',
            },
         });

         // Award cards staggered entrance
         gsap.from('.app__laurels_awards-card', {
            opacity: 0,
            y: 40,
            scale: 0.92,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
               trigger: '.app__laurels_awards',
               start: 'top 85%',
            },
         });

         // Laurels image reveal and parallax
         gsap.from('.laurels__img-inner', {
            opacity: 0,
            scale: 0.88,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
               trigger: '.laurels__img-inner',
               start: 'top 80%',
            },
         });

         gsap.to('.laurels__img-inner', {
            yPercent: -12,
            ease: 'none',
            scrollTrigger: {
               trigger: laurelsRef.current,
               start: 'top bottom',
               end: 'bottom top',
               scrub: 1.2,
            },
         });
      }, laurelsRef);

      return () => ctx.revert();
   }, []);

   return (
      <div className='app__bg app__wrapper section__padding' id='awards' ref={laurelsRef}>
         <div className='app__wrapper_info'>
            <div className="laurels__subheading">
               <SubHeading title="Awards & Recognition" />
            </div>
            <h1 className='headtext__cormorant laurels__heading'>Our Laurels</h1>
            <div className='app__laurels_awards'>
               {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
            </div>
         </div>
         <div className='app__wrapper_img'>
            <div className="laurels__img-inner">
               <img src={images.laurels} alt="laurels" />
            </div>
         </div>
      </div>
   );
};

export default Laurels;