import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Chef.css';

gsap.registerPlugin(ScrollTrigger);

const Chef = () => {
	const chefRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Chef image entrance & parallax
			gsap.from('.chef__img-inner', {
				scale: 1.12,
				opacity: 0,
				y: 40,
				duration: 1.3,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__wrapper_img-reverse',
					start: 'top 80%',
				},
			});

			gsap.to('.chef__img-inner', {
				yPercent: -10,
				ease: 'none',
				scrollTrigger: {
					trigger: chefRef.current,
					start: 'top bottom',
					end: 'bottom top',
					scrub: 1,
				},
			});

			// Info and text reveal
			gsap.from(['.chef__subheading', '.chef__heading', '.app__chef-content_quote', '.chef__desc'], {
				opacity: 0,
				y: 30,
				stagger: 0.12,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__chef-content',
					start: 'top 85%',
				},
			});

			// Chef signature reveal
			gsap.from('.app__chef-sign', {
				opacity: 0,
				scale: 0.88,
				y: 25,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: '.app__chef-sign',
					start: 'top 90%',
				},
			});
		}, chefRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className='app__bg app__wrapper section__padding' ref={chefRef}>
			<div className='app__wrapper_img app__wrapper_img-reverse'>
				<div className="chef__img-inner">
					<img src={images.chef} alt="chef" />
				</div>
			</div>
			<div className='app__wrapper_info'>
				<div className="chef__subheading">
					<SubHeading title="Chef's Word" />
				</div>
				<h1 className='headtext__cormorant chef__heading'>What We Believe In</h1>

				<div className='app__chef-content'>
					<div className='app__chef-content_quote'>
						<img src={images.quote} alt="quote" />
						<p className='p__opensans'>Dining at Gericht was an exceptional experience that left me utterly delighted.</p>
					</div>
					<p className='p__opensans chef__desc'>
						The exceptional ambiance, impeccable service, daring culinary creations, and delightful flavors all came together to create a symphony of gastronomy. If you&apos;re seeking a culinary adventure that transcends the ordinary, Gericht is the perfect place for you.
					</p>
				</div>
				<div className='app__chef-sign'>
					<p className='p__cormorant'>Kevin Luo</p>
					<p className='p__opensans'>Chef &amp; Founder</p>
					<img src={images.sign} alt="sign" />
				</div>
			</div>
		</div>
	);
};

export default Chef;