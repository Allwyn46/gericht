import React from 'react';
import './Gallery.css';
import { BsInstagram, BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { SubHeading } from '../../components'
import { images } from '../../constants';

const image = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
	const scrollRef = React.useRef(null);

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	}

	return (
		<div className='app__gallery flex__center'>
			<div className='app__gallery-content'>
				<SubHeading title="Instagram" />
				<h1 className='headtext__cormorant'>Photo Gallery</h1>
				<p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem' }}>Step into a realm where pixels paint a thousand flavors. Our gallery captures the essence of our dishes, from the meticulous preparation to the final presentation. Each image is a window into our culinary philosophy, a testament to the dedication we pour into every plate that leaves our kitchen</p>
				<button type='button' className='custom__button'>View More</button>
			</div>

			<div className='app__gallery-images'>
				<div className='app__gallery-images_container' ref={scrollRef}>
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
	)
}

export default Gallery