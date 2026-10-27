import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import gsap from 'gsap';
import images from '../../constants/images';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.app__navbar-logo', {
				opacity: 0,
				y: -20,
				duration: 1,
				ease: 'power3.out',
			});
			gsap.from('.app__navbar-links li', {
				opacity: 0,
				y: -15,
				stagger: 0.08,
				duration: 0.8,
				ease: 'power3.out',
				delay: 0.2,
			});
			gsap.from('.app__navbar-login', {
				opacity: 0,
				x: 20,
				duration: 0.8,
				ease: 'power3.out',
				delay: 0.3,
			});
		}, navRef);

		const handleScroll = () => {
			if (window.scrollY > 40) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		return () => {
			ctx.revert();
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (toggleMenu) {
			gsap.from('.app__navbar-smallscreen-links li', {
				opacity: 0,
				y: 20,
				stagger: 0.08,
				duration: 0.4,
				ease: 'power2.out',
			});
		}
	}, [toggleMenu]);

	return (
		<nav className={`app__navbar ${isScrolled ? 'app__navbar-scrolled' : ''}`} ref={navRef}>
			<div className="app__navbar-logo">
				<img src={images.gericht} alt="logo" />
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'><a href="#home">Home</a></li>
				<li className='p__opensans'><a href="#about">About</a></li>
				<li className='p__opensans'><a href="#menu">Menu</a></li>
				<li className='p__opensans'><a href="#awards">Awards</a></li>
				<li className='p__opensans'><a href="#contact">Contact</a></li>
			</ul>
			<div className="app__navbar-login">
				<a href="#login" className='p__opensans'>Log In / Register</a>
				<div></div>
				<a href="#contact" className='p__opensans'>Book Table</a>
			</div>

			{/* NAVBAR FOR TABLETS AND MOBILES */}
			<div className="app__navbar-smallscreen">
				<GiHamburgerMenu color='#fff' fontSize={27} onClick={() => { setToggleMenu(true) }} />

				{toggleMenu && (
					<div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
						<MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
						<ul className='app__navbar-smallscreen-links'>
							<li className='p__opensans'><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
							<li className='p__opensans'><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
							<li className='p__opensans'><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
							<li className='p__opensans'><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
							<li className='p__opensans'><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar