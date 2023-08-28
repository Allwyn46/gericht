import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <FooterOverlay />
      <Newsletter />

      <div className='app__footer-links'>
        <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact Us</h1>
          <p className='p__opensans'>8021/19, Villankurichi Road,CheranmaNagar,<br /> Coimbatore, Tamil Nadu 641004</p>
          <p className='p__opensans'>+91 8621349022</p>
          <p className='p__opensans'>+91 9626251431</p>
        </div>
        <div className='app__footer-links_logo'>
          <img src={images.gericht} alt="logo" />
          <p className='p__opensans'>"The Best way to find yourself is to lose yourself in the<br /> service of others"</p>
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
  )
}

export default Footer