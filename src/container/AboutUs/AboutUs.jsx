import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { images } from '../../constants';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
	const aboutRef = useRef(null);
	const { scrollTo } = useSmoothScroll();

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Background 'G' watermark parallax rotation & drift
			gsap.to('.about__g-img', {
				rotation: 25,
				scale: 0.92,
				yPercent: 18,
				ease: 'none',
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1.2,
				},
			});

			// Left column reveal
			gsap.from('.app__aboutus-content_about', {
				x: -65,
				opacity: 0,
				duration: 1.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__aboutus-content_about',
					start: 'top 80%',
				},
			});

			// Center knife scale reveal
			gsap.from('.about__knife-img', {
				scale: 0.65,
				opacity: 0,
				duration: 1.3,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__aboutus-content_knife',
					start: 'top 80%',
				},
			});

			// Center knife parallax scrub
			gsap.to('.about__knife-img', {
				yPercent: -12,
				ease: 'none',
				scrollTrigger: {
					trigger: aboutRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
			});

			// Right column reveal
			gsap.from('.app__aboutus-content_history', {
				x: 65,
				opacity: 0,
				duration: 1.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__aboutus-content_history',
					start: 'top 80%',
				},
			});
		}, aboutRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className='app__aboutus app__bg flex__center section__padding' id='about' ref={aboutRef}>
			<div className="app__aboutus-overlay flex__center">
				<img src={images.G} alt="g letter" className="about__g-img" />
			</div>

			<div className="app__aboutus-content flex__center">
				<div className="app__aboutus-content_about">
					<h1 className='headtext__cormorant'>About Us</h1>
					<img src={images.spoon} alt="about_spoon" className='spoon__img' />
					<p className='p__opensans'>
						Step into a world of elegance and warmth as you enter &ldquo;Gericht.&rdquo; Our thoughtfully designed interior exudes an ambiance that strikes the perfect balance between modern sophistication and timeless charm. Whether you&apos;re celebrating a special occasion, enjoying a romantic evening, or simply unwinding after a long day, our restaurant provides the ideal setting for every moment.
					</p>
					<button
						type='button'
						className='custom__button'
						onClick={() => scrollTo('#menu')}
					>
						Know More
					</button>
				</div>

				<div className='app__aboutus-content_knife flex__center'>
					<img src={images.knife} alt="about_knife" className="about__knife-img" />
				</div>

				<div className="app__aboutus-content_history">
					<h1 className='headtext__cormorant'>Our History</h1>
					<img src={images.spoon} alt="about_spoon" className='spoon__img' />
					<p className='p__opensans'>
						At &ldquo;Gericht,&rdquo; we invite you on a culinary journey like no other. Nestled in the heart of San Francisco, our restaurant is a celebration of diverse tastes, rich traditions, and the artistry of fine dining. Established in 1995, we have quickly become a gastronomic destination for food enthusiasts, families, and friends seeking a remarkable dining experience.
					</p>
					<button
						type='button'
						className='custom__button'
						onClick={() => scrollTo('#awards')}
					>
						Know More
					</button>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;