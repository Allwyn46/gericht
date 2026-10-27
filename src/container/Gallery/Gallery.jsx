import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { useSmoothScroll } from '../../context/SmoothScrollContext';

gsap.registerPlugin(ScrollTrigger);

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
	const scrollRef = useRef(null);
	const galleryRef = useRef(null);
	const { scrollTo } = useSmoothScroll();

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Content reveal
			gsap.from('.gallery__content-anim', {
				x: -50,
				opacity: 0,
				duration: 1.2,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__gallery-content',
					start: 'top 80%',
				},
			});

			// Image cards stagger reveal
			gsap.from('.app__gallery-images_card', {
				y: 50,
				opacity: 0,
				scale: 0.94,
				stagger: 0.12,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.app__gallery-images',
					start: 'top 80%',
				},
			});
		}, galleryRef);

		return () => ctx.revert();
	}, []);

	const scroll = (direction) => {
		const { current } = scrollRef;
		if (!current) return;
		const delta = direction === 'left' ? -340 : 340;
		gsap.to(current, {
			scrollLeft: current.scrollLeft + delta,
			duration: 0.7,
			ease: 'power2.out',
		});
	};

	return (
		<div className='app__gallery flex__center' ref={galleryRef}>
			<div className='app__gallery-content'>
				<div className="gallery__content-anim">
					<SubHeading title="Instagram" />
					<h1 className='headtext__cormorant'>Photo Gallery</h1>
					<p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>
						Step into a realm where pixels paint a thousand flavors. Our gallery captures the essence of our dishes, from the meticulous preparation to the final presentation. Each image is a window into our culinary philosophy, a testament to the dedication we pour into every plate that leaves our kitchen.
					</p>
					<button
						type='button'
						className='custom__button'
						onClick={() => scrollTo('#contact')}
					>
						View More
					</button>
				</div>
			</div>

			<div className='app__gallery-images'>
				<div className='app__gallery-images_container' ref={scrollRef} data-lenis-prevent>
					{image.map((img, index) => (
						<div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
							<img src={img} alt="gallery" />
							<BsInstagram className='gallery__image-icon' />
						</div>
					))}
				</div>

				<div className='app__gallery-images_arrow'>
					<BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
					<BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
				</div>
			</div>
		</div>
	);
};

export default Gallery;