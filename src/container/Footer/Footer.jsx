import React, { useEffect, useRef } from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(['.app__footer-links_contact', '.app__footer-links_logo', '.app__footer-links_work'], {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.app__footer-links',
          start: 'top 85%',
        },
      });

      gsap.from('.app__footer-links_icons svg', {
        opacity: 0,
        scale: 0.4,
        stagger: 0.1,
        duration: 0.7,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.app__footer-links_icons',
          start: 'top 90%',
        },
      });

      gsap.from('.footer__copyright', {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer__copyright',
          start: 'top 95%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className='app__footer section__padding' ref={footerRef}>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>8021/19, Villankurichi Road, CheranmaNagar,<br /> Coimbatore, Tamil Nadu 641004</p>
          <p className='p__opensans'>+91 8621349022</p>
          <p className='p__opensans'>+91 9626251431</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="logo" />
          <p className='p__opensans'>&ldquo;The best way to find yourself is to lose yourself in the<br /> service of others&rdquo;</p>
          <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '20px' }} />
          <div className='app__footer-links_icons'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className='app__footer-links_work'>
          <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday - Friday: <br /> 08:00 am - 12:00am</p>
          <p className='p__opensans'>Saturday - Sunday: <br /> 07:00 am - 11:00pm</p>
        </div>
      </div>
      <div className='footer__copyright'>
        <p className='p__opensans'>2023 Gericht. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;